import {
  CacheLong,
  createWithCache,
  type Storefront as HydrogenStorefront,
  type WithCache,
} from '@shopify/hydrogen';
import type {Variables} from 'graphql-request';
import {GraphQLClient} from 'graphql-request';
import type {DocumentNode} from 'graphql/language';

import type {GetPageQuery, GetPageDocument} from '~/__generated__/graphql';

type AllCacheOptions = Parameters<WithCache>[1];

export function hygraphClient({
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
  const client: GraphQLClient = new GraphQLClient(env.HYGRAPH_URL, {
    fetch,
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const withCache = createWithCache({cache, waitUntil});
  // async function query<T extends keyof Sdk>(
  //   operationName: T,
  //   sdk: Sdk,
  //   options: {
  //     variables?: Parameters<Sdk[T]>[0];
  //     requestHeaders?: Headers | string[][] | Record<string, string>;
  //     cache: AllCacheOptions;
  //   } = FALLBACK_OPTIONS,
  // ): Promise<ReturnType<Sdk[T]>> {
  //   const cacheKey = [options.cache, options.variables, operationName];
  //   return withCache(cacheKey, options.cache, async () => {
  //     return sdk[operationName](
  //       options.variables,
  //       options.requestHeaders,
  //     ) as Promise<ReturnType<Sdk[T]>>;
  //   });
  // }
  async function query<T = object>(
    query: string,
    options: {
      variables?: Variables;
      requestHeaders?: Headers | string[][] | Record<string, string>;
      cache: AllCacheOptions;
    } = {variables: {}, cache: CacheLong()},
  ): Promise<T> {
    const cacheKey = [options.cache, options.variables, query];
    return withCache(cacheKey, options.cache, async () => {
      return client.request(query, options.variables);
    });
  }
  // async function getCriticalPageContent(
  //   options: {
  //     variables?: GetCriticalPageContentQueryVariables;
  //     cache: AllCacheOptions;
  //   } = FALLBACK_OPTIONS,
  // ) {
  //   const cacheKey = [options.cache, options.variables];
  //   return withCache(cacheKey, options.cache, async () => {
  //     const {GetCriticalPageContent} = getSdk(client);
  //     return GetCriticalPageContent(options.variables);
  //   });
  // }

  // async function getLinkedHygraphShopifyData({
  //   storefront,
  //   data,
  // }: {
  //   storefront: HydrogenStorefront;
  //   data: any;
  // }): Promise<void | ProcessedShopifyHygraphResData> {
  //   invariant(
  //     data?.dynamicPageContent,
  //     'No HYGRAPH dynamic page content data provided',
  //   );
  //   const d = clone(data);
  //   const {country, language} = storefront.i18n;
  //   for (const c of d.dynamicPageContent) {
  //     if (c.__typename === 'CustomWidget') {
  //       const pids = c.productData?.map((p: any) => p.pid);
  //       const res = await storefront.query<{nodes: Product[]}>(
  //         FEATURED_PRODUCT_WIDGET_BY_IDS,
  //         {
  //           variables: {
  //             ids: pids,
  //             country,
  //             language,
  //           },
  //         },
  //       );
  //
  //       const p = res.nodes.filter((n) => n);
  //       c.products = c.productData.map((t1: any) => ({
  //         ...t1,
  //         ...p.find((t2) => t2.id === t1.pid),
  //       }));
  //     }
  //     if (c.__typename === 'FeaturedCollection') {
  //       invariant(
  //         c.products,
  //         'No products found for Hygraph FeaturedCollection',
  //       );
  //       const res = await storefront.query<{nodes: Product[]}>(
  //         PRODUCT_CARDS_BY_IDS_QUERY,
  //         {
  //           variables: {
  //             ids: c.products,
  //             country,
  //             language,
  //           },
  //         },
  //       );
  //       invariant(
  //         res?.nodes,
  //         'No Response data from Shopify for Hygraph FeaturedCollection',
  //       );
  //       c.products = res.nodes.filter((n) => n);
  //     }
  //   }
  //   return d;
  // }

  return {client, query};
}
