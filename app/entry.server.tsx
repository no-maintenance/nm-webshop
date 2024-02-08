import type {AppLoadContext, EntryContext} from '@shopify/remix-oxygen';
import {RemixServer} from '@remix-run/react';
import isbot from 'isbot';
import {renderToReadableStream} from 'react-dom/server';
import {createContentSecurityPolicy} from '@shopify/hydrogen';
import {createInstance} from 'i18next';
import {I18nextProvider, initReactI18next} from 'react-i18next';

import enCommon from '../public/locales/en/common.json';
import deCommon from '../public/locales/de/common.json';
import frCommon from '../public/locales/fr/common.json';
import itCommon from '../public/locales/it/common.json';
import jaCommon from '../public/locales/ja/common.json';
import krCommon from '../public/locales/ko/common.json';

import i18next from './i18next.server';
import i18n from './i18n'; // your i18n configuration file

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
  loadContext: AppLoadContext,
) {
  const instance = createInstance();
  const url = new URL(request.url);
  const lng = loadContext.storefront.i18n.language.toLowerCase();
  const ns = i18next.getRouteNamespaces(remixContext);
  await instance
    .use(initReactI18next) // Tell our instance to use react-i18next
    .init({
      ...i18n, // spread the configuration
      lng, // The locale we detected above
      ns, // The namespaces the routes about to render wants to use
      resources: {
        en: {common: enCommon},
        de: {common: deCommon},
        fr: {common: frCommon},
        it: {common: itCommon},
        ja: {common: jaCommon},
        ko: {common: krCommon},
      },
    });

  const {nonce, header, NonceProvider} = createContentSecurityPolicy({
    defaultSrc: [
      "'self'",
      'https://cloudinary.nomaintenance.us',
      'https://cdn.shopify.com',
    ],
  });
  const body = await renderToReadableStream(
    <I18nextProvider i18n={instance}>
      <NonceProvider>
        <RemixServer context={remixContext} url={request.url} />
      </NonceProvider>
    </I18nextProvider>,
    {
      nonce,
      signal: request.signal,
      onError(error) {
        // eslint-disable-next-line no-console
        console.error(error);
        responseStatusCode = 500;
      },
    },
  );

  if (isbot(request.headers.get('user-agent'))) {
    await body.allReady;
  }

  responseHeaders.set('Content-Type', 'text/html');
  responseHeaders.set('Content-Security-Policy', header);
  return new Response(body, {
    headers: responseHeaders,
    status: responseStatusCode,
  });
}
