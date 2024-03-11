import type {Dispatch} from 'react';
import {useState} from 'react';

import type {ChildEnhancedMenuItem} from '~/lib/utils';
import {useTranslation} from '~/i18n';
import {Button, Heading, Link} from '~/components';

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
            {t('layout.header.headline.categories')}
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
            {t('layout.header.headline.collections')}
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
