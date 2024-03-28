/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import * as StorefrontAPI from '@shopify/hydrogen/storefront-api-types';

export type ThemeFragment = {
  base?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
  contrast?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
  link?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
  primary?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
  secondary?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
  tertiary?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
  neutral?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
  error?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
  success?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
  info?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
};

export type LockedContentFragment = Pick<StorefrontAPI.LockedContent, 'id'> & {
  countdown?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.Countdown, 'launchDate' | 'id'>
  >;
};

export type CollectionFragment = Pick<
  StorefrontAPI.Collection,
  'id' | 'products'
> & {
  enrichedProducts: Array<
    Pick<StorefrontAPI.Product, 'product' | 'title'> & {
      icon?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Asset, 'altText' | 'url'>>;
      media: Array<Pick<StorefrontAPI.Asset, 'altText' | 'mimeType' | 'url'>>;
    }
  >;
};

export type CountdownFragment = Pick<StorefrontAPI.Countdown, 'launchDate'>;

export type FormFragment = Pick<StorefrontAPI.Form, 'id' | 'type'>;

export type SettingFragment = Pick<
  StorefrontAPI.Setting,
  'id' | 'verticalPadding' | 'horizontalPadding'
> & {
  theme?: StorefrontAPI.Maybe<{
    base?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
    contrast?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
    link?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
    primary?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
    secondary?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
    tertiary?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
    neutral?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
    error?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
    success?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
    info?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
  }>;
};

export type SectionFragment = Pick<StorefrontAPI.Section, 'id'> & {
  settings?: StorefrontAPI.Maybe<
    Pick<
      StorefrontAPI.Setting,
      'id' | 'verticalPadding' | 'horizontalPadding'
    > & {
      theme?: StorefrontAPI.Maybe<{
        base?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
        contrast?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
        link?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
        primary?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
        secondary?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
        tertiary?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
        neutral?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
        error?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
        success?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
        info?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
      }>;
    }
  >;
  content?: StorefrontAPI.Maybe<
    | ({__typename: 'Collection'} & Pick<
        StorefrontAPI.Collection,
        'id' | 'products'
      > & {
          enrichedProducts: Array<
            Pick<StorefrontAPI.Product, 'product' | 'title'> & {
              icon?: StorefrontAPI.Maybe<
                Pick<StorefrontAPI.Asset, 'altText' | 'url'>
              >;
              media: Array<
                Pick<StorefrontAPI.Asset, 'altText' | 'mimeType' | 'url'>
              >;
            }
          >;
        })
    | {__typename: 'Countdown'}
    | ({__typename: 'Form'} & Pick<StorefrontAPI.Form, 'id' | 'type'>)
    | ({__typename: 'LockedContent'} & Pick<
        StorefrontAPI.LockedContent,
        'id'
      > & {
          countdown?: StorefrontAPI.Maybe<
            Pick<StorefrontAPI.Countdown, 'launchDate' | 'id'>
          >;
        })
    | ({__typename: 'MixedContent'} & Pick<
        StorefrontAPI.MixedContent,
        'id' | 'mirror'
      > & {
          body?: StorefrontAPI.Maybe<
            Pick<StorefrontAPI.MixedContentBodyRichText, 'json'> & {
              references: Array<
                | ({__typename: 'Asset'} & Pick<
                    StorefrontAPI.Asset,
                    'id' | 'altText' | 'mimeType' | 'url'
                  > & {
                      thumbnail: StorefrontAPI.Asset['url'];
                      small: StorefrontAPI.Asset['url'];
                      medium: StorefrontAPI.Asset['url'];
                      large: StorefrontAPI.Asset['url'];
                      xlarge: StorefrontAPI.Asset['url'];
                    })
                | ({__typename: 'Button'} & Pick<
                    StorefrontAPI.Button,
                    'id' | 'label' | 'style'
                  >)
                | ({__typename: 'Collection'} & Pick<
                    StorefrontAPI.Collection,
                    'id' | 'products'
                  > & {
                      enrichedProducts: Array<
                        Pick<StorefrontAPI.Product, 'product' | 'title'> & {
                          icon?: StorefrontAPI.Maybe<
                            Pick<StorefrontAPI.Asset, 'altText' | 'url'>
                          >;
                          media: Array<
                            Pick<
                              StorefrontAPI.Asset,
                              'altText' | 'mimeType' | 'url'
                            >
                          >;
                        }
                      >;
                    })
                | ({__typename: 'Countdown'} & Pick<
                    StorefrontAPI.Countdown,
                    'id' | 'launchDate'
                  >)
                | ({__typename: 'Form'} & Pick<
                    StorefrontAPI.Form,
                    'id' | 'type'
                  >)
                | ({__typename: 'Page'} & Pick<StorefrontAPI.Page, 'id'>)
              >;
            }
          >;
          media: Array<
            Pick<StorefrontAPI.Asset, 'id' | 'altText' | 'mimeType' | 'url'> & {
              thumbnail: StorefrontAPI.Asset['url'];
              small: StorefrontAPI.Asset['url'];
              medium: StorefrontAPI.Asset['url'];
              large: StorefrontAPI.Asset['url'];
              xlarge: StorefrontAPI.Asset['url'];
            }
          >;
        })
  >;
};

