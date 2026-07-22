import { BaseTable, Container, Typography } from "~/ui/components/base";

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

const total = invoices.reduce((sum, invoice) => sum + invoice.amount, 0);

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

export default function BaseTablePage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <Section title="BaseTable">
          <Typography.Muted>
            Low-level, unstyled-data table primitives. Compose the markup
            yourself: <code>Root</code> → <code>Viewport</code> →{" "}
            <code>Content</code> with <code>Header</code>, <code>Body</code> and{" "}
            <code>Footer</code>.
          </Typography.Muted>

          <BaseTable.Root>
            <BaseTable.Viewport>
              <BaseTable.Content>
                <BaseTable.Caption>
                  A list of your recent invoices.
                </BaseTable.Caption>

                <BaseTable.Header>
                  <BaseTable.Row borderless={false}>
                    <BaseTable.Head>Invoice</BaseTable.Head>
                    <BaseTable.Head>Status</BaseTable.Head>
                    <BaseTable.Head>Method</BaseTable.Head>
                    <BaseTable.Head className="text-right">
                      Amount
                    </BaseTable.Head>
                  </BaseTable.Row>
                </BaseTable.Header>

                <BaseTable.Body>
                  {invoices.map((invoice) => (
                    <BaseTable.Row
                      key={invoice.invoice}
                      borderless={false}
                      hoverEffect="highlight"
                    >
                      <BaseTable.Cell className="font-medium">
                        {invoice.invoice}
                      </BaseTable.Cell>
                      <BaseTable.Cell>{invoice.status}</BaseTable.Cell>
                      <BaseTable.Cell>{invoice.method}</BaseTable.Cell>
                      <BaseTable.Cell className="text-right">
                        {currency.format(invoice.amount)}
                      </BaseTable.Cell>
                    </BaseTable.Row>
                  ))}
                </BaseTable.Body>

                <BaseTable.Footer borderless={false}>
                  <BaseTable.Row>
                    <BaseTable.Cell colSpan={3}>Total</BaseTable.Cell>
                    <BaseTable.Cell className="text-right">
                      {currency.format(total)}
                    </BaseTable.Cell>
                  </BaseTable.Row>
                </BaseTable.Footer>
              </BaseTable.Content>
            </BaseTable.Viewport>
          </BaseTable.Root>
        </Section>
      </div>
    </Container>
  );
}
