import { cn } from "~/ui/utils";

export interface BaseTextareaProps extends React.ComponentProps<"textarea"> {}

export function BaseTextarea({ className, ...props }: BaseTextareaProps) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        `border-border focus-visible:border-primary
        focus-visible:ring-primary/50 aria-invalid:ring-destructive/20
        focus-visible:aria-invalid:ring-destructive/50
        aria-invalid:border-destructive disabled:bg-background-light/50
        placeholder:text-muted-foreground bg-background-light
        field-sizing-content min-h-16 w-full min-w-0 rounded-sm border px-3
        py-1.5 text-base shadow-sm transition-colors outline-none
        focus-visible:ring-3 disabled:pointer-events-none
        disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-3
        md:text-sm`,
        className,
      )}
      {...props}
    />
  );
}
