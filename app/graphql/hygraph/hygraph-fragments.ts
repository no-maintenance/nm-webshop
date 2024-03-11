/************************************************************
 * HYGRAPH FRAGMENTS
 *************************************************************/

/**
 * URL Link Fragment. Used throughout every component that has a link.
 * @type {string}
 */
const LINK_FRAGMENT = `#graphql
  fragment Link on Link {
    urlString
    openInNewTab
  }
`;
export const EXTERNAL_MEDIA_FRAGMENT = `#graphql
  fragment ExternalMedia on Media {
    image
    mobileFallback
    hasLazyLoad
  }
  `;
/**
 * General Component Config used across all components
 * @type {string}
 */
export const HY_COMPONENT_GENERAL_CONFIG_FRAGMENT = `#graphql
  fragment GeneralConfig on ComponentGeneralConfig {
    backgroundColor {
      hex
    }
    hasGutter
    paddingTop
    paddingBottom
    displayOnMobile
    displayOnDesktop
    textColor {
      hex
    }
  }
`;
/**
 * General Page Config used across all pages
 * @type {string}
 */
export const HY_PAGE_SEO_FRAGMENT = `#graphql
  fragment SEO on PageMetaSeo {
    metaDescription
    pageTitle
    hasTitleTemplate
  }
`;
const HY_TILE_FRAGMENT = `#graphql
  ${LINK_FRAGMENT}
  fragment Tile on Tile {
    backgroundMedia {
      ...ExternalMedia
    }
    heading
    link {
      ...Link
    }
    subheading
    textColor {
      hex
    }
    hasOverlayOnHover
    textPosition
  }
`;
/**
 * Component Fragment for the "ContentTile" component
 * @type {string}
 */
export const HY_CONTENT_TILE_FRAGMENT = `#graphql
  ${HY_TILE_FRAGMENT}
  fragment ContentTile on ContentTile {
    aspectRatio
    mobileAspectRatio
    hasGutterBetweenTiles
    generalConfig {
      ...GeneralConfig
    }
    tiles {
      ...Tile
    }
  }
`;
/**
 * Component Fragment for the "FeaturedCollection" component
 * @type {string}
 */
export const HY_FEATURED_COLLECTION_FRAGMENT = `#graphql
  fragment FeaturedCollection on FeaturedCollection {
    heading
    hideIncompleteRow
    useNewProductCard
    products
    generalConfig {
      ...GeneralConfig
    }
  }
`;
export const HY_CUSTOM_WIDGET_FRAGMENT = `#graphql
  fragment CustomWidget on CustomWidget {
    id
    body {
      html
    }
    comingSoonHeading {
      html
    }
    availableNowHeading {
      html
    }
    generalConfig {
      id
    }
    editorial
    mirror
    gallery
    productData {
      pid
      productGallery
      swatch
    }
    launchDate
    generalConfig {
      ...GeneralConfig
    }
  }
`;
export const HY_FORM_FRAGMENT = `#graphql
  fragment Form on Form {
    generalConfig {
      ...GeneralConfig
    }
    type
  }
`;
const ACCORDION_FRAGMENT = `#graphql
  fragment Accordion on Accordion {
    generalConfig {
      ...GeneralConfig
    }
    items {
      heading
      body {
        html
      }
    }
  }
`;
export const HY_TWO_COLUMN_LAYOUT_FRAGMENT = `#graphql
  fragment TwoColumnLayout on TwoColumnLayout {
    column1 {
      __typename
      ... on Media {
        ...ExternalMedia
      }
      ... on Form {
        ...Form
      }

    }
    isColumn1Loading1stOnMobile
    column2 {
      __typename
      ... on Media {
        ...ExternalMedia
      }
      ... on Form {
        ...Form
      }

    }

  }`;
export const DYNAMIC_PAGE_CONTENT_FRAGMENT = `#graphql
  ${HY_COMPONENT_GENERAL_CONFIG_FRAGMENT}
  ${HY_FEATURED_COLLECTION_FRAGMENT}
  ${HY_CONTENT_TILE_FRAGMENT}
  ${EXTERNAL_MEDIA_FRAGMENT}
  ${HY_TWO_COLUMN_LAYOUT_FRAGMENT}
  ${HY_FORM_FRAGMENT}
  ${HY_CUSTOM_WIDGET_FRAGMENT}
  fragment DynamicPageContent on Page {
    dynamicPageContent {
      __typename
      ... on FeaturedCollection {
        ...FeaturedCollection
      }
      ... on ContentTile {
        ...ContentTile
      }
      ... on Form {
        ...Form
      }
      ... on TwoColumnLayout {
        ...TwoColumnLayout
      }
      ... on CustomWidget {
        ...CustomWidget
      }
    }
  }
`;
