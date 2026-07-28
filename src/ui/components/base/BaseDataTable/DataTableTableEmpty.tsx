"use client";

import { BaseTable as Table } from "../BaseTable";
import { useDataTableContext } from "./context";

export interface DataTableTableEmptyProps extends Table.BodyProps {
  emptyMessage?: React.ReactNode;
  hoverEffect?: Table.RowProps["hoverEffect"];
  borderless?: Table.RowProps["borderless"];
  slotProps?: {
    row?: Partial<Table.RowProps>;
    cell?: Partial<Table.CellProps>;
  };
}

export const DataTableTableEmpty = ({
  children,
  emptyMessage = "No data",
  slotProps,
  borderless,
  ...props
}: DataTableTableEmptyProps) => {
  const { table } = useDataTableContext();
  const { rows } = table.getRowModel();

  if (rows.length) {
    return null;
  }

  return (
    <Table.Body {...props}>
      {children ?? (
        <Table.Row borderless={borderless} {...slotProps?.row}>
          <Table.Cell
            colSpan={table.getAllColumns().length}
            className="text-muted-foreground py-6 text-center text-base font-medium"
            {...slotProps?.cell}
          >
            {emptyMessage}
          </Table.Cell>
        </Table.Row>
      )}
    </Table.Body>
  );
};
