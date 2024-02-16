import type { Storefront as HydrogenStorefront } from "@shopify/hydrogen";
import type { CountryCode, CurrencyCode, LanguageCode } from "@shopify/hydrogen/storefront-api-types";

export type NonNullableFields<T> = {
  [P in keyof T]: NonNullable<T[P]>;
};
export type Locale = {
  language: LanguageCode;
  country: CountryCode;
  label: string;
  currency: CurrencyCode;
};
export type Language = {
  label: string;
  code: LanguageCode;
};

export type Localizations = { default: Locale } & Partial<
  Record<CountryCode, Locale>
>;

export type I18nLocale = Locale & {
  pathPrefix: string;
};

export type Storefront = HydrogenStorefront<I18nLocale>;

export function notEmpty<TValue>(
  value: TValue | null | undefined,
): value is TValue {
  return value !== null && value !== undefined;
}
