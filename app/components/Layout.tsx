import type {ReactNode} from 'react';
import {AnimatePresence, m} from 'framer-motion';
import {useLocation} from '@remix-run/react';

import {type LayoutQuery} from '~/__generated__/storefrontapi.generated';
import {type EnhancedMenu} from '~/lib/utils';
import {Footer} from '~/components/Footer';
import {Header} from '~/components/Header';

export type LayoutProps = {
  children: ReactNode;
  layout?: LayoutQuery & {
    desktopHeaderMenu?: EnhancedMenu | null;
    mobileHeaderMenu?: EnhancedMenu | null;
    footerMenu?: EnhancedMenu | null;
  };
};

export function Layout({children, layout}: LayoutProps) {
  const {desktopHeaderMenu, mobileHeaderMenu, footerMenu} = layout || {};
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="">
          <a href="#mainContent" className="sr-only">
            Skip to content
          </a>
        </div>
        {(desktopHeaderMenu || mobileHeaderMenu) && layout?.shop.name && (
          <Header
            title={'NOMAINTENANCE'}
            desktopMenu={desktopHeaderMenu}
            mobileMenu={mobileHeaderMenu}
          />
        )}
        <AnimatePresence mode={'wait'}>
          <m.main
            key={useLocation().pathname}
            initial={{opacity: 0}}
            transition={{duration: 1}}
            animate={{opacity: 1}}
            role="main"
            id="mainContent"
            className="flex-grow"
          >
            {children}
          </m.main>
        </AnimatePresence>
      </div>
      {footerMenu && <Footer menu={footerMenu} />}
    </>
  );
}
