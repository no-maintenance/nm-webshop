import type {MutableRefObject, ReactNode, ReactElement} from 'react';
import {Fragment, Suspense, useEffect, useState} from 'react';
import {Dialog, Transition} from '@headlessui/react';
import {Check, ChevronRight} from 'react-feather';
import {
  Await,
  Form,
  useFetcher,
  useLocation,
  useMatches,
  useParams,
} from '@remix-run/react';
import {AnimatePresence, m} from 'framer-motion';
import type {MenuItem} from '@shopify/hydrogen/storefront-api-types';

import {Heading, Input, Link} from '~/components';
import type {
  ChildEnhancedMenuItem,
  EnhancedMenu,
  ParentEnhancedMenuItem,
} from '~/lib/utils';
import {DEFAULT_LOCALE, usePrefixPathWithLocale} from '~/lib/utils';
import {useDragControls} from '~/hooks/useDragControls';
import type {Locale, Localizations} from '~/lib/type';
import {
  ChangeLocaleForm,
  getCountryUrlPath,
} from '~/components/CountrySelector';
import {useRootLoaderData} from '~/root';

interface NavStructure {
  children: NavStructure[];
  curr: MutableRefObject<EnhancedMenu>;
}

type MobileMenuItem = ParentEnhancedMenuItem & {
  items: Array<ChildEnhancedMenuItem | ReactElement>;
};
type MenuStack = Array<MobileMenuItem | ReactElement>;

interface MenuSliceProps {
  menuStack: MenuStack[];
  menuSlice: MenuStack;
  shiftRight: (item: MenuItem) => void;
}

// Animation variants
const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      x: direction < 0 ? -200 : 200,
      opacity: 0,
    };
  },
};
type Item = {
  title: string;
  component: ReactElement;
};
type MenuLevel = {
  title: string;
  menu: ReactNode;
};

/**
 * Drawer component that opens on user click.
 * @param heading - string. Shown at the top of the drawer.
 * @param open - boolean state. if true opens the drawer.
 * @param onClose - function should set the open state.
 * @param openFrom - right, left
 * @param children - react children node.
 */
