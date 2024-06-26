import clsx from 'clsx';
import {MediaFile, flattenConnection, Money, useMoney} from '@shopify/hydrogen';
import type {ShopifyAnalyticsProduct, Video, Image} from '@shopify/hydrogen';
import type {MoneyV2, Product} from '@shopify/hydrogen/storefront-api-types';
import type {ComponentProps} from 'react';
import type {HydrogenImageProps} from '@shopify/hydrogen-react/Image';
import {m} from 'framer-motion';

import type {
  MediaFragment,
  ProductCardFragment,
} from '~/__generated__/storefrontapi.generated';
import {Text, Link, AddToCartButton, Button, Skeleton} from '~/components';
import {isDiscounted, isNewArrival} from '~/lib/utils';
import {getProductPlaceholder} from '~/lib/placeholders';
import {useTranslation} from '~/i18n';

type ProductCardProps = {
  product: ProductCardFragment | Product;
  label?: string;
  className?: string;
  loading?: HTMLImageElement['loading'];
  onClick?: () => void;
  quickAdd?: boolean;
  idx: number;
};

export function ProductCard({
  product,
  label,
  className,
  loading,
  onClick,
  quickAdd,
  idx,
}: ProductCardProps) {
  let cardLabel;
  const {t} = useTranslation();
  const cardProduct: Product = product?.variants
    ? (product as Product)
    : getProductPlaceholder();
  if (!cardProduct?.variants?.nodes?.length) return null;

  const firstVariant = flattenConnection(cardProduct.variants)[0];

  if (!firstVariant) return null;
  const {price, compareAtPrice} = firstVariant;
  if (label) {
    cardLabel = label;
  } else if (isDiscounted(price as MoneyV2, compareAtPrice as MoneyV2)) {
    cardLabel = 'Sale';
  } else if (isNewArrival(product.publishedAt)) {
    cardLabel = t('cart_actions.new');
  }

  const productAnalytics: ShopifyAnalyticsProduct = {
    productGid: product.id,
    variantGid: firstVariant.id,
    name: product.title,
    variantName: firstVariant.title,
    brand: product.vendor,
    price: firstVariant.price.amount,
    quantity: 1,
  };
  const {media, handle, title, variants} = product;

  return (
    <m.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.1, delay: idx * 0.1}}
      className="flex flex-col gap-2 product-card"
    >
      <Link
        onClick={onClick}
        to={`/products/${handle}`}
        prefetch="intent"
        className={'group'}
      >
        <div className={clsx('grid gap-3', className)}>
          <div className="card-image aspect-[4/5] bg-primary/5 relative group">
            <ProductCardImage
              loading={loading}
              media={media.nodes}
              title={title}
            />
            <Text
              as="label"
              size="fine"
              className="absolute top-0 right-0 m-4 text-right text-notice"
            >
              {cardLabel}
            </Text>
          </div>
          <div className="grid gap-1">
            <Text
              className="w-full overflow-hidden whitespace-nowrap text-ellipsis uppercase"
              as="h3"
            >
              {title}
            </Text>
            <div className={'h-[23px] group'}>
              <div className="flex gap-4 group-hover:hidden block">
                <Text className="flex gap-4">
                  <Money withoutTrailingZeros data={price!} />
                  {isDiscounted(
                    price as MoneyV2,
                    compareAtPrice as MoneyV2,
                  ) && (
                    <CompareAtPrice
                      className={'opacity-50'}
                      data={compareAtPrice as MoneyV2}
                    />
                  )}
                </Text>
              </div>
              <div className={'hidden group-hover:block'}>
                <div className={'flex flex-wrap -ml-2 '}>
                  <ProductCardVariants variants={variants} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      {quickAdd && firstVariant.availableForSale && (
        <AddToCartButton
          lines={[
            {
              quantity: 1,
              merchandiseId: firstVariant.id,
            },
          ]}
          variant="secondary"
          className="mt-2"
          analytics={{
            products: [productAnalytics],
            totalValue: parseFloat(productAnalytics.price),
          }}
        >
          <Text as="span" className="flex items-center justify-center gap-2">
            {t('product.addToCart')}
          </Text>
        </AddToCartButton>
      )}
      {quickAdd && !firstVariant.availableForSale && (
        <Button variant="inverted" className="mt-2" disabled>
          <Text as="span" className="flex items-center justify-center gap-2">
            {t('product.soldOut')}
          </Text>
        </Button>
      )}
    </m.div>
  );
}

function ProductCardVariants({
  variants,
}: {
  variants: ProductCardFragment['variants'];
}) {
  return (
    <>
      {variants.nodes.map((variant, idx) => (
        <h4 key={`variant-${idx}`} className={'inline px-2 text-copy'}>
          {variant.availableForSale ? (
            variant.title
          ) : (
            <span
              className={clsx(['strike', variant.title.length < 4 && 'small'])}
            >
              {variant.title}
            </span>
          )}
        </h4>
      ))}
    </>
  );
}

function ProductCardImage({
  media,
  title,
  loading,
}: {
  media: MediaFragment[];
  title: string;
  loading?: HTMLImageElement['loading'];
}) {
  const [primary, secondary] = media;
  const baseClasses = 'object-cover w-full absolute inset-0';
  if (!primary) return <Skeleton className={baseClasses} />;
  return (
    <>
      <MediaFile
        data={primary}
        className={clsx(
          baseClasses,
          'transition-opacity duration-200 ease-in-out group-hover:opacity-0',
        )}
        mediaOptions={getMediaOptions(
          primary.alt || `Picture of ${title}`,
          primary.previewImage?.url ?? '',
          loading,
        )}
      />
      {secondary && (
        <MediaFile
          className={clsx(
            baseClasses,
            'transition-opacity duration-200 ease-in-out opacity-0 group-hover:opacity-100',
          )}
          mediaOptions={getMediaOptions(
            secondary.alt || `Picture of ${title}`,
            secondary.previewImage?.url ?? '',
            'lazy',
          )}
          data={secondary}
        />
      )}
    </>
  );
}

function getMediaOptions(
  alt: string,
  previewImgUrl?: string,
  loading?: 'eager' | 'lazy',
  sizes = '(min-width: 64em) 25vw, (min-width: 48em) 30vw, 45vw',
): {
  video: Omit<ComponentProps<typeof Video>, 'data'>;
  image: Omit<HydrogenImageProps, 'data'>;
} {
  return {
    video: {
      controls: false,
      muted: true,
      loop: true,
      playsInline: true,
      autoPlay: true,
      previewImageOptions: {src: previewImgUrl ?? ''},
    },
    image: {
      loading,
      crop: 'center',
      sizes,
      alt,
    },
  };
}

function CompareAtPrice({
  data,
  className,
}: {
  data: MoneyV2;
  className?: string;
}) {
  const {currencyNarrowSymbol, withoutTrailingZerosAndCurrency} =
    useMoney(data);

  const styles = clsx('strike', className);

  return (
    <span className={styles}>
      {currencyNarrowSymbol}
      {withoutTrailingZerosAndCurrency}
    </span>
  );
}
