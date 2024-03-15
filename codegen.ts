import {CodegenConfig} from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema:
    'https://api-us-west-2.hygraph.com/v2/cld53xals0x4701td8xwq59wk/master',
  documents: 'app/graphql/hygraph/**/*.{ts,tsx,js,jsx}',
  generates: {
    'hygraph.generated.d.ts': {
      plugins: ['typescript', 'typescript-operations'],
    },
  },
};

export default config;
