"use client";

import { type ColumnDef, DataTable, Typography } from "~/ui/components";

interface Invoice {
  invoice: string;
  status: "paid" | "pending" | "overdue";
  method: string;
  amount: number;
}

const invoices: Invoice[] = [
  { invoice: "INV-001", status: "paid", method: "Credit Card", amount: 250 },
  { invoice: "INV-002", status: "pending", method: "PayPal", amount: 150 },
  { invoice: "INV-003", status: "overdue", method: "Bank Transfer", amount: 350 },
  { invoice: "INV-004", status: "paid", method: "Credit Card", amount: 450 },
  { invoice: "INV-005", status: "paid", method: "PayPal", amount: 550 },
];

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const columns: ColumnDef<Invoice>[] = [
  {
    id: "invoice",
    accessorKey: "invoice",
    header: "Invoice",
    enableSorting: true,
  },
  {
    id: "status",
    accessorKey: "status",
    header: "Status",
    enableSorting: true,
    cell: ({ getValue }) => (
      <span className="capitalize">{getValue<string>()}</span>
    ),
  },
  {
    id: "method",
    accessorKey: "method",
    header: "Method",
  },
  {
    id: "amount",
    accessorKey: "amount",
    header: "Amount",
    enableSorting: true,
    meta: { cell: { className: "text-right" }, header: { className: "ml-auto" } },
    cell: ({ getValue }) => (
      <div className="text-right font-medium">
        {currency.format(getValue<number>())}
      </div>
    ),
  },
];

export function DataTableDemo() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <Typography.H2>Default</Typography.H2>
        <DataTable columns={columns} data={invoices} getRowId={(row) => row.invoice} />
      </div>

      <div className="flex flex-col gap-4">
        <Typography.H2>Empty</Typography.H2>
        <DataTable
          columns={columns}
          data={[]}
          getRowId={(row) => row.invoice}
          emptyMessage="No invoices yet."
        />
      </div>
    </div>
  );
}
