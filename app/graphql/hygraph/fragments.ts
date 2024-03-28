import {gql} from 'graphql-request';
export const THEME_FRAGMENT = gql`
  fragment Theme on Theme {
    base {
      hex
    }
    contrast {
      hex
    }
    link {
      hex
    }
    primary {
      hex
    }
    secondary {
      hex
    }
    tertiary {
      hex
    }
    neutral {
      hex
    }
    error {
      hex
    }
    success {
      hex
    }
    info {
      hex
    }
  }
`;
export const LOCKED_CONTENT_FRAGMENT = gql`
  fragment LockedContent on LockedContent {
    id
    countdown {
      launchDate
      id
    }
  }
`;
// export const HYGRAPH_SEO = gql`
//   fragment HygraphSeo on HygraphSeo {
//     id
//     title
//     description
//     hasTitleTemplate
//     image {
//       url
//     }
//   }
// `;
export const COLLECTION_FRAGMENT = gql`
  fragment Collection on Collection {
    id
    products
    enrichedProducts {
      product
      title
      icon {
        altText
        url(
          transformation: {image: {resize: {height: 30, width: 30, fit: max}}}
        )
      }
      media {
        altText
        mimeType
        url
      }
    }
  }
`;
export const COUNTDOWN_FRAGMENT = gql`
  fragment Countdown on Countdown {
    launchDate
  }
`;
export const FORM_FRAGMENT = gql`
  fragment Form on Form {
    id
    type
  }
`;

export const SETTINGS_FRAGMENT = gql`
  fragment Setting on Setting {
    id
    verticalPadding
    horizontalPadding
    theme {
      ...Theme
    }
  }
`;
export const BlOCKS_FRAGMENT = gql`
  fragment Block on Component {
    id
    content {
      ... on Collection {
        ...Collection
      }
      ... on LockedContent {
        ...LockedContent
      }
      ... on MixedContent {
        ...MixedContent
      }
      ... on Form {
        ...Form
      }
    }
  }
`;
export const SECTION_FRAGMENT = gql`
  fragment Section on Section {
    id
    settings {
      ...Setting
    }
    content {
      __typename
      ... on Collection {
        ...Collection
      }
      ... on LockedContent {
        ...LockedContent
      }
      ... on MixedContent {
        ...MixedContent
      }
      ... on Form {
        ...Form
      }
    }
  }
`;
export const MIXED_CONTENT = gql`
  fragment MixedContent on MixedContent {
    id
    mirror
    body {
      json
      references {
        __typename
        ... on Asset {
          ...ResponsiveAsset
        }
        ... on Form {
          id
          ...Form
        }
        ... on Collection {
          id
          ...Collection
        }
        ... on Button {
          id
          label
          style
        }
        ... on Page {
          id
        }
        ... on Countdown {
          id
          ...Countdown
        }
      }
    }
    media {
      ...ResponsiveAsset
    }
  }
`;
export const RESPONSIVE_ASSET_FRAGMENT = gql`
  fragment ResponsiveAsset on Asset {
    id
    altText
    mimeType
    url(
      transformation: {
        document: {output: {format: autoImage}}
        image: {compress: {metadata: true}, quality: {value: 80}}
      }
    )
    thumbnail: url(
      transformation: {
        document: {output: {format: autoImage}}
        image: {
          resize: {fit: max, width: 32}
          quality: {value: 80}
          compress: {metadata: true}
        }
      }
    )
    small: url(
      transformation: {
        document: {output: {format: autoImage}}
        image: {
          resize: {fit: max, width: 400}
          quality: {value: 80}
          compress: {metadata: true}
        }
      }
    )
    medium: url(
      transformation: {
        document: {output: {format: autoImage}}
        image: {
          quality: {value: 80}
          resize: {fit: max, width: 680}
          compress: {metadata: true}
        }
      }
    )
    large: url(
      transformation: {
        document: {output: {format: autoImage}}
        image: {
          quality: {value: 80}
          resize: {fit: max, width: 960}
          compress: {metadata: true}
        }
      }
    )
    xlarge: url(
      transformation: {
        document: {output: {format: autoImage}}
        image: {
          quality: {value: 80}
          resize: {fit: max, width: 1980}
          compress: {metadata: true}
        }
      }
    )
  }
`;
export const LAYOUT_FRAGMENT = gql`
  fragment Layout on Layout {
    id
    title
    settings {
      ...Setting
    }
    sections {
      ...Section
    }
  }
`;
