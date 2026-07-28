"use client";

import { cnState } from "../../../utils";
import { PrimitiveSeparator } from "../../primitives";

export interface BaseSeparatorRootProps extends PrimitiveSeparator.Props {}

export type BaseSeparatorRootState = PrimitiveSeparator.State;

export const BaseSeparatorRoot = ({
  className,
  ...props
}: BaseSeparatorRootProps) => {
  return (
    <PrimitiveSeparator
      data-slot="separator-root"
      {...props}
      className={cnState(
        `bg-background-light shrink-0 data-[orientation=horizontal]:h-px
        data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px
        data-[orientation=vertical]:self-stretch`,
        className,
      )}
    />
  );
};

export namespace BaseSeparatorRoot {
  export type Props = BaseSeparatorRootProps;
  export type State = BaseSeparatorRootState;
}
