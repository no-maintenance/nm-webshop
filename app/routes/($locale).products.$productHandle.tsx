import {useState, useRef, Suspense, forwardRef, Fragment} from 'react';
import {Disclosure, Listbox} from '@headlessui/react';
import {defer, redirect, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {useLoaderData, Await, useNavigate} from '@remix-run/react';
import type {ShopifyAnalyticsProduct} from '@shopify/hydrogen';
import {
  AnalyticsPageType,
  Money,
  ShopPayButton,
  getSelectedProductOptions,
} from '@shopify/hydrogen';
import invariant from 'tiny-invariant';
import clsx from 'clsx';
import type {Maybe, Metafield} from '@shopify/hydrogen/storefront-api-types';
import {AnimatePresence, m} from 'framer-motion';
import {convertSchemaToHtml} from '@thebeyondgroup/shopify-rich-text-renderer';

import type {
  VariantOption,
  VariantOptionValue,
} from '~/components/VariantSelector';
import type {
  ProductQuery,
  ProductVariantFragmentFragment,
} from 'storefrontapi.generated';
import {
  Heading,
  IconCaret,
  ProductGallery,
  ProductSwimlane,
  Section,
  Skeleton,
  Text,
  Link,
  AddToCartButton,
  Button,
  Accordion,
  VariantSelector,
} from '~/components';
import {seoPayload} from '~/lib/seo.server';
import type {Storefront} from '~/lib/type';
import {routeHeaders} from '~/data/cache';
import {MEDIA_FRAGMENT, PRODUCT_CARD_FRAGMENT} from '~/data/fragments';

export const headers = routeHeaders;
const USE_LISTBOX_VARIANT_SELECTOR = true;

export async function loader({params, request, context}: LoaderFunctionArgs) {
  const {productHandle} = params;
  invariant(productHandle, 'Missing productHandle param, check route filename');

  const selectedOptions = getSelectedProductOptions(request);

  const {shop, product} = await context.storefront.query(PRODUCT_QUERY, {
    variables: {
      handle: productHandle,
      selectedOptions,
      country: context.storefront.i18n.country,
      language: context.storefront.i18n.language,
    },
  });

  if (!product?.id) {
    throw new Response('product', {status: 404});
  }

  if (!product.selectedVariant) {
    throw redirectToFirstVariant({product, request});
  }

  // In order to show which variants are available in the UI, we need to query
  // all of them. But there might be a *lot*, so instead separate the variants
  // into it's own separate query that is deferred. So there's a brief moment
  // where variant options might show as available when they're not, but after
  // this deferred query resolves, the UI will update.
  const variants = context.storefront.query(VARIANTS_QUERY, {
    variables: {
      handle: productHandle,
      country: context.storefront.i18n.country,
      language: context.storefront.i18n.language,
    },
  });

  const recommended = getRecommendedProducts(context.storefront, product.id);

  // TODO: firstVariant is never used because we will always have a selectedVariant due to redirect
  // Investigate if we can avoid the redirect for product pages with no search params for first variant
  const firstVariant = product.variants.nodes[0];
  const selectedVariant = product.selectedVariant ?? firstVariant;

  const productAnalytics: ShopifyAnalyticsProduct = {
    productGid: product.id,
    variantGid: selectedVariant.id,
    name: product.title,
    variantName: selectedVariant.title,
    brand: product.vendor,
    price: selectedVariant.price.amount,
  };

  const seo = seoPayload.product({
    product,
    selectedVariant,
    url: request.url,
  });

  return defer({
    variants,
    product,
    shop,
    storeDomain: shop.primaryDomain.url,
    recommended,
    analytics: {
      pageType: AnalyticsPageType.product,
      resourceId: product.id,
      products: [productAnalytics],
      totalValue: parseFloat(selectedVariant.price.amount),
    },
    seo,
  });
}

function redirectToFirstVariant({
  product,
  request,
}: {
  product: ProductQuery['product'];
  request: Request;
}) {
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);

  const firstVariant = product!.variants.nodes[0];
  for (const option of firstVariant.selectedOptions) {
    searchParams.set(option.name, option.value);
  }

  url.search = searchParams.toString();

  return redirect(url.href.replace(url.origin, ''), 302);
}