export type MixedContentFragment = Pick<
  StorefrontAPI.MixedContent,
  'id' | 'mirror'
> & {
  body?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.MixedContentBodyRichText, 'json'> & {
      references: Array<
        | ({__typename: 'Asset'} & Pick<
            StorefrontAPI.Asset,
            'id' | 'altText' | 'mimeType' | 'url'
          > & {
              thumbnail: StorefrontAPI.Asset['url'];
              small: StorefrontAPI.Asset['url'];
              medium: StorefrontAPI.Asset['url'];
              large: StorefrontAPI.Asset['url'];
              xlarge: StorefrontAPI.Asset['url'];
            })
        | ({__typename: 'Button'} & Pick<
            StorefrontAPI.Button,
            'id' | 'label' | 'style'
          >)
        | ({__typename: 'Collection'} & Pick<
            StorefrontAPI.Collection,
            'id' | 'products'
          > & {
              enrichedProducts: Array<
                Pick<StorefrontAPI.Product, 'product' | 'title'> & {
                  icon?: StorefrontAPI.Maybe<
                    Pick<StorefrontAPI.Asset, 'altText' | 'url'>
                  >;
                  media: Array<
                    Pick<StorefrontAPI.Asset, 'altText' | 'mimeType' | 'url'>
                  >;
                }
              >;
            })
        | ({__typename: 'Countdown'} & Pick<
            StorefrontAPI.Countdown,
            'id' | 'launchDate'
          >)
        | ({__typename: 'Form'} & Pick<StorefrontAPI.Form, 'id' | 'type'>)
        | ({__typename: 'Page'} & Pick<StorefrontAPI.Page, 'id'>)
      >;
    }
  >;
  media: Array<
    Pick<StorefrontAPI.Asset, 'id' | 'altText' | 'mimeType' | 'url'> & {
      thumbnail: StorefrontAPI.Asset['url'];
      small: StorefrontAPI.Asset['url'];
      medium: StorefrontAPI.Asset['url'];
      large: StorefrontAPI.Asset['url'];
      xlarge: StorefrontAPI.Asset['url'];
    }
  >;
};

export type ResponsiveAssetFragment = Pick<
  StorefrontAPI.Asset,
  'id' | 'altText' | 'mimeType' | 'url'
> & {
  thumbnail: StorefrontAPI.Asset['url'];
  small: StorefrontAPI.Asset['url'];
  medium: StorefrontAPI.Asset['url'];
  large: StorefrontAPI.Asset['url'];
  xlarge: StorefrontAPI.Asset['url'];
};

