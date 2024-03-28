/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import * as StorefrontAPI from '@shopify/hydrogen/storefront-api-types';

export type CustomerAddressUpdateMutationVariables = StorefrontAPI.Exact<{
  address: StorefrontAPI.CustomerAddressInput;
  addressId: StorefrontAPI.Scalars['ID']['input'];
  defaultAddress?: StorefrontAPI.InputMaybe<
    StorefrontAPI.Scalars['Boolean']['input']
  >;
}>;

export type CustomerAddressUpdateMutation = {
  customerAddressUpdate?: StorefrontAPI.Maybe<{
    userErrors: Array<
      Pick<
        StorefrontAPI.UserErrorsCustomerAddressUserErrors,
        'code' | 'field' | 'message'
      >
    >;
  }>;
};

export type CustomerAddressDeleteMutationVariables = StorefrontAPI.Exact<{
  addressId: StorefrontAPI.Scalars['ID']['input'];
}>;

export type CustomerAddressDeleteMutation = {
  customerAddressDelete?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.CustomerAddressDeletePayload, 'deletedAddressId'> & {
      userErrors: Array<
        Pick<
          StorefrontAPI.UserErrorsCustomerAddressUserErrors,
          'code' | 'field' | 'message'
        >
      >;
    }
  >;
};

export type CustomerAddressCreateMutationVariables = StorefrontAPI.Exact<{
  address: StorefrontAPI.CustomerAddressInput;
  defaultAddress?: StorefrontAPI.InputMaybe<
    StorefrontAPI.Scalars['Boolean']['input']
  >;
}>;

export type CustomerAddressCreateMutation = {
  customerAddressCreate?: StorefrontAPI.Maybe<{
    customerAddress?: StorefrontAPI.Maybe<
      Pick<StorefrontAPI.CustomerAddress, 'id'>
    >;
    userErrors: Array<
      Pick<
        StorefrontAPI.UserErrorsCustomerAddressUserErrors,
        'code' | 'field' | 'message'
      >
    >;
  }>;
};

export type OrderCardFragment = Pick<
  StorefrontAPI.Order,
  'id' | 'number' | 'processedAt' | 'financialStatus'
> & {
  fulfillments: {nodes: Array<Pick<StorefrontAPI.Fulfillment, 'status'>>};
  totalPrice: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
  lineItems: {
    edges: Array<{
      node: Pick<StorefrontAPI.LineItem, 'title'> & {
        image?: StorefrontAPI.Maybe<
          Pick<StorefrontAPI.Image, 'altText' | 'height' | 'url' | 'width'>
        >;
      };
    }>;
  };
};

export type AddressPartialFragment = Pick<
  StorefrontAPI.CustomerAddress,
  | 'id'
  | 'formatted'
  | 'firstName'
  | 'lastName'
  | 'company'
  | 'address1'
  | 'address2'
  | 'territoryCode'
  | 'zoneCode'
  | 'city'
  | 'zip'
  | 'phoneNumber'
>;

export type CustomerDetailsFragment = Pick<
  StorefrontAPI.Customer,
  'firstName' | 'lastName'
> & {
  phoneNumber?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.CustomerPhoneNumber, 'phoneNumber'>
  >;
  emailAddress?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.CustomerEmailAddress, 'emailAddress'>
  >;
  defaultAddress?: StorefrontAPI.Maybe<
    Pick<
      StorefrontAPI.CustomerAddress,
      | 'id'
      | 'formatted'
      | 'firstName'
      | 'lastName'
      | 'company'
      | 'address1'
      | 'address2'
      | 'territoryCode'
      | 'zoneCode'
      | 'city'
      | 'zip'
      | 'phoneNumber'
    >
  >;
  addresses: {
    edges: Array<{
      node: Pick<
        StorefrontAPI.CustomerAddress,
        | 'id'
        | 'formatted'
        | 'firstName'
        | 'lastName'
        | 'company'
        | 'address1'
        | 'address2'
        | 'territoryCode'
        | 'zoneCode'
        | 'city'
        | 'zip'
        | 'phoneNumber'
      >;
    }>;
  };
  orders: {
    edges: Array<{
      node: Pick<
        StorefrontAPI.Order,
        'id' | 'number' | 'processedAt' | 'financialStatus'
      > & {
        fulfillments: {nodes: Array<Pick<StorefrontAPI.Fulfillment, 'status'>>};
        totalPrice: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
        lineItems: {
          edges: Array<{
            node: Pick<StorefrontAPI.LineItem, 'title'> & {
              image?: StorefrontAPI.Maybe<
                Pick<
                  StorefrontAPI.Image,
                  'altText' | 'height' | 'url' | 'width'
                >
              >;
            };
          }>;
        };
      };
    }>;
  };
};

