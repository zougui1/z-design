"use client";

import { cn } from "../../../utils";
import { BaseTextarea, type BaseTextareaProps } from "../BaseTextarea";

export interface BaseInputGroupTextareaProps extends BaseTextareaProps {}

export const BaseInputGroupTextarea = ({
  className,
  ...props
}: BaseInputGroupTextareaProps) => {
  return (
    <BaseTextarea
      data-slot="input-group-control"
      className={cn(
        `flex-1 resize-none rounded-none border-0 bg-transparent py-2
        shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent
        aria-invalid:ring-0 dark:bg-transparent dark:disabled:bg-transparent`,
        className,
      )}
      {...props}
    />
  );
};

export namespace BaseInputGroupTextarea {
  export type Props = BaseInputGroupTextareaProps;
}
