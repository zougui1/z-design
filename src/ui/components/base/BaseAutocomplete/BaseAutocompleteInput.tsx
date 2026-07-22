"use client";
import { cnState } from "../../../utils";
import { PrimitiveAutocomplete } from "../../primitives";

export interface BaseAutocompleteInputProps
  extends PrimitiveAutocomplete.Input.Props {}

export type BaseAutocompleteInputState = PrimitiveAutocomplete.Input.State;

export const BaseAutocompleteInput = ({
  className,
  ...props
}: BaseAutocompleteInputProps) => {
  return (
    <PrimitiveAutocomplete.Input
      data-slot="autocomplete-input"
      {...props}
      className={cnState(
        `border-border focus-visible:border-primary
        focus-visible:ring-primary/50 aria-invalid:ring-destructive/20
        focus-visible:aria-invalid:ring-destructive/50
        aria-invalid:border-destructive disabled:bg-background-light/50
        placeholder:text-muted-foreground bg-background-light h-9 w-full min-w-0
        rounded-sm border px-2.5 py-1 text-base shadow-sm transition-colors
        outline-none focus-visible:ring-3 disabled:pointer-events-none
        disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-3
        md:text-sm`,
        className,
      )}
    />
  );
};

export namespace BaseAutocompleteInput {
  export type Props = BaseAutocompleteInputProps;
  export type State = BaseAutocompleteInputState;
}
