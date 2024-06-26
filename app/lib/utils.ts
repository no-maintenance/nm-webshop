import {useLocation, useMatches} from '@remix-run/react';
import type {
  CountryCode,
  LanguageCode,
  MoneyV2,
  ProductVariant,
} from '@shopify/hydrogen/storefront-api-types';
import type {FulfillmentStatus} from '@shopify/hydrogen/customer-account-api-types';
import typographicBase from 'typographic-base';

import type {
  ChildMenuItemFragment,
  MenuFragment,
  ParentMenuItemFragment,
} from '~/__generated__/storefrontapi.generated';
import {useRootLoaderData} from '~/root';
import {countries} from '~/data/countries';
import {SupportedLanguages} from '~/lib/const';
import {createSubfolderLocaleParser} from '~/i18n';

import type {I18nLocale} from './type';

type EnhancedMenuItemProps = {
  to: string;
  target: string;
  isExternal?: boolean;
};

export type ChildEnhancedMenuItem = ChildMenuItemFragment &
  EnhancedMenuItemProps;

export type ParentEnhancedMenuItem = (ParentMenuItemFragment &
  EnhancedMenuItemProps) & {
  items: ChildEnhancedMenuItem[];
};

export type EnhancedMenu = Pick<MenuFragment, 'id'> & {
  items: ParentEnhancedMenuItem[];
};

export function missingClass(string?: string, prefix?: string) {
  if (!string) {
    return true;
  }

  const regex = new RegExp(` ?${prefix}`, 'g');
  return string.match(regex) === null;
}

export function formatText(input?: string | React.ReactNode) {
  if (!input) {
    return;
  }

  if (typeof input !== 'string') {
    return input;
  }

  return typographicBase(input, {locale: 'en-us'}).replace(
    /\s([^\s<]+)\s*$/g,
    '\u00A0$1',
  );
}

export function getExcerpt(text: string) {
  const regex = /<p.*>(.*?)<\/p>/;
  const match = regex.exec(text);
  return match?.length ? match[0] : text;
}

export function isNewArrival(date: string, daysOld = 30) {
  return (
    new Date(date).valueOf() >
    new Date().setDate(new Date().getDate() - daysOld).valueOf()
  );
}

export function isDiscounted(price: MoneyV2, compareAtPrice: MoneyV2) {
  if (compareAtPrice?.amount > price?.amount) {
    return true;
  }
  return false;
}

function resolveToFromType(
  {
    customPrefixes,
    pathname,
    type,
    tags,
  }: {
    customPrefixes: Record<string, string>;
    pathname?: string;
    type?: string;
    tags: string[];
  } = {
    customPrefixes: {},
    tags: [],
  },
) {
  if (!pathname || !type) return '';

  /*
    MenuItemType enum
    @see: https://shopify.dev/api/storefront/unstable/enums/MenuItemType
  */
  const defaultPrefixes = {
    BLOG: 'blogs',
    COLLECTION: 'collections',
    COLLECTIONS: 'collections', // Collections All (not documented)
    FRONTPAGE: 'frontpage',
    HTTP: '',
    PAGE: 'pages',
    CATALOG: 'collections/all', // Products All
    PRODUCT: 'products',
    SEARCH: 'search',
    SHOP_POLICY: 'policies',
  };

  function getParsedHandle(tags: string[], pathParts: string[], type?: string) {
    if (type === 'COLLECTION' && tags.length) {
      const searchParams = new URLSearchParams();
      for (const t of tags) {
        searchParams.set('tag', t);
      }
      const intersection = pathParts.filter((x) => !tags.includes(x));
      return `${intersection.pop()}?${searchParams}`;
    }
    return pathParts.pop() || '';
  }

  const pathParts = pathname.split('/');
  const handle = getParsedHandle(tags, pathParts, type);

  const routePrefix: Record<string, string> = {
    ...defaultPrefixes,
    ...customPrefixes,
  };

  switch (true) {
    // special cases
    case type === 'FRONTPAGE':
      return '/';

    case type === 'ARTICLE': {
      const blogHandle = pathParts.pop();
      return routePrefix.BLOG
        ? `/${routePrefix.BLOG}/${blogHandle}/${handle}/`
        : `/${blogHandle}/${handle}/`;
    }

    case type === 'COLLECTIONS':
      return `/${routePrefix.COLLECTIONS}`;

    case type === 'SEARCH':
      return `/${routePrefix.SEARCH}`;

    case type === 'CATALOG':
      return `/${routePrefix.CATALOG}`;

    // common cases: BLOG, PAGE, COLLECTION, PRODUCT, SHOP_POLICY, HTTP
    default:
      return routePrefix[type]
        ? `/${routePrefix[type]}/${handle}`
        : `/${handle}`;
  }
}

