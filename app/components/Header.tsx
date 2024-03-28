import {Await, Form, useLocation, useParams} from '@remix-run/react';
import type {ReactNode, RefObject} from 'react';
import {Suspense, useEffect, useMemo, useRef, useState} from 'react';
import {CartForm, Image} from '@shopify/hydrogen';
import {AnimatePresence, m} from 'framer-motion';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

import Hamburger from '~/components/hamburger';
import {useTranslation} from '~/i18n';
import type {EnhancedMenu} from '~/lib/utils';
import {useIsHomePath} from '~/lib/utils';
import {Drawer, useDrawer} from '~/components/Drawer';
import {
  IconAccount,
  IconCart,
  IconGlobe,
  IconSearch,
  Input,
  Link,
} from '~/components';
import {useRootLoaderData} from '~/root';
import {CartLoading} from '~/components/CartLoading';
import {Cart} from '~/components/Cart';
import {useCartFetchers} from '~/hooks/useCartFetchers';
import {Heading, Text} from '~/components/Text';
import {Footer} from '~/components/Footer';

export function Header({
  title,
  desktopMenu,
}: {
  title: string;
  desktopMenu?: EnhancedMenu | null;
  mobileMenu?: EnhancedMenu | null;
}) {
  const {
    isOpen: isCartOpen,
    openDrawer: openCart,
    closeDrawer: closeCart,
  } = useDrawer();

  const addToCartFetchers = useCartFetchers(CartForm.ACTIONS.LinesAdd);

  // toggle cart drawer when adding to cart
  useEffect(() => {
    if (isCartOpen || !addToCartFetchers.length) return;
    openCart();
  }, [addToCartFetchers, isCartOpen, openCart]);

  return (
    <>
      <CartDrawer isOpen={isCartOpen} onClose={closeCart} />
      {desktopMenu && (
        <DesktopHeader title={title} menu={desktopMenu} openCart={openCart} />
      )}
    </>
  );
}

