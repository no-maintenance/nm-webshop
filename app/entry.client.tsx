import {RemixBrowser} from '@remix-run/react';
import {startTransition, StrictMode} from 'react';
import {hydrateRoot} from 'react-dom/client';
import i18next from 'i18next';
import {I18nextProvider, initReactI18next} from 'react-i18next';
import Backend from 'i18next-http-backend';
import {getInitialNamespaces} from 'remix-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import i18n from '~/i18n';

import deCommon from '../public/locales/de/common.json';
import enCommon from '../public/locales/en/common.json';
import frCommon from '../public/locales/fr/common.json';
import koCommon from '../public/locales/ko/common.json';
import jaCommon from '../public/locales/ja/common.json';
import itCommon from '../public/locales/it/common.json';
async function hydrate() {
  await i18next
    .use(initReactI18next) // Tell i18next to use the react-i18next plugin
    .use(LanguageDetector) // Setup a client-side language detector
    .use(Backend) // Setup your backend
    .init({
      ...i18n, // spread the configuration
      ns: getInitialNamespaces(),
      resources: {
        en: {common: enCommon},
        de: {common: deCommon},
        fr: {common: frCommon},
        it: {common: itCommon},
        ko: {common: koCommon},
        ja: {common: jaCommon},
      },
      detection: {
        // Here only enable htmlTag detection, we'll detect the language only
        // server-side with remix-i18next, by using the `` attribute
        // we can communicate to the client the language detected server-side
        order: ['htmlTag'],
        // Because we only use htmlTag, there's no reason to cache the language
        // on the browser, so we disable it
        caches: [],
      },
    });

  startTransition(() => {
    hydrateRoot(
      document,
      <I18nextProvider i18n={i18next}>
        <StrictMode>
          <RemixBrowser />
        </StrictMode>
      </I18nextProvider>,
    );
  });
}

if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate);
} else {
  // Safari doesn't support requestIdleCallback
  // https://caniuse.com/requestidlecallback
  window.setTimeout(hydrate, 1);
}
