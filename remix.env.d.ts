/// <reference types="@remix-run/dev" />
/// <reference types="@shopify/remix-oxygen" />
/// <reference types="@shopify/oxygen-workers-types" />

import type {HydrogenCart} from '@shopify/hydrogen';
import type {Storefront, CustomerClient} from '~/lib/type';
import type {AppSession} from '~/lib/session.server';
import {I18n} from '~/i18n';
import {hygraphClient} from '~/lib/createHygraphClient.server';

declare global {
  /**
   * A global `process` object is only available during build to access NODE_ENV.
   */
  const process: {env: {NODE_ENV: 'production' | 'development'}};

  /**
   * Declare expected Env parameter in fetch handler.
   */
  interface Env {
    HYGRAPH_URL: string;
    HYGRAPH_PROD_TOKEN: string;
    HYGRAPH_DEV_TOKEN: string;
    HYGRAPH_ENV: string;
    KLAVIYO_PRIVATE_KEY: string;
    KLAVIYO_COMPANY_ID: string;
    KLAVIYO_NEWSLETTER_ID: string;
    SESSION_SECRET: string;
    PUBLIC_STOREFRONT_API_TOKEN: string;
    PRIVATE_STOREFRONT_API_TOKEN: string;
    PUBLIC_STORE_DOMAIN: string;
    PUBLIC_STOREFRONT_ID: string;
    PUBLIC_CUSTOMER_ACCOUNT_API_CLIENT_ID: string;
    PUBLIC_CUSTOMER_ACCOUNT_API_URL: string;
  }
}

declare module '@shopify/remix-oxygen' {
  /**
   * Declare local additions to the Remix loader context.
   */
  export interface AppLoadContext {
    waitUntil: ExecutionContext['waitUntil'];
    session: AppSession;
    storefront: Storefront;
    customerAccount: CustomerClient;
    cart: HydrogenCart;
    env: Env;
    i18n: I18n;
    hygraph: ReturnType<typeof hygraphClient>;
  }
}

// Needed to make this file a module.
export {};
