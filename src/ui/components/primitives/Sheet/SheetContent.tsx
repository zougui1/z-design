"use client";

import { XIcon } from "lucide-react";

import { SheetPortal } from "./SheetPortal";
import { SheetBackdrop } from "./SheetBackdrop";
import { SheetPopup, type SheetPopupProps } from "./SheetPopup";
import { SheetClose } from "./SheetClose";
import { SheetViewport } from "./SheetViewport";

export interface SheetContentProps extends SheetPopupProps {
  hideCloseButton?: boolean;
  backdropBlur?: boolean;
}

export function SheetContent({
  children,
  hideCloseButton,
  backdropBlur,
  ...props
}: SheetContentProps) {
  const closeButton = !hideCloseButton && (
    <SheetClose
      className="ring-offset-background focus:ring-ring
        data-[state=open]:bg-accent data-[state=open]:text-muted-foreground
        absolute top-4 right-4 cursor-pointer rounded-xs opacity-70
        transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2
        focus:outline-hidden disabled:pointer-events-none
        [&_svg]:pointer-events-none [&_svg]:shrink-0
        [&_svg:not([class*='size-'])]:size-6"
    >
      <XIcon />
      <span className="sr-only">Close</span>
    </SheetClose>
  );

  const renderChildren = (): SheetPopupProps["children"] => {
    if (typeof children !== "function")
      return (
        <>
          {children}
          {closeButton}
        </>
      );

    return function RenderChildren(context) {
      return (
        <>
          {children(context)}
          {closeButton}
        </>
      );
    };
  };

  return (
    <SheetPortal>
      <SheetBackdrop blur={backdropBlur} />

      <SheetViewport>
        <SheetPopup {...props}>{renderChildren()}</SheetPopup>
      </SheetViewport>
    </SheetPortal>
  );
}
