import {Await} from '@remix-run/react';
import {Suspense} from 'react';

import {Grid, ProductCard, Skeleton} from '~/components';
import {getImageLoadingPriority} from '~/lib/const';

import type {ProductCardFragment} from '../../../../storefrontapi.generated';

export const HygraphShopifyFeaturedCollection = ({
  heading,
  products,
  useNewProductCard,
  hideIncompleteRow,
}: {
  heading: string;
  products: ProductCardFragment[];
  useNewProductCard: boolean;
  hideIncompleteRow: boolean;
}) => {
  return (
    <div className={hideIncompleteRow ? 'hideIncompleteRow' : ''}>
      {heading && <h2 className={'text-lead my-12 gutter'}>{heading}</h2>}
      <Suspense
        fallback={<Skeleton className="aspect-[4/5] loading-flicker" />}
      >
        <Await
          errorElement="There was a problem this group of products"
          resolve={products}
        >
          {(products) => (
            <Grid layout={'products'}>
              {products &&
                products.map((product, i: number) => (
                  <ProductCard
                    key={`product-card--${i}--${product.id}`}
                    product={product}
                    idx={i}
                    loading={getImageLoadingPriority(i)}
                  />
                ))}
            </Grid>
          )}
        </Await>
      </Suspense>
    </div>
  );
};
