import type * as CSS from 'csstype';

import type {Nullable, HygraphHexColor} from '~/hygraph';
import {isEntityType} from '~/components/hygraph/HygraphLayout';

import type {Section, Collection} from '~/__generated__/hygraph-schema.server';

export const getCSS = (
  backgroundColor: Nullable<HygraphHexColor>,
  textColor: Nullable<HygraphHexColor>,
): CSS.Properties => {
  return {
    backgroundColor: backgroundColor?.hex || 'transparent',
    color: textColor?.hex || 'inherit',
  };
};
export function searchAndSortPids(
  obj: {[key: string]: any}[],
  depth = 0,
  output: {
    dict: {[key: string]: Set<string>};
    pids: {[key: string]: boolean};
  } = {
    dict: {},
    pids: {},
  },
  currentId = '',
  tempStorage: string[] = [],
): {dict: {[key: string]: string[]}; pids: string[]} {
  if (!obj) return {dict: {}, pids: []};
  obj.forEach((item) => {
    Object.keys(item).forEach((key) => {
      if (
        typeof item[key] === 'object' &&
        item[key] !== null &&
        !Array.isArray(item[key])
      ) {
        const newId = key === 'id' ? item[key] : currentId;
        searchAndSortPids([item[key]], depth + 1, output, newId, tempStorage);
      } else {
        if (key === 'id') {
          currentId = item[key];
          if (!output.dict[currentId]) {
            output.dict[currentId] = new Set<string>();
          }
          if (tempStorage.length > 0) {
            tempStorage.forEach((product) =>
              output.dict[currentId].add(product),
            );
            tempStorage.length = 0;
          }
        }
        if ((key === 'product' || key === 'products') && currentId) {
          const products = [].concat(item[key]);
          products.forEach((product) => {
            output.dict[currentId].add(product);
            output.pids[product] = true;
          });
        } else if (key === 'product' || key === 'products') {
          const products = [].concat(item[key]);
          tempStorage.push(...products);
          products.forEach((product) => (output.pids[product] = true));
        }
      }
    });
  });

  // convert the set of product ids to an array
  return {
    dict: Object.keys(output.dict).reduce((acc, key) => {
      acc[key] = Array.from(output.dict[key]);
      return acc;
    }, {} as {[key: string]: string[]}),
    pids: Object.keys(output.pids),
  };
}
