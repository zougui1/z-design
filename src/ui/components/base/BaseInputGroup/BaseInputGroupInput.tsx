"use client";

import { cnState } from "../../../utils";
import { BaseInput, type BaseInputProps } from "../BaseInput";

export interface BaseInputGroupInputProps extends BaseInputProps {}

export const BaseInputGroupInput = ({
  className,
  ...props
}: BaseInputGroupInputProps) => {
  return (
    <BaseInput
      data-slot="input-group-control"
      className={cnState(
        `flex-1 rounded-none border-0 bg-transparent shadow-none ring-0
        focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0
        dark:bg-transparent dark:disabled:bg-transparent`,
        className,
      )}
      {...props}
    />
  );
};

export namespace BaseInputGroupInput {
  export type Props = BaseInputGroupInputProps;
}
