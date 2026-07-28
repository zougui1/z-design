"use client";

import { useMemo } from "react";

import { cnState } from "../../../utils";
import { PrimitiveField } from "../../primitives";

export interface BaseFieldErrorProps extends PrimitiveField.Error.Props {
  errors?: { message?: string }[];
}

export type BaseFieldErrorState = PrimitiveField.Error.State;

export const BaseFieldError = ({
  className,
  errors,
  children,
  ...props
}: BaseFieldErrorProps) => {
  const content = useMemo(() => {
    if (children) return children;
    if (!errors?.length) return;

    const uniqueErrors = [
      ...new Map(errors.map((error) => [error?.message, error])).values(),
    ];

    if (uniqueErrors?.length == 1) {
      return uniqueErrors[0]?.message;
    }

    return (
      <ul className="ml-4 flex list-disc flex-col gap-1">
        {uniqueErrors.map(
          (error, index) =>
            error?.message && <li key={index}>{error.message}</li>,
        )}
      </ul>
    );
  }, [errors, children]);

  if (!content) return null;

  return (
    <PrimitiveField.Error
      data-slot="field-error"
      role="alert"
      match
      {...props}
      className={cnState("text-destructive text-sm font-normal", className)}
    >
      {content}
    </PrimitiveField.Error>
  );
};

export namespace BaseFieldError {
  export type Props = BaseFieldErrorProps;
  export type State = BaseFieldErrorState;
}