export type LayoutFragment = Pick<StorefrontAPI.Layout, 'id' | 'title'> & {
  settings?: StorefrontAPI.Maybe<
    Pick<
      StorefrontAPI.Setting,
      'id' | 'verticalPadding' | 'horizontalPadding'
    > & {
      theme?: StorefrontAPI.Maybe<{
        base?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
        contrast?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
        link?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
        primary?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
        secondary?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
        tertiary?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
        neutral?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
        error?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
        success?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
        info?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
      }>;
    }
  >;
  sections: Array<
    Pick<StorefrontAPI.Section, 'id'> & {
      settings?: StorefrontAPI.Maybe<
        Pick<
          StorefrontAPI.Setting,
          'id' | 'verticalPadding' | 'horizontalPadding'
        > & {
          theme?: StorefrontAPI.Maybe<{
            base?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
            contrast?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
            link?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
            primary?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
            secondary?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
            tertiary?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
            neutral?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
            error?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
            success?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
            info?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
          }>;
        }
      >;
      content?: StorefrontAPI.Maybe<
        | ({__typename: 'Collection'} & Pick<
            StorefrontAPI.Collection,
            'id' | 'products'
          > & {
              enrichedProducts: Array<
                Pick<StorefrontAPI.Product, 'product' | 'title'> & {
                  icon?: StorefrontAPI.Maybe<
                    Pick<StorefrontAPI.Asset, 'altText' | 'url'>
                  >;
                  media: Array<
                    Pick<StorefrontAPI.Asset, 'altText' | 'mimeType' | 'url'>
                  >;
                }
              >;
            })
        | {__typename: 'Countdown'}
        | ({__typename: 'Form'} & Pick<StorefrontAPI.Form, 'id' | 'type'>)
        | ({__typename: 'LockedContent'} & Pick<
            StorefrontAPI.LockedContent,
            'id'
          > & {
              countdown?: StorefrontAPI.Maybe<
                Pick<StorefrontAPI.Countdown, 'launchDate' | 'id'>
              >;
            })
        | ({__typename: 'MixedContent'} & Pick<
            StorefrontAPI.MixedContent,
            'id' | 'mirror'
          > & {
              body?: StorefrontAPI.Maybe<
                Pick<StorefrontAPI.MixedContentBodyRichText, 'json'> & {
                  references: Array<
                    | ({__typename: 'Asset'} & Pick<
                        StorefrontAPI.Asset,
                        'id' | 'altText' | 'mimeType' | 'url'
                      > & {
                          thumbnail: StorefrontAPI.Asset['url'];
                          small: StorefrontAPI.Asset['url'];
                          medium: StorefrontAPI.Asset['url'];
                          large: StorefrontAPI.Asset['url'];
                          xlarge: StorefrontAPI.Asset['url'];
                        })
                    | ({__typename: 'Button'} & Pick<
                        StorefrontAPI.Button,
                        'id' | 'label' | 'style'
                      >)
                    | ({__typename: 'Collection'} & Pick<
                        StorefrontAPI.Collection,
                        'id' | 'products'
                      > & {
                          enrichedProducts: Array<
                            Pick<StorefrontAPI.Product, 'product' | 'title'> & {
                              icon?: StorefrontAPI.Maybe<
                                Pick<StorefrontAPI.Asset, 'altText' | 'url'>
                              >;
                              media: Array<
                                Pick<
                                  StorefrontAPI.Asset,
                                  'altText' | 'mimeType' | 'url'
                                >
                              >;
                            }
                          >;
                        })
                    | ({__typename: 'Countdown'} & Pick<
                        StorefrontAPI.Countdown,
                        'id' | 'launchDate'
                      >)
                    | ({__typename: 'Form'} & Pick<
                        StorefrontAPI.Form,
                        'id' | 'type'
                      >)
                    | ({__typename: 'Page'} & Pick<StorefrontAPI.Page, 'id'>)
                  >;
                }
              >;
              media: Array<
                Pick<
                  StorefrontAPI.Asset,
                  'id' | 'altText' | 'mimeType' | 'url'
                > & {
                  thumbnail: StorefrontAPI.Asset['url'];
                  small: StorefrontAPI.Asset['url'];
                  medium: StorefrontAPI.Asset['url'];
                  large: StorefrontAPI.Asset['url'];
                  xlarge: StorefrontAPI.Asset['url'];
                }
              >;
            })
      >;
    }
  >;
};

export type GetPageQueryVariables = StorefrontAPI.Exact<{
  slug?: StorefrontAPI.InputMaybe<StorefrontAPI.Scalars['String']['input']>;
}>;

