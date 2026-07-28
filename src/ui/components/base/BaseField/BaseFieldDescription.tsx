"use client";

import { cnState } from "../../../utils";
import { PrimitiveField } from "../../primitives";

export interface BaseFieldDescriptionProps
  extends PrimitiveField.Description.Props {}

export type BaseFieldDescriptionState = PrimitiveField.Description.State;

export const BaseFieldDescription = ({
  className,
  ...props
}: BaseFieldDescriptionProps) => {
  return (
    <PrimitiveField.Description
      data-slot="field-description"
      {...props}
      className={cnState(
        `text-muted-foreground text-left text-sm leading-normal font-normal
        group-has-data-horizontal/field:text-balance
        [[data-variant=legend]+&]:-mt-1.5`,
        "last:mt-0 nth-last-2:-mt-1",
        "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        className,
      )}
    />
  );
};

export namespace BaseFieldDescription {
  export type Props = BaseFieldDescriptionProps;
  export type State = BaseFieldDescriptionState;
}
