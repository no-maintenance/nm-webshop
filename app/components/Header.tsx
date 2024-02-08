import {Await, Form, useLocation, useParams} from '@remix-run/react';
import type {Dispatch, ReactNode} from 'react';
import {useEffect, useRef, Suspense, useMemo, useState} from 'react';
import {CartForm} from '@shopify/hydrogen';
import {Menu, Search, ShoppingCart, User} from 'react-feather';
import {useTranslation} from 'react-i18next';

import type {ChildEnhancedMenuItem, EnhancedMenu} from '~/lib/utils';
import {useIsHomePath} from '~/lib/utils';
import {Drawer, useDrawer} from '~/components/Drawer';
import {Link, Input, Button, MobileDrawer} from '~/components';
import {useRootLoaderData} from '~/root';
import {CartLoading} from '~/components/CartLoading';
import {Cart} from '~/components/Cart';
import {useCartFetchers} from '~/hooks/useCartFetchers';
import {Heading, Text} from '~/components/Text';

export function Header({
  title,
  desktopMenu,
  mobileMenu,
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
      {mobileMenu && <MobileHeader menu={mobileMenu} title={title} />}
    </>
  );
}

function MobileHeader({title, menu}: {title: string; menu: EnhancedMenu}) {
  const {
    isOpen: isMenuOpen,
    openDrawer: openMenu,
    closeDrawer: closeMenu,
  } = useDrawer();
  const isHome = useIsHomePath();
  const location = useLocation();
  const lastLocationKey = useRef<string>('');
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const toggleMenu = () => (isMenuOpen ? closeMenu() : openMenu());
  useEffect(() => {
    if (lastLocationKey.current === location.key) return;
    lastLocationKey.current = location.key;
    closeMenu();
  }, [location]);
  return (
    <>
      <MobileDrawer
        open={isMenuOpen}
        onClose={closeMenu}
        openFrom="left"
        menu={menu}
      />
      <header
        role="banner"
        className={`mobile-header flex bg-contrast md:hidden items-center h-nav sticky z-40 top-0 justify-between w-full leading-none gap-4 gutter`}
      >
        <div
          className={`absolute top-0 left-0 h-full -z-10 w-full bg-contrast`}
        ></div>
        <div className="flex items-center justify-start w-full gap-4">
          <button
            onClick={toggleMenu}
            className={`relative text-primary flex items-center justify-center relative ${
              isMenuOpen ? 'pointer-events-none cursor-pointer' : ''
            }`}
          >
            <Menu strokeWidth={1} />
          </button>
          <button onClick={() => setOpenDropdown((d) => (d === 1 ? null : 1))}>
            <Search strokeWidth={1} size={20} />
          </button>
          <Dropdown idx={1} openDropdown={openDropdown}>
            <DesktopSearch isOpen={openDropdown === 1} />
          </Dropdown>
        </div>

        <Link
          className="flex items-center self-stretch leading-[3rem] md:leading-[4rem] justify-center grow w-full h-full"
          to="/"
        >
          <Heading
            size={'mid'}
            className="text-center uppercase text-2xl whitespace-nowrap"
            as={isHome ? 'h1' : 'h2'}
          >
            {title}
          </Heading>
        </Link>

        <div className="flex items-center justify-end w-full gap-4 ">
          <Link
            to="/account"
            className="relative flex items-center justify-center w-8 h-8 md:block"
          >
            <User size={20} strokeWidth={1} />
          </Link>
          <CartCount isIcon={true} openCart={() => null} />
        </div>
      </header>
    </>
  );
}

export function MenuDrawer({
  isOpen,
  onClose,
  menu,
}: {
  isOpen: boolean;
  onClose: () => void;
  menu: EnhancedMenu;
}) {
  return (
    <Drawer open={isOpen} onClose={onClose} openFrom="left" heading="Menu">
      <div className="grid">
        <MenuMobileNav menu={menu} onClose={onClose} />
      </div>
    </Drawer>
  );
}