enum DropdownState {
  CLOSED,
  HAMBURGER,
  SEARCH,
  COUNTRYSELECTOR,
}
function DesktopHeader({
  menu,
  openCart,
  title,
}: {
  openCart: () => void;
  menu?: EnhancedMenu;
  title: string;
}) {
  const [openDropdown, setOpenDropdown] = useState<DropdownState>(
    DropdownState.CLOSED,
  );

  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const isHome = useIsHomePath();
  const isOpen = (o: DropdownState) => o === openDropdown;
  const toggle = (o: DropdownState) =>
    setOpenDropdown(isOpen(o) ? DropdownState.CLOSED : o);
  useEffect(() => {
    setOpenDropdown(DropdownState.CLOSED);
    clearAllBodyScrollLocks();
  }, [location]);

  return (
    <header
      role="banner"
      className={`bg-contrast text-primary h-nav flex items-center sticky z-40 top-0 justify-between w-full leading-none gap-8 gutter py-8 `}
    >
      <div className="flex gap-12 w-full items-center">
        <div className={'flex-1'}>
          <div className={'-ml-4'}>
            <Hamburger
              size={20}
              label={'main menu'}
              toggled={isOpen(DropdownState.HAMBURGER)}
              toggle={() => toggle(DropdownState.HAMBURGER)}
            />
          </div>
          <FullScreenNav open={isOpen(DropdownState.HAMBURGER)} menu={menu} />
        </div>
        <Link
          className="flex-1 flex items-center self-center leading-[3rem] md:leading-[4rem] justify-center grow w-full h-full"
          to="/"
        >
          <Heading
            className="text-center uppercase text-2xl lg:text-3xl whitespace-nowrap"
            as={isHome ? 'h1' : 'h2'}
          >
            {title}
          </Heading>
        </Link>

        <nav className={'flex-1'}>
          <ul className={' flex justify-end items-center uppercase gap-10'}>
            <li className={'w-6 h-6 hidden md:block'}>
              <button onClick={() => toggle(DropdownState.SEARCH)}>
                <IconSearch strokeWidth={1} width={'100%'} height={'100%'} />
              </button>
              <Dropdown
                menuRef={menuRef}
                idx={DropdownState.SEARCH}
                openDropdown={openDropdown}
              >
                <DesktopSearch isOpen={isOpen(DropdownState.SEARCH)} />
              </Dropdown>
            </li>
            <li className={'w-6 h-6 hidden md:block'}>
              <button onClick={() => toggle(DropdownState.COUNTRYSELECTOR)}>
                <IconGlobe
                  fill={'transparent'}
                  width={'100%'}
                  height={'100%'}
                  viewBox={'0 0 24 24'}
                />
              </button>
            </li>
            <li className={'w-6 h-6 hidden md:block'}>
              <AccountLink />
            </li>
            <li className={'w-6 h-6'}>
              <CartCount isIcon={true} openCart={openCart} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
interface FullScreenNavProps {
  open: boolean;
}

const FullScreenNav = ({
  open,
  menu,
}: FullScreenNavProps & {menu?: EnhancedMenu}) => {
  const root = useRootLoaderData();
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerVariants = {
    hidden: {opacity: 0},
    visible: {opacity: 1, transition: {staggerChildren: 0.1}},
  };

  const itemVariants = {
    hidden: {opacity: 0},
    visible: {opacity: 1},
  };
  useEffect(() => {
    if (!scrollRef.current) return;
    if (open) {
      disableBodyScroll(scrollRef.current, {reserveScrollBarGap: true});
    } else {
      enableBodyScroll(scrollRef.current);
    }
  }, [open]);
  return (
    <AnimatePresence>
      {open && (
        <m.div
          className="fixed inset-0 bg-white justify-center z-60"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <div ref={scrollRef} className={'nav-offset flex flex-wrap h-full'}>
            <div className={'flex-1 gutter w-full '}>
              <div
                className={
                  ' flex items-center justify-center relative max-w-screen-2xl mx-12 md:mx-24 sm:mx-16 mt-8 sm:mt-6 md:mt-0'
                }
              >
                <m.ul className="space-y-4 flex-1 ">
                  {menu?.items.map((item) => (
                    <m.li key={item.id} variants={itemVariants}>
                      <Link
                        className="font-medium text-display xl:text-oversize animated-underline uppercase"
                        to={item.to}
                      >
                        {item.title}
                      </Link>
                    </m.li>
                  ))}
                </m.ul>
              </div>
            </div>
            <div className={'flex-shrink-0 w-full flex justify-end flex-col'}>
              <div className={'flex-1 border-b md:border-b-0'}></div>
              {root.layout?.footerMenu && (
                <Footer menu={root.layout.footerMenu} />
              )}
            </div>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
};

function Dropdown({
  idx,
  children,
  openDropdown,
  menuRef,
}: {
  idx: number;
  children: ReactNode;
  openDropdown: number | null;
  menuRef?: RefObject<HTMLDivElement>;
}) {
  return (
    <>
      <m.div
        ref={menuRef}
        className={`${
          openDropdown === idx ? 'opened' : ''
        } absolute left-0 top-0 w-full desktop-nav bg-contrast -z-10`}
      >
        {children}
      </m.div>
    </>
  );
}

function DesktopSearch({isOpen}: {isOpen: boolean}) {
  const params = useParams();
  const {t} = useTranslation();

  return (
    <Form
      method="get"
      className={''}
      action={params.locale ? `/${params.locale}/search` : '/search'}
    >
      <Input
        autoComplete={'off'}
        type="search"
        variant="search"
        placeholder={t('layout.header.ctas.search')}
        name="q"
        className={'text-display w-full text-left  gutter '}
        isFocused={isOpen}
      />
      <button
        type="submit"
        className="relative items-center justify-center w-8 h-8 focus:ring-primary/5 hidden"
      >
        <IconSearch strokeWidth={1} />
      </button>
    </Form>
  );
}

function CartDrawer({isOpen, onClose}: {isOpen: boolean; onClose: () => void}) {
  const rootData = useRootLoaderData();
  const {t} = useTranslation();

  return (
    <Drawer
      open={isOpen}
      onClose={onClose}
      heading={t('layout.cart.orderSummary')}
      openFrom="right"
    >
      <div className="grid">
        <Suspense fallback={<CartLoading />}>
          <Await resolve={rootData?.cart}>
            {(cart) => <Cart layout="drawer" onClose={onClose} cart={cart} />}
          </Await>
        </Suspense>
      </div>
    </Drawer>
  );
}

function AccountLink({
  className,
  useIcon = true,
}: {
  className?: string;
  useIcon?: boolean;
}) {
  const rootData = useRootLoaderData();
  const isLoggedIn = rootData?.isLoggedIn;
  const {t} = useTranslation();
  return (
    <Link to="/account" className={className}>
      {useIcon ? (
        <IconAccount strokeWidth={1} />
      ) : (
        <Suspense fallback={'Account'}>
          <Await resolve={isLoggedIn} errorElement={'Log In'}>
            {(isLoggedIn) =>
              isLoggedIn ? t('nav.account') : t('account.login')
            }
          </Await>
        </Suspense>
      )}
    </Link>
  );
}

function CartCount({
  openCart,
  isIcon = true,
  linkType = 'drawer',
}: {
  linkType?: 'drawer' | 'page';
  openCart: () => void;
  isIcon?: boolean;
}) {
  const rootData = useRootLoaderData();
  const params = useParams();
  const {t} = useTranslation();

  if (!isIcon) {
    return (
      <Suspense
        fallback={
          <Text
            as="span"
            onClick={openCart}
            size={'inherit'}
            className={'cursor-pointer font-normal'}
          >
            {t('layout.cart.title')}
          </Text>
        }
      >
        <Await resolve={rootData?.cart}>
          {(cart) => (
            <Text
              as="span"
              className={'cursor-pointer font-normal'}
              size={'inherit'}
              onClick={openCart}
            >
              {cart && cart?.totalQuantity > 0
                ? `Cart: ${cart.totalQuantity}`
                : 'Cart'}
            </Text>
          )}
        </Await>
      </Suspense>
    );
  } else {
    return linkType === 'drawer' ? (
      <button
        onClick={() => openCart()}
        className={
          'cursor-pointer font-normal text-inherit relative flex items-center justify-end focus:ring-primary/5 w-6 h-6'
        }
      >
        <IconCart strokeWidth={1} />
        <Suspense fallback={<Badge count={0} openCart={openCart} />}>
          <Await resolve={rootData?.cart}>
            {(cart) => (
              <Badge openCart={openCart} count={cart?.totalQuantity || 0} />
            )}
          </Await>
        </Suspense>
      </button>
    ) : (
      <Link
        className={
          'cursor-pointer font-normal text-inherit relative flex items-center justify-end focus:ring-primary/5 w-6 h-6'
        }
        to={params.locale ? `/${params.locale}/cart` : '/cart'}
      >
        <IconCart strokeWidth={1} />
        <Suspense fallback={<Badge count={0} openCart={openCart} />}>
          <Await resolve={rootData?.cart}>
            {(cart) => (
              <Badge openCart={openCart} count={cart?.totalQuantity || 0} />
            )}
          </Await>
        </Suspense>
      </Link>
    );
  }
}

function Badge({count}: {count: number; openCart: () => void}) {
  const BadgeCounter = useMemo(
    () => (
      <>
        {!count ?? (
          <div
            className={`text-contrast bg-primary absolute bottom-1 right-1 text-[0.625rem]  subpixel-antialiased h-3 min-w-[0.75rem] flex items-center justify-center leading-none text-center rounded-full w-auto px-[0.125rem] pb-px`}
          >
            <span>{count}</span>
          </div>
        )}
      </>
    ),
    [count],
  );

  return <>{BadgeCounter}</>;
}
