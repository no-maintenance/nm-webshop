import {
  CacheLong,
  createWithCache,
  type Storefront as HydrogenStorefront,
  type WithCache,
} from '@shopify/hydrogen';
import type {Variables} from 'graphql-request';
import {GraphQLClient} from 'graphql-request';
import invariant from 'tiny-invariant';
import clone from 'lodash.clone';
import type {Product} from '@shopify/hydrogen/storefront-api-types';

import {
  PRODUCT_CARD_FRAGMENT,
  PRODUCT_VARIANT_FRAGMENT,
} from '~/data/fragments';

import type {ProcessedShopifyHygraphResData} from '../hygraph';

type AllCacheOptions = Parameters<WithCache>[1];

export function createHygraphClient({
  env,
  cache,
  waitUntil,
  storefront,
}: {
  env: Env;
  cache: Cache;
  waitUntil: ExecutionContext['waitUntil'];
  storefront: HydrogenStorefront;
}) {
  const token =
    env.HYGRAPH_ENV === 'DRAFT'
      ? env.HYGRAPH_DEV_TOKEN
      : env.HYGRAPH_PROD_TOKEN;
  const hygraphClient: GraphQLClient = new GraphQLClient(env.HYGRAPH_URL, {
    fetch,
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const withCache = createWithCache({cache, waitUntil});

  async function query(
    query: string,
    options: {
      variables?: Variables;
      cache: AllCacheOptions;
    } = {variables: {}, cache: CacheLong()},
  ) {
    const cacheKey = [options.cache, query];

    return withCache(cacheKey, options.cache, async () => {
      const data = await hygraphClient.request(query, options.variables);
      const page = data?.page;
      const processedData = page?.dynamicPageContent
        ? await getLinkedHygraphShopifyData({
            storefront,
            data: page,
          })
        : page;
      return processedData;
    });
  }

  async function getLinkedHygraphShopifyData({
    storefront,
    data,
  }: {
    storefront: HydrogenStorefront;
    data: any;
  }): Promise<void | ProcessedShopifyHygraphResData> {
    invariant(
      data?.dynamicPageContent,
      'No HYGRAPH dynamic page content data provided',
    );
    const d = clone(data);
    const {country, language} = storefront.i18n;
    for (const c of d.dynamicPageContent) {
      if (c.__typename === 'CustomWidget') {
        const pids = c.productData?.map((p: any) => p.pid);
        const res = await storefront.query<{nodes: Product[]}>(
          FEATURED_PRODUCT_WIDGET_BY_IDS,
          {
            variables: {
              ids: pids,
              country,
              language,
            },
          },
        );

        const p = res.nodes.filter((n) => n);
        c.products = c.productData.map((t1: any) => ({
          ...t1,
          ...p.find((t2) => t2.id === t1.pid),
        }));
      }
      if (c.__typename === 'FeaturedCollection') {
        invariant(
          c.products,
          'No products found for Hygraph FeaturedCollection',
        );
        const res = await storefront.query<{nodes: Product[]}>(
          PRODUCT_CARDS_BY_IDS_QUERY,
          {
            variables: {
              ids: c.products,
              country,
              language,
            },
          },
        );
        invariant(
          res?.nodes,
          'No Response data from Shopify for Hygraph FeaturedCollection',
        );
        c.products = res.nodes.filter((n) => n);
      }
    }
    return d;
  }

  return {query};
}

const PRODUCT_CARDS_BY_IDS_QUERY = `#graphql
  ${PRODUCT_CARD_FRAGMENT}
  query ProductByIDs($ids: [ID!]!, $country: CountryCode, $language: LanguageCode) @inContext(country: $country, language: $language)  {
    nodes(ids: $ids) {
      ... on Product {
        ...ProductCard
      }
    }
  }
`;

const FEATURED_PRODUCT_WIDGET_BY_IDS = `#graphql
  ${PRODUCT_VARIANT_FRAGMENT}
  query FeaturedProductsByIds($ids: [ID!]!, $country: CountryCode, $language: LanguageCode) @inContext(country: $country, language: $language)  {
    nodes(ids: $ids) {
      ... on Product {
        id
        handle
        title
        variants(first: 10) {
          nodes {
            ...ProductVariantFragment
          }
        }
        options {
          name
          values
          id
        }
      }
    }
  }
`;
