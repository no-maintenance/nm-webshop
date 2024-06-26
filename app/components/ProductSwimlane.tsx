import {flattenConnection} from '@shopify/hydrogen';

import type {HomepageFeaturedProductsQuery} from '~/__generated__/storefrontapi.generated';
import {ProductCard, Section} from '~/components';

const mockProducts = {
  nodes: new Array(12).fill(''),
};

type ProductSwimlaneProps = HomepageFeaturedProductsQuery & {
  title?: string;
  count?: number;
};

export function ProductSwimlane({
  title = 'Featured Products',
  products = mockProducts,
  count = 12,
  ...props
}: ProductSwimlaneProps) {
  const flattenedProducts = flattenConnection(products);
  return (
    <Section heading={title} padding="y" {...props}>
      <div className="swimlane hiddenScroll md:pb-8 md:scroll-px-8 lg:scroll-px-8 px-4 md:px-6 lg:px-8 xl:px-10">
        {flattenedProducts.map((product, idx) => (
          <ProductCard
            product={product}
            key={product.id}
            className="snap-start w-80"
            idx={idx}
          />
        ))}
      </div>
    </Section>
  );
}
