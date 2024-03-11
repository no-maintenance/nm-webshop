import {CornerDownRight} from 'react-feather';
import {Heading, Link} from '~/components';

export default function HygraphPageFooterNav() {
  return (
    <hgroup className={'pb-10 md:pb-6 block gutter gap-8 grid grid-cols-1'}>
      <Heading size={'mid'} as={'h3'}>
        <Link to={'mailto:contact@nomaintenance.us'} className={'flex'}>
          <CornerDownRight />
          <span className={'pl-4'}>Press</span>
        </Link>
      </Heading>
      <Heading size={'mid'} as={'h3'}>
        <Link to={'mailto:sebastian@nomaintenance.us'} className={'flex'}>
          <CornerDownRight />
          <span className={'pl-4'}>Sales</span>
        </Link>
      </Heading>
    </hgroup>
  );
}