function MenuMobileNav({
  menu,
  onClose,
}: {
  menu: EnhancedMenu;
  onClose: () => void;
}) {
  return (
    <nav className="grid gap-4 p-6 sm:gap-6 sm:px-12 sm:py-8">
      {/* Top level menu items */}
      {(menu?.items || []).map((item) => (
        <span key={item.id} className="block">
          <Link
            to={item.to}
            target={item.target}
            onClick={onClose}
            className={({isActive}) =>
              isActive ? 'pb-1 border-b -mb-px' : 'pb-1'
            }
          >
            <Text as="span" size="copy">
              {item.title}
            </Text>
          </Link>
        </span>
      ))}
    </nav>
  );
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
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const params = useParams();
  const location = useLocation();
  useEffect(() => {
    setOpenDropdown(null);
  }, [location]);

  const DesktopNavItemsRight = () => (
    <nav className={'flex-1 flex justify-end items-center uppercase gap-10'}>
      <Text
        onClick={() =>
          setOpenDropdown(
            openDropdown === (menu?.items.length ?? 1)
              ? null
              : menu?.items.length ?? 1,
          )
        }
        className={'cursor-pointer font-normal'}
        size={'inherit'}
      >
        Search
      </Text>
      <Dropdown idx={menu?.items.length ?? 1} openDropdown={openDropdown}>
        <DesktopSearch isOpen={openDropdown == menu?.items.length ?? 1} />
      </Dropdown>
      <AccountLink />
      <CartCount isIcon={false} openCart={openCart} />
    </nav>
  );

  const DesktopNavItemsLeft = () => (
    <nav className="flex pl-0 flex-1 items-center gap-10 uppercase justify-left w-full items-center">
      {/* Top level menu items */}
      {(menu?.items || []).map((item, idx) => {
        if (item.items.length) {
          return (
            <div key={`${item.id}--menu-item`}>
              <Text
                as={'span'}
                className={` cursor-pointer ${
                  openDropdown === idx ? 'font-bold' : 'font-normal'
                }`}
                size={'inherit'}
                onClick={() =>
                  setOpenDropdown(openDropdown === idx ? null : idx)
                }
              >
                {item.title}
              </Text>
              <div className={'sub-menu'}>
                <Dropdown openDropdown={openDropdown} idx={idx}>
                  <MegaMenu
                    items={item.items}
                    setOpenDropdown={setOpenDropdown}
                  />
                </Dropdown>
              </div>
            </div>
          );
        } else {
          return (
            <Link
              onClick={() => setOpenDropdown(null)}
              key={`${item.id}--no-megamenu`}
              to={item.to}
              target={item.target}
              prefetch="intent"
              className={''}
            >
              {item.title}
            </Link>
          );
        }
      })}
    </nav>
  );
  return (
    <header
      role="banner"
      className={`bg-contrast text-primary hidden h-nav md:flex items-center sticky z-40 top-0 justify-between w-full leading-none gap-8 gutter py-8 `}
    >
      <div className="flex gap-12 w-full items-center">
        <DesktopNavItemsLeft />
        <div className={'flex-1 text-center'}>
          <Link
            className=" uppercase text-2xl whitespace-nowrap"
            to="/"
            prefetch="intent"
          >
            {title}
          </Link>
        </div>
        <DesktopNavItemsRight />
      </div>
    </header>
  );
}

