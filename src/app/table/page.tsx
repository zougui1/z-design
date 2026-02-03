import { Container, Typography, Table, Pagination } from "~/ui/components";
import { cn } from "~/ui/utils";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV008",
    paymentStatus: "Paid",
    totalAmount: "$180.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV009",
    paymentStatus: "Pending",
    totalAmount: "$420.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV010",
    paymentStatus: "Paid",
    totalAmount: "$610.00",
    paymentMethod: "Credit Card",
  },

  {
    invoice: "INV011",
    paymentStatus: "Unpaid",
    totalAmount: "$275.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV012",
    paymentStatus: "Paid",
    totalAmount: "$330.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV013",
    paymentStatus: "Pending",
    totalAmount: "$490.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV014",
    paymentStatus: "Paid",
    totalAmount: "$720.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV015",
    paymentStatus: "Unpaid",
    totalAmount: "$160.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV016",
    paymentStatus: "Paid",
    totalAmount: "$840.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV017",
    paymentStatus: "Pending",
    totalAmount: "$210.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV018",
    paymentStatus: "Paid",
    totalAmount: "$390.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV019",
    paymentStatus: "Unpaid",
    totalAmount: "$510.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV020",
    paymentStatus: "Paid",
    totalAmount: "$660.00",
    paymentMethod: "PayPal",
  },

  {
    invoice: "INV021",
    paymentStatus: "Pending",
    totalAmount: "$275.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV022",
    paymentStatus: "Paid",
    totalAmount: "$480.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV023",
    paymentStatus: "Unpaid",
    totalAmount: "$125.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV024",
    paymentStatus: "Paid",
    totalAmount: "$950.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV025",
    paymentStatus: "Pending",
    totalAmount: "$360.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV026",
    paymentStatus: "Paid",
    totalAmount: "$410.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV027",
    paymentStatus: "Unpaid",
    totalAmount: "$580.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV028",
    paymentStatus: "Paid",
    totalAmount: "$220.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV029",
    paymentStatus: "Pending",
    totalAmount: "$740.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV030",
    paymentStatus: "Paid",
    totalAmount: "$305.00",
    paymentMethod: "Bank Transfer",
  },

  {
    invoice: "INV031",
    paymentStatus: "Unpaid",
    totalAmount: "$460.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV032",
    paymentStatus: "Paid",
    totalAmount: "$520.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV033",
    paymentStatus: "Pending",
    totalAmount: "$195.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV034",
    paymentStatus: "Paid",
    totalAmount: "$880.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV035",
    paymentStatus: "Unpaid",
    totalAmount: "$640.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV036",
    paymentStatus: "Paid",
    totalAmount: "$270.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV037",
    paymentStatus: "Pending",
    totalAmount: "$355.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV038",
    paymentStatus: "Paid",
    totalAmount: "$990.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV039",
    paymentStatus: "Unpaid",
    totalAmount: "$410.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV040",
    paymentStatus: "Paid",
    totalAmount: "$560.00",
    paymentMethod: "Credit Card",
  },

  {
    invoice: "INV041",
    paymentStatus: "Pending",
    totalAmount: "$230.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV042",
    paymentStatus: "Paid",
    totalAmount: "$710.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV043",
    paymentStatus: "Unpaid",
    totalAmount: "$150.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV044",
    paymentStatus: "Paid",
    totalAmount: "$845.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV045",
    paymentStatus: "Pending",
    totalAmount: "$390.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV046",
    paymentStatus: "Paid",
    totalAmount: "$620.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV047",
    paymentStatus: "Unpaid",
    totalAmount: "$275.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV048",
    paymentStatus: "Paid",
    totalAmount: "$910.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV049",
    paymentStatus: "Pending",
    totalAmount: "$485.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV050",
    paymentStatus: "Paid",
    totalAmount: "$340.00",
    paymentMethod: "PayPal",
  },
];

const Section = ({
  title,
  children,
  className,
}: {
  title?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className="flex flex-col gap-4">
      {title && <Typography.H2>{title}</Typography.H2>}

      <div className={cn("flex flex-col flex-wrap gap-5", className)}>
        {children}
      </div>
    </div>
  );
};

