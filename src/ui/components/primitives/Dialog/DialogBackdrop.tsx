"use client";

import { Dialog as BaseDialog } from "@base-ui/react";
import { tv, type VariantProps } from "tailwind-variants";

const styles = tv({
  base: `data-open:animate-in data-closed:animate-out data-closed:fade-out-0
    data-open:fade-in-0 fixed inset-0 isolate bg-black/50 duration-100`,

  variants: {
    blur: {
      true: "supports-backdrop-filter:backdrop-blur-xs",
    },
  },
});

export interface DialogBackdropProps
  extends
    Omit<BaseDialog.Backdrop.Props, "className">,
    VariantProps<typeof styles> {
  className?: string;
}

export function DialogBackdrop({
  blur,
  className,
  ...props
}: DialogBackdropProps) {
  return (
    <BaseDialog.Backdrop
      data-slot="dialog-backdrop"
      className={styles({ blur, className })}
      {...props}
    />
  );
}
