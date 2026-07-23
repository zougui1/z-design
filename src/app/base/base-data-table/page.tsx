"use client";

import {
  BaseDataTable,
  Container,
  Typography,
} from "~/ui/components";

interface Invoice {
  invoice: string;
  status: string;
  method: string;
  amount: number;
}

const invoices: Invoice[] = [
  { invoice: "INV-001", status: "Paid", method: "Credit Card", amount: 250 },
  { invoice: "INV-002", status: "Pending", method: "PayPal", amount: 150 },
  { invoice: "INV-003", status: "Overdue", method: "Bank Transfer", amount: 350 },
  { invoice: "INV-004", status: "Paid", method: "Credit Card", amount: 450 },
  { invoice: "INV-005", status: "Paid", method: "PayPal", amount: 550 },
];

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const columns: BaseDataTable.ColumnDef<Invoice>[] = [
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
        {currency.format(getValue<number>())}
      </div>
    ),
  },
];

const Section = ({
  title,
  children,
}: {
  title?: React.ReactNode;
  children?: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-4">
      {title && <Typography.H2>{title}</Typography.H2>}
      {children}
    </div>
  );
};

export default function BaseDataTablePage() {
  return (
    <Container>
      <div className="flex flex-col gap-10">
        <Section title="BaseDataTable">
          <Typography.Muted>
            TanStack-powered composition primitives. <code>Root</code> wires up
            the table instance; the <code>TableHeader</code>/{" "}
            <code>TableBody</code>/<code>TableEmpty</code> parts render it. The
            standard <code>DataTable</code> is a thin wrapper over these.
          </Typography.Muted>

          <BaseDataTable.Root
            columns={columns}
            data={invoices}
            getRowId={(row) => row.invoice}
            enableSorting
          >
            <BaseDataTable.Viewport>
              <BaseDataTable.Table>
                <BaseDataTable.TableHeader sticky />
                <BaseDataTable.TableBody hoverEffect="highlight" />
                <BaseDataTable.TableEmpty />
              </BaseDataTable.Table>
            </BaseDataTable.Viewport>
          </BaseDataTable.Root>
        </Section>

        <Section title="Empty">
          <BaseDataTable.Root
            columns={columns}
            data={[]}
            getRowId={(row) => row.invoice}
          >
            <BaseDataTable.Viewport>
              <BaseDataTable.Table>
                <BaseDataTable.TableHeader sticky />
                <BaseDataTable.TableBody />
                <BaseDataTable.TableEmpty emptyMessage="No invoices yet." />
              </BaseDataTable.Table>
            </BaseDataTable.Viewport>
          </BaseDataTable.Root>
        </Section>
      </div>
    </Container>
  );
}
