import clsx from 'clsx';

import type {Nullable} from '~/hygraph';
import {CLOUDINARY_PROXY} from '~/lib/const';
import type {ResponsiveImageProps} from '~/components/hygraph/types';

export const HygraphExternalMedia = ({
  media,
  className = '',
}: {
  media: Nullable<any>;
  className?: string;
}) => {
  if (!media || media.vimeoVideoId) return null;
  return <CloudinaryMedia media={media} className={className} />;
};

function PlaceholderImage({className}: {className: string}) {
  const c = clsx(className, 'bg-gray-100');
  return <div className={c}></div>;
}

export function getSrcset(imgMeta: ResponsiveImageProps) {
  const images = [];
  for (const [k, v] of imgMeta.variants.entries()) {
    const t = [`w_${v.width}`, ...v.trans];
    const line = `${CLOUDINARY_PROXY}/${t.join(',')}/${imgMeta.id} ${v.width}w${
      k >= imgMeta.variants.length && ',\n'
    }`;
    images.push(line);
  }
  return images.join(',\n');
}
export const getCloudinarySrc = (
  id: string,
  trans = 'c_scale,f_auto,q_auto,dpr_auto',
) => `${CLOUDINARY_PROXY}/${trans}/${id}`;
function CloudinaryMedia({media, className}: {media: any; className: string}) {
  const m = media.image;
  const {title, alt, url} = getCtx(m);
  const mobileID = media.mobileFallback
    ? media.mobileFallback.public_id
    : m.public_id;
  if (!url) return <></>;

  switch (m.resource_type) {
    case 'image':
      return (
        <picture>
          <source
            srcSet={getCloudinarySrc(
              mobileID,
              'w_800/c_scale/f_auto/q_auto/dpr_auto',
            )}
            media="(max-width: 35em)"
          ></source>
          <source
            srcSet={getCloudinarySrc(
              m.public_id,
              'w_1200/c_scale/f_auto/q_auto/dpr_auto',
            )}
            media="(max-width: 50em)"
          ></source>
          <source
            srcSet={getCloudinarySrc(
              m.public_id,
              'w_1600/c_scale/f_auto/q_auto/dpr_auto',
            )}
            media="(max-width: 85em)"
          ></source>
          <img
            className={className}
            src={`${getCloudinarySrc(
              m.public_id,
              'w_2160,c_scale,f_auto,q_auto,dpr_auto',
            )}`}
            alt=""
          />
        </picture>
      );
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
          <source src={url}></source>
        </video>
      );
    default:
      return <></>;
  }
}

/**
 * Gets image metadata
 *
 *  @todo deprecated. write webhook for alt text
 * @param m
 */
function getCtx(m: any) {
  const url = getSrc(m);
  const c = m.context;
  if (!c?.custom) return {title: '', alt: '', url};
  return {title: c.custom.caption, alt: c.custom.alt, url};
}

function getSrc(m: any) {
  if (!m.derived) return m.secure_url;
  return m.derived[0].secure_url;
}