export default function Product() {
  const {product, shop, recommended, variants} = useLoaderData<typeof loader>();
  const {media, title, vendor, descriptionHtml, metafields} = product;
  const {shippingPolicy, refundPolicy} = shop;
  const selectedVariant = product.selectedVariant!;
  const isOnSale =
    selectedVariant?.price?.amount &&
    selectedVariant?.compareAtPrice?.amount &&
    selectedVariant?.price?.amount < selectedVariant?.compareAtPrice?.amount;
  return (
    <>
      <Section className="px-0 pt-0 md:px-6 lg:px-8 xl:px-10">
        <div className="grid items-start md:grid-cols-2 grid-cols-1">
          <div className={'col-span-1'}>
            <ProductGallery media={media.nodes} />
          </div>
          <div className="px-8 md:px-0 sticky col-span-1 md:-mb-nav md:top-nav md:-translate-y-nav md:h-screen md:pt-nav hiddenScroll md:overflow-y-scroll">
            <section className="flex flex-col w-full gap-8 md:p-8 md:pt-20 md:mx-auto md:max-w-lg ">
              <div className={'md:max-w-sm md:px-0 grid gap-8'}>
                <div className="grid gap-1">
                  {vendor && (
                    <Text size={'fine'} className={'opacity-50 uppercase'}>
                      {vendor}
                    </Text>
                  )}
                  <Heading
                    size={'copy'}
                    as="h1"
                    className="whitespace-normal uppercase font-normal"
                  >
                    {title}
                  </Heading>
                  <Text>
                    <Money
                      withoutTrailingZeros
                      data={selectedVariant?.price!}
                      as="span"
                      data-test="price"
                    />
                    {isOnSale && (
                      <Money
                        withoutTrailingZeros
                        data={selectedVariant?.compareAtPrice!}
                        as="span"
                        className="opacity-50 strike"
                      />
                    )}
                  </Text>
                </div>
                <Suspense fallback={<ProductForm variants={[]} />}>
                  <Await
                    errorElement="There was a problem loading related products"
                    resolve={variants}
                  >
                    {(resp) => (
                      <ProductForm
                        variants={resp.product?.variants.nodes || []}
                      />
                    )}
                  </Await>
                </Suspense>
              </div>
              <Suspense fallback={<ProductDetailsSkeleton />}>
                <Await
                  errorElement="There was a problem loading related products"
                  resolve={metafields}
                >
                  <ProductDetails
                    metafields={metafields}
                    descriptionHtml={descriptionHtml}
                  />
                </Await>
              </Suspense>
            </section>
          </div>
        </div>
      </Section>
      <Suspense fallback={<Skeleton className="h-32" />}>
        <Await
          errorElement="There was a problem loading related products"
          resolve={recommended}
        >
          {(products) => (
            <ProductSwimlane title="Related Products" products={products} />
          )}
        </Await>
      </Suspense>
    </>
  );
}

