"use client";

import { type RowData } from "@tanstack/react-table";

import { BaseDataTable } from "../base";

export type ColumnDef<
  TData extends RowData,
  TValue = unknown,
> = BaseDataTable.ColumnDef<TData, TValue>;

export interface DataTableProps<
  TData extends RowData = RowData,
  TValue = unknown,
> extends BaseDataTable.RootProps<TData, TValue> {
  emptyMessage?: React.ReactNode;
  hoverEffect?: BaseDataTable.TableBodyProps["hoverEffect"];
  borderless?: boolean;
  slotProps?: {
    viewport?: Partial<BaseDataTable.ViewportProps>;
    table?: Partial<BaseDataTable.TableProps>;
    header?: Partial<BaseDataTable.TableHeaderProps>;
    body?: Partial<BaseDataTable.TableBodyProps>;
    empty?: Partial<BaseDataTable.TableEmptyProps>;
  };
}

export function DataTable<
  TData extends RowData = RowData,
  TValue = unknown,
>({
  emptyMessage,
  hoverEffect = "highlight",
  borderless,
  slotProps,
  ...props
}: DataTableProps<TData, TValue>) {
  return (
    <BaseDataTable.Root {...props}>
      <BaseDataTable.Viewport {...slotProps?.viewport}>
        <BaseDataTable.Table {...slotProps?.table}>
          <BaseDataTable.TableHeader
            borderless={borderless}
            {...slotProps?.header}
          />

          <BaseDataTable.TableBody
            hoverEffect={hoverEffect}
            borderless={borderless}
            {...slotProps?.body}
          />

          <BaseDataTable.TableEmpty
            emptyMessage={emptyMessage}
            borderless={borderless}
            {...slotProps?.empty}
          />
        </BaseDataTable.Table>
      </BaseDataTable.Viewport>
    </BaseDataTable.Root>
  );
}
