import type * as CSS from 'csstype';

import type {Nullable, HygraphHexColor} from '~/hygraph';

export const getCSS = (
  backgroundColor: Nullable<HygraphHexColor>,
  textColor: Nullable<HygraphHexColor>,
): CSS.Properties => {
  return {
    backgroundColor: backgroundColor?.hex || 'transparent',
    color: textColor?.hex || 'inherit',
  };
};
