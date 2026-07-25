"use client";

import { BaseFieldset } from "../../base";

export interface FieldsetProps extends BaseFieldset.Root.Props {
  legend?: React.ReactNode;
  slotProps?: {
    legend?: Partial<Omit<BaseFieldset.Legend.Props, "children">>;
  };
}

export const Fieldset = ({
  legend,
  children,
  slotProps,
  ...props
}: FieldsetProps) => {
  return (
    <BaseFieldset.Root {...props}>
      {legend && (
        <BaseFieldset.Legend {...slotProps?.legend}>
          {legend}
        </BaseFieldset.Legend>
      )}
      {children}
    </BaseFieldset.Root>
  );
};
