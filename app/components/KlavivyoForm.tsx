import type {ReactElement, ReactNode} from 'react';
import React, {cloneElement, useEffect, useMemo, useRef} from 'react';
import {useFetcher} from '@remix-run/react';
import clsx from 'clsx';
import {AlertCircle} from 'react-feather';

import {getInputStyleClasses, InputWrapper} from '~/components/Form';
import {Link} from '~/components/Link';
import type {action} from '~/routes/($locale).api.subscribe.newsletter';
import type {action as backInStockAction} from '~/routes/($locale).api.subscribe.restock';
import {useFocus} from '~/hooks/useFocus';
import {useTranslation} from '~/i18n';
import {Button} from '~/components/Button';

const defaultFormStyles = {
  input: getInputStyleClasses(),
  checkboxLabel: '',
  button: '',
  error: '',
  formBase: '',
};
function useForm<T extends typeof backInStockAction>() {
  const formRef = useRef<HTMLFormElement>(null);
  const fetcher = useFetcher<T>();
  const isLoading = fetcher.state !== 'idle';
  const data = fetcher.data;
  useEffect(() => {
    if (formRef.current && data?.status === 'success') formRef.current.reset();
  }, [fetcher?.data]);
  return {formRef, fetcher, isLoading, data};
}
type KlaviyoFormStyles = {
  input?: string;
  checkboxLabel?: string;
  button?: string;
  error?: string;
  formBase?: string;
};

export function KlaviyoNewsletter({
  styles = defaultFormStyles,
  hasSubmitBtn,
}: {
  hasSubmitBtn: boolean;
  styles?: KlaviyoFormStyles;
}) {
  const {formRef, fetcher, isLoading, data} = useForm<typeof action>();
  const {t} = useTranslation();
  return (
    <div>
      <div className={'md:h-[40px] flex flex-col justify-end'}>
        {data?.errors &&
          Object.entries(data?.errors).map(([err, msg]) => (
            <p
              key={err}
              className={'text-error text-fine pb-1 flex items-center'}
            >
              <AlertCircle strokeWidth={1} width={16} height={16} />{' '}
              <span className={'pl-2'}>{msg}</span>
            </p>
          ))}
      </div>
      {data?.status === 'success' ? (
        <div className={'h-[100px] flex items-center'}>
          <span className={'text-notice'}>{t('form.newsletter.success')}</span>
        </div>
      ) : (
        <fetcher.Form
          ref={formRef}
          method="post"
          action={`/api/subscribe/newsletter`}
          className={clsx(styles?.formBase && styles.formBase)}
        >
          <input type={'hidden'} value={'footer'} name={'source'} />
          <div className={'relative'}>
            <InputWrapper
              errorMsg={data?.errors.email}
              showErrorMsg={false}
              id={'email'}
              label={'Newsletter'}
            >
              <input
                data-1p-ignore
                id={'email'}
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
            </InputWrapper>
            {hasSubmitBtn && (
              <button
                type="submit"
                disabled={isLoading}
                className={clsx([
                  styles?.button
                    ? styles.button
                    : 'absolute right-0 bottom-0 py-3 lg:py-2 transform px-2',
                ])}
              >
                {isLoading ? <p>Loading...</p> : 'Submit'}
              </button>
            )}
          </div>
          <div className={'text-left block pt-2'}>
            <Checkbox
              hasError={data?.errors.consent}
              label={
                <span className={'pl-2 cursor-pointer text-fine'}>
                  I agree to receive the newsletter. See more about our{' '}
                  <Link
                    className={'animated-underline'}
                    to={'/policies/privacy-policy'}
                  >
                    Privacy Policy
                  </Link>
                  .
                </span>
              }
            >
              <input
                type="checkbox"
                name="consent"
                className={clsx(['bg-transparent'])}
              />
            </Checkbox>
          </div>
        </fetcher.Form>
      )}
    </div>
  );
}

export function Checkbox({
  hasError,
  children,
  label,
}: {
  label: ReactNode;
  hasError?: string;
  children: ReactElement;
}) {
  const [checkboxRef, setFocus] = useFocus<HTMLInputElement>();
  useEffect(() => {
    if (hasError) setFocus();
  }, [hasError]);
  const input = cloneElement(children, {
    className: 'bg-transparent',
    ref: checkboxRef,
  });
  return (
    <label className={clsx([hasError && 'text-error border-color-error'])}>
      {input}
      {label}
    </label>
  );
}
export function KlaviyoBackInStock({
  source,
  variantId,
}: {
  source: string;
  variantId: string;
}) {
  const {formRef, fetcher, isLoading, data} =
    useForm<typeof backInStockAction>();

  return (
    <fetcher.Form ref={formRef} method="post" action={`/api/subscribe/restock`}>
      <input type={'hidden'} value={source} name={'source'} />
      <input type={'hidden'} value={variantId} name={'variantId'} />
      <div className={'relative'}>
        <InputWrapper
          errorMsg={data?.errors.email}
          showErrorMsg={true}
          fixedHeight={false}
          id={'email'}
        >
          <input
            data-1p-ignore
            id={'email'}
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
        </InputWrapper>
      </div>
      <div className={'text-left block pt-8'}>
        <Checkbox
          label={
            <span className={'pl-2 cursor-pointer text-fine'}>
              I would also like to opt-in to receive the newsletter. See our{' '}
              <Link className={'underline'} to={'/policies/privacy-policy'}>
                Privacy Policy
              </Link>{' '}
              for more information.
            </span>
          }
        >
          <input
            type="checkbox"
            name="consent"
            className={clsx(['bg-transparent'])}
          />
        </Checkbox>
      </div>
      <Button
        variant={'primary'}
        className={'bg-accent rounded py-2 mt-12 text-contrast uppercase'}
        width={'full'}
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? <p>Submitting...</p> : 'Notify Me'}
      </Button>
    </fetcher.Form>
  );
}
