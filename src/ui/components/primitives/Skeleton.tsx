import { cn } from "../../utils";

export interface SkeletonProps extends React.ComponentProps<"div"> {}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-accent animate-pulse rounded-md", className)}
      {...props}
    />
  );
}