/*
  Parse each menu link and adding, isExternal, to and target
*/
function parseItem(primaryDomain: string, env: Env, customPrefixes = {}) {
  return function (
    item:
      | MenuFragment['items'][number]
      | MenuFragment['items'][number]['items'][number]
      | MenuFragment['items'][number]['items'][number]['items'][number],
  ):
    | EnhancedMenu['items'][0]
    | EnhancedMenu['items'][number]['items'][0]
    | EnhancedMenu['items'][number]['items'][number]['items'][0]
    | null {
    if (!item?.url || !item?.type) {
      // eslint-disable-next-line no-console
      console.warn('Invalid menu item.  Must include a url and type.');
      return null;
    }

    // extract path from url because we don't need the origin on internal to attributes
    const {host, pathname} = new URL(item.url);
    const isInternalLink =
      host === new URL(primaryDomain).host || host === env.PUBLIC_STORE_DOMAIN;

    const parsedItem = isInternalLink
      ? // internal links
        {
          ...item,
          isExternal: false,
          target: '_self',
          to: resolveToFromType({
            type: item.type,
            customPrefixes,
            pathname,
            tags: item.tags,
          }),
        }
      : // external links
        {
          ...item,
          isExternal: true,
          target: '_blank',
          to: item.url,
        };

    if ('items' in item) {
      return {
        ...parsedItem,
        items: item.items
          .map(parseItem(primaryDomain, env, customPrefixes))
          .filter(Boolean),
      } as EnhancedMenu['items'][number];
    } else {
      return parsedItem as EnhancedMenu['items'][number]['items'][number];
    }
  };
}

/*
  Recursively adds `to` and `target` attributes to links based on their url
  and resource type.
  It optionally overwrites url paths based on item.type
*/
export function parseMenu(
  menu: MenuFragment,
  primaryDomain: string,
  env: Env,
  customPrefixes = {},
): EnhancedMenu | null {
  if (!menu?.items) {
    // eslint-disable-next-line no-console
    console.warn('Invalid menu passed to parseMenu');
    return null;
  }

  const parser = parseItem(primaryDomain, env, customPrefixes);

  return {
    ...menu,
    items: menu.items.map(parser).filter(Boolean),
  } as EnhancedMenu;
}

// 'appearance-none rounded dark:bg-transparent border focus:border-primary/50 focus:ring-0 w-full py-2 px-3 text-primary/90 placeholder:text-primary/50 leading-tight focus:shadow-outline';

export function statusMessage(status: FulfillmentStatus) {
  const translations: Record<FulfillmentStatus, string> = {
    SUCCESS: 'Delivered',
    PENDING: 'Pending',
    OPEN: 'Open',
    FAILURE: 'Failure',
    ERROR: 'Error',
    CANCELLED: 'Cancelled',
  };
  try {
    return translations?.[status];
  } catch (error) {
    return status;
  }
}

export const DEFAULT_LOCALE: I18nLocale = Object.freeze({
  ...countries.default,
  pathPrefix: '',
});

export function getLocaleFromRequest(request: Request): I18nLocale {
  const url = new URL(request.url);
  const firstPathPart =
    '/' + url.pathname.substring(1).split('/')[0].toLowerCase();
  const [lang, c] = firstPathPart.substring(1).split('-');

  const country = countries[c?.toUpperCase() as CountryCode];
  const isValidLanguageCode = Object.values(SupportedLanguages).includes(
    lang.toUpperCase() as LanguageCode,
  );

  if (country && isValidLanguageCode) {
    return {
      ...country,
      language: lang.toUpperCase() as LanguageCode, // Overwrite language if both codes are valid
      pathPrefix: firstPathPart,
    };
  } else if (country) {
    return {
      ...country,
      pathPrefix: firstPathPart, // Use country's default language if language code is invalid
    };
  } else {
    return {
      ...countries['default'],
      pathPrefix: '', // Use default if country code is invalid
    };
  }
}
export function usePrefixPathWithLocale(path: string) {
  const rootData = useRootLoaderData();
  const selectedLocale = rootData?.selectedLocale ?? DEFAULT_LOCALE;

  return `${selectedLocale.pathPrefix}${
    path.startsWith('/') ? path : '/' + path
  }`;
}

export function useIsHomePath() {
  const {pathname} = useLocation();
  const rootData = useRootLoaderData();
  const selectedLocale = rootData?.selectedLocale ?? DEFAULT_LOCALE;
  const strippedPathname = pathname.replace(selectedLocale.pathPrefix, '');
  return strippedPathname === '/';
}

export function parseAsCurrency(value: number, locale: I18nLocale) {
  return new Intl.NumberFormat(locale.language + '-' + locale.country, {
    style: 'currency',
    currency: locale.currency,
  }).format(value);
}

/**
 * Validates that a url is local
 * @param url
 * @returns `true` if local `false`if external domain
 */
export function isLocalPath(url: string) {
  try {
    // We don't want to redirect cross domain,
    // doing so could create fishing vulnerability
    // If `new URL()` succeeds, it's a fully qualified
    // url which is cross domain. If it fails, it's just
    // a path, which will be the current domain.
    new URL(url);
  } catch (e) {
    return true;
  }

  return false;
}

export const getLegacyId = (gid: string) => {
  const id = gid.split('/').pop();
  return id ?? '';
};

// Configure the i18n locale format. e.g this will match /fr-CA/ or /en-CA
export const subfolderLocaleParser = createSubfolderLocaleParser({
  parser: ({COUNTRY, language, delimiter}) =>
    `/${language}${delimiter['-']}${COUNTRY}`,
});

export const parseNumberFromShopGid = (gid?: string) => {
  if (!gid) return;
  const id = gid.split('/').pop();
  return id ?? '';
};

export const getFirstAvailableVariant = (v: ProductVariant[]) => {
  for (let i = 0; i < v.length; i++) {
    if (v[i].availableForSale) return v[i];
  }
  return v[0];
};