export type GetPageQuery = {
  page?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.Page, 'id'> & {
      layout?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.Layout, 'id' | 'title'> & {
          settings?: StorefrontAPI.Maybe<
            Pick<
              StorefrontAPI.Setting,
              'id' | 'verticalPadding' | 'horizontalPadding'
            > & {
              theme?: StorefrontAPI.Maybe<{
                base?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
                contrast?: StorefrontAPI.Maybe<
                  Pick<StorefrontAPI.Color, 'hex'>
                >;
                link?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
                primary?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
                secondary?: StorefrontAPI.Maybe<
                  Pick<StorefrontAPI.Color, 'hex'>
                >;
                tertiary?: StorefrontAPI.Maybe<
                  Pick<StorefrontAPI.Color, 'hex'>
                >;
                neutral?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
                error?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
                success?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
                info?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Color, 'hex'>>;
              }>;
            }
          >;
          sections: Array<
            Pick<StorefrontAPI.Section, 'id'> & {
              settings?: StorefrontAPI.Maybe<
                Pick<
                  StorefrontAPI.Setting,
                  'id' | 'verticalPadding' | 'horizontalPadding'
                > & {
                  theme?: StorefrontAPI.Maybe<{
                    base?: StorefrontAPI.Maybe<
                      Pick<StorefrontAPI.Color, 'hex'>
                    >;
                    contrast?: StorefrontAPI.Maybe<
                      Pick<StorefrontAPI.Color, 'hex'>
                    >;
                    link?: StorefrontAPI.Maybe<
                      Pick<StorefrontAPI.Color, 'hex'>
                    >;
                    primary?: StorefrontAPI.Maybe<
                      Pick<StorefrontAPI.Color, 'hex'>
                    >;
                    secondary?: StorefrontAPI.Maybe<
                      Pick<StorefrontAPI.Color, 'hex'>
                    >;
                    tertiary?: StorefrontAPI.Maybe<
                      Pick<StorefrontAPI.Color, 'hex'>
                    >;
                    neutral?: StorefrontAPI.Maybe<
                      Pick<StorefrontAPI.Color, 'hex'>
                    >;
                    error?: StorefrontAPI.Maybe<
                      Pick<StorefrontAPI.Color, 'hex'>
                    >;
                    success?: StorefrontAPI.Maybe<
                      Pick<StorefrontAPI.Color, 'hex'>
                    >;
                    info?: StorefrontAPI.Maybe<
                      Pick<StorefrontAPI.Color, 'hex'>
                    >;
                  }>;
                }
              >;
              content?: StorefrontAPI.Maybe<
                | ({__typename: 'Collection'} & Pick<
                    StorefrontAPI.Collection,
                    'id' | 'products'
                  > & {
                      enrichedProducts: Array<
                        Pick<StorefrontAPI.Product, 'product' | 'title'> & {
                          icon?: StorefrontAPI.Maybe<
                            Pick<StorefrontAPI.Asset, 'altText' | 'url'>
                          >;
                          media: Array<
                            Pick<
                              StorefrontAPI.Asset,
                              'altText' | 'mimeType' | 'url'
                            >
                          >;
                        }
                      >;
                    })
                | {__typename: 'Countdown'}
                | ({__typename: 'Form'} & Pick<
                    StorefrontAPI.Form,
                    'id' | 'type'
                  >)
                | ({__typename: 'LockedContent'} & Pick<
                    StorefrontAPI.LockedContent,
                    'id'
                  > & {
                      countdown?: StorefrontAPI.Maybe<
                        Pick<StorefrontAPI.Countdown, 'launchDate' | 'id'>
                      >;
                    })
                | ({__typename: 'MixedContent'} & Pick<
                    StorefrontAPI.MixedContent,
                    'id' | 'mirror'
                  > & {
                      body?: StorefrontAPI.Maybe<
                        Pick<StorefrontAPI.MixedContentBodyRichText, 'json'> & {
                          references: Array<
                            | ({__typename: 'Asset'} & Pick<
                                StorefrontAPI.Asset,
                                'id' | 'altText' | 'mimeType' | 'url'
                              > & {
                                  thumbnail: StorefrontAPI.Asset['url'];
                                  small: StorefrontAPI.Asset['url'];
                                  medium: StorefrontAPI.Asset['url'];
                                  large: StorefrontAPI.Asset['url'];
                                  xlarge: StorefrontAPI.Asset['url'];
                                })
                            | ({__typename: 'Button'} & Pick<
                                StorefrontAPI.Button,
                                'id' | 'label' | 'style'
                              >)
                            | ({__typename: 'Collection'} & Pick<
                                StorefrontAPI.Collection,
                                'id' | 'products'
                              > & {
                                  enrichedProducts: Array<
                                    Pick<
                                      StorefrontAPI.Product,
                                      'product' | 'title'
                                    > & {
                                      icon?: StorefrontAPI.Maybe<
                                        Pick<
                                          StorefrontAPI.Asset,
                                          'altText' | 'url'
                                        >
                                      >;
                                      media: Array<
                                        Pick<
                                          StorefrontAPI.Asset,
                                          'altText' | 'mimeType' | 'url'
                                        >
                                      >;
                                    }
                                  >;
                                })
                            | ({__typename: 'Countdown'} & Pick<
                                StorefrontAPI.Countdown,
                                'id' | 'launchDate'
                              >)
                            | ({__typename: 'Form'} & Pick<
                                StorefrontAPI.Form,
                                'id' | 'type'
                              >)
                            | ({__typename: 'Page'} & Pick<
                                StorefrontAPI.Page,
                                'id'
                              >)
                          >;
                        }
                      >;
                      media: Array<
                        Pick<
                          StorefrontAPI.Asset,
                          'id' | 'altText' | 'mimeType' | 'url'
                        > & {
                          thumbnail: StorefrontAPI.Asset['url'];
                          small: StorefrontAPI.Asset['url'];
                          medium: StorefrontAPI.Asset['url'];
                          large: StorefrontAPI.Asset['url'];
                          xlarge: StorefrontAPI.Asset['url'];
                        }
                      >;
                    })
              >;
            }
          >;
        }
      >;
    }
  >;
};

