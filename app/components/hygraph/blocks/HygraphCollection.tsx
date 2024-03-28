import {Suspense} from 'react';
import {Await, useMatches} from '@remix-run/react';
import type {SerializeFrom} from '@shopify/remix-oxygen';
import type {Product} from '@shopify/hydrogen/storefront-api-types';

import {Grid, ProductCard, Skeleton} from '~/components';
import {getImageLoadingPriority} from '~/lib/const';
import type {CollectionFragment} from '~/__generated__/hygraph.generated';

export enum HygraphCollectionVariant {
  Feed,
  Interactive,
}

export function HygraphCollection({
  products,
  enrichedProducts,
  variant,
  id,
}: CollectionFragment & {variant: HygraphCollectionVariant}) {
  const [_, child] = useMatches();
  const mappedProducts = useHygraphProductLoader(child?.data, id) as Product[];
  console.log(mappedProducts);
  if (!mappedProducts) return null;
  // return collection.products ? <CollectionFeed {...collection} /> : null;
  return <Feed products={mappedProducts}></Feed>;
}
function FeaturedProduct({...collection}: Collection) {
  return <></>;
}
function Feed({products}: {products: Product[]}) {
  return (
    <div>
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
}

function useHygraphProductLoader(routeData: any, id: string) {
  return routeData?.hygraphProducts[id] ? routeData?.hygraphProducts[id] : [];
}
