"use client";

import { useIsMobile } from "~/ui/hooks";

import {
  DesktopCombobox,
  type DesktopComboboxProps,
  MobileCombobox,
  type MobileComboboxProps,
} from "./views";

export type ComboboxProps<
  Value,
  Multiple extends boolean | undefined = false,
> =
  | DesktopComboboxProps<Value, Multiple>
  | MobileComboboxProps<Value, Multiple>;

export function Combobox<Value, Multiple extends boolean | undefined = false>(
  props: ComboboxProps<Value, Multiple>,
) {
  const isMobile = useIsMobile();

  return isMobile ? (
    <MobileCombobox {...props} />
  ) : (
    <DesktopCombobox {...props} />
  );
}
