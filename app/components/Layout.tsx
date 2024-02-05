import type {ReactNode} from 'react';

import {type LayoutQuery} from 'storefrontapi.generated';
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
        <main role="main" id="mainContent" className="flex-grow">
          {children}
        </main>
      </div>
      {footerMenu && <Footer menu={footerMenu} />}
    </>
  );
}