export type GetCriticalPageContentQueryVariables = StorefrontAPI.Exact<{
  slug?: StorefrontAPI.InputMaybe<StorefrontAPI.Scalars['String']['input']>;
}>;

export type GetCriticalPageContentQuery = {
  criticalPageContent?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.Page, 'id'> & {
      seo?: StorefrontAPI.Maybe<
        Pick<
          StorefrontAPI.Seo,
          'id' | 'title' | 'description' | 'hasTitleTemplate'
        > & {image?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Asset, 'url'>>}
      >;
      layout?: StorefrontAPI.Maybe<{
        shopifyProducts: Array<{
          content?: StorefrontAPI.Maybe<
            | ({__typename: 'Collection'} & Pick<
                StorefrontAPI.Collection,
                'id' | 'products'
              > & {
                  enrichedProducts: Array<
                    Pick<StorefrontAPI.Product, 'product'>
                  >;
                })
            | {__typename: 'Countdown' | 'Form' | 'LockedContent'}
            | ({__typename: 'MixedContent'} & Pick<
                StorefrontAPI.MixedContent,
                'id'
              > & {
                  body?: StorefrontAPI.Maybe<{
                    references: Array<
                      Pick<StorefrontAPI.Collection, 'products'> & {
                        enrichedProducts: Array<
                          Pick<StorefrontAPI.Product, 'product'>
                        >;
                      }
                    >;
                  }>;
                })
          >;
        }>;
      }>;
    }
  >;
};

interface GeneratedQueryTypes {
  '\n  query GetPage($slug: String) {\n    page(where: {slug: $slug}) {\n      id\n      layout {\n        ...Layout\n      }\n    }\n  }\n  #REQUIRED_VAR=LAYOUT_FRAGMENT\n  #REQUIRED_VAR=COLLECTION_FRAGMENT\n  #REQUIRED_VAR=COUNTDOWN_FRAGMENT\n  #REQUIRED_VAR=FORM_FRAGMENT\n  #REQUIRED_VAR=SETTINGS_FRAGMENT\n  #REQUIRED_VAR=SECTION_FRAGMENT\n  #REQUIRED_VAR=MIXED_CONTENT\n  #REQUIRED_VAR=RESPONSIVE_ASSET_FRAGMENT\n  #REQUIRED_VAR=THEME_FRAGMENT\n  #REQUIRED_VAR=LOCKED_CONTENT_FRAGMENT\n': {
    return: GetPageQuery;
    variables: GetPageQueryVariables;
  };
  '\n  query GetCriticalPageContent($slug: String) {\n    criticalPageContent: page(where: {slug: $slug}) {\n      id\n      seo {\n        id\n        title\n        description\n        hasTitleTemplate\n        image {\n          url\n        }\n      }\n      layout {\n        shopifyProducts: sections {\n          content {\n            __typename\n            ... on Collection {\n              id\n              products\n              enrichedProducts {\n                product\n              }\n            }\n            ... on MixedContent {\n              id\n              body {\n                references {\n                  ... on Collection {\n                    products\n                    enrichedProducts {\n                      product\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n': {
    return: GetCriticalPageContentQuery;
    variables: GetCriticalPageContentQueryVariables;
  };
}

interface GeneratedMutationTypes {}

declare module '@shopify/hydrogen' {
  interface StorefrontQueries extends GeneratedQueryTypes {}
  interface StorefrontMutations extends GeneratedMutationTypes {}
}
