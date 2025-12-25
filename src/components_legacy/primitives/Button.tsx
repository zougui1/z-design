import { Slot } from "@radix-ui/react-slot";
import { tv, type VariantProps } from "tailwind-variants";

export const buttonStyles = tv({
  base: `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md
    text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50
    [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0
    focus-visible:outline-2 focus-visible:outline-offset-2
    aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer`,
  variants: {
    variant: {
      solid: "shadow-sm",
      outline: `border-2 shadow-sm`,
      ghost: "",
      link: "underline-offset-4 hover:underline",
    },
    lagacyvariant: {
      default: "bg-default text-default-foreground hover:bg-default/90",
      primary: "bg-primary text-primary-foreground hover:bg-primary/90",
      destructive: `bg-destructive text-white hover:bg-destructive/90 dark:bg-destructive/60`,
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost:
        "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
      link: "text-primary underline-offset-4 hover:underline",
    },

    color: {
      default: "focus-visible:outline-default/80",
      primary: "focus-visible:outline-primary/80",
      secondary: "focus-visible:outline-secondary",
      destructive: "focus-visible:outline-destructive",
    },

    size: {
      default: "h-9 px-4 py-2 has-[>svg]:px-3",
      sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
      lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
      icon: "size-9",
      "icon-sm": "size-8",
      "icon-lg": "size-10",
    },

    blur: {
      true: "backdrop-blur-sm",
    },
  },
  defaultVariants: {
    variant: "solid",
    color: "default",
    size: "default",
  },

  compoundVariants: [
    //#region variant=solid
    {
      variant: "solid",
      color: "default",
      className: `bg-default text-default-foreground shadow-default/10
        hover:bg-default/90`,
    },
    {
      variant: "solid",
      color: "primary",
      className: `bg-primary text-primary-foreground shadow-primary/10
        hover:bg-primary/90`,
    },
    {
      variant: "solid",
      color: "secondary",
      className: `bg-secondary text-secondary-foreground shadow-secondary/10
        hover:bg-secondary/80`,
    },
    {
      variant: "solid",
      color: "destructive",
      className: `bg-destructive text-white shadow-destructive/10
        hover:bg-destructive/90`,
    },
    //#endregion

    //#region variant=outline
    {
      variant: "outline",
      color: "default",
      className: `text-default border-default shadow-default/10
        hover:bg-default/20`,
    },
    {
      variant: "outline",
      color: "primary",
      className: `text-primary border-primary shadow-primary/10
        hover:bg-primary/20`,
    },
    {
      variant: "outline",
      color: "secondary",
      className: `text-gray-400 border-secondary shadow-secondary/10
        hover:bg-secondary/40`,
    },
    {
      variant: "outline",
      color: "destructive",
      className: `text-destructive border-destructive shadow-destructive/10
        hover:bg-destructive/20`,
    },
    //#endregion

    //#region variant=ghost
    {
      variant: "ghost",
      color: "default",
      className: `text-default
        hover:bg-default/20`,
    },
    {
      variant: "ghost",
      color: "primary",
      className: `text-primary
        hover:bg-primary/20`,
    },
    {
      variant: "ghost",
      color: "secondary",
      className: `text-gray-400 hover:bg-secondary/40`,
    },
    {
      variant: "ghost",
      color: "destructive",
      className: `text-destructive
        hover:bg-destructive/20`,
    },
    //#endregion

    //#region variant=link
    {
      variant: "link",
      color: "default",
      className: "text-default",
    },
    {
      variant: "link",
      color: "primary",
      className: "text-primary",
    },
    {
      variant: "link",
      color: "secondary",
      className: "text-gray-400",
    },
    {
      variant: "link",
      color: "destructive",
      className: "text-destructive",
    },
    //#endregion
  ],
});

export interface ButtonProps
  extends
    Omit<React.ComponentProps<"button">, "color">,
    VariantProps<typeof buttonStyles> {
  asChild?: boolean;
}

export function Button({
  className,
  variant = "solid",
  size = "default",
  color = "default",
  asChild,
  blur,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      data-color={color}
      className={buttonStyles({ variant, color, size, blur, className })}
      {...props}
    />
  );
}
