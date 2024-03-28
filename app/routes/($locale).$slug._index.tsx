import {defer, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import type {SeoHandleFunction} from '@shopify/hydrogen';
import {AnalyticsPageType, CacheShort} from '@shopify/hydrogen';
import {Await, useLoaderData} from '@remix-run/react';
import {Suspense} from 'react';

import {routeHeaders} from '~/data/cache';
import {
  getHygraphPageContent,
  getHygraphShopifyProducts,
} from '~/lib/utils.server';
import {HygraphLayout} from '~/components/hygraph/HygraphLayout';

export const headers = routeHeaders;

const seo: SeoHandleFunction<typeof loader> = ({data}) => ({
  title: data?.seo?.title ?? 'No Maintenance',
  description:
    data?.seo?.metaDescription ??
    'No Maintenance is a Los Angeles based brand and vintage showroom.',
  templateTitle: data.seo?.hasTitleTemplate ? '%s | No Maintenance' : '%s',
});

export const handle = {
  seo,
};
export async function loader({params, context, request}: LoaderFunctionArgs) {
  const {slug} = params;
  return defer(
    await getHygraphPageContent({
      params,
      context,
      request,
      slug: slug ?? '',
    }),
  );
}

export default function Page() {
  const {layout} = useLoaderData<typeof loader>();
  return (
    <>
      <Suspense>
        <Await resolve={layout}>
          {(layout) => {
            return <>{layout && <HygraphLayout layout={layout} />}</>;
          }}
        </Await>
      </Suspense>
    </>
  );
}
