import { Pagination } from "~/ui/components";
import { Container, Typography } from "~/ui/components/base";
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

      <div className={cn("flex flex-wrap gap-5", className)}>{children}</div>
    </div>
  );
};

const Row = ({ children }: { children?: React.ReactNode }) => {
  return <div className="flex flex-wrap gap-2">{children}</div>;
};

export default function PaginationPage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <Section title="Pagination">
          <Pagination page={1} lastPage={15} />
        </Section>
      </div>
    </Container>
  );
}
