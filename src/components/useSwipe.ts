import { useRef } from 'react';

export function useSwipe(onSwipeLeft: () => void, onSwipeRight: () => void, threshold = 50) {
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
  };

  const onTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > threshold) {
      onSwipeLeft(); // swiped left = go next
    } else if (diff < -threshold) {
      onSwipeRight(); // swiped right = go prev
    }
  };

  return { onTouchStart, onTouchMove, onTouchEnd };
}
