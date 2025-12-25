import { cn } from "~/ui/utils";

export interface InputControlProps extends React.ComponentProps<"input"> {}

export const InputControl = ({ className, ...props }: InputControlProps) => {
  return (
    <input
      data-slot="input-control"
      className={cn(
        "h-full w-full px-3 py-1 outline-none",

        "placeholder:text-muted-foreground",

        `file:text-foreground file:inline-flex file:h-7 file:border-0
        file:bg-transparent file:text-sm file:font-medium`,

        "selection:bg-default selection:text-default-foreground",

        `disabled:pointer-events-none disabled:cursor-not-allowed
        disabled:opacity-50`,
        className,
      )}
      {...props}
    />
  );
};
