"use client";

import { BaseMeter } from "../base";

export interface MeterProps extends BaseMeter.Root.Props {
  label?: React.ReactNode;
  /** Shows the formatted value on the trailing edge. */
  showValue?: boolean;
  slotProps?: {
    track?: Partial<BaseMeter.Track.Props>;
    indicator?: Partial<BaseMeter.Indicator.Props>;
    label?: Partial<Omit<BaseMeter.Label.Props, "children">>;
    value?: Partial<BaseMeter.Value.Props>;
  };
}

export const Meter = ({
  label,
  showValue,
  slotProps,
  ...props
}: MeterProps) => {
  return (
    <BaseMeter.Root {...props}>
      {label && <BaseMeter.Label {...slotProps?.label}>{label}</BaseMeter.Label>}
      {showValue && <BaseMeter.Value {...slotProps?.value} />}

      <BaseMeter.Track {...slotProps?.track}>
        <BaseMeter.Indicator {...slotProps?.indicator} />
      </BaseMeter.Track>
    </BaseMeter.Root>
  );
};
