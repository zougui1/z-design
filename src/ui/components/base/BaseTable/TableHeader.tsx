import { tv, type VariantProps } from "tailwind-variants";

const headerStyles = tv({
  // faintly tinted, opaque surface so the header reads as distinct from the
  // body (and safely covers rows scrolling underneath when sticky). Only a
  // little accent is mixed into the background so the tint stays subtle.
  base: "bg-[color-mix(in_oklab,var(--accent)_35%,var(--background))]",
  variants: {
    sticky: {
      true: "sticky top-0 z-10",
    },

    borderless: {
      true: "",
    },
  },

  compoundVariants: [
    {
      sticky: true,
      borderless: false,
      className: `after:absolute after:bottom-0 after:h-px after:w-full
        after:border-b after:border-border`,
    },
  ],
});

export interface TableHeaderProps
  extends React.ComponentProps<"thead">, VariantProps<typeof headerStyles> {}

export function TableHeader({
  className,
  sticky,
  borderless,
  ...props
}: TableHeaderProps) {
  return (
    <thead
      data-slot="table-header"
      className={headerStyles({ sticky, borderless, className })}
      {...props}
    />
  );
}
