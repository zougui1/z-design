"use client";

import { useRender } from "@base-ui/react";
import { type VariantProps, tv } from "tailwind-variants";

const styles = tv({
  base: "sticky top-0 z-40 w-full",

  variants: {
    /**
     * Slide the header out of view while scrolling down and back in when at the
     * top of the page or scrolling up. Pure CSS — see the `.header-hide-on-scroll`
     * rule in `~/ui/styles/theme.css`, which drives it through a `scroll-state`
     * container query on the root scroller. Degrades to a plain sticky header on
     * browsers without scroll-state support.
     */
    hideOnScroll: {
      true: "header-hide-on-scroll",
    },
  },

  defaultVariants: {
    hideOnScroll: true,
  },
});

export interface HeaderProps
  extends useRender.ComponentProps<"header">, VariantProps<typeof styles> {}

export const Header = ({
  hideOnScroll,
  className,
  render,
  ...props
}: HeaderProps) => {
  return useRender({
    defaultTagName: "header",
    render,
    props: {
      ...props,
      className: styles({ hideOnScroll, className }),
    },
  });
};