export type CustomerDetailsQueryVariables = StorefrontAPI.Exact<{
  [key: string]: never;
}>;

export type CustomerDetailsQuery = {
  customer: Pick<StorefrontAPI.Customer, 'firstName' | 'lastName'> & {
    phoneNumber?: StorefrontAPI.Maybe<
      Pick<StorefrontAPI.CustomerPhoneNumber, 'phoneNumber'>
    >;
    emailAddress?: StorefrontAPI.Maybe<
      Pick<StorefrontAPI.CustomerEmailAddress, 'emailAddress'>
    >;
    defaultAddress?: StorefrontAPI.Maybe<
      Pick<
        StorefrontAPI.CustomerAddress,
        | 'id'
        | 'formatted'
        | 'firstName'
        | 'lastName'
        | 'company'
        | 'address1'
        | 'address2'
        | 'territoryCode'
        | 'zoneCode'
        | 'city'
        | 'zip'
        | 'phoneNumber'
      >
    >;
    addresses: {
      edges: Array<{
        node: Pick<
          StorefrontAPI.CustomerAddress,
          | 'id'
          | 'formatted'
          | 'firstName'
          | 'lastName'
          | 'company'
          | 'address1'
          | 'address2'
          | 'territoryCode'
          | 'zoneCode'
          | 'city'
          | 'zip'
          | 'phoneNumber'
        >;
      }>;
    };
    orders: {
      edges: Array<{
        node: Pick<
          StorefrontAPI.Order,
          'id' | 'number' | 'processedAt' | 'financialStatus'
        > & {
          fulfillments: {
            nodes: Array<Pick<StorefrontAPI.Fulfillment, 'status'>>;
          };
          totalPrice: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
          lineItems: {
            edges: Array<{
              node: Pick<StorefrontAPI.LineItem, 'title'> & {
                image?: StorefrontAPI.Maybe<
                  Pick<
                    StorefrontAPI.Image,
                    'altText' | 'height' | 'url' | 'width'
                  >
                >;
              };
            }>;
          };
        };
      }>;
    };
  };
};

export type OrderMoneyFragment = Pick<
  StorefrontAPI.MoneyV2,
  'amount' | 'currencyCode'
>;

export type DiscountApplicationFragment = {
  value:
    | ({__typename: 'MoneyV2'} & Pick<
        StorefrontAPI.MoneyV2,
        'amount' | 'currencyCode'
      >)
    | ({__typename: 'PricingPercentageValue'} & Pick<
        StorefrontAPI.PricingPercentageValue,
        'percentage'
      >);
};

export type OrderLineItemFullFragment = Pick<
  StorefrontAPI.LineItem,
  'id' | 'title' | 'quantity' | 'variantTitle'
> & {
  price?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
  >;
  discountAllocations: Array<{
    allocatedAmount: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
    discountApplication: {
      value:
        | ({__typename: 'MoneyV2'} & Pick<
            StorefrontAPI.MoneyV2,
            'amount' | 'currencyCode'
          >)
        | ({__typename: 'PricingPercentageValue'} & Pick<
            StorefrontAPI.PricingPercentageValue,
            'percentage'
          >);
    };
  }>;
  totalDiscount: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
  image?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.Image, 'altText' | 'height' | 'url' | 'id' | 'width'>
  >;
};

export type OrderFragment = Pick<
  StorefrontAPI.Order,
  'id' | 'name' | 'statusPageUrl' | 'processedAt'
