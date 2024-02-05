import {
  defer,
  type LinksFunction,
  type LoaderFunctionArgs,
  type AppLoadContext,
  type SerializeFrom,
} from '@shopify/remix-oxygen';
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  LiveReload,
  ScrollRestoration,
  useLoaderData,
  useMatches,
  useRouteError,
  type ShouldRevalidateFunction,
} from '@remix-run/react';
import {ShopifySalesChannel, Seo, useNonce} from '@shopify/hydrogen';
import invariant from 'tiny-invariant';
import {LazyMotion} from 'framer-motion';

import {Layout} from '~/components';
import {seoPayload} from '~/lib/seo.server';
import {
  FOOTER_MENU_HANDLE,
  DESKTOP_HEADER_HANDLE,
  MOBILE_HEADER_HANDLE,
} from '~/lib/const';

import favicon from '../public/favicon.svg';

import fonts from './styles/custom-font.css';
import {GenericError} from './components/GenericError';
import {NotFound} from './components/NotFound';
import styles from './styles/app.css';
import {DEFAULT_LOCALE, parseMenu} from './lib/utils';
import {useAnalytics} from './hooks/useAnalytics';

// This is important to avoid re-fetching root queries on sub-navigations
export const shouldRevalidate: ShouldRevalidateFunction = ({
  formMethod,
  currentUrl,
  nextUrl,
}) => {
  // revalidate when a mutation is performed e.g add to cart, login...
  if (formMethod && formMethod !== 'GET') {
    return true;
  }

  // revalidate when manually revalidating via useRevalidator
  if (currentUrl.toString() === nextUrl.toString()) {
    return true;
  }

  return false;
};

export const links: LinksFunction = () => {
  return [
    {rel: 'stylesheet', href: fonts},
    {rel: 'stylesheet', href: styles},
    {
      rel: 'preconnect',
      href: 'https://cdn.shopify.com',
    },
    {
      rel: 'preconnect',
      href: 'https://shop.app',
    },
    {rel: 'icon', type: 'image/svg+xml', href: favicon},
  ];
};

export const useRootLoaderData = () => {
  const [root] = useMatches();
  return root?.data as SerializeFrom<typeof loader>;
};

export async function loader({request, context}: LoaderFunctionArgs) {
  const {storefront, cart} = context;
  const layout = await getLayoutData(context);
  const isLoggedInPromise = context.customerAccount.isLoggedIn();

  const seo = seoPayload.root({shop: layout.shop, url: request.url});

  return defer(
    {
      isLoggedIn: isLoggedInPromise,
      layout,
      selectedLocale: storefront.i18n,
      cart: cart.get(),
      analytics: {
        shopifySalesChannel: ShopifySalesChannel.hydrogen,
        shopId: layout.shop.id,
      },
      isDarkMode: false,
      seo,
    },
    {
      headers: {
        'Set-Cookie': await context.session.commit(),
      },
    },
  );
}

export default function App() {
  const nonce = useNonce();
  const data = useLoaderData<typeof loader>();
  const locale = data.selectedLocale ?? DEFAULT_LOCALE;
  const hasUserConsent = true;

  useAnalytics(hasUserConsent);

  return (
    <html lang={locale.language}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="msvalidate.01" content="A352E6A0AF9A652267361BBB572B8468" />
        <Seo />
        <Meta />
        <Links />
      </head>
      <body>
        <LazyMotion
          features={async () => (await import('./lib/motion-features')).default}
          strict
        >
          <Layout
            key={`${locale.language}-${locale.country}`}
            layout={data.layout}
          >
            <Outlet />
          </Layout>
        </LazyMotion>
        <ScrollRestoration nonce={nonce} />
        <Scripts nonce={nonce} />
        <LiveReload nonce={nonce} />
      </body>
    </html>
  );
}

