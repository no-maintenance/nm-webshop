import emailjs from '@emailjs/browser';
import {AnimatePresence, m} from 'framer-motion';
import type {RefObject, ReactNode, Dispatch, HTMLProps} from 'react';
import {useRef, useState, useEffect} from 'react';
import {CornerDownRight} from 'react-feather';
import DatePicker from 'react-datepicker';
import type {
  UseFormReturn,
  FieldErrors,
  UseFormRegister,
} from 'react-hook-form';
import {useForm} from 'react-hook-form';

import {
  EMAILJS_APPOINTMENT_TEMPLATE_ID,
  EMAILJS_CONTACT_TEMPLATE_ID,
  EMAILJS_PUBKEY,
  EMAILJS_SERVICE_ID,
  FORM_TEXTAREA_CHAR_LIMIT,
  KLAVIYO_BASE_URL,
} from '~/lib/const';
import type {Nullable} from '~/hygraph';

type FormInputs = {
  [key: string]: string;
};

type InputConfig = {
  name: string;
  label: string;
  type: string;
  validation?: Record<string, unknown>;
  HTMLProps?: HTMLProps<HTMLInputElement>;
};
type FormStatus = 'init' | 'error' | 'success';
type FormProps = {
  setStatus: Dispatch<FormStatus>;
  onSubmit?: (data: FormInputs) => void;
  formMethods: UseFormReturn<FormInputs>;
  inputConfigs: InputConfig[];
  label: string;
  templateID: string;
  children?: ReactNode;
};

const validateContact = (value: string) => {
  const r = /^(?:\+?\d{1,3}[ -]?)?\(?\d{3}\)?[ -]?\d{3}[ -]?\d{4}$|^\S+@\S+$/;
  if (!value) {
    return 'Contact is required';
  }
  if (!r.test(value)) {
    return 'Please enter a valid email address or phone number';
  }
  return true;
};
const validatePhoneNumber = (value: string) => {
  const r = /^(\+\d{1,2}\s?)?(\()?(\d{3})(\))?[.-\s]?(\d{3})[.-\s]?(\d{4})$/;
  if (!value) {
    return 'Phone number is required';
  }
  if (!r.test(value)) {
    return 'Please enter a valid phone number';
  }
};
const validateEmail = (value: string) => {
  const r = /^\S+@\S+$/;
  if (!value) {
    return 'Email is required';
  }
  if (!r.test(value)) {
    return 'Please enter a valid email address';
  }
  return true;
};
const validateDatetime = (value: string) => {
  if (!value) {
    return 'Datetime is required';
  }
  if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(value)) {
    return 'Please enter a valid date and time in the format yyyy-mm-ddThh:mm';
  }
  return true;
};

function Appointment({
  status,
  setStatus,
}: {
  status: FormStatus;
  setStatus: Dispatch<FormStatus>;
}) {
  const inputs = [
    {
      name: 'name',
      label: 'First, Last Name',
      type: 'text',
      validation: {required: true},
    },
    {
      name: 'contact',
      label: 'Email Address',
      type: 'text',
      validation: {
        required: true,
        validate: validateEmail,
      },
    },
    {
      name: 'phone',
      label: 'Phone Number',
      type: 'text',
      validation: {
        required: true,
        validate: validatePhoneNumber,
      },
    },
    {
      name: 'requested_time',
      label: 'Requested Appointment Time',
      type: 'datetime-local',
      validation: {
        required: true,
        validate: validateDatetime,
      },
    },
    {
      name: 'party_size',
      label: 'Party Size',
      type: 'text',
      validation: {required: true},
    },
    {
      name: 'message',
      label: 'Message',
      type: 'textarea',
      validation: {required: true},
    },
  ];
  const formMethods = useForm<FormInputs>();
  useEffect(() => {
    // if (status === 'success')
    // analytics.trackEvent(AnalyticsFormEvents.AppointmentRequest, {
    //   componentID: '4d1fc330-1b6d-49a5-b040-2f6a4037cb89',
    // });
  }, [status]);
  return (
    <Form
      setStatus={setStatus}
      formMethods={formMethods}
      templateID={EMAILJS_APPOINTMENT_TEMPLATE_ID}
      inputConfigs={inputs}
      label={'Book Appointment'}
    ></Form>
  );
}

const DateInput = ({name, hasError}: {name: string; hasError: boolean}) => {
  const [startDate, setStartDate] = useState<Nullable<Date>>(null);

  const isWeekday = (date: Date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6; // allow Monday - Friday
  };

  const isWeekend = (date: Date) => {
    const day = date.getDay();
    return day === 0 || day === 6; // allow Saturday and Sunday
  };

  const isWeekdayHours = (date: Date) => {
    const hour = date.getHours();
    return hour >= 9 && hour < 17; // allow 9AM - 5PM
  };

  const isWeekendHours = (date: Date) => {
    const hour = date.getHours();
    return hour >= 11 && hour < 18; // allow 11AM - 6PM on weekends
  };

  const isDisabledDate = (date: Date) => {
    return (
      (isWeekdayHours(date) && isWeekday(date)) ||
      (isWeekendHours(date) && isWeekend(date))
    );
  };

  return (
    <DatePicker
      filterTime={isDisabledDate}
      showTimeSelect
      minDate={new Date()}
      timeIntervals={15}
      placeholderText="Requested Appointment Time"
      dateFormat="MMMM d, yyyy h:mm aa"
      className={`styled-text-input ${
        hasError &&
        'border-error focus:shadow-error focus:shadow focus:border-error'
      }`}
      name={name}
      selected={startDate}
      onChange={(date: Date) => setStartDate(date)}
    />
  );
};

