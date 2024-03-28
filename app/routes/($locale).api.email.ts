import type {ActionFunctionArgs} from '@shopify/remix-oxygen';
import {json} from '@shopify/remix-oxygen';
import emailjs from '@emailjs/browser';

import {CUSTOMER_DETAILS_QUERY} from '~/graphql/customer-account/CustomerDetailsQuery';
import {parseNumberFromShopGid} from '~/lib/utils';
import {
  EMAILJS_APPOINTMENT_TEMPLATE_ID,
  EMAILJS_PUBKEY,
  EMAILJS_SERVICE_ID,
} from '~/lib/const';

export type FormResponse<Errors> =
  | {status: 'success'}
  | {status: 'error'; errors: Errors};
export type FormErrors = {generic?: string};

export type Errors = FormErrors & {
  email?: string;
  name?: string;
};
export async function action({request, context}: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = String(formData.get('email'));
  const errors: Errors = {};
  if (!email.includes('@')) {
    errors.email = 'Invalid email address';
  }
  formData.append('service_id', EMAILJS_SERVICE_ID);
  formData.append('template_id', EMAILJS_APPOINTMENT_TEMPLATE_ID);
  formData.append('user_id', EMAILJS_PUBKEY);

  const hasValidationErrors = Object.keys(errors).length > 0;
  if (hasValidationErrors) return json({status: 'error', errors});

  const response = await fetch(
    'https://api.emailjs.com/api/v1.0/email/send-form',
    {
      method: 'POST',
      body: formData,
    },
  );
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
