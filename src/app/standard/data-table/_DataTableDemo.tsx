"use client";

import { useState } from "react";

import { type ColumnDef, DataTable, Typography } from "~/ui/components";
import { formatCurrency } from "~/ui/utils";

interface Invoice {
  invoice: string;
  status: "paid" | "pending" | "overdue";
  method: string;
  amount: number;
}

const invoices: Invoice[] = [
  { invoice: "INV-001", status: "paid", method: "Credit Card", amount: 250 },
  { invoice: "INV-002", status: "pending", method: "PayPal", amount: 150 },
  {
    invoice: "INV-003",
    status: "overdue",
    method: "Bank Transfer",
    amount: 350,
  },
  { invoice: "INV-004", status: "paid", method: "Credit Card", amount: 450 },
  { invoice: "INV-005", status: "paid", method: "PayPal", amount: 550 },
];

const statuses = ["paid", "pending", "overdue"] as const;
const methods = ["Credit Card", "PayPal", "Bank Transfer"];

// larger dataset to exercise the scrollable body / sticky header + footer
const manyInvoices: Invoice[] = Array.from({ length: 40 }, (_, index) => ({
  invoice: `INV-${String(index + 1).padStart(3, "0")}`,
  status: statuses[index % statuses.length]!,
  method: methods[index % methods.length]!,
  amount: 100 + index * 25,
}));

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
    meta: {
      cell: { className: "text-right" },
      header: { className: "ml-auto" },
    },
    cell: ({ getValue }) => (
      <div className="text-right font-medium">
        {formatCurrency(getValue<number>())}
      </div>
    ),
  },
];

export function DataTableDemo() {
  const [page, setPage] = useState(1);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <Typography.H2>Default</Typography.H2>
        <DataTable
          columns={columns}
          data={invoices}
          getRowId={(row) => row.invoice}
        />
      </div>

      <div className="flex flex-col gap-4">
        <Typography.H2>With pagination</Typography.H2>
        <DataTable
          columns={columns}
          data={invoices}
          getRowId={(row) => row.invoice}
          pagination={{ page, lastPage: 20, onPageChange: setPage }}
        />
      </div>

      <div className="flex flex-col gap-4">
        <Typography.H2>Scrollable body (sticky header + footer)</Typography.H2>
        <Typography.Muted>
          Height-constrained: the body scrolls while the header stays pinned to
          the top and the pagination footer stays pinned to the bottom.
        </Typography.Muted>
        <DataTable
          className="max-h-100"
          columns={columns}
          data={manyInvoices}
          getRowId={(row) => row.invoice}
          pagination={{ page, lastPage: 20, onPageChange: setPage }}
        />
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
