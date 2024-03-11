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

const COLLECTION_CONTENT_FRAGMENT = `#graphql
  fragment CollectionContent on Collection {
    id
    handle
    title
    descriptionHtml
    heading: metafield(namespace: "hero", key: "title") {
      value
    }
    byline: metafield(namespace: "hero", key: "byline") {
      value
    }
    cta: metafield(namespace: "hero", key: "cta") {
      value
    }
    spread: metafield(namespace: "hero", key: "spread") {
      reference {
        ...Media
      }
    }
    spreadSecondary: metafield(namespace: "hero", key: "spread_secondary") {
      reference {
        ...Media
      }
    }
  }
  ${MEDIA_FRAGMENT}
` as const;

const HOMEPAGE_SEO_QUERY = `#graphql
  query seoCollectionContent($handle: String, $country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    hero: collection(handle: $handle) {
      ...CollectionContent
    }
    shop {
      name
      description
    }
  }
  ${COLLECTION_CONTENT_FRAGMENT}
` as const;

const COLLECTION_HERO_QUERY = `#graphql
  query heroCollectionContent($handle: String, $country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    hero: collection(handle: $handle) {
      ...CollectionContent
    }
  }
  ${COLLECTION_CONTENT_FRAGMENT}
` as const;

// @see: https://shopify.dev/api/storefront/current/queries/products
export const HOMEPAGE_FEATURED_PRODUCTS_QUERY = `#graphql
  query homepageFeaturedProducts($country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    products(first: 8) {
      nodes {
        ...ProductCard
      }
    }
  }
  ${PRODUCT_CARD_FRAGMENT}
` as const;

// @see: https://shopify.dev/api/storefront/current/queries/collections
export const FEATURED_COLLECTIONS_QUERY = `#graphql
  query homepageFeaturedCollections($country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    collections(
      first: 4,
      sortKey: UPDATED_AT
    ) {
      nodes {
        id
        title
        handle
        image {
          altText
          width
          height
          url
        }
      }
    }
  }
` as const;

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
