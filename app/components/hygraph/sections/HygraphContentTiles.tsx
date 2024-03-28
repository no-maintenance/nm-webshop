import clsx from 'clsx';

import {getCSS} from '~/lib/hygraph';
import type {HygraphContentTilesProps, HygraphSingleTile} from '~/hygraph';
import {COMPONENT_DEFAULTS} from '~/lib/const';
import {HygraphLinkDeprecated} from '~/components/hygraph/partials/HygraphLinkDeprecated';
import {
  extractCloudinaryAssetInfo,
  HygraphCloudinaryMedia,
} from '~/components/hygraph/HygraphCloudinaryMedia';

export const HygraphContentTiles = ({
  aspectRatio,
  mobileAspectRatio,
  hasGutterBetweenTiles,
  tiles,
  layoutPos,
}: HygraphContentTilesProps) => {
  const wrapperStyles = clsx([
    aspectRatio ?? COMPONENT_DEFAULTS.CONTENT_TILE_ASPECT_RATIO,
    mobileAspectRatio && `${mobileAspectRatio}_m`,
    'generic-content-section  flex relative',
    hasGutterBetweenTiles && 'gap-4',
  ]);
  return (
    <div className={wrapperStyles}>
      {tiles.map((tile: any, index: any) => {
        return (
          <Tile
            primaryAspectRatio={aspectRatio}
            mobileAspectRatio={mobileAspectRatio}
            tilesPerRow={tiles.length}
            t={tile}
            layoutPos={layoutPos}
            key={`child-tile--${index}`}
          />
        );
      })}
    </div>
  );
};

const Tile = ({
  t,
  tilesPerRow,
  primaryAspectRatio,
  mobileAspectRatio,
  layoutPos,
}: {
  primaryAspectRatio: string;
  mobileAspectRatio: string;
  tilesPerRow: number;
  layoutPos: number;
  t: HygraphSingleTile;
}) => {
  const {image: primary, mobileFallback: mobile} = t.backgroundMedia;
  const rawTextPos = t.textPosition ?? 'middle_center';
  const styles = getCSS(null, t.textColor);
  const {primaryAssetInfo, mobileAssetInfo} = extractCloudinaryAssetInfo(
    primary,
    mobile,
  );
  primaryAssetInfo.aspectRatio = getAspectRatio(primaryAspectRatio);
  if (mobileAssetInfo && mobileAspectRatio)
    mobileAssetInfo.aspectRatio = getAspectRatio(mobileAspectRatio);
  const Wrapper = ({children}) => {
    if (t.link) {
      return (
        <HygraphLinkDeprecated
          className={'relative image-container block'}
          link={t.link}
        >
          {children}
        </HygraphLinkDeprecated>
      );
    } else {
      return <div className={'relative image-container block'}>{children}</div>;
    }
  };
  const sizes = `(min-width: 35em) ${100 / tilesPerRow}vw, 100vw`;
  return (
    <div
      className={clsx([
        getTextPosClasses(rawTextPos),
        'generic-block relative',
      ])}
    >
      {primaryAssetInfo && (
        <HygraphCloudinaryMedia
          loading={layoutPos < 1 ? 'eager' : 'lazy'}
          className="absolute h-full w-full object-cover"
          primary={primaryAssetInfo}
          mobile={mobileAssetInfo}
          sizes={sizes}
        />
      )}
      <Wrapper>
        {t.hasOverlayOnHover && (
          <div
            className={`absolute inset-0 h-full w-full bg-black opacity-0 opass-overlay`}
          ></div>
        )}
        <hgroup className={'absolute text-wrapper'} style={styles}>
          {t.heading && (
            <h2
              className={'text-heading xl:text-display'}
              dangerouslySetInnerHTML={{__html: t.heading}}
            ></h2>
          )}
          <h3> {t.subheading}</h3>
        </hgroup>
      </Wrapper>
    </div>
  );
};
const getTextPosClasses = (rawTextPos: string): string => {
  const textPos = rawTextPos.split('_');
  const verticalPos = textPos[0];
  const horizontalPos = textPos[1];
  return `va--${verticalPos} ha--${horizontalPos}`;
};

const getAspectRatio = (ar?: string) => {
  if (ar === 'aspect_fullscreen') return 'fullscreen';
  if (!ar) return 1;
  // served by hygraph in the form aspect_WxH => aspect_1x1 for 1:1
  const ratioSubstring = ar.split('_').pop();
  const [width, height] = ratioSubstring.split('x');
  return width / height;
};