function Form({
  onSubmit,
  formMethods,
  inputConfigs,
  children,
  templateID,
  label,
  setStatus,
}: FormProps) {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = formMethods;
  const form = useRef<HTMLFormElement>(null);
  const submitEvent = (data: FormInputs) =>
    typeof onSubmit !== 'undefined'
      ? onSubmit
      : createSendEvent(templateID, form, setStatus);

  return (
    <form
      ref={form}
      onSubmit={handleSubmit(submitEvent)}
      className={'max-w-2xl styled-form mx-auto'}
    >
      {inputConfigs.map(({name, label, type, validation}) => {
        const id = `${name}--HygraphForm`;
        return (
          <label
            htmlFor={id}
            key={name}
            className={'flex flex-wrap md:block lg:mb-0 mb-2'}
          >
            {(() => {
              switch (type) {
                case 'textarea':
                  return (
                    <ReactiveTextarea
                      id={id}
                      name={name}
                      errors={errors}
                      validation={validation}
                      register={register}
                    />
                  );
                case 'datetime-local':
                  return <DateInput hasError={!!errors[name]} name={name} />;
                default:
                  return (
                    <input
                      id={id}
                      className={` styled-text-input ${
                        errors[name] &&
                        'border-error focus:shadow-error focus:shadow focus:border-error'
                      }`}
                      type={type}
                      placeholder={label}
                      {...register(name, validation)}
                    />
                  );
              }
            })()}
            <span
              className={
                'text-medium block md:hidden order-first text-fine label'
              }
            >
              {label}
            </span>
            {errors[name] && (
              <span className={'text-error order-3 text-fine'}>
                This field is required
              </span>
            )}
          </label>
        );
      })}
      <div className={'flex justify-end '}>
        <button
          type="submit"
          className={
            'text-mid lg:pt-2 items-center cursor-pointer flex focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:p-3 focus-visible:outline-blue-500'
          }
        >
          <CornerDownRight />
          <span className={'pl-3'}>{label}</span>
        </button>
      </div>
      {children}
    </form>
  );
}

