import {defer, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import type {SeoHandleFunction} from '@shopify/hydrogen';
import {AnalyticsPageType, CacheShort} from '@shopify/hydrogen';
import {Await, useLoaderData} from '@remix-run/react';
import {Suspense} from 'react';

import {MEDIA_FRAGMENT, PRODUCT_CARD_FRAGMENT} from '~/data/fragments';
import {routeHeaders} from '~/data/cache';
import {
  DYNAMIC_PAGE_CONTENT_FRAGMENT,
  HY_PAGE_SEO_FRAGMENT,
} from '~/graphql/hygraph/hygraph-fragments';
import {HygraphDynamicContent} from '~/components/hygraph/HygraphDynamicContent';
export const headers = routeHeaders;

const seo: SeoHandleFunction<typeof loader> = ({data}) => ({
  title: data?.seo?.pageTitle ?? 'No Maintenance',
  description:
    data?.seo?.metaDescription ??
    'No Maintenance is a Los Angeles based brand and vintage showroom.',
  templateTitle: data.seo?.hasTitleTemplate ? '%s | No Maintenance' : '%s',
});

export const handle = {
  seo,
};
export async function loader({params, context}: LoaderFunctionArgs) {
  const {language, country} = context.storefront.i18n;
  if (
    params.locale &&
    params.locale.toLowerCase() !== `${language}-${country}`.toLowerCase()
  ) {
    // If the locale URL param is defined, yet we still are on `EN-US`
    // the locale param must be invalid, send to the 404 page
    throw new Response(null, {status: 404});
  }
  const data = await context.hygraph.query(HYGRAPH_PAGE_QUERY, {
    variables: {
      slug: 'home',
    },
    cache: CacheShort(),
  });
  if (!data) throw new Response(null, {status: 404});
  const {seo, ...content} = data;
  return defer({
    content,
    analytics: {
      pageType: AnalyticsPageType.home,
    },
    seo,
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
            return (
              <div>
                <HygraphDynamicContent
                  content={content.dynamicPageContent}
                ></HygraphDynamicContent>
              </div>
            );
          }}
        </Await>
      </Suspense>
    </>
  );
}

const HYGRAPH_PAGE_QUERY = `#graphql:hygraph
  ${HY_PAGE_SEO_FRAGMENT}
  ${DYNAMIC_PAGE_CONTENT_FRAGMENT}
  query GetPage($slug: String!) {
    page(where: {slug: $slug}) {
      seo {
        ...SEO
      }
      transparentBackgroundHeaderColor {
        hex
      }
      hasPaddingOffset
      ...DynamicPageContent
    }
  }
`;

const QUERY = `#graphql:hygraph
query Page($slug: String) {
  values: landingPages(where: {slug: $slug, path_in: none}) {
    slug
    path
    socialSharingImage {
      url(transformation: {image: {resize: {height: 630, width: 1200, fit: crop}}})
    }
    variants(first: 500) {
      ... on Content {
        backgroundColor {
          hex
        }
        primaryColor {
          hex
        }
        sections(first: 500) {
          backgroundColor {
            hex
          }
          containerWidth
          primaryColor {
            hex
          }
          type {
            ... on Collection {
              id
              heading
              products
            }
          }
        }
      }
    }
    localizations(includeCurrent: true, locales: [en, ja]) {
      locale
      updatedAt(variation: LOCALIZATION)
      metaDescription
      title
    }
  }
}
`;
