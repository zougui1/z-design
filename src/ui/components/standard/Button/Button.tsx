"use client";

import { Check, X } from "lucide-react";

import { cn, cnState } from "~/ui/utils";

import { BaseButton } from "../../base";
import { PrimitiveCopy } from "../../primitives/PrimitiveCopy";
import { Spinner, type SpinnerProps } from "../Spinner";
import { Tooltip, type TooltipProps } from "../Tooltip";

export interface ButtonProps extends BaseButton.Props {
  loading?: boolean;
  tooltip?: Omit<TooltipProps, "children">;
  copyContent?: string | (() => string | undefined);
  slotProps?: {
    loadingContainer?: React.ComponentProps<"div">;
    spinner?: Partial<SpinnerProps>;
  };
  slots?: {
    copiedIndicator?: React.ReactElement;
    copyErrorIndicator?: React.ReactElement;
  };
}

export const Button = ({
  loading,
  tooltip,
  copyContent,
  disabled,
  children,
  slotProps,
  slots,
  ...props
}: ButtonProps) => {
  const isDisabled = disabled ?? loading;

  const ensureInteractable = (element: React.ReactElement) => {
    if (!isDisabled) return element;

    return <span>{element}</span>;
  };

  const renderWithTooltip = (
    element: React.ReactElement,
    tooltip: Omit<TooltipProps, "children"> | undefined,
  ) => {
    if (!tooltip) return element;

    return <Tooltip {...tooltip}>{ensureInteractable(element)}</Tooltip>;
  };

  const renderWithCopy = (element: React.ReactElement) => {
    if (!copyContent || isDisabled) return element;

    return (
      <PrimitiveCopy.Root content={copyContent}>
        <PrimitiveCopy.Trigger
          render={<BaseButton {...props} disabled={isDisabled} />}
        >
          <PrimitiveCopy.Content>{children}</PrimitiveCopy.Content>

          <PrimitiveCopy.Indicator
            match="copied"
            render={slots?.copiedIndicator ?? <Check />}
          />
          <PrimitiveCopy.Indicator
            match="error"
            render={slots?.copyErrorIndicator ?? <X />}
          />
        </PrimitiveCopy.Trigger>
      </PrimitiveCopy.Root>
    );
  };

  if (!loading) {
    return renderWithTooltip(
      renderWithCopy(
        <BaseButton {...props} disabled={isDisabled} children={children} />,
      ),
      tooltip,
    );
  }

  return (
    <div
      {...slotProps?.loadingContainer}
      className={cn(
        "relative inline-flex",
        slotProps?.loadingContainer?.className,
      )}
    >
      <BaseButton
        focusableWhenDisabled
        {...props}
        disabled={isDisabled}
        children={children}
        className={cnState("flex-1", props.className)}
      />

      <Spinner
        data-slot="button-spinner"
        color="default"
        {...slotProps?.spinner}
        className={cn(
          `absolute top-0 right-0 size-4.5 translate-x-1.5 -translate-y-1.5
          rounded-full`,
          slotProps?.spinner?.className,
        )}
      />
    </div>
  );
};
