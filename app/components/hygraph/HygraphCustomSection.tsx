import type {Dispatch} from 'react';
import {useMemo, useRef, useState, useEffect} from 'react';
import {AnimatePresence, m} from 'framer-motion';
import type {
  Maybe,
  ProductVariant,
  ProductVariantConnection,
} from '@shopify/hydrogen/storefront-api-types';
import {Link} from '@remix-run/react';
import type {ShopifyAnalyticsProduct} from '@shopify/hydrogen';
import {flattenConnection, Money} from '@shopify/hydrogen';
import {Listbox} from '@headlessui/react';
import clsx from 'clsx';
import isEqual from 'lodash.isequal';

import {getFirstAvailableVariant} from '~/lib/utils';
import {ClientOnly} from '~/lib/client-only';
import useSwipe from '~/hooks/useSwipeHook';
import {HygraphForm} from '~/components/hygraph/sections/HygraphForm';
import {AddToCartButton, Button, Heading, Text} from '~/components';
import {
  getCloudinarySrc,
} from '~/components/hygraph/partials/HygraphExternalMedia';
import {
  extractCloudinaryAssetInfo,
  HygraphCloudinaryMedia,
} from '~/components/hygraph/HygraphCloudinaryMedia';
import {Countdown} from '~/components/Countdown';
import { CloudinaryImage } from "~/components/hygraph/types";

interface HygraphImage {
  url: string;
  tags: Array<string>;
  type: 'upload' | 'fetch' | 'private';
  bytes: number;
  width: number;
  format: 'png' | 'jpg' | 'svg';
  height: number;
  derived: Array<any>;
  version: number;
  duration: any;
  metadata: Array<any>;
  public_id: string;
  created_at: string;
  created_by: Array<any>;
  secure_url: string;
  access_mode: 'public' | 'authenticated' | 'private';
  uploaded_by: Array<any>;
  resource_type: 'image' | 'video' | 'raw';
  access_control: Array<any>;
}

interface ProductData {
  pid: string;
  productGallery: Array<HygraphImage>;
  swatch: HygraphImage;
  id?: string;
  handle: string;
  title: string;
  variants: ProductVariantConnection;
  options: Array<{
    name: string;
    values: Array<any>;
    id: string;
  }>;
}

export const HygraphCustomSection = ({
  body,
  gallery,
  products,
  launchDate,
  comingSoonHeading,
  availableNowHeading,
  mirror,
  editorial,
}: {
  gallery: any;
  body: any;
  launchDate: any;
  products: ProductData[];
  comingSoonHeading?: any;
  availableNowHeading?: any;
  mirror: boolean;
  editorial: string;
}) => {
  const isLiveAtInit = +new Date(launchDate) - +new Date() <= 0;
  const [isLive, setIsLive] = useState<boolean>(isLiveAtInit);
  const [oldVal, setOldVal] = useState<boolean>(isLiveAtInit);
  const notInitialRender = useRef(false);

  useEffect(() => {
    if (isLive && notInitialRender.current && !oldVal) {
      setOldVal(isLive);
    }
    notInitialRender.current = true;
  }, [isLive]);
  return (
    <AnimatePresence mode={'wait'} initial={false}>
      <m.div
        initial={{filter: 'blur(45px)', opacity: 0.3}}
        animate={{filter: 'blur(0px)', opacity: 1}}
        exit={{filter: 'blur(45px)', opacity: 0.3}}
        transition={{duration: 1}}
        key={`custom-countdown-state--${isLive}`}
      >
        {!isLive ? (
          <ComingSoon
            isMirrored={mirror}
            gallery={gallery}
            body={body}
            setIsLive={setIsLive}
            heading={comingSoonHeading}
            launchDate={launchDate}
          />
        ) : products[0] && products[0]?.variants ? (
          <FeaturedProduct
            editorial={editorial}
            body={body}
            productData={products}
            heading={availableNowHeading}
            isMirrored={mirror}
          />
        ) : (
          <PostDeadlineSection
            body={body}
            isMirrored={mirror}
            gallery={gallery}
            heading={availableNowHeading}
          />
        )}
      </m.div>
    </AnimatePresence>
  );
};

