import type {ActionFunctionArgs} from '@shopify/remix-oxygen';
import {json} from '@shopify/remix-oxygen';
import invariant from 'tiny-invariant';

import {CUSTOMER_DETAILS_QUERY} from '~/graphql/customer-account/CustomerDetailsQuery';
import {parseNumberFromShopGid} from '~/lib/utils';
import {getBody as getNewsletterBody} from '~/routes/($locale).api.subscribe.newsletter';
export type FormResponse<Errors> =
  | {status: 'success'}
  | {status: 'error'; errors: Errors};
export type FormErrors = {generic?: string};

type RestockErrors = FormErrors & {
  email?: string;
};

export async function action({request, context}: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = String(formData.get('email'));
  const newsletter = String(formData.get('newsletter'));
  const source = String(formData.get('source'));
  const variantId = parseNumberFromShopGid(String(formData.get('variantId')));
  const errors: RestockErrors = {};
  if (!email.includes('@')) {
    errors.email = 'Invalid email address';
  }
  invariant(
    variantId,
    'No Product Variant has been selected for Back in stock form',
  );

  const hasValidationErrors = Object.keys(errors).length > 0;
  if (hasValidationErrors) return json({status: 'error', errors});

  let customer;
  if (await context.customerAccount.isLoggedIn()) {
    const {data: c, errors: customerQueryErrors} =
      await context.customerAccount.query(CUSTOMER_DETAILS_QUERY);
    customer = c?.customer;
  }
  const url = `https://a.klaviyo.com/client/subscriptions/?company_id=${context.env.KLAVIYO_COMPANY_ID}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      revision: '2024-02-15',
    },
    body: getBody({
      email,
      source,
      variantId,
      eid: parseNumberFromShopGid(customer?.id),
    }),
  });

  if (!response.ok) {
    errors.generic = `Sorry, an error has occurred. Please try again later`;
    const d = (await response.json()) as any;
    d?.errors &&
      d.errors.map((err: any) =>
        console.error(`Klaviyo back in stock form submission failed: `, err),
      );
  }
  if (newsletter === 'on') {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        revision: '2024-02-15',
      },
      body: getNewsletterBody({
        email,
        source,
        eid: parseNumberFromShopGid(customer?.id),
      }),
    });
    if (!response.ok) {
      const d = (await response.json()) as any;
      d?.errors &&
        d.errors.map((err: any) =>
          console.error(
            `Klaviyo newsletter form submission failed during back in stock subscription: `,
            err,
          ),
        );
    }
  }
  const hasErrors = Object.keys(errors).length > 0;
  return json({status: hasErrors ? 'error' : 'success', errors});
}

const getBody = ({
  email,
  variantId,
  eid,
  anonId,
  source,
}: {
  variantId: string;
  email: string;
  eid?: string;
  anonId?: string;
  source: string;
}) =>
  JSON.stringify({
    data: {
      type: 'back-in-stock-subscription',
      attributes: {
        customSource: source,
        profile: {
          data: {
            type: 'profile',
            attributes: {
              email,
              ...(eid && {external_id: eid}),
              ...(anonId && {anonymous_id: anonId}),
              properties: {
                version: 1,
              },
            },
          },
        },
        channels: ['EMAIL'],
      },
      relationships: {
        variant: {
          data: {
            type: 'catalog-variant',
            id: `$shopify:::$default:::${variantId}`,
          },
        },
      },
    },
  });
