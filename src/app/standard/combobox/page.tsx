import { Container, Typography } from "~/ui/components";
import { cn } from "~/ui/utils";

import { ComboboxBasic } from "./_ComboboxBasic";
import { ComboboxMultiple } from "./_ComboboxMultiple";

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

export default function BaseComboboxPage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <Section title="Basic" className="flex-col">
          <ComboboxBasic />
        </Section>

        <Section title="Multiple" className="flex-col">
          <ComboboxMultiple />
        </Section>
      </div>
    </Container>
  );
}
