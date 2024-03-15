import {defer, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import type {SeoHandleFunction} from '@shopify/hydrogen';
import {AnalyticsPageType, CacheShort} from '@shopify/hydrogen';
import {Await, useLoaderData} from '@remix-run/react';
import {Suspense} from 'react';

import {routeHeaders} from '~/data/cache';

import {GET_ROOT_PAGES} from '~/graphql/hygraph/query';
export const headers = routeHeaders;

// const seo: SeoHandleFunction<typeof loader> = ({data}) => ({
//   title: data?.seo?.pageTitle ?? 'No Maintenance',
//   description:
//     data?.seo?.metaDescription ??
//     'No Maintenance is a Los Angeles based brand and vintage showroom.',
//   templateTitle: data.seo?.hasTitleTemplate ? '%s | No Maintenance' : '%s',
// });
//
// export const handle = {
//   seo,
// };
export async function loader({params, context, request}: LoaderFunctionArgs) {
  const {language, country} = context.storefront.i18n;
  if (
    params.locale &&
    params.locale.toLowerCase() !== `${language}-${country}`.toLowerCase()
  ) {
    // If the locale URL param is defined, yet we still are on `EN-US`
    // the locale param must be invalid, send to the 404 page
    throw new Response(null, {status: 404});
  }
  const data = await context.hygraph.query(GET_ROOT_PAGES, {
    variables: {
      slug: 'home',
    },
    cache: CacheShort(),
  });
  context.session.get('id');
  if (!data) throw new Response(null, {status: 404});
  // const {seo, ...content} = data;
  return defer({
    // content,
    analytics: {
      pageType: AnalyticsPageType.home,
    },
    // seo,
  });
}

export default function Homepage() {
  const {content} = useLoaderData<typeof loader>();
  return (
    <>
      <Suspense>
        <Await resolve={content}>
          {(content) => {
            if (!content) return <></>;
            return <div>PAGE</div>;
          }}
        </Await>
      </Suspense>
    </>
  );
}
