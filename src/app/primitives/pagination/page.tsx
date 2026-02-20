import { Container, Typography, Pagination } from "~/ui/components";
import { cn } from "~/ui/utils";

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
          <Pagination.Root>
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
        </Section>
      </div>
    </Container>
  );
}
