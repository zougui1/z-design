import { tv, type VariantProps } from "tailwind-variants";

const styles = tv({
  base: `bg- text-card-foreground flex flex-col gap-6 rounded-xl py-6
    shadow-md`,

  variants: {
    variant: {
      solid: "bg-card",
      transparent: "bg-card/50",
      outline: "border border-card",
    },

    blur: {
      true: "backdrop-blur-xs",
    },
  },
});

export interface CardRootProps
  extends React.ComponentProps<"div">, VariantProps<typeof styles> {}

export function CardRoot({
  className,
  variant,
  blur,
  ...props
}: CardRootProps) {
  return (
    <div
      data-slot="card-root"
      data-variant={variant}
      data-blur={blur ? "true" : undefined}
      className={styles({ className, variant, blur })}
      {...props}
    />
  );
}
