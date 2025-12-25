import { tv, type VariantProps } from "tailwind-variants";

const styles = tv({
  base: `rounded-md flex items-center gap-2 h-9 w-full min-w-0
    shadow-sm text-base md:text-sm transition-[background,color,box-shadow]
    focus-within:outline-offset-2 focus-within:outline-[3px] focus-within:outline-primary
    has-[input[aria-invalid=true]]:outline-destructive`,

  variants: {
    variant: {
      solid: `bg-input
        hover:bg-input-accent
        focus-within:bg-input-accent
        has-[input[aria-invalid=true]]:bg-destructive
        has-[input[aria-invalid=true]]:hover:bg-destructive-accent
        has-[input[aria-invalid=true]]:focus-within:bg-destructive-accent
        [&_input[aria-invalid=true]]:placeholder:text-gray-200`,
      transparent: `bg-input/30
        hover:bg-input-accent/30
        focus-within:bg-input-accent/30
        has-[input[aria-invalid=true]]:bg-destructive/30
        has-[input[aria-invalid=true]]:hover:bg-destructive-accent/30
        has-[input[aria-invalid=true]]:focus-within:bg-destructive-accent/30`,
      outline: `border-input border
        hover:border-input-accent
        focus-within:border-input-accent
        has-[input[aria-invalid=true]]:border-destructive
        has-[input[aria-invalid=true]]:hover:border-destructive-accent
        has-[input[aria-invalid=true]]:focus-within:border-destructive-accent`,
    },

    blur: {
      true: "backdrop-blur-xs",
    },
  },
});

export interface InputRootProps
  extends React.ComponentProps<"div">, VariantProps<typeof styles> {}

export const InputRoot = ({
  className,
  variant,
  blur,
  ...props
}: InputRootProps) => {
  return (
    <div
      data-slot="input-root"
      className={styles({ variant, blur, className })}
      {...props}
    />
  );
};