export function ErrorBoundary({error}: {error: Error}) {
  const nonce = useNonce();
  const routeError = useRouteError();
  const rootData = useRootLoaderData();
  const locale = rootData?.selectedLocale ?? DEFAULT_LOCALE;
  const isRouteError = isRouteErrorResponse(routeError);

  let title = 'Error';
  let pageType = 'page';

  if (isRouteError) {
    title = 'Not found';
    if (routeError.status === 404) pageType = routeError.data || pageType;
  }

  return (
    <html lang={locale.language}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>{title}</title>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout
          layout={rootData?.layout}
          key={`${locale.language}-${locale.country}`}
        >
          {isRouteError ? (
            <>
              {routeError.status === 404 ? (
                <NotFound type={pageType} />
              ) : (
                <GenericError
                  error={{message: `${routeError.status} ${routeError.data}`}}
                />
              )}
            </>
          ) : (
            <GenericError error={error instanceof Error ? error : undefined} />
          )}
        </Layout>
        <ScrollRestoration nonce={nonce} />
        <Scripts nonce={nonce} />
        <LiveReload nonce={nonce} />
      </body>
    </html>
  );
}

const LAYOUT_QUERY = `#graphql
  query layout(
    $language: LanguageCode
    $desktopHeaderHandle: String!
    $mobileHeaderHandle: String!
    $footerMenuHandle: String!
  ) @inContext(language: $language) {
    shop {
      ...Shop
    }
    desktopHeaderMenu: menu(handle: $desktopHeaderHandle) {
      ...Menu
    }
    mobileHeaderMenu:  menu(handle: $mobileHeaderHandle) {
        ...Menu
    }
    footerMenu: menu(handle: $footerMenuHandle) {
        ...Menu
    }
  }
  fragment Shop on Shop {
    id
    name
    description
    primaryDomain {
      url
    }
    brand {
      logo {
        image {
          url
        }
      }
    }
  }
  fragment MenuItem on MenuItem {
    id
    resourceId
    tags
    title
    type
    url
  }
  fragment YoungestChildMenuItem on MenuItem {
    ...MenuItem
  }
  fragment ChildMenuItem on MenuItem {
    ...MenuItem
    items {
      ...YoungestChildMenuItem
    }
  }
  fragment ParentMenuItem on MenuItem {
    ...MenuItem
    items {
      ...ChildMenuItem
    }
  }
  fragment Menu on Menu {
    id
    items {
      ...ParentMenuItem
    }
  }
` as const;

async function getLayoutData({storefront, env}: AppLoadContext) {
  const data = await storefront.query(LAYOUT_QUERY, {
    variables: {
      desktopHeaderHandle: DESKTOP_HEADER_HANDLE,
      mobileHeaderHandle: MOBILE_HEADER_HANDLE,
      footerMenuHandle: FOOTER_MENU_HANDLE,
      language: storefront.i18n.language,
    },
  });

  invariant(data, 'No data returned from Shopify API');

  /*
    Modify specific links/routes (optional)
    @see: https://shopify.dev/api/storefront/unstable/enums/MenuItemType
    e.g here we map:
      - /blogs/news -> /news
      - /blog/news/blog-post -> /news/blog-post
      - /collections/all -> /products
  */
  const customPrefixes = {BLOG: '', CATALOG: 'products'};
  const desktopHeaderMenu = data?.desktopHeaderMenu
    ? parseMenu(
        data.desktopHeaderMenu,
        data.shop.primaryDomain.url,
        env,
        customPrefixes,
      )
    : undefined;

  const mobileHeaderMenu = data?.mobileHeaderMenu
    ? parseMenu(
        data.mobileHeaderMenu,
        data.shop.primaryDomain.url,
        env,
        customPrefixes,
      )
    : undefined;

  const footerMenu = data?.footerMenu
    ? parseMenu(
        data.footerMenu,
        data.shop.primaryDomain.url,
        env,
        customPrefixes,
      )
    : undefined;
  return {shop: data.shop, desktopHeaderMenu, mobileHeaderMenu, footerMenu};
}
