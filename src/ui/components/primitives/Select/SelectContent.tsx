"use client";

import { Select as BaseSelect } from "@base-ui/react";
import { tv, type VariantProps } from "tailwind-variants";

import { SelectScrollUpArrow } from "./SelectScrollUpArrow";
import { SelectScrollDownArrow } from "./SelectScrollDownArrow";

const styles = tv({
  base: `data-open:animate-in
    data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0
    data-closed:zoom-out-95 data-open:zoom-in-95
    data-[side=bottom]:slide-in-from-top-2
    data-[side=left]:slide-in-from-right-2
    data-[side=right]:slide-in-from-left-2
    data-[side=top]:slide-in-from-bottom-2 relative
    isolate z-50 max-h-(--available-height) min-w-[max(var(--anchor-width),calc(var(--spacing)*36))]
    origin-(--transform-origin) overflow-x-hidden overflow-y-auto
    rounded-md shadow-md duration-100
    focus-visible:outline-primary focus-visible:outline-[3px] focus-visible:outline-offset-2`,

  variants: {
    variant: {
      solid: "bg-popover",
      transparent: "bg-popover/85",
      outline: "border-input border bg-popover/85",
    },

    blur: {
      true: "backdrop-blur-xs",
    },
  },

  defaultVariants: {
    variant: "outline",
  },
});

export interface SelectContentProps
  extends
    Omit<BaseSelect.Popup.Props, "className">,
    Pick<
      BaseSelect.Positioner.Props,
      "align" | "alignOffset" | "side" | "sideOffset" | "alignItemWithTrigger"
    >,
    VariantProps<typeof styles> {
  className?: string;
}

export function SelectContent({
  className,
  children,
  side = "bottom",
  sideOffset = 4,
  align = "center",
  alignOffset = 0,
  alignItemWithTrigger = false,
  variant,
  blur,
  ...props
}: SelectContentProps) {
  return (
    <BaseSelect.Portal>
      <BaseSelect.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        alignItemWithTrigger={alignItemWithTrigger}
        className="isolate z-50"
      >
        <BaseSelect.Popup
          data-slot="select-content"
          className={styles({ variant, blur, className })}
          {...props}
        >
          <SelectScrollUpArrow />

          <BaseSelect.List>{children}</BaseSelect.List>

          <SelectScrollDownArrow />
        </BaseSelect.Popup>
      </BaseSelect.Positioner>
    </BaseSelect.Portal>
  );
}
