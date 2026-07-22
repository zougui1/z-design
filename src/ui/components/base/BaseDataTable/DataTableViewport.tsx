import { BaseTable as Table } from "../BaseTable";
import { cn } from "../../../utils";

export interface DataTableViewportProps extends Table.ViewportProps {}

export const DataTableViewport = ({
  style,
  className,
  ...props
}: DataTableViewportProps) => {
  return (
    <Table.Viewport
      // `min-h-0` lets the viewport shrink inside the grid so it can scroll
      // vertically when the table root has a height constraint; the sticky
      // header and the footer live outside this scroll area.
      // `shadow-none` drops the viewport's own drop shadow (the root card
      // already provides elevation) so it doesn't bleed onto the footer.
      className={cn(
        "inset-shadow-sm min-h-0 overflow-y-auto shadow-none",
        className,
      )}
      style={
        {
          "--tw-inset-shadow":
            "inset 0 0 2px var(--tw-inset-shadow-color, rgb(0 0 0 / 1.05))",
          ...style,
        } as React.CSSProperties
      }
      {...props}
    />
  );
};