export function MobileDrawer({
  open,
  onClose,
  openFrom = 'right',
  menu,
}: {
  menu: EnhancedMenu;
  open: boolean;
  onClose: () => void;
  openFrom: 'right' | 'left';
}) {
  const initMenuStack = [
    {
      title: '',
      menu: <InitialMenu menu={menu} />,
    },
  ];
  const [menuStack, setMenuStack] = useState<MenuLevel[]>(initMenuStack);

  function InitialMenu({menu}: {menu: EnhancedMenu}) {
    const dynamicMenuItems: ReactNode[] = [];
    for (const menuItem of menu.items) {
      dynamicMenuItems.push(
        <MenuItem key={`root-dynamic--${menuItem.id}`} menuItem={menuItem} />,
      );
    }
    return (
      <>
        <li className={'mobile-menu-group pb-10 min-h-[180px]'}>
          <ul>{...dynamicMenuItems}</ul>
        </li>
        <li className={'mobile-menu-group pb-10 '}>
          <ul>
            <ListItem>
              <CartLink key={'mobile-menu-cart-link'} />
            </ListItem>
            <ListItem>
              <MobileWishlistNavItem key={'mobile-wishlist'} />
            </ListItem>
            <ListItem>
              <AccountLink key={'mobile-menu-account-link'} />
            </ListItem>
          </ul>
        </li>
        <li>
          <ul>
            <ListItem>
              <Link to={'/pages/about'} key={'mobile-menu-about-link'}>
                About Us
              </Link>
            </ListItem>
            <ListItem>
              <Link to={'/pages/contact'} key={'mobile-menu-contact-link'}>
                Customer Support
              </Link>
            </ListItem>
            <ListItem>
              <Link to={'/pages/policies'} key={'mobile-menu-faqs-link'}>
                Frequently Asked Questions
              </Link>
            </ListItem>
            <ListItem>
              <MobileCountrySelector key={'mobile-menu-country-selector'} />
            </ListItem>
          </ul>
        </li>
      </>
    );
  }

  function MobileWishlistNavItem() {
    return (
      <Link to="/wishlist" className={'cursor-pointer'}>
        Wishlist
      </Link>
    );
  }

  const MenuItem = ({
    menuItem,
  }: {
    menuItem: ChildEnhancedMenuItem | ParentEnhancedMenuItem;
  }) => {
    if (!menuItem.items.length) {
      return (
        <ListItem>
          <Link className={'w-full uppercase'} to={menuItem.to}>
            <span>{menuItem.title}</span>
          </Link>
        </ListItem>
      );
    }
    return (
      <ListItem>
        <button
          className={'w-full flex justify-between items-center'}
          onClick={() =>
            goNext({
              title: menuItem.title,
              menu: getSubMenus(menuItem),
            })
          }
        >
          <span className={'uppercase'}>{menuItem.title}</span>
          <ChevronRight size={16} />
        </button>
      </ListItem>
    );
  };
  const getSubMenus = (
    menu: ParentEnhancedMenuItem | ChildEnhancedMenuItem,
  ) => {
    const items = [];
    if (menu.type === 'COLLECTION') {
      if (menu.to === '/collections/vintage') {
        items.push(
          <li
            key={`static-menu-group--${menu.id}`}
            className={'menu-group pb-10 min-h-[180px]'}
          >
            <ul>
              <ListItem>
                <Link to={menu.to} className={'uppercase'}>
                  View All
                </Link>
              </ListItem>
            </ul>
          </li>,
        );
      } else {
        items.push(
          <li
            key={`static-menu-group--${menu.id}`}
            className={'menu-group pb-10 min-h-[180px]'}
          >
            <ul>
              <ListItem>
                <Link to={menu.to} className={'uppercase'}>
                  View All
                </Link>
              </ListItem>
              <ListItem>
                <Link to={'/collections/new-releases'} className={'uppercase'}>
                  New Arrivals
                </Link>
              </ListItem>
            </ul>
          </li>,
        );
      }
    }
    for (const menuItem of menu.items) {
      items.push(<MenuItem key={menuItem.id} menuItem={menuItem} />);
    }
    return <>{...items}</>;
  };

  const [direction, setDirection] = useState(-1);

  const goNext = (newItem: MenuLevel) => {
    setDirection(1);
    setMenuStack((menuStack: MenuLevel[]) => [...menuStack, newItem]);
  };
  const goBack = () => {
    setDirection(-1);
    setMenuStack((stack) => stack.slice(0, -1));
  };
  const AccountLink = () => {
    const action = usePrefixPathWithLocale('/account/logout');
    const rootData = useRootLoaderData();
    return (
      <Suspense
        fallback={<Link to={'/account/login'}>Account &mdash; Log In</Link>}
      >
        <Await resolve={rootData?.customer}>
          {(customer) => (
            <>
              {customer?.email ? (
                <button
                  className={'w-full flex justify-between items-center'}
                  onClick={() =>
                    goNext({
                      title: 'Account',
                      menu: (
                        <>
                          <li className={'pb-10 min-h-[180px]'}>
                            <ul>
                              <ListItem>
                                <Link to={'/account/edit'}>
                                  Account Details
                                </Link>
                              </ListItem>
                              <ListItem>
                                <Link to={'/account/orders'}>
                                  Order History
                                </Link>
                              </ListItem>

                              <ListItem>
                                <Link to={'/account/addresses'}>Addresses</Link>
                              </ListItem>
                            </ul>
                          </li>
                          <li className={'pb-10'}>
                            <ul>
                              <ListItem>
                                <Link to={'/pages/contact'}>Support</Link>
                              </ListItem>
                              <ListItem>
                                <Link to={'/pages/appointments'}>
                                  Appointments
                                </Link>
                              </ListItem>
                              <ListItem>
                                <CartLink />
                              </ListItem>
                            </ul>
                          </li>
                          <ListItem>
                            <Form method={'post'} action={action}>
                              <button type={'submit'}>Logout</button>
                            </Form>
                          </ListItem>
                        </>
                      ),
                    })
                  }
                >
                  <span>Account &mdash; {customer?.email}</span>
                  <ChevronRight size={16} />
                </button>
              ) : (
                <Link to={'/account/login'}>Account &mdash; Log In</Link>
              )}
            </>
          )}
        </Await>
      </Suspense>
    );
  };

  const MobileCountrySelector = () => {
    const rootData = useRootLoaderData();
    const fetcher = useFetcher();
    const selectedLocale = rootData?.selectedLocale ?? DEFAULT_LOCALE;
    const {pathname, search} = useLocation();
    const pathWithoutLocale = `${pathname.replace(
      selectedLocale.pathPrefix,
      '',
    )}${search}`;

    const countries = (fetcher.data ?? {}) as Localizations;
    const defaultLocale = countries?.['default'];
    const defaultLocalePrefix = defaultLocale
      ? `${defaultLocale?.language}-${defaultLocale?.country}`
      : '';
    useEffect(() => {
      fetcher.load('/api/countries');
    }, []);

    const Countries = ({countries}: {countries: Localizations}) => {
      const groupedCountries = Object.values(countries).reduce(
        (acc: {[key: string]: Locale[]}, curr) => {
          const firstLetter = curr.label[0].toUpperCase();
          if (!acc[firstLetter]) {
            acc[firstLetter] = [];
          }
          acc[firstLetter].push(curr);
          return acc;
        },
        {},
      );
      const countryLetters = Object.keys(groupedCountries).sort();
      const defaultCountryUrlPath = getCountryUrlPath({
        countryLocale: defaultLocale,
        defaultLocalePrefix,
        pathWithoutLocale,
      });
      return (
        <li className={'flex items-start gap-4'}>
          <button className={'pl-2'} onClick={goBack}>
            &mdash;
          </button>
          <ul>
            <ListItem>
              <ChangeLocaleForm
                key={defaultLocale.country}
                redirectTo={defaultCountryUrlPath}
                buyerIdentity={{
                  countryCode: defaultLocale.country,
                }}
              >
                <button type="submit" className={'inline-flex'}>
                  {defaultLocale.label}
                  {selectedLocale.country === defaultLocale.country && (
                    <span className="ml-2">
                      <Check size={16} />
                    </span>
                  )}
                </button>
              </ChangeLocaleForm>
            </ListItem>
            {countryLetters.map((letter) => {
              return (
                <ListItem key={`mobile-country-letter--${letter}`}>
                  <Heading as={'h6'} size={'copy'} className={'mb-6 pt-8'}>
                    {letter}
                  </Heading>
                  <ul className={'mb-10'}>
                    {groupedCountries[letter].map((countryLocale) => {
                      const isSelected =
                        countryLocale.language === selectedLocale.language &&
                        countryLocale.country === selectedLocale.country;

                      const countryUrlPath = getCountryUrlPath({
                        countryLocale,
                        defaultLocalePrefix,
                        pathWithoutLocale,
                      });
                      return countryLocale.country !== defaultLocale.country ? (
                        <ListItem
                          key={`mobile-country--${countryLocale.country}`}
                        >
                          <ChangeLocaleForm
                            key={countryLocale.country}
                            redirectTo={countryUrlPath}
                            buyerIdentity={{
                              countryCode: countryLocale.country,
                            }}
                          >
                            <button type="submit" className={'inline-flex'}>
                              {countryLocale.label}
                              {isSelected && (
                                <span className="ml-2">
                                  <Check size={16} />
                                </span>
                              )}
                            </button>
                          </ChangeLocaleForm>
                        </ListItem>
                      ) : (
                        <Fragment
                          key={`mobile-country-default--locale`}
                        ></Fragment>
                      );
                    })}
                  </ul>
                </ListItem>
              );
            })}
          </ul>
        </li>
      );
    };
    const FallbackButton = () => (
      <button className={'w-full flex justify-between items-center'}>
        <span>{selectedLocale.label}</span>
        <ChevronRight size={16} />
      </button>
    );
    return (
      <Suspense fallback={<FallbackButton />}>
        <Await resolve={countries}>
          {(countries) => (
            <button
              className={'w-full flex justify-between items-center'}
              onClick={() =>
                goNext({
                  title: 'Country/Region',
                  menu: <Countries countries={countries} />,
                })
              }
            >
              <span>{selectedLocale.label}</span>
              <ChevronRight size={16} />
            </button>
          )}
        </Await>
      </Suspense>
    );
  };
  const offScreen = {
    right: 'translate-x-full',
    left: '-translate-x-full',
  };
  const location = useLocation();
  useEffect(() => {
    setDirection(-1);
    setMenuStack(initMenuStack);
  }, [location]);

  const {onDrag, onDragEnd} = useDragControls({
    onSwipeLeft: () => onClose(),
    onSwipeRight: () => menuStack.length > 1 && goBack(),
  });

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        as="aside"
        className="z-max lg:hidden bg-contrast relative  "
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="opened"
          enterFrom="opacity-0 left-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="backdrop-transition " />
        </Transition.Child>
        <div
          className={`fixed  h-full w-full top-0 z-50 ${
            openFrom === 'right' ? 'right-0' : ''
          }`}
        >
          <m.div
            drag="x"
            dragConstraints={
              openFrom === 'right'
                ? {left: 0, right: 400}
                : {left: -1000, right: 0}
            }
            initial={{translateX: 0}}
            animate={{translateX: 0}}
            exit={{translateX: '-100%'}}
            dragElastic={0}
            dragMomentum={false}
            onDrag={onDrag}
            onDragEnd={onDragEnd}
            className="fixed inset-0"
          >
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-300"
              enterFrom={offScreen[openFrom]}
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-300"
              leaveFrom="translate-x-0"
              leaveTo={offScreen[openFrom]}
            >
              <Dialog.Panel
                className={`gutter text-left align-middle transition-all shadow-xl h-screen-dynamic bg-contrast`}
              >
                <div className={'flex flex-col h-full gutter'}>
                  <div
                    className={
                      ' relative flex justify-between items-center h-nav'
                    }
                  >
                    <div className={'text-copy uppercase'}>
                      <AnimatePresence>
                        {menuStack.length > 1 && (
                          <m.button
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{duration: 0.2}}
                            onClick={goBack}
                            className={'uppercase'}
                          >
                            Back
                          </m.button>
                        )}
                      </AnimatePresence>
                    </div>
                    <AnimatePresence>
                      {menuStack[menuStack.length - 1].title ? (
                        <m.div
                          className={
                            'absolute left-1/2 uppercase -translate-x-1/2'
                          }
                          initial={{opacity: 0}}
                          animate={{opacity: 1}}
                          exit={{opacity: 0}}
                          transition={{duration: 0.2}}
                        >
                          <Heading as={'h2'} size={'copy'}>
                            {menuStack[menuStack.length - 1].title}
                          </Heading>
                        </m.div>
                      ) : (
                        <></>
                      )}
                    </AnimatePresence>
                    <button className={'uppercase text-copy'} onClick={onClose}>
                      Close
                    </button>
                  </div>
                  <nav
                    className={
                      ' whitespace-nowrap  relative h-full w-full flex-1 '
                    }
                  >
                    <AnimatePresence>
                      {menuStack.map(
                        (menuLevel, index) =>
                          menuStack.length - 1 === index && (
                            <m.ul
                              key={`mobile-level--${index}`}
                              custom={direction}
                              variants={variants}
                              initial={'enter'}
                              animate="center"
                              exit="exit"
                              transition={{
                                opacity: {duration: 0.2},
                              }}
                              className={
                                ' w-full h-full absolute top-0 left-0  bg-contrast pt-12 overflow-y-auto hiddenScroll'
                              }
                            >
                              {menuLevel.menu}
                            </m.ul>
                          ),
                      )}
                    </AnimatePresence>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </m.div>
        </div>
      </Dialog>
    </Transition>
  );
}

/* Use for associating arialabelledby with the title*/
MobileDrawer.Title = Dialog.Title;

const ListItem = ({children}: {children: ReactNode}) => (
  <li className={'mb-8'}>{children}</li>
);
const CartLink = () => {
  const rootData = useRootLoaderData();
  const params = useParams();
  return (
    <Link to={params.locale ? `${params.locale}/cart` : '/cart'}>
      <Suspense fallback={'Shopping Bag'}>
        <Await resolve={rootData?.cart}>
          {(cart) =>
            cart?.totalQuantity
              ? `Shopping Bag (${
                  cart?.totalQuantity ? cart?.totalQuantity : 0
                })`
              : 'Shopping Bag'
          }
        </Await>
      </Suspense>
    </Link>
  );
};
