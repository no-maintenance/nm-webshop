export declare type Nullable<T> = T | null | undefined;

interface HygraphSEO {
  metaDescription: string;
  pageTitle: string;
  hasTitleTemplate: boolean;
}

export interface HygraphComponentGeneralConfig {
  backgroundColor: Nullable<HygraphHexColor>;
  hasGutter: Nullable<boolean>;
  textColor: Nullable<HygraphHexColor>;
  paddingTop: PaddingSize;
  paddingBottom: PaddingSize;
  displayOnMobile: boolean;
  displayOnDesktop: boolean;
}

export type PaddingSize = Nullable<'None' | 'Small' | 'Medium' | 'Large'>;

interface HygraphComponent {
  __typename?: string;
  generalConfig: Nullable<HygraphComponentGeneralConfig>;
  layoutPos: number
}

export interface HygraphContentTilesProps extends HygraphComponent {
  aspectRatio: Nullable<string>;
  mobileAspectRatio: Nullable<string>;
  hasGutterBetweenTiles: Nullable<boolean>;
  tiles: HygraphSingleTile[];
}

export interface HygraphContentTilesParent extends HygraphContentTilesProps {
  generalConfig: Nullable<HygraphComponentGeneralConfig>;
}

export interface HygraphSingleTile {
  heading: Nullable<string>;
  subheading: Nullable<string>;
  textColor: Nullable<HygraphHexColor>;
  textPosition: Nullable<string>;
  backgroundMedia: Nullable<CloudinaryImage>;
  mobileFallbackMedia: Nullable<CloudinaryImage>;
  hasOverlayOnHover: Nullable<boolean>;
  link: Nullable<HygraphLinkProps>;
}

export interface HygraphFeaturedCollectionProps extends HygraphComponent {
  heading: Nullable<string>;
  products: Nullable<string[]>;
}

export type HygraphHexColor = {hex: Color};

export interface HygraphLinkProps {
  urlString: string;
  openInNewTab: boolean;
  linkLabel?: string;
}

export interface HygraphMedia {
  mimeType: string;
  url: string;
}
export interface ProcessedShopifyHygraphResData {
  seo: HygraphSEO;
  hasPaddingOffset: boolean;
  transparentBackgroundHeaderColor: {
    hex: string;
  };
  dynamicPageContent: any[];
}
