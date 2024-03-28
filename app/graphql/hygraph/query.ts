import {gql} from 'graphql-request';

import {
  COLLECTION_FRAGMENT,
  COUNTDOWN_FRAGMENT,
  FORM_FRAGMENT,
  LAYOUT_FRAGMENT,
  LOCKED_CONTENT_FRAGMENT,
  MIXED_CONTENT,
  RESPONSIVE_ASSET_FRAGMENT,
  SECTION_FRAGMENT,
  SETTINGS_FRAGMENT,
  THEME_FRAGMENT,
} from '~/graphql/hygraph/fragments';

export const GET_PAGE = gql`
  query GetPage($slug: String) {
    page(where: {slug: $slug}) {
      id
      layout {
        ...Layout
      }
    }
  }
  ${LAYOUT_FRAGMENT}
  ${COLLECTION_FRAGMENT}
  ${COUNTDOWN_FRAGMENT}
  ${FORM_FRAGMENT}
  ${SETTINGS_FRAGMENT}
  ${SECTION_FRAGMENT}
  ${MIXED_CONTENT}
  ${RESPONSIVE_ASSET_FRAGMENT}
  ${THEME_FRAGMENT}
  ${LOCKED_CONTENT_FRAGMENT}
`;

export const GET_CRITICAL_PAGE_CONTENT = gql`
  query GetCriticalPageContent($slug: String) {
    criticalPageContent: page(where: {slug: $slug}) {
      id
      seo {
        id
        title
        description
        hasTitleTemplate
        image {
          url
        }
      }
      layout {
        shopifyProducts: sections {
          content {
            __typename
            ... on Collection {
              id
              products
              enrichedProducts {
                product
              }
            }
            ... on MixedContent {
              id
              body {
                references {
                  ... on Collection {
                    products
                    enrichedProducts {
                      product
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
