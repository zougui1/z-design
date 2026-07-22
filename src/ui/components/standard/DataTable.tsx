"use client";

import { type RowData } from "@tanstack/react-table";

import { BaseDataTable } from "../base";
import { Pagination, type PaginationProps } from "./Pagination";

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
  /**
   * Keeps the header pinned while the table body scrolls. Enabled by default;
   * only has a visible effect when the table root is height-constrained.
   */
  stickyHeader?: boolean;
  /** When provided, renders a paginated footer below the table. */
  pagination?: PaginationProps;
  slotProps?: {
    viewport?: Partial<BaseDataTable.ViewportProps>;
    table?: Partial<BaseDataTable.TableProps>;
    header?: Partial<BaseDataTable.TableHeaderProps>;
    body?: Partial<BaseDataTable.TableBodyProps>;
    empty?: Partial<BaseDataTable.TableEmptyProps>;
    footer?: Partial<BaseDataTable.FooterProps>;
  };
}

export function DataTable<
  TData extends RowData = RowData,
  TValue = unknown,
>({
  emptyMessage,
  hoverEffect = "highlight",
  borderless,
  stickyHeader = true,
  pagination,
  slotProps,
  ...props
}: DataTableProps<TData, TValue>) {
  return (
    <BaseDataTable.Root {...props}>
      <BaseDataTable.Viewport {...slotProps?.viewport}>
        <BaseDataTable.Table {...slotProps?.table}>
          <BaseDataTable.TableHeader
            borderless={borderless}
            sticky={stickyHeader}
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

      {pagination && (
        <BaseDataTable.Footer borderless={borderless} {...slotProps?.footer}>
          <Pagination {...pagination} />
        </BaseDataTable.Footer>
      )}
    </BaseDataTable.Root>
  );
}
