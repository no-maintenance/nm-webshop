import { Locale } from "~/lib/type";

export const PAGINATION_SIZE = 12;
export const DEFAULT_GRID_IMG_LOAD_EAGER_COUNT = 3;
export const ATTR_LOADING_EAGER = 'eager';
export const ATTR_LOADING_LAZY = 'lazy';

export const DESKTOP_HEADER_HANDLE = 'hamburger-menu';
export const FOOTER_MENU_HANDLE = 'footer-nav-hydrogen';
export const MOBILE_HEADER_HANDLE = 'hamburger-menu';
export enum SupportedLanguages {
  EN = 'EN',
  FR = 'FR',
  DE = 'DE',
  IT = 'IT',
  KO = 'KO',
  JA = 'JA',
}
export const langMap: Partial<Record<SupportedLanguages, string>> = {
  EN: 'English',
  JA: '日本語',
  KO: '한국인',
  FR: 'Français',
  DE: 'Deutsch',
  IT: 'Italiano',
};
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

export const COMPONENT_DEFAULTS = {
  CONTENT_TILE_ASPECT_RATIO: 'aspect_1x1',
};

/*** TO BE REFACTORED **/
export const FORM_TEXTAREA_CHAR_LIMIT = 1000;
export const KLAVIYO_BASE_URL = 'https://a.klaviyo.com';
export const EMAILJS_CONTACT_TEMPLATE_ID = 'template_0jee2h8';
export const EMAILJS_APPOINTMENT_TEMPLATE_ID = 'template_q2yw635';
export const EMAILJS_SERVICE_ID = 'service_q8ej60l';
export const EMAILJS_PUBKEY = 'hi4FCFs4Sq1Wj6URH';
// Page IDs
export const HY_ABOUT_PAGE_ID = 'clgamu3e8oqkz0bn0qvoubqf8';
export const HY_APPOINTMENTS_PAGE_ID = 'clgamupakohg80an3mq9m2z8k';
export const HY_CONTACT_PAGE_ID = 'clgamwzxqohou0an3j93ssc6z';
export const CLOUDINARY_PROXY = 'https://cloudinary.nomaintenance.us/upload';
