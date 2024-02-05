import {Image} from '@shopify/hydrogen';
import React from 'react';

import type {MediaFragment} from 'storefrontapi.generated';
import {Carousel} from '~/components/';
import {notEmpty} from '~/lib/type';

/**
 * A client component that defines a media gallery for hosting images, 3D models, and videos of products
 */
export function ProductGallery({media}: {media: MediaFragment[]}) {
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
            <div
              className={
                'md:col-span-2 aspect-[4/5] snap-center card-image bg-white dark:bg-contrast/10 w-mobileGallery md:w-full'
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
            </div>
          );
        })}
      </div>
    </div>
  );
}
