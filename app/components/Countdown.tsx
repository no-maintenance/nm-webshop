import type {Dispatch} from 'react';
import {useEffect, useState} from 'react';

import {Heading} from '~/components/Text';

export const Countdown = ({
  launchDate,
  setIsLive,
}: {
  launchDate: string;
  setIsLive: Dispatch<boolean>;
}) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(launchDate) - +new Date();

    const timeLeft: {
      days: number;
      hours: number;
      minutes: number;
      seconds: number;
    } =
      difference > 0
        ? {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          }
        : {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
          };
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      const difference = +new Date(launchDate) - +new Date();
      setTimeLeft(calculateTimeLeft());
      if (difference <= 0) setIsLive(true);
    }, 1000);

    return () => clearTimeout(timer);
  });
  return (
    <div>
      <div className={'flex justify-around pt-2 pb-8'}>
        <div>
          <span className={'text-mid font-light'}>{timeLeft.days}</span>
          <Heading
            as={'h3'}
            size={'mid'}
            className={'uppercase pt-2 font-light text-mid'}
          >
            Days
          </Heading>
        </div>
        <div>
          <span className={'text-mid font-light'}>{timeLeft.hours}</span>
          <Heading
            as={'h3'}
            size={'mid'}
            className={'uppercase pt-2 font-light text-mid'}
          >
            Hours
          </Heading>
        </div>
        <div>
          <span className={'text-mid font-light'}>{timeLeft.minutes}</span>
          <Heading
            as={'h3'}
            size={'mid'}
            className={'uppercase pt-2 font-light text-mid'}
          >
            Minutes
          </Heading>
        </div>
        <div>
          <span className={'text-mid font-light'}>{timeLeft.seconds}</span>
          <Heading
            as={'h3'}
            size={'mid'}
            className={'uppercase pt-2 font-light text-mid'}
          >
            Seconds
          </Heading>
        </div>
      </div>
    </div>
  );
};
