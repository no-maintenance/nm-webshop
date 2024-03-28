import {AlertCircle} from 'react-feather';
import React, {useState} from 'react';
import clsx from 'clsx';
import {Textarea} from '@headlessui/react/dist/components/textarea/textarea';

import type {FormFragment} from '~/__generated__/hygraph.generated';
import {Checkbox, KlaviyoNewsletter, useForm} from '~/components/KlavivyoForm';
import {InputWrapper} from '~/components/Form';
import {Link} from '~/components';
import {FORM_TEXTAREA_CHAR_LIMIT} from '~/lib/const';

import type {action} from '~/routes/($locale).api.appointment';

export function HygraphForm({type}: Pick<FormFragment, 'type'>) {
  if (type === 'newsletter') {
    return (
      <div>
        <KlaviyoNewsletter hasSubmitBtn={true} />
      </div>
    );
  }
  if (type === 'appointments') {
    return <AppointmentForm />;
  }
  return <div></div>;
}
function AppointmentForm() {
  const {formRef, fetcher, isLoading, data} = useForm<typeof action>();

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
      <fetcher.Form ref={formRef} method="post" action={`/api/email`}>
        <input type={'hidden'} value={'footer'} name={'source'} />
        <div className={'relative'}>
          <div className="mt-4">
            <InputWrapper
              errorMsg={data?.errors.name}
              showErrorMsg={true}
              id={'name'}
              label={'First, Last Name'}
            >
              <input
                data-1p-ignore
                id={'name'}
                type="text"
                name="name"
                placeholder="First, Last Name"
                required
              />
            </InputWrapper>
          </div>
          <div className={'mt-4'}>
            <InputWrapper
              errorMsg={data?.errors.email}
              showErrorMsg={true}
              id={'email'}
              label={'Newsletter'}
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
          <div className={'mt-4'}>
            <InputWrapper
              errorMsg={data?.errors.email}
              showErrorMsg={true}
              id={'email'}
              label={'Newsletter'}
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
          <div className={'mt-4'}>
            <InputWrapper
              errorMsg={data?.errors.phone}
              showErrorMsg={true}
              id={'phone'}
              label={'Phone Number'}
            >
              <input
                data-1p-ignore
                id={'phone'}
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
              />
            </InputWrapper>
          </div>
          <div className={'mt-4'}>
            <InputWrapper
              errorMsg={data?.errors.requested_time}
              showErrorMsg={true}
              id={'requested_time'}
              label={'Requested Appointment Time'}
            >
              <input
                data-1p-ignore
                id={'requested_time'}
                type="datetime-local"
                name="requested_time"
                placeholder="Requested Appointment Time"
                required
              />
            </InputWrapper>
          </div>
          <div className={'mt-4'}>
            <InputWrapper
              errorMsg={data?.errors.party_size}
              showErrorMsg={true}
              id={'party_size'}
              label={'Party Size'}
            >
              <input
                data-1p-ignore
                id={'party_size'}
                type="number"
                name="party_size"
                placeholder="Party Size"
                required
              />
            </InputWrapper>
          </div>
          <div className={'mt-4'}>
            <ReactiveTextarea name={'message'} id={'message'} />
          </div>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className={
            'absolute right-0 bottom-0 py-3 lg:pb-[8px] transform px-2'
          }
        >
          {isLoading ? <p>Loading...</p> : 'Submit'}
        </button>
      </fetcher.Form>
    </div>
  );
}

const ReactiveTextarea = ({name, id}: {id: string; name: string}) => {
  const [count, setCount] = useState(0);
  return (
    <div className={'relative w-full mt-2 md:mt-4 styled-textarea '}>
      <textarea
        maxLength={FORM_TEXTAREA_CHAR_LIMIT}
        placeholder={''}
        id={id}
        name={name}
        className={`resize-none bg-transparent w-full h-[300px]`}
        onChange={(e) => setCount(e.target.value.length)}
      />
      <div
        className={
          'textarea-badge absolute bottom-0 right-0 pb-4 pr-4 text-lead text-primary/40'
        }
      >
        <span>
          {count} / {FORM_TEXTAREA_CHAR_LIMIT}
        </span>
      </div>
    </div>
  );
};
