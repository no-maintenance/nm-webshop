import type {ImgHTMLAttributes} from 'react';
import {Suspense} from 'react';
import type {Maybe} from '@shopify/hydrogen/storefront-api-types';
import {Await} from '@remix-run/react';

import {ATTR_LOADING_LAZY, CLOUDINARY_PROXY} from '~/lib/const';
import type {
  DeliveryType,
  ImageFormatType,
  ResourceType,
} from '~/components/hygraph/types';
import {Skeleton} from '~/components';
interface HygraphMediaProps {
  primary: ResponsiveAssetInfo;
  mobile?: Maybe<ResponsiveAssetInfo>;
  sizes?: string;
  className?: string;
  passthroughProps?: ImgHTMLAttributes<HTMLImageElement>;
  loading?: string;
}

function getCloudinaryURL(id: string, trans: string[] = []) {
  const url = trans.length
    ? `${CLOUDINARY_PROXY}/${trans.join('/')}/${id}`
    : `${CLOUDINARY_PROXY}/${id}`;
  return url;
}

const MIN_WIDTH = 300; // Minimum width for the mobileImage
const MAX_WIDTH = 3000;
const STEPS = 200;
const INCREMENTS = Math.floor((MAX_WIDTH - MIN_WIDTH) / STEPS) + 1;
const DEFAULT_SIZES = '(min-width: 35em) 50vw, 100vw';
const getSrcset = (asset: ResponsiveAssetInfo): string => {
  const srcset: string[] = [];

  for (let i = 0; i < INCREMENTS; i++) {
    const width = MIN_WIDTH + i * STEPS;
    const id = asset.id;
    let aspect = asset.width / asset.height;
    if (asset?.aspectRatio && !isNaN(asset?.aspectRatio)) {
      aspect = asset.aspectRatio;
    }
    const trans = ['c_scale', 'f_auto', 'q_auto', 'dpr_auto', `w_${width}`];
    const url = `${getCloudinaryURL(id, trans)} ${width}w`;
    srcset.push(url);
  }
  return srcset.join(', \n');
};

export function HygraphCloudinaryMedia({
  primary,
  mobile,
  sizes,
  className,
  passthroughProps,
  loading = ATTR_LOADING_LAZY,
}: HygraphMediaProps) {
  switch (primary.resourceType) {
    case 'video':
      return (
        <video
          className={className}
          controls={false}
          muted
          loop
          playsInline
          autoPlay
        >
          <source src={getCloudinaryURL(primary.id)}></source>
        </video>
      );
    case 'image':
      const getAspectRatio = (asset: ResponsiveAssetInfo) => {
        return asset.aspectRatio && !isNaN(asset.aspectRatio)
          ? {
              width: Math.floor(asset.height * asset.aspectRatio),
              height: asset.height,
            }
          : {
              width: asset.width,
              height: asset.height,
            };
      };
      const {width: MobileWidth, height: mobileHeight} = mobile
        ? getAspectRatio(mobile)
        : {width: 0, height: 0};
      const {width, height} = getAspectRatio(primary);
      const sizesAttr = sizes ? sizes : DEFAULT_SIZES;
      return (
        <Suspense
          fallback={
            <Skeleton
              className={`${className} loading-flicker`}
              width={width}
              height={height}
            />
          }
        >
          <Await
            errorElement="There was a problem loading this image"
            resolve={primary}
          >
            {(primary) => (
              <picture>
                {mobile && (
                  <source
                    width={MobileWidth}
                    height={mobileHeight}
                    media={'(orientation: portrait)'}
                    sizes={`100vw`}
                    srcSet={getSrcset(mobile)}
                  />
                )}
                <source
                  width={width}
                  height={height}
                  sizes={sizesAttr}
                  srcSet={getSrcset(primary)}
                />

                <img
                  src={getCloudinaryURL(primary.id, [
                    'c_scale',
                    'f_auto',
                    'q_auto',
                    'dpr_auto',
                  ])}
                  className={className}
                  width={width}
                  height={height}
                  alt="Responsive Media"
                  loading={loading}
                  {...passthroughProps}
                />
              </picture>
            )}
          </Await>
        </Suspense>
      );
    case '_':
      return <></>;
  }
  return <></>;
}

type ResponsiveAssetInfo = {
  id: string;
  width: number;
  height: number;
  resourceType: ResourceType;
  aspectRatio?: number | 'fullscreen';
};

export function extractCloudinaryAssetInfo(
  primary: CloudinaryImage,
  mobileFallback: Maybe<CloudinaryImage>,
): {
  primaryAssetInfo: ResponsiveAssetInfo;
  mobileAssetInfo: Maybe<ResponsiveAssetInfo>;
} {
  return {
    primaryAssetInfo: {
      id: primary.public_id,
      width: primary.width,
      height: primary.height,
      resourceType: primary.resource_type,
    },
    mobileAssetInfo: mobileFallback?.public_id
      ? {
          id: mobileFallback?.public_id,
          width: mobileFallback?.width,
          height: mobileFallback?.height,
          resourceType: mobileFallback.resource_type,
        }
      : null,
  };
}

export type CloudinaryImage = {
  id: string;
  url: string;
  tags: Array<string>;
  type: DeliveryType;
  public_id: string;
  bytes: number;
  width: number;
  format: ImageFormatType;
  height: number;
  derived: Array<{
    url: string;
    secure_url: string;
    raw_transformation: string;
  }>;
  version: number;
  duration: any;
  metadata: Array<any>;
  folder_id: string;
  created_at: string;
  created_by: {
    id: string;
    type: string;
  };
  secure_url: string;
  access_mode: string;
  uploaded_by: {
    id: string;
    type: string;
  };
  resource_type: ResourceType;
  access_control: Array<any>;
};

export interface HygraphCloudinaryImage {
  image: CloudinaryImage;
  mobileFallback?: Maybe<CloudinaryImage>;
  hasLazyLoad: boolean;
}
