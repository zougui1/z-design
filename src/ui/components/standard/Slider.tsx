"use client";

import { BaseSlider } from "../base";

export interface SliderProps extends BaseSlider.Root.Props {
  label?: React.ReactNode;
  /** Show the current value next to the label. @default false */
  showValue?: boolean;
  slotProps?: {
    label?: Partial<BaseSlider.Label.Props>;
    value?: Partial<BaseSlider.Value.Props>;
    control?: Partial<BaseSlider.Control.Props>;
    track?: Partial<BaseSlider.Track.Props>;
    indicator?: Partial<BaseSlider.Indicator.Props>;
    thumb?: Partial<BaseSlider.Thumb.Props>;
  };
}

export const Slider = ({
  label,
  showValue,
  slotProps,
  ...props
}: SliderProps) => {
  const value = props.value ?? props.defaultValue;
  const thumbCount = Array.isArray(value) ? value.length : 1;

  return (
    <BaseSlider.Root {...props}>
      {(label || showValue) && (
        <div className="flex items-center justify-between gap-2">
          {label ? (
            <BaseSlider.Label {...slotProps?.label}>{label}</BaseSlider.Label>
          ) : (
            <span />
          )}
          {showValue && <BaseSlider.Value {...slotProps?.value} />}
        </div>
      )}

      <BaseSlider.Control {...slotProps?.control}>
        <BaseSlider.Track {...slotProps?.track}>
          <BaseSlider.Indicator {...slotProps?.indicator} />
          {Array.from({ length: thumbCount }).map((_, index) => (
            <BaseSlider.Thumb
              key={index}
              index={thumbCount > 1 ? index : undefined}
              {...slotProps?.thumb}
            />
          ))}
        </BaseSlider.Track>
      </BaseSlider.Control>
    </BaseSlider.Root>
  );
};
