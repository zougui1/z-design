"use client";

import { BaseProgress } from "../../base";

export interface ProgressProps extends BaseProgress.Root.Props {
  label?: React.ReactNode;
  /** Shows the formatted value (e.g. `40%`) on the trailing edge. */
  showValue?: boolean;
  slotProps?: {
    track?: Partial<BaseProgress.Track.Props>;
    indicator?: Partial<BaseProgress.Indicator.Props>;
    label?: Partial<Omit<BaseProgress.Label.Props, "children">>;
    value?: Partial<BaseProgress.Value.Props>;
  };
}

export const Progress = ({
  label,
  showValue,
  slotProps,
  ...props
}: ProgressProps) => {
  return (
    <BaseProgress.Root {...props}>
      {label && (
        <BaseProgress.Label {...slotProps?.label}>{label}</BaseProgress.Label>
      )}

      {showValue && <BaseProgress.Value {...slotProps?.value} />}

      <BaseProgress.Track {...slotProps?.track}>
        <BaseProgress.Indicator {...slotProps?.indicator} />
      </BaseProgress.Track>
    </BaseProgress.Root>
  );
};