function MegaMenu({
  items,
  setOpenDropdown,
}: {
  items: ChildEnhancedMenuItem[];
  setOpenDropdown: Dispatch<number | null>;
}) {
  const CloseIcon = () => (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.99993 1.03716L0.999926 11.0372M11.7061 10L1.70606 1"
        stroke="#514F4F"
      />
    </svg>
  );
  const [openSubmenu, setOpenSubmenu] = useState<number>(0);
  const {t} = useTranslation();
  return (
    <div className={'gutter pb-12 mega-menu relative'}>
      <Button
        variant={'unstyled'}
        onClick={() => setOpenDropdown(null)}
        className={'absolute right-6 top-0'}
      >
        <CloseIcon />
      </Button>
      <div className={'uppercase grid grid-cols-2'}>
        <div>
          <Heading as={'h3'} size={'fine'} className={'categories pb-4'}>
            {t('nav.categories')}
          </Heading>
          {(items || []).map((item, idx) => (
            <div
              key={`top-level--${idx}`}
              className={`mr-auto text-left capitalize mega-menu-fade`}
            >
              {item?.items.length ? (
                <Button
                  onClick={() => setOpenSubmenu(idx)}
                  variant={'unstyled'}
                  className={`uppercase  sub-menu-title text-fine pb-1 ${
                    idx === openSubmenu ? 'font-bold' : ''
                  }`}
                >
                  {item.title}
                </Button>
              ) : (
                <Link
                  to={item.to}
                  className={'pb-1 block uppercase text-fine'}
                  onClick={() => setOpenDropdown(null)}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </div>
        <div className={'pl-9'}>
          <Heading as={'h3'} size={'fine'} className={'pb-10'}>
            {t('nav.collections')}
          </Heading>
          {(items || []).map(
            (item: ChildEnhancedMenuItem, idx) =>
              item?.items && (
                <nav
                  key={`submenu--${idx}`}
                  className={`${idx === openSubmenu ? '' : 'hidden'}`}
                >
                  {item.items.map(
                    (subItem, idx) =>
                      subItem.url && (
                        <div
                          key={`sub-menu-item--${idx}`}
                          className={` sub-menu-item--${idx}`}
                        >
                          <Link
                            to={subItem.to}
                            className={'text-fine pb-3 block'}
                            onClick={() => setOpenDropdown(null)}
                          >
                            {subItem.title}
                          </Link>
                        </div>
                      ),
                  )}
                </nav>
              ),
          )}
        </div>
      </div>
    </div>
  );
}

function Dropdown({
  idx,
  children,
  openDropdown,
}: {
  idx: number;
  children: ReactNode;
  openDropdown: number | null;
}) {
  return (
    <>
      <div
        className={`${
          openDropdown === idx ? 'opened' : ''
        } absolute left-0 top-0 w-full desktop-nav bg-contrast -z-10`}
      >
        {children}
      </div>
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
      action={params.lang ? `/${params.lang}/search` : '/search'}
    >
      <Input
        autoComplete={'off'}
        type="search"
        variant="search"
        placeholder={t('nav.search')}
        name="q"
        className={'text-display w-full text-left border-b-0 gutter '}
        isFocused={isOpen}
      />
      <button
        type="submit"
        className="relative items-center justify-center w-8 h-8 focus:ring-primary/5 hidden"
      >
        {/*<IconSearch />*/}
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
      heading={t('nav.order_summary')}
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

function AccountLink({className}: {className?: string}) {
  const rootData = useRootLoaderData();
  const isLoggedIn = rootData?.isLoggedIn;
  const {t} = useTranslation();
  return (
    <Link to="/account" className={className}>
      <Suspense fallback={'Account'}>
        <Await resolve={isLoggedIn} errorElement={'Log In'}>
          {(isLoggedIn) => (isLoggedIn ? t('nav.account') : t('account.login'))}
        </Await>
      </Suspense>
    </Link>
  );
}

function CartCount({
  openCart,
  isIcon = true,
}: {
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
            {t('nav.cart')}
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
    return (
      <Link
        className={
          'cursor-pointer font-normal text-inherit relative flex items-center justify-end  sm:w-6 h-6 focus:ring-primary/5'
        }
        to={params.lang ? `/${params.lang}/cart` : '/cart'}
      >
        <ShoppingCart strokeWidth={1} size={20} />
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
