import React, {useEffect, useMemo, useRef} from 'react';
import {useActionData, useFetcher} from '@remix-run/react';
import {
  FormActionData,
  FormActionData as NewsletterActionData,
  NewsletterFields,
} from '~/routes/($locale).api.klaviyo.subscribe-to-newsletter';
import {getInputStyleClasses, InputWrapper} from '~/components/Form';
import clsx from 'clsx';

const defaultFormStyles = {
  input: getInputStyleClasses(),
  checkboxLabel: '',
  button: '',
  error: '',
  formBase: '',
};

type KlaviyoFormStyles = {
  input?: string;
  checkboxLabel?: string;
  button?: string;
  error?: string;
  formBase?: string;
};
type KlaviyoNewsletterActionData = FormActionData<NewsletterFields>;

function NewsletterForm({
  styles = defaultFormStyles,
  hasWrapper = true,
}: {
  styles?: KlaviyoFormStyles;
  hasWrapper?: boolean;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const fetcher = useFetcher<KlaviyoNewsletterActionData>();
  const isLoading = fetcher.state !== 'idle';
  const actionData = useActionData<KlaviyoNewsletterActionData>();
  const data = fetcher.data;
  const actionStatus = actionData?.status;
  const success = data?.status === 'success';
  const errors = actionStatus === 'error' ? actionData?.errors : null;
  const errorMap = useMemo(() => {
    const errors: Array<{[key: string]: string}> = [];
    if (actionStatus === 'error') {
      for (const [name, msg] of Object.entries(actionData?.errors)) {
        if (msg) errors.push({name, msg});
      }
    }
    return errors;
  }, [actionData?.status]);
  useEffect(() => {
    if (formRef.current && success) {
      formRef.current.reset();
    }
  }, [success]);
  return (
    <fetcher.Form
      ref={formRef}
      method="post"
      action={`/api.klaviyo/newsletter-subscription`}
      className={clsx(styles?.formBase && styles.formBase)}
    >
      {hasWrapper ? (
        <InputWrapper id={'email'}>
          <input
            id={'email'}
            type="email"
            name="email"
            placeholder="Enter your email address"
            required
            className={clsx(styles?.input && styles.input)}
          />
        </InputWrapper>
      ) : (
        <input
          id={'email'}
          type="email"
          name="email"
          placeholder="Enter your email address"
          required
          className={getInputStyleClasses(
            actionStatus === 'error' ? actionData?.errors.email : null,
          )}
        />
      )}
      <label className={clsx(styles?.checkboxLabel && styles.checkboxLabel)}>
        <input type="checkbox" name="consent" />I agree to the terms and
        conditions
      </label>
      <button
        type="submit"
        disabled={isLoading}
        className={clsx(styles?.button && styles.button)}
      >
        Submit
      </button>
      {isLoading && <p>Loading...</p>}
      {errorMap &&
        errorMap.map((_, msg) => (
          <p className={clsx(styles?.error && styles.error)}>{msg}</p>
        ))}
    </fetcher.Form>
  );
}
