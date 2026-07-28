"use client";

import { cnState } from "../../../utils";
import { PrimitiveFieldset } from "../../primitives";

export interface BaseFieldsetRootProps extends PrimitiveFieldset.Root.Props {}

export type BaseFieldsetRootState = PrimitiveFieldset.Root.State;

export const BaseFieldsetRoot = ({
  className,
  ...props
}: BaseFieldsetRootProps) => {
  return (
    <PrimitiveFieldset.Root
      data-slot="fieldset-root"
      {...props}
      className={cnState(
        `flex flex-col gap-4 has-[>[data-slot=checkbox-group]]:gap-3
        has-[>[data-slot=radio-group]]:gap-3`,
        className,
      )}
    />
  );
};

export namespace BaseFieldsetRoot {
  export type Props = BaseFieldsetRootProps;
  export type State = BaseFieldsetRootState;
}