export function ProductForm({
  variants,
  showVariantTitle = false,
}: {
  showVariantTitle?: boolean;
  variants: ProductVariantFragmentFragment[];
}) {
  const {product, analytics, storeDomain} = useLoaderData<typeof loader>();

  const closeRef = useRef<HTMLButtonElement>(null);

  /**
   * Likewise, we're defaulting to the first variant for purposes
   * of add to cart if there is none returned from the loader.
   * A developer can opt out of this, too.
   */
  const selectedVariant = product.selectedVariant!;
  const isOutOfStock = !selectedVariant?.availableForSale;

  const productAnalytics: ShopifyAnalyticsProduct = {
    ...analytics.products[0],
    quantity: 1,
  };

  return (
    <div className="grid gap-10">
      <div className="grid gap-4">
        <VariantSelector
          handle={product.handle}
          options={product.options}
          variants={variants}
        >
          {({option}) => {
            return (
              <div
                key={option.name}
                className="flex flex-col flex-wrap gap-y-2 last:mb-0"
              >
                {showVariantTitle && (
                  <Heading as="legend" size="lead" className="min-w-[4rem]">
                    {option.name}
                  </Heading>
                )}
                <div className="flex flex-wrap items-baseline gap-4">
                  {USE_LISTBOX_VARIANT_SELECTOR ? (
                    <ProductListbox option={option} />
                  ) : (
                    option.values.map(({value, isAvailable, isActive, to}) => (
                      <Link
                        key={option.name + value}
                        to={to}
                        preventScrollReset
                        prefetch="intent"
                        replace
                        className={clsx(
                          'leading-none py-1 border-b-[1.5px] cursor-pointer transition-all duration-200',
                          isActive ? 'border-primary/50' : 'border-primary/0',
                          isAvailable ? 'opacity-100' : 'opacity-50',
                        )}
                      >
                        {value}
                      </Link>
                    ))
                  )}
                </div>
              </div>
            );
          }}
        </VariantSelector>
        {selectedVariant && (
          <div className="grid items-stretch gap-4">
            {isOutOfStock ? (
              <Button isThin width={'full'} variant="secondary" disabled>
                <Text size={'fine'}>Sold out</Text>
              </Button>
            ) : (
              <AddToCartButton
                isThin
                width={'full'}
                lines={[
                  {
                    merchandiseId: selectedVariant.id!,
                    quantity: 1,
                  },
                ]}
                variant="primary"
                data-test="add-to-cart"
                analytics={{
                  products: [productAnalytics],
                  totalValue: parseFloat(productAnalytics.price),
                }}
              >
                <Text
                  as="span"
                  size={'fine'}
                  className="flex items-center justify-center gap-2"
                >
                  <span>Add to Cart</span>
                </Text>
              </AddToCartButton>
            )}
            <div className={''}>
              <AnimatePresence initial={false} mode={'wait'}>
                {isOutOfStock ? (
                  <m.div
                    key={'back-in-stock-btn'}
                    initial={{opacity: 0, height: 45}}
                    animate={{opacity: 1, height: 80}}
                    transition={{ease: 'linear', duration: 0.2}}
                    exit={{opacity: 0, height: 45}}
                  >
                    <BackInStockForm selectedVariantId={selectedVariant.id} />
                  </m.div>
                ) : (
                  <m.div
                    key={'shop-pay-btn'}
                    initial={{opacity: 0, height: 80}}
                    animate={{opacity: 1, height: 45}}
                    transition={{ease: 'linear', duration: 0.2}}
                    exit={{opacity: 0, height: 80}}
                  >
                    <ShopPayButton
                      width="100%"
                      variantIds={[selectedVariant?.id!]}
                      storeDomain={storeDomain}
                    />
                  </m.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function BackInStockForm({selectedVariantId}: {selectedVariantId: string}) {
  return <div>BACK IN STOCK</div>;
}

function ProductListbox({option}: {option: VariantOption}) {
  const {product} = useLoaderData<typeof loader>();
  const selectedVariant = product.selectedVariant!;

  const [selectedOption, setSelectedOption] = useState<
    Pick<VariantOptionValue, 'value' | 'to' | 'quantityAvailable'>
  >({
    value: option.value ?? '',
    to: '',
    quantityAvailable: selectedVariant.quantityAvailable,
  });
  const btnRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();
  const handleSelection = (
    value: Pick<VariantOptionValue, 'value' | 'to' | 'quantityAvailable'>,
  ) => {
    setSelectedOption(value);
    navigate(value.to);
    if (!btnRef?.current) return;
    btnRef.current.click();
  };
  return (
    <div className="relative w-full">
      <Listbox value={selectedOption} onChange={handleSelection}>
        {({open}) => (
          <>
            <Listbox.Button as={Fragment}>
              <Button
                isThin
                className={'text-fine flex items-center justify-between'}
                width={'full'}
                variant={'secondary'}
              >
                {selectedOption.value &&
                  GetVariantLabel(
                    selectedOption.value,
                    selectedVariant.quantityAvailable,
                  )}
              </Button>
            </Listbox.Button>
            <Listbox.Options
              className={clsx(
                'border-primary/10 bg-contrast absolute bottom-12 z-30 grid w-full overflow-y-scroll  border py-2 transition-[max-height] duration-150 sm:bottom-auto border-t-0 md:border-b',
                open ? 'max-h-60' : 'max-h-0',
              )}
            >
              {option.values.map(
                ({value, to, isActive, isAvailable, quantityAvailable}) => (
                  <Listbox.Option
                    key={`option-${option.name}-${value}`}
                    value={{value, to, quantityAvailable}}
                    as={Fragment}
                  >
                    {({active}) => (
                      <li
                        className={clsx(
                          'text-primary w-full py-2 text-copy transition flex justify-between items-center text-left cursor-pointer px-4',
                          active && 'bg-primary/10',
                        )}
                      >
                        {GetVariantLabel(value, quantityAvailable)}
                      </li>
                    )}
                  </Listbox.Option>
                ),
              )}
            </Listbox.Options>
          </>
        )}
      </Listbox>
    </div>
  );
}

function GetVariantLabel(value: string, quantityAvailable?: Maybe<number>) {
  const urgencyLabel = () => {
    if (!value) return <></>;
    if (quantityAvailable === 0) {
      return <span>Sold Out</span>;
    }
    if (quantityAvailable && quantityAvailable < 5 && quantityAvailable > 0) {
      return <span>Only {quantityAvailable} remaining</span>;
    }
    return <></>;
  };
  return (
    <>
      <span>{value}</span>
      {urgencyLabel()}
    </>
  );
}

function ProductDetailsSkeleton() {
  return (
    <div className={'flex justify-between w-full gap-4 pt-4 uppercase'}>
      <Heading className={`uppercase`} as={'h4'} size={'copy'}>
        Description
      </Heading>
      <Heading className={`uppercase`} as={'h4'} size={'copy'}>
        Details
      </Heading>
      <Heading className={`uppercase`} as={'h4'} size={'copy'}>
        Measurments
      </Heading>
    </div>
  );
}

function ProductDetails({
  metafields,
  descriptionHtml,
}: {
  metafields: Metafield[];
  descriptionHtml: string;
}) {
  const [openTab, setOpenTab] = useState<number>(0);
  const tabs = getMetafieldDefsV2(metafields, descriptionHtml);
  return (
    <div>
      <div
        className={
          'flex justify-between w-full gap-4 uppercase md:max-w-sm md:px-0'
        }
      >
        {tabs.map((tab, idx: number) => (
          <button key={tab.id} onClick={() => setOpenTab(idx)}>
            <Heading
              className={`uppercase ${
                openTab === idx ? 'font-semibold text-copy ' : ''
              }`}
              as={'h4'}
              size={'copy'}
            >
              {tab.name}
            </Heading>
          </button>
        ))}
      </div>
      <div className={'min-h-[200px] max-w-xl  md:max-w-md md:px-0 pt-6'}>
        {tabs.map(
          (tab, idx: number) =>
            openTab === idx && <m.div key={tab.id}>{tab.component}</m.div>,
        )}
      </div>
    </div>
  );
}

function getMfDescriptionV2(mf: Metafield[]) {
  const res = mf.find((f) => f.key === 'description');
  return res?.value;
}

function getMetafieldDefsV2(mf: Metafield[], descriptionHTML: string) {
  const res = [
    {
      name: 'Description',
      id: 'description',
      component: (
        <div
          className={'rte text-copy text-primary/50 size-chart'}
          dangerouslySetInnerHTML={{
            __html: convertSchemaToHtml(getMfDescriptionV2(mf)),
          }}
        ></div>
      ),
    },
  ];

  for (let i = 0; i < mf.length; i++) {
    const pf = {name: '', component: <></>, id: ''};
    const f = mf[i];

    if (!f) continue;
    if (f.key === 'details') {
      pf.name = 'Details';
      pf.id = 'details';
      pf.component = (
        <div className={'h-full flex items-center'}>
          <div
            className={'rte text-copy text-primary/50'}
            dangerouslySetInnerHTML={{
              __html: convertSchemaToHtml(f.value),
            }}
          ></div>
        </div>
      );
      res.push(pf);
    }
    if (f.key === 'show_policies_product_tab' && f.value == 'true') {
      pf.name = 'Policies';
      pf.id = 'policies';
      pf.component = <Policies />;
      res.push(pf);
    }
  }
  res.push({
    name: 'Measurements',
    id: 'measurements',
    component: (
      <div
        className={'rte text-copy text-primary/50 size-chart'}
        dangerouslySetInnerHTML={{__html: descriptionHTML}}
      ></div>
    ),
  });
  return res;
}

function Policies() {
  const {shop} = useLoaderData<typeof loader>();

  if (!shop) return <></>;
  const {shippingPolicy, refundPolicy} = shop;
  const p = [
    {id: 0, name: 'Refund Policy', policy: refundPolicy?.body},
    {id: 1, name: 'Shipping Policy', policy: shippingPolicy?.body},
  ];
  const Title = ({name, isOpen}: {name: string; isOpen: boolean}) => {
    return (
      <Heading as={'h3'} size={'copy'}>
        {name}
      </Heading>
    );
  };
  const Description = ({policy}: {policy: string}) => {
    return (
      <div className={'rte'} dangerouslySetInnerHTML={{__html: policy}}></div>
    );
  };
  return (
    <div className={'mx-auto h-full w-full flex items-center'}>
      <div className={'w-full overflow-auto max-h-full'}>
        {shippingPolicy?.body && (
          <div className={'py-6 border-b border-black'}>
            <Accordion
              isHTML={true}
              question={'Shipping Policy'}
              answer={shippingPolicy.body}
            />
          </div>
        )}
        {refundPolicy?.body && (
          <div className={'py-6'}>
            <Accordion
              isHTML={true}
              question={'Refund Policy'}
              answer={refundPolicy.body}
            />
          </div>
        )}
      </div>
    </div>
  );
}

const PRODUCT_VARIANT_FRAGMENT = `#graphql
  fragment ProductVariantFragment on ProductVariant {
    id
    availableForSale
    quantityAvailable
    selectedOptions {
      name
      value
    }
    image {
      id
      url
      altText
      width
      height
    }
    price {
      amount
      currencyCode
    }
    compareAtPrice {
      amount
      currencyCode
    }
    sku
    title
    unitPrice {
      amount
      currencyCode
    }
    product {
      title
      handle
    }
  }
`;

const PRODUCT_QUERY = `#graphql
  query Product(
    $country: CountryCode
    $language: LanguageCode
    $handle: String!
    $selectedOptions: [SelectedOptionInput!]!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      id
      title
      vendor
      handle
      descriptionHtml
      description
      options {
        name
        values
      }
      selectedVariant: variantBySelectedOptions(selectedOptions: $selectedOptions, ignoreUnknownOptions: true, caseInsensitiveMatch: true) {
        ...ProductVariantFragment
      }
      media(first: 7) {
        nodes {
          ...Media
        }
      }
      metafields(identifiers: [
            {namespace: "product_tab", key: "description"},
            {namespace: "custom", key: "size_guide_description"},
            {namespace: "product_tab", key: "details"},
            {namespace: "product_tab", key: "measurements"},
            {namespace: "product_tab", key: "size"},
            {namespace: "custom", key: "show_policies_product_tab"}
      ]) {
          value
          key
      }
      variants(first: 1) {
        nodes {
          ...ProductVariantFragment
        }
      }
      seo {
        description
        title
      }
    }
    shop {
      name
      primaryDomain {
        url
      }
      shippingPolicy {
        body
        handle
      }
      refundPolicy {
        body
        handle
      }
    }
  }
  ${MEDIA_FRAGMENT}
  ${PRODUCT_VARIANT_FRAGMENT}
` as const;

const VARIANTS_QUERY = `#graphql
  query variants(
    $country: CountryCode
    $language: LanguageCode
    $handle: String!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      variants(first: 250) {
        nodes {
          ...ProductVariantFragment
        }
      }
    }
  }
  ${PRODUCT_VARIANT_FRAGMENT}
` as const;

const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  query productRecommendations(
    $productId: ID!
    $count: Int
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    recommended: productRecommendations(productId: $productId) {
      ...ProductCard
    }
    additional: products(first: $count, sortKey: BEST_SELLING) {
      nodes {
        ...ProductCard
      }
    }
  }
  ${PRODUCT_CARD_FRAGMENT}
` as const;

async function getRecommendedProducts(
  storefront: Storefront,
  productId: string,
) {
  const products = await storefront.query(RECOMMENDED_PRODUCTS_QUERY, {
    variables: {productId, count: 12},
  });

  invariant(products, 'No data returned from Shopify API');

  const mergedProducts = (products.recommended ?? [])
    .concat(products.additional.nodes)
    .filter(
      (value, index, array) =>
        array.findIndex((value2) => value2.id === value.id) === index,
    );

  const originalProduct = mergedProducts.findIndex(
    (item) => item.id === productId,
  );

  mergedProducts.splice(originalProduct, 1);

  return {nodes: mergedProducts};
}