const Contact = ({setStatus}: {setStatus: Dispatch<FormStatus>}) => {
  const inputs = [
    {
      name: 'name',
      label: 'First, Last Name',
      type: 'text',
      validation: {required: true},
    },
    {
      name: 'contact',
      label: 'Email Address',
      type: 'text',
      validation: {
        required: true,
        validate: validateEmail,
      },
    },
    {
      name: 'order_number',
      label: 'Order Number',
      type: 'text',
    },
    {
      name: 'subject',
      label: 'Subject',
      type: 'text',
      validation: {required: true},
    },
    {
      name: 'message',
      label: 'Message',
      type: 'textarea',
      validation: {required: true},
    },
  ];
  const formMethods = useForm<FormInputs>();

  return (
    <Form
      setStatus={setStatus}
      formMethods={formMethods}
      templateID={EMAILJS_CONTACT_TEMPLATE_ID}
      inputConfigs={inputs}
      label={'Contact'}
    ></Form>
  );
};
const NewsletterForm = ({
  customSource,
  label,
}: {
  label;
  customSource?: string;
}) => {
  // @todo refactor this to use new form spec
  const [submissionState, setSubmissionState] = useState<
    'unsubmitted' | 'success' | 'error'
  >('unsubmitted');
  const onSubmit = () => null;
  // const onSubmit = (data: {email: string; consent: number}) => {
  //   const url = `${KLAVIYO_BASE_URL}/client/subscriptions/?company_id=${companyID}`;
  //
  //   const options = {
  //     method: 'POST',
  //     headers: {revision: '2023-02-22', 'content-type': 'application/json'},
  //     body: JSON.stringify({
  //       data: {
  //         type: 'subscription',
  //         attributes: {
  //           list_id: 'Wimtnj',
  //           custom_source: customSource
  //             ? customSource
  //             : footerNewsletter.custom_source, // @todo make source dynamic to differentiate between different areas where the form is being added
  //           email: data.email,
  //         },
  //       },
  //     }),
  //   };
  //   fetch(url, options)
  //     .then((res) => {
  //       if (res.ok) {
  //         // analytics.trackEvent(AnalyticsFormEvents.MainNewsletterSignup, {
  //         //   location: 'hygraph-component',
  //         //   componentID: '30b8dee6-f5c4-4588-a6a2-d515b04092a7',
  //         // });
  //         setSubmissionState('success');
  //       } else {
  //         setSubmissionState('error');
  //       }
  //     })
  //     .catch((err) => {
  //       setSubmissionState('error');
  //       console.error('error:' + err);
  //     });
  // };
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<{email: string; consent: number}>();
  const ErrorHandler = () => {
    if (errors.email)
      return <p className={'text-error text-copy'}>{errors.email.message}</p>;
    if (errors.consent)
      return (
        <p className={'text-error text-copy'}>Policy consent is required.</p>
      );
    return <span className={'grow'}></span>;
  };

  return (
    <section className={'newsletter w-full mx-auto max-w-2xl py-12'}>
      <AnimatePresence>
        {submissionState === 'unsubmitted' && (
          <form
            className={'newsletter__form '}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div
              className={`md:flex inline-flex  relative justify-center items-end border-b border-black mb-0 ${
                errors['email'] &&
                'border-error focus:shadow-error focus:shadow focus:border-error'
              }`}
            >
              <label
                htmlFor={'email'}
                className={'flex flex-wrap mb-0 mr-4 md:w-full max-w-2xl'}
              >
                <input
                  className={'ga-email styled-text-input-with-btn'}
                  type="email"
                  placeholder={label ? '' : 'Email Address'}
                  {...register('email', {
                    required: 'Please enter your email.',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Email is invalid.',
                    },
                  })}
                />
                <span
                  className={'text-medium block order-first text-fine label'}
                >
                  {label ?? 'Sign Up to Receive Our Newsletter'}
                </span>
              </label>
              <button type={'submit'} className={'text-mid pb-1'}>
                Join
              </button>
            </div>
            <div className={'justify-between flex'}>
              <ErrorHandler />
            </div>
          </form>
        )}
        {submissionState == 'success' && (
          <p className={' text-center'}>
            You have been successfully registered.
          </p>
        )}
        {submissionState == 'error' && (
          <p className={'text-error'}>
            Sorry, we are not able to register you at this time. Please try
            again later.
          </p>
        )}
      </AnimatePresence>
    </section>
  );
};
export const HygraphForm = ({
  type,
  customSource,
  label,
}: {
  type: 'Appointment' | 'Contact' | 'Newsletter';
  customSource?: string;
  label?: string;
}) => {
  const [formStatus, setFormStatus] = useState<FormStatus>('init');
  const FormSwitcher = () => (
    <>
      <AnimatePresence>
        {formStatus === 'init' && (
          <m.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{ease: 'linear', duration: 0.3}}
            exit={{opacity: 0}}
          >
            {(() => {
              switch (type) {
                case 'Appointment':
                  return (
                    <Appointment
                      status={formStatus}
                      setStatus={setFormStatus}
                    />
                  );
                case 'Contact':
                  return <Contact setStatus={setFormStatus} />;
                case 'Newsletter':
                  return (
                    <NewsletterForm label={label} customSource={customSource} />
                  );
                default:
                  return <></>;
              }
            })()}
          </m.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {formStatus !== 'init' && (
          <m.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{ease: 'linear', duration: 0.3}}
            exit={{opacity: 0}}
          >
            <Complete formStatus={formStatus} />
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
  return <FormSwitcher />;
};

const Complete = ({formStatus}: {formStatus: FormStatus}) => {
  if (formStatus === 'success') {
    return (
      <h3 className={'max-w-2xl w-full text-left mx-auto'}>
        Your request has been successfully submitted.
      </h3>
    );
  }
  return (
    <h3 className={'max-w-2xl w-full text-left mx-auto'}>
      Sorry, an unknown error has occurred.
    </h3>
  );
};

const createSendEvent = (
  templateID: string,
  form: RefObject<HTMLFormElement>,
  setStatus: Dispatch<FormStatus>,
) => {
  if (!form.current)
    return console.log('Sorry an unexpected error has occured');
  return emailjs
    .sendForm(EMAILJS_SERVICE_ID, templateID, form.current, EMAILJS_PUBKEY)
    .then(
      (result) => {
        setStatus('success');
      },
      (error) => {
        setStatus('error');
        console.log(error.text);
      },
    );
};

const ReactiveTextarea = ({
  name,
  errors,
  validation,
  register,
  id,
}: {
  id: string;
  register: UseFormRegister<FormInputs>;
  name: string;
  errors: FieldErrors<FormInputs>;
  validation: Record<string, unknown> | undefined;
}) => {
  const [count, setCount] = useState(0);
  return (
    <div className={'relative w-full mt-2 md:mt-4 styled-textarea '}>
      <textarea
        maxLength={FORM_TEXTAREA_CHAR_LIMIT}
        placeholder={''}
        id={id}
        {...register(name, validation)}
        className={`resize-none bg-transparent ${
          errors[name] && 'border-error focus:outline-error'
        }`}
        onChange={(e) => setCount(e.target.value.length)}
        aria-invalid={errors.message ? 'true' : 'false'}
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