> & {
  fulfillments: {nodes: Array<Pick<StorefrontAPI.Fulfillment, 'status'>>};
  totalTax?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
  >;
  totalPrice: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
  subtotal?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
  >;
  shippingAddress?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.CustomerAddress, 'name' | 'formatted' | 'formattedArea'>
  >;
  discountApplications: {
    nodes: Array<{
      value:
        | ({__typename: 'MoneyV2'} & Pick<
            StorefrontAPI.MoneyV2,
            'amount' | 'currencyCode'
          >)
        | ({__typename: 'PricingPercentageValue'} & Pick<
            StorefrontAPI.PricingPercentageValue,
            'percentage'
          >);
    }>;
  };
  lineItems: {
    nodes: Array<
      Pick<
        StorefrontAPI.LineItem,
        'id' | 'title' | 'quantity' | 'variantTitle'
      > & {
        price?: StorefrontAPI.Maybe<
          Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
        >;
        discountAllocations: Array<{
          allocatedAmount: Pick<
            StorefrontAPI.MoneyV2,
            'amount' | 'currencyCode'
          >;
          discountApplication: {
            value:
              | ({__typename: 'MoneyV2'} & Pick<
                  StorefrontAPI.MoneyV2,
                  'amount' | 'currencyCode'
                >)
              | ({__typename: 'PricingPercentageValue'} & Pick<
                  StorefrontAPI.PricingPercentageValue,
                  'percentage'
                >);
          };
        }>;
        totalDiscount: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
        image?: StorefrontAPI.Maybe<
          Pick<
            StorefrontAPI.Image,
            'altText' | 'height' | 'url' | 'id' | 'width'
          >
        >;
      }
    >;
  };
};

export type OrderQueryVariables = StorefrontAPI.Exact<{
  orderId: StorefrontAPI.Scalars['ID']['input'];
}>;

export type OrderQuery = {
  order?: StorefrontAPI.Maybe<
    Pick<
      StorefrontAPI.Order,
      'id' | 'name' | 'statusPageUrl' | 'processedAt'
    > & {
      fulfillments: {nodes: Array<Pick<StorefrontAPI.Fulfillment, 'status'>>};
      totalTax?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
      >;
      totalPrice: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
      subtotal?: StorefrontAPI.Maybe<
        Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
      >;
      shippingAddress?: StorefrontAPI.Maybe<
        Pick<
          StorefrontAPI.CustomerAddress,
          'name' | 'formatted' | 'formattedArea'
        >
      >;
      discountApplications: {
        nodes: Array<{
          value:
            | ({__typename: 'MoneyV2'} & Pick<
                StorefrontAPI.MoneyV2,
                'amount' | 'currencyCode'
              >)
            | ({__typename: 'PricingPercentageValue'} & Pick<
                StorefrontAPI.PricingPercentageValue,
                'percentage'
              >);
        }>;
      };
      lineItems: {
        nodes: Array<
          Pick<
            StorefrontAPI.LineItem,
            'id' | 'title' | 'quantity' | 'variantTitle'
          > & {
            price?: StorefrontAPI.Maybe<
              Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
            >;
            discountAllocations: Array<{
              allocatedAmount: Pick<
                StorefrontAPI.MoneyV2,
                'amount' | 'currencyCode'
              >;
              discountApplication: {
                value:
                  | ({__typename: 'MoneyV2'} & Pick<
                      StorefrontAPI.MoneyV2,
                      'amount' | 'currencyCode'
                    >)
                  | ({__typename: 'PricingPercentageValue'} & Pick<
                      StorefrontAPI.PricingPercentageValue,
                      'percentage'
                    >);
              };
            }>;
            totalDiscount: Pick<
              StorefrontAPI.MoneyV2,
              'amount' | 'currencyCode'
            >;
            image?: StorefrontAPI.Maybe<
              Pick<
                StorefrontAPI.Image,
                'altText' | 'height' | 'url' | 'id' | 'width'
              >
            >;
          }
        >;
      };
    }
  >;
};

export type OrderItemFragment = Pick<
  StorefrontAPI.Order,
  'financialStatus' | 'id' | 'number' | 'processedAt'
> & {
  totalPrice: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
  fulfillments: {nodes: Array<Pick<StorefrontAPI.Fulfillment, 'status'>>};
};

