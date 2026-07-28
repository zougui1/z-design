"use client";

import { useRender } from "@base-ui/react";
import { tv, type VariantProps } from "tailwind-variants";

const footerStyles = tv({
  // faintly tinted surface (matches the header) so the footer reads as
  // distinct from the body rather than a plain extension of it
  base: "bg-[color-mix(in_oklab,var(--accent)_35%,var(--background))] px-4 py-3",

  variants: {
    borderless: {
      false: "border-border border-t",
    },
  },
});

export interface DataTableFooterProps
  extends useRender.ComponentProps<"div">, VariantProps<typeof footerStyles> {}

export const DataTableFooter = ({
  className,
  borderless,
  render,
  ...props
}: DataTableFooterProps) => {
  const element = useRender({
    defaultTagName: "div",
    render,
    props: {
      ...props,
      className: footerStyles({ borderless, className }),
    },
  });

  return element;
};