const FeaturedProduct = ({
  body,
  productData,
  heading,
  isMirrored,
  editorial,
}: {
  isMirrored: boolean;
  body: any;
  productData: ProductData[];
  heading?: any;
  editorial: string;
}) => {
  const [selectedProductIdx, setSelectedProductIdx] = useState<number>(0);
  const selectedProduct = useMemo(() => {
    return productData[selectedProductIdx];
  }, [selectedProductIdx]);
  const flattenedVariants = flattenConnection(selectedProduct.variants);
  const swatches = productData.map((product) => product.swatch);
  const firstVariant = getFirstAvailableVariant(flattenedVariants);
  const [selectedVariant, setSelectedVariant] =
    useState<ProductVariant>(firstVariant);
  useEffect(() => {
    const matchedVariant = flattenedVariants.find((variant) =>
      isEqual(variant.selectedOptions[0], selectedVariant.selectedOptions[0]),
    );
    if (matchedVariant) {
      setSelectedVariant(matchedVariant);
    } else {
      setSelectedVariant(getFirstAvailableVariant(flattenedVariants));
    }
  }, [selectedProduct]);

  return (
    <div
      className={
        'grid grid-cols-2 sm:gap-4 md:gap-8 lg:gap-12 coming-soon max-w-[1400px] mx-auto'
      }
      id={'drop'}
    >
      <div className={`md:col-span-1 col-span-2 ${isMirrored && 'md:order-2'}`}>
        <ImageSlider slides={selectedProduct.productGallery} />
      </div>
      <div
        className={'md:col-span-1 col-span-2 flex items-center md:pt-0 pt-4'}
      >
        <div className={'max-w-xl mx-auto'}>
          <div className={'flex-1 flex items-center'}>
            <div>
              {heading && (
                <Heading size={'mid'} as={'h2'}>
                  <div dangerouslySetInnerHTML={{__html: heading.html}}></div>
                </Heading>
              )}
              <div
                className={
                  'lg:pb-16 lg:pt-8 pt-4 pb-8 text-primary/70 rte md:text-justify'
                }
                dangerouslySetInnerHTML={{__html: body.html}}
              ></div>
            </div>
          </div>
          {flattenedVariants && (
            <div className={'w-full'}>
              <ProductTitle
                title={selectedProduct.title}
                selectedVariant={selectedVariant}
              />
              <Swatches
                swatches={swatches}
                selectedProductIdx={selectedProductIdx}
                setSelectedProductIdx={setSelectedProductIdx}
              />
              <div className={'grid gap-2 md:max-w-sm'}>
                <ProductOptions
                  setSelectedOption={setSelectedVariant}
                  selectedOption={selectedVariant}
                  variants={flattenedVariants}
                />
                <ProductForm
                  product={selectedProduct}
                  variantState={[selectedVariant, setSelectedVariant]}
                />
                <div className={'md:pt-16 pt-8'}>
                  <Heading as={'h2'} size={'heading'} className={'text-center'}>
                    {editorial && (
                      <Link to={editorial} className={'animated-underline'}>
                        View Editorial
                      </Link>
                    )}
                  </Heading>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ProductTitle = ({
  title,
  selectedVariant,
}: {
  title: string;
  selectedVariant: ProductVariant;
}) => {
  const isOnSale =
    selectedVariant?.price?.amount &&
    selectedVariant?.compareAtPrice?.amount &&
    selectedVariant?.price?.amount < selectedVariant?.compareAtPrice?.amount;
  return (
    <div className="grid gap-2 w-full md:max-w-sm">
      <div>
        <Heading
          as="h2"
          size="copy"
          className="whitespace-normal uppercase py-0.5"
        >
          {title}
        </Heading>
        <Heading as="h2" size="copy">
          <Money
            withoutTrailingZeros
            data={selectedVariant?.price!}
            as="span"
          />
          {isOnSale && (
            <s>
              <Money
                withoutTrailingZeros
                data={selectedVariant?.compareAtPrice!}
                as="span"
                className="opacity-50 ml-3"
              />
            </s>
          )}
        </Heading>
      </div>
    </div>
  );
};

const Swatches = ({
  selectedProductIdx,
  setSelectedProductIdx,
  swatches,
}: {
  selectedProductIdx: number;
  setSelectedProductIdx: Dispatch<number>;
  swatches: HygraphImage[];
}) => {
  return (
    <div className="flex gap-8 w-full md:max-w-md py-12">
      {swatches.map((swatch, idx) => (
        <button
          key={`${swatch.public_id}-${idx}`}
          className={`inline-flex items-center justify-center w-11 h-11 cursor-pointer relative  ${
            idx === selectedProductIdx && 'ring-offset-2 ring-2 ring-black'
          }`}
          onClick={() => setSelectedProductIdx(idx)}
        >
          <img
            src={getCloudinarySrc(
              swatch.public_id,
              'w_50,c_scale,f_auto,q_auto,dpr_auto',
            )}
            alt=""
            className="w-full h-full object-cover absolute inset-0"
          />
        </button>
      ))}
    </div>
  );
};

export function ProductForm({
  product,
  variantState,
}: {
  product: ProductData;
  variantState: [ProductVariant, Dispatch<ProductVariant>];
}) {
  const [selectedVariant, setSelectedVariant] = variantState;
  const isOutOfStock = !selectedVariant?.availableForSale;

  const productAnalytics: ShopifyAnalyticsProduct = {
    productGid: product.id,
    variantGid: selectedVariant.id,
    name: product.title,
    variantName: selectedVariant.title,
    brand: 'no maintenance',
    price: selectedVariant.price.amount,
    quantity: 1,
  };

  return (
    <div className="grid gap-10">
      <div className="grid gap-4">
        {selectedVariant && (
          <div className="grid items-stretch gap-4">
            <div className={'flex items-center gap-2'}>
              <div className={'flex-1 h-full'}>
                {isOutOfStock ? (
                  <Button
                    isThin={true}
                    variant="secondary"
                    className={'cursor-not-allowed h-full w-full disabled'}
                    disabled
                  >
                    <Text className={'text-fine'}>Sold out</Text>
                  </Button>
                ) : (
                  <AddToCartButton
                    className={'h-full'}
                    lines={[
                      {
                        merchandiseId: selectedVariant.id,
                        quantity: 1,
                      },
                    ]}
                    variant={'secondary'}
                    data-test="add-to-cart"
                    analytics={{
                      products: [productAnalytics],
                      totalValue: parseFloat(productAnalytics.price),
                    }}
                  >
                    <Text
                      as="span"
                      className="flex items-center justify-center gap-2 mx-auto text-fine"
                    >
                      <span>Add to Bag</span>
                    </Text>
                  </AddToCartButton>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ProductOptions({
  variants,
  selectedOption,
  setSelectedOption,
}: {
  variants: ProductVariant[];
  selectedOption: ProductVariant;
  setSelectedOption: Dispatch<ProductVariant>;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const GetLabel = (
    title: string,
    quantityAvailable: Maybe<number> | undefined,
  ) => {
    if (quantityAvailable === undefined || quantityAvailable == null)
      return <span>{title}</span>;
    if (quantityAvailable <= 0) {
      return (
        <>
          <span>{title}</span>
          <span>Sold Out</span>
        </>
      );
    } else if (quantityAvailable < 5) {
      return (
        <>
          <span>{title}</span>
          <span>Only {quantityAvailable} remaining</span>
        </>
      );
    }
    return <span>{title}</span>;
  };
  return (
    <>
      <div className="flex flex-col flex-wrap mb-0 gap-y-2 last:mb-0">
        <Heading
          as="legend"
          size="copy"
          className="font-normal min-w-[4rem] sr-only"
        >
          Select Size
        </Heading>
        <div className="flex flex-wrap items-baseline gap-4">
          <div className="relative w-full">
            <Listbox onChange={setSelectedOption}>
              {({open}) => (
                <>
                  <Listbox.Button
                    ref={closeRef}
                    className={clsx(
                      'flex items-center justify-between w-full py-2 px-4 border border-primary/10 h-[37px]',
                    )}
                  >
                    <div
                      className={
                        'w-full flex justify-between uppercase text-fine'
                      }
                    >
                      {GetLabel(
                        selectedOption.title,
                        selectedOption.quantityAvailable,
                      )}
                    </div>
                  </Listbox.Button>
                  <Listbox.Options
                    className={clsx(
                      'border-primary/10 bg-contrast absolute top-full z-30 grid h-48 w-full overflow-y-scroll border py-2 transition-[max-height] duration-150 sm:bottom-auto md:rounded-t-none md:border-t-0 md:border-b',
                      open ? 'max-h-48' : 'max-h-0',
                    )}
                  >
                    {variants.map((v) => {
                      const {title, quantityAvailable, availableForSale} = v;
                      return (
                        <Listbox.Option key={`option-${title}`} value={v}>
                          {({active}) => (
                            <div
                              className={clsx(
                                'text-primary w-full p-2 text-fine transition flex justify-start items-center text-left cursor-pointer px-4',
                                active && 'bg-primary/10',
                              )}
                            >
                              <button
                                onClick={() => {
                                  if (!closeRef?.current) return;
                                  closeRef.current.click();
                                }}
                                className={'w-full h-[19px]'}
                              >
                                <div
                                  className={
                                    'w-full flex justify-between uppercase text-fine'
                                  }
                                >
                                  {GetLabel(title, quantityAvailable)}
                                </div>
                              </button>
                            </div>
                          )}
                        </Listbox.Option>
                      );
                    })}
                  </Listbox.Options>
                </>
              )}
            </Listbox>
          </div>
        </div>
      </div>
    </>
  );
}

const ComingSoon = ({
  gallery,
  body,
  setIsLive,
  heading,
  launchDate,
  isMirrored,
}: {
  isMirrored: boolean;
  gallery: any;
  body: any;
  setIsLive: Dispatch<boolean>;
  heading?: any;
  launchDate: string;
}) => (
  <div
    className={
      'grid grid-cols-2 sm:gap-4 md:gap-8 lg:gap-12 coming-soon max-w-[1400px] mx-auto'
    }
    id={'drop'}
  >
    <div className={`md:col-span-1 col-span-2 ${isMirrored && 'md:order-2'}`}>
      <ImageSlider slides={gallery} />
    </div>
    <div
      className={
        'md:col-span-1 col-span-2 order-1 flex items-center md:pt-0 pt-2'
      }
    >
      <div className={'max-w-xl mx-auto'}>
        <div className={'flex-1 flex items-center'}>
          <div>
            {heading && (
              <Heading size={'mid'} as={'h2'}>
                <div dangerouslySetInnerHTML={{__html: heading.html}}></div>
              </Heading>
            )}
            <div
              className={
                'lg:pb-16 lg:pt-8 pt-4 pb-8 text-primary/70 rte md:text-justify'
              }
              dangerouslySetInnerHTML={{__html: body.html}}
            ></div>
          </div>
        </div>

        <ClientOnly fallback={null}>
          {() => <Countdown launchDate={launchDate} setIsLive={setIsLive} />}
        </ClientOnly>
        <HygraphForm type={'Newsletter'} />
      </div>
    </div>
  </div>
);

function PostDeadlineSection({
  gallery,
  body,
  heading,
  isMirrored,
}: {
  isMirrored: boolean;
  gallery: any;
  body: any;
  heading?: any;
}) {
  return (
    <div
      className={
        'grid grid-cols-2 sm:gap-4 md:gap-8 lg:gap-12 coming-soon max-w-[1400px] mx-auto'
      }
      id={'drop'}
    >
      <div className={`md:col-span-1 col-span-2 ${isMirrored && 'md:order-2'}`}>
        <ImageSlider slides={gallery} />
      </div>
      <div
        className={
          'md:col-span-1 col-span-2 order-1 flex items-center md:pt-0 pt-2'
        }
      >
        <div className={'max-w-xl mx-auto'}>
          <div className={'flex-1 flex items-center'}>
            <div>
              {heading && (
                <Heading size={'mid'} as={'h2'}>
                  <div dangerouslySetInnerHTML={{__html: heading.html}}></div>
                </Heading>
              )}
              <div
                className={'lg:pt-8 pt-4 text-primary/70 rte md:text-justify'}
                dangerouslySetInnerHTML={{__html: body.html}}
              ></div>
            </div>
          </div>
          <HygraphForm type={'Newsletter'} />
        </div>
      </div>
    </div>
  );
}

export const ImageSlider = ({slides}: {slides: CloudinaryImage[]}) => {
  const [current, setCurrent] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    setCurrent(0);
  }, [slides]);
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    if (seconds > 4) {
      setCurrent(current === slides.length - 1 ? 0 : current + 1);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  useEffect(() => {
    setSeconds(0);
  }, [current]);
  const length = slides.length;

  const {onTouchStart, onTouchMove, onTouchEnd} = useSwipe({
    onSwipeLeft: () => prevSlide(),
    onSwipeRight: () => nextSlide(),
  });
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  return (
    <section
      className="slider relative w-full h-full aspect-[4/5]"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <button
        onClick={prevSlide}
        className="absolute left-0 z-10 h-full top-0 w-32 cursor-pointer"
      ></button>
      <button
        onClick={nextSlide}
        className="absolute right-0 z-10 h-full top-0 w-32  cursor-pointer"
      ></button>
      {slides.map((slide, index) => {
        const {primaryAssetInfo} = extractCloudinaryAssetInfo(slide, null);
        primaryAssetInfo.aspectRatio = 4 / 5;
        const sizes = `(min-width: 768px) 50vw,(min-width:1400px) 800px, 100vw`;
        return (
          <div className={`${index === current ? 'active' : ''}`} key={index}>
            <AnimatePresence>
              {index === current && (
                <m.div
                  className={''}
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  exit={{opacity: 0}}
                  transition={{duration: 0.4}}
                >
                  <HygraphCloudinaryMedia
                    primary={primaryAssetInfo}
                    sizes={sizes}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    className={`w-full h-full absolute top-0 left-0 object-cover aspect-[4/5]`}
                  />
                </m.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
      <div
        className={'absolute bottom-0 left-0 w-full flex justify-center dots'}
      >
        {slides.map((_, index) => {
          return (
            <button
              className={index === current ? 'dot active' : 'dot'}
              key={index}
              onClick={() => setCurrent(index)}
            >
              <span></span>
            </button>
          );
        })}
      </div>
    </section>
  );
};
