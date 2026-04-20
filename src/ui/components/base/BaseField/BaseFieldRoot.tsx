"use client";

import { type VariantProps, tv } from "tailwind-variants";

import { cnState } from "../../../utils";
import { PrimitiveField } from "../../primitives";

const variants = tv({
  base: "group/field flex w-full gap-2 data-[invalid=true]:text-destructive",

  variants: {
    orientation: {
      vertical: "flex-col *:w-full [&>.sr-only]:w-auto",
      horizontal: `flex-row items-center has-[>[data-slot=field-content]]:items-start
        *:data-[slot=field-label]:flex-auto has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px`,
      responsive: `flex-col *:w-full @md/field-group:flex-row @md/field-group:items-center
        @md/field-group:*:w-auto
        @md/field-group:has-[>[data-slot=field-content]]:items-start
        @md/field-group:*:data-[slot=field-label]:flex-auto
        [&>.sr-only]:w-auto @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px`,
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
});

export interface BaseFieldRootProps
  extends PrimitiveField.Root.Props, VariantProps<typeof variants> {}

export type BaseFieldRootState = PrimitiveField.Root.State;

export const BaseFieldRoot = ({
  className,
  orientation = "vertical",
  ...props
}: BaseFieldRootProps) => {
  return (
    <PrimitiveField.Root
      data-slot="field-root"
      data-orientation={orientation}
      {...props}
      className={cnState(variants({ orientation }), className)}
    />
  );
};

export namespace BaseFieldRoot {
  export type Props = BaseFieldRootProps;
  export type State = BaseFieldRootState;
}
