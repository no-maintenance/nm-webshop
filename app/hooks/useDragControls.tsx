import {useState} from 'react';
import type {PanInfo} from 'framer-motion';

const MINIMUM_SWIPING_DISTANCE = 10;

interface SwipeHandlers {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
}

export const useDragControls = ({onSwipeLeft, onSwipeRight}: SwipeHandlers) => {
  const [deltaX, setDeltaX] = useState(0);

  const onDragEnd = () => {
    if (deltaX < -1 * MINIMUM_SWIPING_DISTANCE && onSwipeLeft) {
      onSwipeLeft();
    } else if (deltaX > MINIMUM_SWIPING_DISTANCE && onSwipeRight) {
      onSwipeRight();
    }
    setDeltaX(0);
  };

  const onDrag = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    setDeltaX(info.offset.x);
  };
  return {
    onDrag,
    onDragEnd,
  };
};
