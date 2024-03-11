import {Link} from '@remix-run/react';
import {Fragment} from 'react';

import type {ChildEnhancedMenuItem, EnhancedMenu} from '~/lib/utils';
import {useIsHomePath} from '~/lib/utils';
import {Heading, Section} from '~/components/Text';
import {KlaviyoNewsletter} from '~/components/KlavivyoForm';

export function Footer({menu}: {menu?: EnhancedMenu}) {
  const isHome = useIsHomePath();
  const itemsCount = menu
    ? menu?.items?.length + 1 > 4
      ? 4
      : menu?.items?.length + 1
    : [];

  return (
    <Section
      padding={'x'}
      as="footer"
      role="contentinfo"
      className={`grid sm:mt-8 items-center w-full pt-8 pb-6 gutter gap-2 md:gap-4 grid-cols-1 md:grid-cols-2`}
    >
      <FooterMenu menu={menu} />
      <div className={'col-span-2 sm:col-span-1 flex sm:justify-center'}>
        <div className={'sm:max-w-xs w-full max-w-[295px]'}>
          <KlaviyoNewsletter hasSubmitBtn={true} />
        </div>
      </div>
      <h6
        className={
          'col-span-2 text-mid sm:text-heading font-bold uppercase sm:mt-8 sm:mb-8 '
        }
      >
        © No Maintenance Corp. 2024
      </h6>
    </Section>
  );
}

function FooterLink({item}: {item: ChildEnhancedMenuItem}) {
  if (item.to.startsWith('http')) {
    return (
      <a href={item.to} target={item.target} rel="noopener noreferrer">
        {item.title}
      </a>
    );
  }

  return (
    <Link to={item.to} target={item.target} prefetch="intent">
      {item.title}
    </Link>
  );
}

function FooterMenu({menu}: {menu?: EnhancedMenu}) {
  return (
    <nav>
      <ul className={'gap-2 grid grid-cols-2'}>
        {(menu?.items || []).map((item: ChildEnhancedMenuItem, idx) => (
          <li key={item.id} className={'col-span-1 sm:col-span-2 py-1'}>
            <FooterLink item={item} />
          </li>
        ))}
      </ul>
      <div
        className={'row-span-1 sm:row-span-2 w-full md:w-fit hidden md:block'}
      >
        {/*<LanguageSelector />*/}
        {/*<CountrySelector heading={'Shipping to'} />*/}
      </div>
    </nav>
  );
}
