import type {Product} from '@shopify/hydrogen/storefront-api-types';
import {
  AnalyticsPageType,
  CacheShort,
  flattenConnection,
} from '@shopify/hydrogen';
import type {LoaderFunctionArgs} from '@shopify/remix-oxygen';

import {searchAndSortPids} from '~/lib/hygraph';
import {PRODUCT_WIDGET_BY_IDS} from '~/data/fragments';
import type {Storefront} from '~/lib/type';
import type {
  GetCriticalPageContentQuery,
  GetPageQuery,
} from '~/__generated__/hygraph.generated';
import {GET_CRITICAL_PAGE_CONTENT, GET_PAGE} from '~/graphql/hygraph/query';

type ProductMap = {[key: string]: Product[]};
export async function getHygraphShopifyProducts(
  storefront: Storefront,
  s: {[p: string]: any}[] | undefined,
) {
  const {language, country} = storefront.i18n;
  const {dict, pids} = searchAndSortPids(s);
  const res = await storefront.query<{nodes: Product[]}>(
    PRODUCT_WIDGET_BY_IDS,
    {
      variables: {
        ids: pids,
        country,
        language,
      },
    },
  );
  const products = flattenConnection(res);
  return mapProducts(dict, products);
}

function mapProducts(
  dict: {[key: string]: string[]},
  products: Product[],
): ProductMap {
  const map: ProductMap = {};
  // Create a mapping for quick lookup of products by id
  const productMap = products.reduce((map, product) => {
    map[product.id] = product;
    return map;
  }, {} as {[key: string]: Product});

  // Replace product ids in the dict with the associated product objects
  Object.keys(dict).forEach((key) => {
    map[key] = dict[key].map((productId) => productMap[productId] || null);
  });

  return map;
}

export async function getHygraphPageContent({
  context,
  params,
  request,
  slug,
}: LoaderFunctionArgs & {slug: string}) {
  const {language, country} = context.storefront.i18n;
  if (
    params.locale &&
    params.locale.toLowerCase() !== `${language}-${country}`.toLowerCase()
  ) {
    // If the locale URL param is defined, yet we still are on `EN-US`
    // the locale param must be invalid, send to the 404 page
    throw new Response(null, {status: 404});
  }
  const {criticalPageContent} =
    await context.hygraph.query<GetCriticalPageContentQuery>(
      GET_CRITICAL_PAGE_CONTENT,
      {
        variables: {slug},
        cache: CacheShort(),
      },
    );
  const hygraphProducts = await getHygraphShopifyProducts(
    context.storefront,
    criticalPageContent?.layout?.shopifyProducts,
  );
  const {page} = await context.hygraph.query<GetPageQuery>(GET_PAGE, {
    variables: {slug},
    cache: CacheShort(),
  });
  if (!page) throw new Response(null, {status: 404});
  const {layout} = page;
  return {
    hygraphProducts,
    layout,
    analytics: {
      pageType: AnalyticsPageType.home,
    },
    // seo: criticalPageContent?.seo,
  };
}