export default function HomePage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <Section title="Table" className="flex-col">
          <Table.Root className="max-h-[500px]">
            <Table.Viewport>
              <Table.Content>
                <Table.Header sticky>
                  <Table.Row>
                    <Table.Head className="w-[100px]">Invoice</Table.Head>
                    <Table.Head>Status</Table.Head>
                    <Table.Head>Method</Table.Head>
                    <Table.Head className="text-right">Amount</Table.Head>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {invoices.map((invoice, i) => (
                    <Table.Row
                      key={invoice.invoice}
                      data-state={i == 2 && "selected"}
                      hoverEffect="highlight"
                    >
                      <Table.Cell className="font-medium">
                        {invoice.invoice}
                      </Table.Cell>
                      <Table.Cell>{invoice.paymentStatus}</Table.Cell>
                      <Table.Cell>{invoice.paymentMethod}</Table.Cell>
                      <Table.Cell className="text-right">
                        {invoice.totalAmount}
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
                <Table.Footer>
                  <Table.Row>
                    <Table.Cell colSpan={3}>Total</Table.Cell>
                    <Table.Cell className="text-right">$2,500.00</Table.Cell>
                  </Table.Row>
                </Table.Footer>
              </Table.Content>
            </Table.Viewport>
          </Table.Root>
        </Section>

        <Section title="Borderless" className="flex-col">
          <Table.Root className="max-h-[500px]">
            <Table.Viewport>
              <Table.Content>
                <Table.Header sticky borderless>
                  <Table.Row borderless>
                    <Table.Head className="w-[100px]">Invoice</Table.Head>
                    <Table.Head>Status</Table.Head>
                    <Table.Head>Method</Table.Head>
                    <Table.Head className="text-right">Amount</Table.Head>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {invoices.map((invoice, i) => (
                    <Table.Row
                      key={invoice.invoice}
                      data-state={i == 2 && "selected"}
                      hoverEffect="highlight"
                      borderless
                    >
                      <Table.Cell className="font-medium">
                        {invoice.invoice}
                      </Table.Cell>
                      <Table.Cell>{invoice.paymentStatus}</Table.Cell>
                      <Table.Cell>{invoice.paymentMethod}</Table.Cell>
                      <Table.Cell className="text-right">
                        {invoice.totalAmount}
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
                <Table.Footer borderless>
                  <Table.Row>
                    <Table.Cell colSpan={3}>Total</Table.Cell>
                    <Table.Cell className="text-right">$2,500.00</Table.Cell>
                  </Table.Row>
                </Table.Footer>
              </Table.Content>
            </Table.Viewport>
          </Table.Root>
        </Section>

        <Section title="Pagination" className="flex-col">
          <Table.Root className="max-h-[500px]">
            <Table.Viewport
              className="inset-shadow-sm"
              style={
                {
                  "--tw-inset-shadow":
                    "inset 0 0 2px var(--tw-inset-shadow-color, rgb(0 0 0 / 1.05))",
                } as React.CSSProperties
              }
            >
              <Table.Content>
                <Table.Header sticky>
                  <Table.Row>
                    <Table.Head className="w-[100px]">Invoice</Table.Head>
                    <Table.Head>Status</Table.Head>
                    <Table.Head>Method</Table.Head>
                    <Table.Head className="text-right">Amount</Table.Head>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {invoices.map((invoice, i) => (
                    <Table.Row
                      key={invoice.invoice}
                      data-state={i == 2 && "selected"}
                      hoverEffect="highlight"
                    >
                      <Table.Cell className="font-medium">
                        {invoice.invoice}
                      </Table.Cell>
                      <Table.Cell>{invoice.paymentStatus}</Table.Cell>
                      <Table.Cell>{invoice.paymentMethod}</Table.Cell>
                      <Table.Cell className="text-right">
                        {invoice.totalAmount}
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
                <Table.Footer>
                  <Table.Row>
                    <Table.Cell colSpan={3}>Total</Table.Cell>
                    <Table.Cell className="text-right">$2,500.00</Table.Cell>
                  </Table.Row>
                </Table.Footer>
              </Table.Content>
            </Table.Viewport>

            <Pagination.Root className="bg-background border-t px-4 py-3">
              <Pagination.Content>
                <Pagination.Item>
                  <Pagination.Previous href="#" />
                </Pagination.Item>
                <Pagination.Item>
                  <Pagination.Link href="#">1</Pagination.Link>
                </Pagination.Item>
                <Pagination.Item>
                  <Pagination.Link href="#" isActive>
                    2
                  </Pagination.Link>
                </Pagination.Item>
                <Pagination.Item>
                  <Pagination.Link href="#">3</Pagination.Link>
                </Pagination.Item>
                <Pagination.Item>
                  <Pagination.Ellipsis />
                </Pagination.Item>
                <Pagination.Item>
                  <Pagination.Next href="#" />
                </Pagination.Item>
              </Pagination.Content>
            </Pagination.Root>
          </Table.Root>
        </Section>

        <Section title="Borderless Pagination" className="flex-col">
          <Table.Root className="max-h-[500px]">
            <Table.Viewport
              className="inset-shadow-sm"
              style={
                {
                  "--tw-inset-shadow":
                    "inset 0 0 2px var(--tw-inset-shadow-color, rgb(0 0 0 / 1.05))",
                } as React.CSSProperties
              }
            >
              <Table.Content>
                <Table.Header sticky borderless>
                  <Table.Row borderless>
                    <Table.Head className="w-[100px]">Invoice</Table.Head>
                    <Table.Head>Status</Table.Head>
                    <Table.Head>Method</Table.Head>
                    <Table.Head className="text-right">Amount</Table.Head>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {invoices.map((invoice, i) => (
                    <Table.Row
                      key={invoice.invoice}
                      data-state={i == 2 && "selected"}
                      hoverEffect="highlight"
                      borderless
                    >
                      <Table.Cell className="font-medium">
                        {invoice.invoice}
                      </Table.Cell>
                      <Table.Cell>{invoice.paymentStatus}</Table.Cell>
                      <Table.Cell>{invoice.paymentMethod}</Table.Cell>
                      <Table.Cell className="text-right">
                        {invoice.totalAmount}
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
                <Table.Footer borderless>
                  <Table.Row borderless>
                    <Table.Cell colSpan={3}>Total</Table.Cell>
                    <Table.Cell className="text-right">$2,500.00</Table.Cell>
                  </Table.Row>
                </Table.Footer>
              </Table.Content>
            </Table.Viewport>

            <Pagination.Root className="bg-background px-4 py-3">
              <Pagination.Content>
                <Pagination.Item>
                  <Pagination.Previous href="#" />
                </Pagination.Item>
                <Pagination.Item>
                  <Pagination.Link href="#">1</Pagination.Link>
                </Pagination.Item>
                <Pagination.Item>
                  <Pagination.Link href="#" isActive>
                    2
                  </Pagination.Link>
                </Pagination.Item>
                <Pagination.Item>
                  <Pagination.Link href="#">3</Pagination.Link>
                </Pagination.Item>
                <Pagination.Item>
                  <Pagination.Ellipsis />
                </Pagination.Item>
                <Pagination.Item>
                  <Pagination.Next href="#" />
                </Pagination.Item>
              </Pagination.Content>
            </Pagination.Root>
          </Table.Root>
        </Section>
      </div>
    </Container>
  );
}
