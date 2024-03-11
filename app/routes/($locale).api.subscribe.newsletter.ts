import type {ActionFunctionArgs} from '@shopify/remix-oxygen';
import {json} from '@shopify/remix-oxygen';

import {CUSTOMER_DETAILS_QUERY} from '~/graphql/customer-account/CustomerDetailsQuery';
import {parseNumberFromShopGid} from '~/lib/utils';

export type FormResponse<Errors> =
  | {status: 'success'}
  | {status: 'error'; errors: Errors};
export type FormErrors = {generic?: string};

export type NewsletterErrors = FormErrors & {
  email?: string;
  consent?: string;
};

export async function action({request, context}: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = String(formData.get('email'));
  const consent = String(formData.get('consent'));
  const source = String(formData.get('source'));
  const errors: NewsletterErrors = {};
  if (!email.includes('@')) {
    errors.email = 'Invalid email address';
  }

  if (consent !== 'on') {
    errors.consent = 'Please confirm your consent to receive our newsletter';
  }
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
    body: getBody({email, source, eid: parseNumberFromShopGid(customer?.id)}),
  });

  if (!response.ok) {
    errors.generic = `Sorry, an error has occurred. Please try again later`;
    const d = (await response.json()) as any;
    d?.errors &&
      d.errors.map((err: any) =>
        console.error(`Klaviyo newsletter form submission failed: `, err),
      );
  }
  const hasErrors = Object.keys(errors).length > 0;
  return json({status: hasErrors ? 'error' : 'success', errors});
}

export const getBody = ({
  email,
  eid,
  anonId,
  source,
}: {
  email: string;
  eid?: string;
  anonId?: string;
  source: string;
}) =>
  JSON.stringify({
    data: {
      type: 'subscription',
      attributes: {
        custom_source: source,
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
      },
      relationships: {
        list: {
          data: {
            type: 'list',
            id: 'Wimtnj',
          },
        },
      },
    },
  });