export type CustomerOrdersFragment = {
  orders: {
    nodes: Array<
      Pick<
        StorefrontAPI.Order,
        'financialStatus' | 'id' | 'number' | 'processedAt'
      > & {
        totalPrice: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
        fulfillments: {nodes: Array<Pick<StorefrontAPI.Fulfillment, 'status'>>};
      }
    >;
    pageInfo: Pick<
      StorefrontAPI.PageInfo,
      'hasPreviousPage' | 'hasNextPage' | 'endCursor' | 'startCursor'
    >;
  };
};

export type CustomerOrdersQueryVariables = StorefrontAPI.Exact<{
  endCursor?: StorefrontAPI.InputMaybe<
    StorefrontAPI.Scalars['String']['input']
  >;
  first?: StorefrontAPI.InputMaybe<StorefrontAPI.Scalars['Int']['input']>;
  last?: StorefrontAPI.InputMaybe<StorefrontAPI.Scalars['Int']['input']>;
  startCursor?: StorefrontAPI.InputMaybe<
    StorefrontAPI.Scalars['String']['input']
  >;
}>;

export type CustomerOrdersQuery = {
  customer: {
    orders: {
      nodes: Array<
        Pick<
          StorefrontAPI.Order,
          'financialStatus' | 'id' | 'number' | 'processedAt'
        > & {
          totalPrice: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
          fulfillments: {
            nodes: Array<Pick<StorefrontAPI.Fulfillment, 'status'>>;
          };
        }
      >;
      pageInfo: Pick<
        StorefrontAPI.PageInfo,
        'hasPreviousPage' | 'hasNextPage' | 'endCursor' | 'startCursor'
      >;
    };
  };
};

export type CustomerUpdateMutationVariables = StorefrontAPI.Exact<{
  customer: StorefrontAPI.CustomerUpdateInput;
}>;

export type CustomerUpdateMutation = {
  customerUpdate?: StorefrontAPI.Maybe<{
    userErrors: Array<
      Pick<
        StorefrontAPI.UserErrorsCustomerUserErrors,
        'code' | 'field' | 'message'
      >
    >;
  }>;
};

