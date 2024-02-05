export const PAGINATION_SIZE = 12;
export const DEFAULT_GRID_IMG_LOAD_EAGER_COUNT = 3;
export const ATTR_LOADING_EAGER = 'eager';

export const DESKTOP_HEADER_HANDLE = 'header-menu-desktop';
export const FOOTER_MENU_HANDLE = 'footer-nav-hydrogen';
export const MOBILE_HEADER_HANDLE = 'main-menu';

export function getImageLoadingPriority(
  index: number,
  maxEagerLoadCount = DEFAULT_GRID_IMG_LOAD_EAGER_COUNT,
) {
  return index < maxEagerLoadCount ? ATTR_LOADING_EAGER : undefined;
}

export const getKlaviyoConstants = (env: Env) => ({
  KLAVIYO_BASE_URL: 'https://a.klaviyo.com',
  KLAVIYO_LIST_ID: env.KLAVIYO_NEWSLETTER_ID ?? 'Wimtnj',
  KLAVIYO_COMPANY_ID: env.KLAVIYO_COMPANY_ID ?? 'RDT3xD',
  KLAVIYO_API_VERSION: '2023-12-15',
  KLAVIYO_PRIVATE_KEY: env.KLAVIYO_PRIVATE_KEY,
});
