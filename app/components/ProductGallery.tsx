import {Image} from '@shopify/hydrogen';
import type {Dispatch, ReactNode, RefObject} from 'react';
import React, {useEffect, useRef, useState} from 'react';
import {AnimatePresence, m} from 'framer-motion';
import {clearAllBodyScrollLocks, disableBodyScroll} from 'body-scroll-lock';
import {useNavigation} from '@remix-run/react';
import type {
  ExternalVideo,
  Media,
  MediaEdge,
  Model3d,
} from '@shopify/hydrogen/storefront-api-types';
import {X} from 'react-feather';
import type {Video} from 'playwright-core';

import {ATTR_LOADING_EAGER} from '~/lib/const';
import {notEmpty} from '~/lib/type';
import {Carousel, IconClose} from '~/components/';
import type {MediaFragment} from 'storefrontapi.generated';

/**
 * A client component that defines a media gallery for hosting images, 3D models, and videos of products
 */
export function ProductGallery({media}: {media: MediaFragment[]}) {
  const [modalIdx, setModalIdx] = useState<number>(0);
  const modalRef = useRef<HTMLDivElement>(null);

  if (!media.length) {
    return null;
  }
  const images = media
    .map((med, i) => {
      const image =
        med.__typename === 'MediaImage' && med?.image?.url
          ? {...med.image, altText: med.alt || 'Product image'}
          : null;
      return image ? {id: med.id || image?.id, image} : null;
    })
    .filter(notEmpty);
  return (
    <div>
      <ProductModal
        modalRef={modalRef}
        modalIdx={modalIdx}
        setModalIdx={setModalIdx}
      >
        {images.map((data, idx) => (
          <ModalImage
            key={data.id}
            modalRef={modalRef}
            modalIdx={modalIdx}
            idx={idx + 1}
          >
            <Image
              loading={'lazy'}
              data={data.image}
              aspectRatio={'4/5'}
              sizes={'(min-width: 48em) 100vw, 100vw'}
              className="object-cover w-full h-full aspect-square fadeIn"
            />
          </ModalImage>
        ))}
      </ProductModal>
      <div className={'md:hidden'}>
        <Carousel size={images.length}>
          {images.map((data, i) => {
            return (
              <Image
                key={data.id}
                loading={i === 0 ? 'eager' : 'lazy'}
                data={data.image}
                aspectRatio="4/5"
                sizes={'(min-width: 48em) 60vw, 100vw'}
                className="object-cover flex-1"
              />
            );
          })}
        </Carousel>
      </div>
      <div className="hidden w-full md:grid gap-y-12 xl:col-start-2 col-span-6  xl:col-span-5">
        {images.map((data, i) => {
          return (
            <button
              onClick={() => setModalIdx(i + 1)}
              className={
                'md:col-span-2 aspect-[4/5] snap-center card-image bg-white dark:bg-contrast/10 w-mobileGallery md:w-full crosshair-plus'
              }
              key={data.id}
            >
              <Image
                loading={i === 0 ? 'eager' : 'lazy'}
                data={data.image}
                aspectRatio="4/5"
                sizes={'(min-width: 48em) 60vw, 90vw'}
                className="object-cover w-full h-full  fadeIn"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

export const ProductModal = ({
  setModalIdx,
  modalIdx,
  children,
  modalRef,
}: {
  children: ReactNode;
  setModalIdx: Dispatch<number>;
  modalIdx: number;
  modalRef: RefObject<HTMLDivElement>;
}) => {
  const {location} = useNavigation();
  useEffect(() => {
    if (!modalRef.current) return;
    if (modalIdx) {
      disableBodyScroll(modalRef.current);
    } else {
      clearAllBodyScrollLocks();
    }
  }, [modalIdx]);
  useEffect(() => {
    clearAllBodyScrollLocks();
  }, [location]);
  return (
    <AnimatePresence>
      {modalIdx && (
        <m.div
          onClick={() => setModalIdx(0)}
          ref={modalRef}
          className={' fixed left-0 top-0 w-full z-50 h-full overflow-y-auto'}
        >
          <button
            aria-label="Close panel"
            className={'fixed right-8 top-6 cursor-pointer z-20'}
            onClick={() => setModalIdx(0)}
          >
            <IconClose width={25} height={24} viewBox="0 0 25 24" />
          </button>
          <div className={'w-full'}>{children}</div>
        </m.div>
      )}
    </AnimatePresence>
  );
};

const ModalImage = ({
  idx,
  modalIdx,
  modalRef,
  children,
}: {
  modalRef: RefObject<HTMLDivElement>;
  idx: number;
  modalIdx: number;
  children: ReactNode;
}) => {
  const imgRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!imgRef.current || !modalRef.current) return;
    if (idx === modalIdx) {
      modalRef.current.scrollTop = imgRef.current.offsetTop;
    }
  }, [modalIdx]);
  return (
    <div
      ref={imgRef}
      className={
        'md:col-span-2 card-image bg-white dark:bg-contrast/10 md:w-full crosshair-minus'
      }
    >
      {children}
    </div>
  );
};
