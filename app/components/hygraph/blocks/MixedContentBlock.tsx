import clsx from 'clsx';

import {HygraphRichText} from '~/components/hygraph/partials/HygraphRichText';
import {Carousel} from '~/components';
import type {
  MixedContentFragment,
  ResponsiveAssetFragment,
} from '~/__generated__/hygraph.generated';

export function MixedContentBlock({body, media, mirror}: MixedContentFragment) {
  return (
    <div
      className={'grid grid-cols-2 sm:gap-4 md:gap-8 lg:gap-12 max-h- mx-auto'}
      id={'drop'}
    >
      {media && (
        <div className={`md:col-span-1 col-span-2 ${mirror && 'md:order-2'}`}>
          {media.length > 1 ? (
            <div>
              <Carousel size={media.length}>
                {media.map((asset) => (
                  <Media key={asset.id} className={'aspect-[4/5]'} {...asset} />
                ))}
              </Carousel>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      )}
      <div className={'flex items-center'}>
        {body && <HygraphRichText {...body} />}
      </div>
    </div>
  );
}

function Media({
  thumbnail,
  small,
  medium,
  large,
  xlarge,
  url,
  mimeType,
  altText,
  className,
  srcset,
}: ResponsiveAssetFragment & {srcset?: string; className?: string}) {
  const src = `${small} 320w, ${medium} 680w, ${large} 960w, ${xlarge} 1980w`;
  const classes = clsx(className && className);
  return mimeType.startsWith('image/') ? (
    <img className={classes} srcSet={src} src={url} alt={altText} />
  ) : mimeType.startsWith('video/') ? (
    <video className={classes} controls src={url} />
  ) : null;
}
