"use client";

import { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  type OnChangeFn,
  type Row,
  type RowData,
  type RowSelectionState,
  type SortingState,
  type TableOptions,
} from "@tanstack/react-table";

import { DataTableProvider, type DataTableContextValue } from "./context";
import { BaseTable as Table } from "../BaseTable";

export interface DataTableRootProps<
  TData extends RowData = RowData,
  TValue = unknown,
>
  extends Table.RootProps, Omit<DataTableContextValue<TData, TValue>, "table"> {
  getRowId?: (row: TData, index: number, parent?: Row<TData>) => string;

  sorting?: SortingState;
  onSortingChange?: OnChangeFn<SortingState>;
  enableSorting?: boolean;
  enableSortingRemoval?: boolean;

  rowSelection?: RowSelectionState;
  onRowSelectionChange?: OnChangeFn<RowSelectionState>;
  enableRowSelection?: boolean | ((row: Row<TData>) => boolean);

  /** Escape hatch for any additional `useReactTable` options. */
  tableOptions?: Partial<TableOptions<TData>>;
}

export function DataTableRoot<
  TData extends RowData = RowData,
  TValue = unknown,
>({
  data,
  columns,
  getRowId,
  sorting: sortingProp,
  onSortingChange,
  enableSorting,
  enableSortingRemoval = true,
  rowSelection: rowSelectionProp,
  onRowSelectionChange,
  enableRowSelection,
  tableOptions,
  ...props
}: DataTableRootProps<TData, TValue>) {
  const [internalSorting, setInternalSorting] = useState<SortingState>([]);
  const [internalSelection, setInternalSelection] =
    useState<RowSelectionState>({});

  const sorting = sortingProp ?? internalSorting;
  const rowSelection = rowSelectionProp ?? internalSelection;

  const table = useReactTable({
    data,
    columns,
    getRowId,

    getCoreRowModel: getCoreRowModel(),

    enableSorting,
    manualSorting: false,
    enableSortingRemoval,
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: onSortingChange ?? setInternalSorting,

    enableRowSelection,
    onRowSelectionChange: onRowSelectionChange ?? setInternalSelection,

    ...tableOptions,

    state: {
      sorting,
      rowSelection,
      ...tableOptions?.state,
    },
  });

  return (
    <DataTableProvider
      value={{
        data,
        columns,
        table,
      }}
    >
      <Table.Root {...props} />
    </DataTableProvider>
  );
}