interface GeneratedQueryTypes {
  '#graphql\nquery CustomerDetails {\n  customer {\n    ...CustomerDetails\n  }\n}\n#graphql\nfragment OrderCard on Order {\n  id\n  number\n  processedAt\n  financialStatus\n  fulfillments(first: 1) {\n    nodes {\n      status\n    }\n  }\n  totalPrice {\n    amount\n    currencyCode\n  }\n  lineItems(first: 2) {\n    edges {\n      node {\n        title\n        image {\n          altText\n          height\n          url\n          width\n        }\n      }\n    }\n  }\n}\n\nfragment AddressPartial on CustomerAddress {\n  id\n  formatted\n  firstName\n  lastName\n  company\n  address1\n  address2\n  territoryCode\n  zoneCode\n  city\n  zip\n  phoneNumber\n}\n\nfragment CustomerDetails on Customer {\n  firstName\n  lastName\n  phoneNumber {\n    phoneNumber\n  }\n  emailAddress {\n    emailAddress\n  }\n  defaultAddress {\n    ...AddressPartial\n  }\n  addresses(first: 6) {\n    edges {\n      node {\n        ...AddressPartial\n      }\n    }\n  }\n  orders(first: 250, sortKey: PROCESSED_AT, reverse: true) {\n    edges {\n      node {\n        ...OrderCard\n      }\n    }\n  }\n}\n\n': {
    return: CustomerDetailsQuery;
    variables: CustomerDetailsQueryVariables;
  };
  '#graphql\nfragment OrderMoney on MoneyV2 {\n  amount\n  currencyCode\n}\nfragment DiscountApplication on DiscountApplication {\n  value {\n    __typename\n    ... on MoneyV2 {\n      ...OrderMoney\n    }\n    ... on PricingPercentageValue {\n      percentage\n    }\n  }\n}\nfragment OrderLineItemFull on LineItem {\n  id\n  title\n  quantity\n  price {\n    ...OrderMoney\n  }\n  discountAllocations {\n    allocatedAmount {\n      ...OrderMoney\n    }\n    discountApplication {\n      ...DiscountApplication\n    }\n  }\n  totalDiscount {\n    ...OrderMoney\n  }\n  image {\n    altText\n    height\n    url\n    id\n    width\n  }\n  variantTitle\n}\nfragment Order on Order {\n  id\n  name\n  statusPageUrl\n  processedAt\n  fulfillments(first: 1) {\n    nodes {\n      status\n    }\n  }\n  totalTax {\n    ...OrderMoney\n  }\n  totalPrice {\n    ...OrderMoney\n  }\n  subtotal {\n    ...OrderMoney\n  }\n  shippingAddress {\n    name\n    formatted(withName: true)\n    formattedArea\n  }\n  discountApplications(first: 100) {\n    nodes {\n      ...DiscountApplication\n    }\n  }\n  lineItems(first: 100) {\n    nodes {\n      ...OrderLineItemFull\n    }\n  }\n}\nquery Order($orderId: ID!) {\n  order(id: $orderId) {\n    ... on Order {\n      ...Order\n    }\n  }\n}\n': {
    return: OrderQuery;
    variables: OrderQueryVariables;
  };
  '#graphql\n#graphql\nfragment CustomerOrders on Customer {\n  orders(\n    sortKey: PROCESSED_AT,\n    reverse: true,\n    first: $first,\n    last: $last,\n    before: $startCursor,\n    after: $endCursor\n  ) {\n    nodes {\n      ...OrderItem\n    }\n    pageInfo {\n      hasPreviousPage\n      hasNextPage\n      endCursor\n      startCursor\n    }\n  }\n}\n#graphql\nfragment OrderItem on Order {\n  totalPrice {\n    amount\n    currencyCode\n  }\n  financialStatus\n  fulfillments(first: 1) {\n    nodes {\n      status\n    }\n  }\n  id\n  number\n  processedAt\n}\n\n\nquery CustomerOrders(\n  $endCursor: String\n  $first: Int\n  $last: Int\n  $startCursor: String\n) {\n  customer {\n    ...CustomerOrders\n  }\n}\n': {
    return: CustomerOrdersQuery;
    variables: CustomerOrdersQueryVariables;
  };
}

interface GeneratedMutationTypes {
  '#graphql\nmutation customerAddressUpdate(\n  $address: CustomerAddressInput!\n  $addressId: ID!\n  $defaultAddress: Boolean\n) {\n  customerAddressUpdate(\n    address: $address\n    addressId: $addressId\n    defaultAddress: $defaultAddress\n  ) {\n    userErrors {\n      code\n      field\n      message\n    }\n  }\n}\n': {
    return: CustomerAddressUpdateMutation;
    variables: CustomerAddressUpdateMutationVariables;
  };
  '#graphql\nmutation customerAddressDelete(\n  $addressId: ID!,\n) {\n  customerAddressDelete(addressId: $addressId) {\n    deletedAddressId\n    userErrors {\n      code\n      field\n      message\n    }\n  }\n}\n': {
    return: CustomerAddressDeleteMutation;
    variables: CustomerAddressDeleteMutationVariables;
  };
  '#graphql\nmutation customerAddressCreate(\n  $address: CustomerAddressInput!\n  $defaultAddress: Boolean\n) {\n  customerAddressCreate(\n    address: $address\n    defaultAddress: $defaultAddress\n  ) {\n    customerAddress {\n      id\n    }\n    userErrors {\n      code\n      field\n      message\n    }\n  }\n}\n': {
    return: CustomerAddressCreateMutation;
    variables: CustomerAddressCreateMutationVariables;
  };
  '#graphql\nmutation customerUpdate($customer: CustomerUpdateInput!) {\n  customerUpdate(input: $customer) {\n    userErrors {\n      code\n      field\n      message\n    }\n  }\n}\n': {
    return: CustomerUpdateMutation;
    variables: CustomerUpdateMutationVariables;
  };
}

declare module '@shopify/hydrogen' {
  interface StorefrontQueries extends GeneratedQueryTypes {}
  interface StorefrontMutations extends GeneratedMutationTypes {}
}
