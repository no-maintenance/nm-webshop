import {Link} from '@remix-run/react';
import {Fragment} from 'react';

import {useIsHomePath} from '~/lib/utils';
import type {EnhancedMenu, ChildEnhancedMenuItem} from '~/lib/utils';
import {Heading, Section} from '~/components/Text';
import {CountrySelector} from '~/components/';
import {KlaviyoNewsletter} from '~/components/KlavivyoForm';
import { LanguageSelector } from "~/components/LanguageSelector";

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
      className={`bg-accent/60 grid mt-8 items-center w-full pt-8 pb-6 gutter gap-2 md:gap-4 grid-cols-1 md:grid-cols-2`}
    >
      <FooterNewsletter />
      <FooterMenu menu={menu} />
      <h6 className={'text-copy mt-8'}>© No Maintenance Corp. 2023</h6>
    </Section>
  );
}

function FooterNewsletter() {
  return (
    <>
      <Heading
        size={'copy'}
        key="newsletter-title"
        className="col-span-1 md:col-span-2"
      >
        Newsletter
      </Heading>
      <KlaviyoNewsletter />
    </>
  );
}

function FooterLink({item}: {item: ChildEnhancedMenuItem}) {
  if (item.to.startsWith('http')) {
    return (
      <a
        href={item.to}
        target={item.target}
        rel="noopener noreferrer"
        className={'col-span-1'}
      >
        {item.title}
      </a>
    );
  }

  return (
    <Link
      to={item.to}
      target={item.target}
      prefetch="intent"
      className={'col-span-1'}
    >
      {item.title}
    </Link>
  );
}

function FooterMenu({menu}: {menu?: EnhancedMenu}) {
  return (
    <nav
      className={
        'flex gap-y-0 gap-x-6 justify-start md:justify-end flex-wrap md:flex-nowrap'
      }
    >
      <div
        className={
          'flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-0 gap-x-6 flex-wrap justify-between p-0 m-0 font-sans text-left text-primary '
        }
      >
        {(menu?.items || []).map((item: ChildEnhancedMenuItem, idx) => (
          <Fragment key={item.id}>
            <FooterLink item={item} />
          </Fragment>
        ))}
      </div>
      <div
        className={'row-span-1 sm:row-span-2 w-full md:w-fit hidden md:block'}
      >
        {/*<LanguageSelector />*/}
        {/*<CountrySelector heading={'Shipping to'} />*/}
      </div>
    </nav>
  );
}
