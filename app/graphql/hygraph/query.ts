import gql from 'graphql-tag';

export const GET_ROOT_PAGES = gql`
  query Page($slug: String) {
    values: landingPages(where: {slug: $slug, path_in: none}) {
      slug
      path
      socialSharingImage {
        url(
          transformation: {
            image: {resize: {height: 630, width: 1200, fit: crop}}
          }
        )
      }
      variants(first: 500) {
        ... on Content {
          id
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

export const GET_PAGES = gql`
  query Page($slug: String) {
    values: landingPages(where: {slug: $slug, path_in: none}) {
      slug
      path
      socialSharingImage {
        url(
          transformation: {
            image: {resize: {height: 630, width: 1200, fit: crop}}
          }
        )
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

export const GET_EDITORIALS = gql`
  query Page($slug: String) {
    values: landingPages(where: {slug: $slug, path_in: none}) {
      slug
      path
      socialSharingImage {
        url(
          transformation: {
            image: {resize: {height: 630, width: 1200, fit: crop}}
          }
        )
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
