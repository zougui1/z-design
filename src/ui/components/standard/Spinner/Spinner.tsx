import { Loader2Icon } from "lucide-react";
import { type VariantProps, tv } from "tailwind-variants";

export const spinnerStyles = tv({
  base: "animate-spin",
  variants: {
    color: {
      default: "text-default",
      neutral: "text-neutral",
      primary: "text-primary",
      secondary: "text-secondary",
      success: "text-success",
      warning: "text-warning",
      destructive: "text-destructive",
      info: "text-info",
    },
    size: {
      xs: "size-3",
      sm: "size-4",
      default: "size-5",
      lg: "size-6",
      xl: "size-8",
    },
  },
  defaultVariants: {
    color: "default",
    size: "default",
  },
});

export interface SpinnerProps
  extends
    Omit<React.ComponentProps<"svg">, "className" | "color">,
    VariantProps<typeof spinnerStyles> {
  className?: string;
}

export function Spinner({
  className,
  color = "default",
  size = "default",
  ...props
}: SpinnerProps) {
  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      data-slot="spinner"
      {...props}
      className={spinnerStyles({ color, size, className })}
    />
  );
}
