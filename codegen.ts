import type {CodegenConfig} from '@graphql-codegen/cli';
import {pluckConfig, preset, getSchema} from '@shopify/hydrogen-codegen';
import * as dotenv from 'dotenv';
dotenv.config();
export default {
  overwrite: true,
  pluckConfig,
  generates: {
    './app/__generated__/storefrontapi.generated.d.ts': {
      preset,
      schema: getSchema('storefront'),
      documents: [
        './*.{ts,tsx,js,jsx}',
        './app/**/*.{ts,tsx,js,jsx}',
        '!./app/__generated__/**',
        '!./app/graphql/customer-account/*.{ts,tsx,js,jsx}',
        '!./app/graphql/hygraph/*.{ts,tsx,js,jsx,gql}',
      ],
    },

    './app/__generated__/customer-accountapi.generated.d.ts': {
      preset,
      schema: getSchema('customer-account'),
      documents: ['./app/graphql/customer-account/*.{ts,tsx,js,jsx}'],
    },
    './app/__generated__/hygraph.generated.d.ts': {
      preset,
      schema: process.env.HYGRAPH_URL,
      documents: ['./app/graphql/hygraph/*.ts'],
    },
  },
} as CodegenConfig;
