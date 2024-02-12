import {useFetcher, useLocation} from '@remix-run/react';
import {useCallback, useRef} from 'react';
import clsx from 'clsx';
import type {
  CartBuyerIdentityInput,
  CountryCode,
  LanguageCode,
} from '@shopify/hydrogen/storefront-api-types';
import {CartForm} from '@shopify/hydrogen';

import {Button, Heading, IconCheck} from '~/components';
import type {Locale} from '~/lib/type';
import {DEFAULT_LOCALE} from '~/lib/utils';
import {useRootLoaderData} from '~/root';
import {useClickOutside} from '~/hooks/useClickOutside';
import type {SupportedLanguages} from '~/lib/const';
import {langMap} from '~/lib/const';

export function LanguageSelector({heading}: {heading?: string}) {
  const fetcher = useFetcher();
  const closeRef = useRef<HTMLDetailsElement>(null);
  const rootData = useRootLoaderData();
  const selectedLocale = rootData?.selectedLocale ?? DEFAULT_LOCALE;
  const {pathname, search} = useLocation();
  const pathWithoutLocale = `${pathname.replace(
    selectedLocale.pathPrefix,
    '',
  )}${search}`;

  const defaultLocalePrefix = DEFAULT_LOCALE
    ? `${DEFAULT_LOCALE?.language}-${DEFAULT_LOCALE?.country}`
    : '';

  const selectedLang =
    langMap[selectedLocale.language as SupportedLanguages] ?? 'English';

  const menuRef = useRef(null);

  const closeDropdown = useCallback(() => {
    closeRef.current?.removeAttribute('open');
  }, []);
  useClickOutside(menuRef, closeDropdown);

  const popupStyles = clsx([
    heading && 'bottom-[46px] w-[180px] h-[200px]',
    'absolute bg-contrast z-10 right-0 ',
  ]);
  return (
    <section className="w-full md:max-w-xs md:ml-auto ">
      {heading ? (
        <Heading size="copy" className="cursor-default font-normal" as="h3">
          {heading}
        </Heading>
      ) : (
        ''
      )}
      <div className="relative">
        <details
          className=" w-full dark:border-white open:round-b-none "
          ref={closeRef}
        >
          <summary
            className={`flex items-center  w-full cursor-pointer text-clip ${
              !heading && 'justify-end'
            }`}
          >
            {selectedLang}
          </summary>
          <div ref={menuRef} className={popupStyles}>
            <div className="w-full hiddenScroll border border-black max-h-[200px] border-solid overflow-auto  dark:border-white text-copy">
              {Object.keys(langMap).map((c) => {
                const code = c as SupportedLanguages;
                const label = langMap[code];
                const isSelected = selectedLocale.language === code;
                const url = getLangUrlPath({
                  language: code,
                  selectedCountry: selectedLocale.country,
                  defaultLocalePrefix,
                  pathWithoutLocale,
                });
                console.log('url', url)
                return (
                  label && (
                    <Language
                      key={label}
                      label={label}
                      url={url}
                      countryLocale={selectedLocale}
                      closeDropdown={closeDropdown}
                      isSelected={isSelected}
                    />
                  )
                );
              })}
            </div>
          </div>
        </details>
      </div>
    </section>
  );
}

function Language({
  closeDropdown,
  countryLocale,
  label,
  url,
  isSelected,
}: {
  label: string;
  url: string;
  closeDropdown: () => void;
  countryLocale: Locale;
  isSelected: boolean;
}) {
  return (
    <ChangeLocaleForm
      key={countryLocale.country}
      redirectTo={url}
      buyerIdentity={{
        countryCode: countryLocale.country,
      }}
    >
      <Button
        className={clsx([
          'text-primary bg-contrast w-full p-2 transition flex justify-start',
          'items-center text-left cursor-pointer py-2 px-4',
        ])}
        type="submit"
        variant="primary"
        onClick={closeDropdown}
      >
        {label}
        {isSelected ? (
          <span className="ml-2">
            <IconCheck />
          </span>
        ) : null}
      </Button>
    </ChangeLocaleForm>
  );
}

export function ChangeLocaleForm({
  children,
  buyerIdentity,
  redirectTo,
}: {
  children: React.ReactNode;
  buyerIdentity: CartBuyerIdentityInput;
  redirectTo: string;
}) {
  return (
    <CartForm
      route="/cart"
      action={CartForm.ACTIONS.BuyerIdentityUpdate}
      inputs={{
        buyerIdentity,
      }}
    >
      <>
        <input type="hidden" name="redirectTo" value={redirectTo} />
        {children}
      </>
    </CartForm>
  );
}

export function getLangUrlPath({
  selectedCountry,
  defaultLocalePrefix,
  pathWithoutLocale,
  language,
}: {
  selectedCountry: CountryCode;
  language: LanguageCode;
  pathWithoutLocale: string;
  defaultLocalePrefix: string;
}) {
  let countryPrefixPath = '';
  const countryLocalePrefix = `${language}-${selectedCountry}`;
  if (countryLocalePrefix !== defaultLocalePrefix) {
    countryPrefixPath = `/${countryLocalePrefix.toLowerCase()}`;
  }
  return `${countryPrefixPath}${pathWithoutLocale}`;
}
