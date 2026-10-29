"use client";

import * as React from "react";

// how far the finger must move before deciding if it's a scroll or a scrub
const GESTURE_THRESHOLD = 10;

interface Gesture {
  x: number;
  y: number;
  scrolling: boolean | null;
}

/**
 * Recharts activates the tooltip on touchmove and never clears it on
 * touchend, so swiping over a chart to scroll the page leaves the tooltip
 * stuck. The tooltip is hidden while a touch is in progress and only revealed
 * once the gesture turns out to be a tap or a horizontal scrub.
 */
export function useHideTooltipOnScroll() {
  const [hidden, setHidden] = React.useState(false);
  const gestureRef = React.useRef<Gesture | null>(null);

  const onTouchStart = React.useCallback((event: React.TouchEvent) => {
    const touch = event.touches[0];

    if (!touch) {
      return;
    }

    gestureRef.current = {
      x: touch.clientX,
      y: touch.clientY,
      scrolling: null,
    };
    setHidden(true);
  }, []);

  const onTouchMove = React.useCallback((event: React.TouchEvent) => {
    const gesture = gestureRef.current;
    const touch = event.touches[0];

    if (!gesture || !touch || gesture.scrolling !== null) {
      return;
    }

    const dx = Math.abs(touch.clientX - gesture.x);
    const dy = Math.abs(touch.clientY - gesture.y);

    if (Math.max(dx, dy) < GESTURE_THRESHOLD) {
      return;
    }

    gesture.scrolling = dy > dx;

    if (!gesture.scrolling) {
      setHidden(false);
    }
  }, []);

  const onTouchEnd = React.useCallback(() => {
    // a tap: the emulated mouse events that follow position the tooltip
    if (!gestureRef.current?.scrolling) {
      setHidden(false);
    }

    gestureRef.current = null;
  }, []);

  const onTouchCancel = React.useCallback(() => {
    gestureRef.current = null;
  }, []);

  return {
    hidden,
    handlers: { onTouchStart, onTouchMove, onTouchEnd, onTouchCancel },
  };
}
