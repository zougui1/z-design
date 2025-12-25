"use client";

import { XIcon } from "lucide-react";

import { DialogPortal } from "./DialogPortal";
import { DialogBackdrop } from "./DialogBackdrop";
import { DialogPopup, type DialogPopupProps } from "./DialogPopup";
import { DialogClose } from "./DialogClose";
import { DialogViewport } from "./DialogViewport";

export interface DialogContentProps extends DialogPopupProps {
  hideCloseButton?: boolean;
  backdropBlur?: boolean;
}

export function DialogContent({
  children,
  hideCloseButton,
  backdropBlur,
  ...props
}: DialogContentProps) {
  const closeButton = !hideCloseButton && (
    <DialogClose
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
    </DialogClose>
  );

  const renderChildren = (): DialogPopupProps["children"] => {
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
    <DialogPortal>
      <DialogBackdrop blur={backdropBlur} />

      <DialogViewport>
        <DialogPopup {...props}>{renderChildren()}</DialogPopup>
      </DialogViewport>
    </DialogPortal>
  );
}
