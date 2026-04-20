"use client";

import { cnState } from "../../../utils";
import { PrimitiveField } from "../../primitives";

export interface BaseFieldLabelProps extends PrimitiveField.Label.Props {}

export type BaseFieldLabelState = PrimitiveField.Label.State;

export const BaseFieldLabel = ({
  className,
  ...props
}: BaseFieldLabelProps) => {
  return (
    <PrimitiveField.Label
      data-slot="field-label"
      {...props}
      className={cnState(
        `group/field-label peer/field-label has-data-checked:border-primary/30
        has-data-checked:bg-primary/5 dark:has-data-checked:border-primary/20
        dark:has-data-checked:bg-primary/10 flex w-fit gap-2 leading-snug
        group-data-[disabled=true]/field:opacity-50
        has-[>[data-slot=field]]:rounded-lg has-[>[data-slot=field]]:border
        *:data-[slot=field]:p-2.5`,
        "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col",
        className,
      )}
    />
  );
};

export namespace BaseFieldLabel {
  export type Props = BaseFieldLabelProps;
  export type State = BaseFieldLabelState;
}
