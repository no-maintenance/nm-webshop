import type {Dispatch, ReactNode} from 'react';
import {useState} from 'react';
import {m, MotionConfig} from 'framer-motion';
import {useKeyPressEvent} from 'react-use';
import clsx from 'clsx';

import {useDragControls} from '~/hooks/useDragControls';

export function Carousel({
  children,
  size,
}: {
  children: ReactNode;
  size: number;
}) {
  const [index, setIndex] = useState(0);
  const goForward = () => index < size - 1 && setIndex(index + 1);
  const goBack = () => index > 0 && setIndex(index - 1);
  useKeyPressEvent('ArrowRight', goForward);

  useKeyPressEvent('ArrowLeft', goBack);
  const {onDrag, onDragEnd} = useDragControls({
    onSwipeLeft: () => goForward(),
    onSwipeRight: () => goBack(),
  });
  const buttonClasses =
    'absolute top-0 -mt-4 flex w-28 items-center justify-center rounded-full h-full';
  return (
    <MotionConfig transition={{duration: 0.7, ease: [0.32, 0.72, 0, 1]}}>
      <div className="h-full">
        <div className="mx-auto flex h-full max-w-7xl flex-col justify-center">
          <div className="relative overflow-hidden">
            <m.div
              drag="x"
              dragElastic={0}
              dragMomentum={false}
              onDrag={onDrag}
              onDragEnd={onDragEnd}
              animate={{x: `-${index * 100}%`}}
              className="flex"
            >
              {children}
            </m.div>
            {index > 0 && (
              <button
                className={clsx(buttonClasses, 'left-0')}
                onClick={() => setIndex(index - 1)}
              ></button>
            )}

            {index + 1 < size && (
              <button
                className={clsx(buttonClasses, 'right-0')}
                onClick={() => setIndex(index + 1)}
              ></button>
            )}
          </div>
          <Dots size={size} index={index} setIndex={setIndex} />
        </div>
      </div>
    </MotionConfig>
  );
}
const Dots = ({
  size,
  index,
  setIndex,
}: {
  size: number;
  index: number;
  setIndex: Dispatch<number>;
}) => (
  <div className="my-1 flex gap-2 flex-row justify-center relative">
    {[...Array(size)].map((_, i) => (
      <m.button
        initial={false}
        animate={{
          width: index === i ? 45 : 20,
          opacity: index === i ? 1 : 0.5,
        }}
        className={`py-4 flex items-center`}
        key={`dot--${i * size}`}
        onClick={() => setIndex(i)}
      >
        <m.span
          className={`w-full h-[1px] ${
            index === i ? 'bg-black' : 'bg-black/50'
          }`}
        ></m.span>
      </m.button>
    ))}
  </div>
);
