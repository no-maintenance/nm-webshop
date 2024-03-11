import {Dialog, Transition} from '@headlessui/react';
import {Fragment, useEffect, useState} from 'react';
import {X} from 'react-feather';
import {useLocation} from '@remix-run/react';
import clsx from 'clsx';
import {IconClose} from '~/components/Icon';

export function Popup({
  children,
  onClose,
  open,
  maxWidth = 'sm:max-w-xl',
  fullScreenOnMobile = true,
  orientation = 'portrait',
}: {
  open: boolean;
  children: React.ReactNode;
  onClose: () => void;
  maxWidth?: string;
  fullScreenOnMobile?: boolean;
  orientation?: 'portrait' | 'landscape';
  isFullScreen?: boolean;
}) {
  const loc = useLocation();
  useEffect(() => {
    onClose();
  }, [loc]);
  const styles = fullScreenOnMobile
    ? {
        container: clsx([
          'sm:p-6',
          orientation === 'portrait' && 'sm:max-w-portrait',
        ]),
        close: 'hidden sm:block',
      }
    : {
        container: clsx([orientation === 'portrait' && 'max-w-portrait']),
        close: 'block',
      };
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <div
          className="relative z-50 nested-route"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
          id="modal-bg"
        >
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div
              onClick={onClose}
              className="fixed inset-0 transition-opacity bg-opacity-75 bg-primary/40"
              onKeyDown={(e) => e.key === 'Escape' && onClose()}
            ></div>
            <div className="flex items-center justify-center min-h-full p-4 text-center sm:p-0">
              <div
                className={`rounded relative flex-1 pt-5 pb-4 overflow-hidden text-left transition-all  shadow-xl bg-contrast sm:flex-none   sm:w-full my-8 ${styles['container']}`}
              >
                <div
                  className={`absolute top-0 right-0  pt-4 pr-4 ${styles['close']}`}
                >
                  <button
                    type="button"
                    className="p-4 -m-4 transition text-primary hover:text-primary/50 focus:outline-0 focus-visible:outline-0"
                    onClick={onClose}
                    data-test="close-panel"
                    onKeyDown={(e) => e.key === 'Escape' && onClose()}
                  >
                    <IconClose aria-label="Close panel" />
                  </button>
                </div>
                {children}
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

/* Use for associating arialabelledby with the title*/
Popup.Title = Dialog.Title;

export function usePopup(openDefault = false) {
  const [isOpen, setIsOpen] = useState(openDefault);

  function openPopup() {
    setIsOpen(true);
  }

  function closePopup() {
    setIsOpen(false);
  }

  return {
    isOpen,
    openPopup,
    closePopup,
  };
}
