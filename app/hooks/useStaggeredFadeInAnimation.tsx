import { stagger, useAnimate } from "framer-motion";
import {useEffect} from 'react';

export const staggerItems = stagger(0.1, {startDelay: 0.15});

function useStaggeredFadeInAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      'ul',
      {
        clipPath: isOpen
          ? 'inset(0% 0% 0% 0% round 10px)'
          : 'inset(10% 50% 90% 50% round 10px)',
      },
      {
        type: 'spring',
        bounce: 0,
        duration: 0.5,
      },
    );

    animate(
      '.product-card',
      {opacity: 1},
      {
        duration: 0.2,
        ease: 'easeInOut',
        delay: staggerItems,
      },
    );
  }, [isOpen]);

  return scope;
}
