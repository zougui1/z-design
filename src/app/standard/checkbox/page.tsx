import { Checkbox, Container, Typography } from "~/ui/components";
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

export default function CheckboxPage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <Section title="Checkbox">
          <label className="flex items-center gap-2 text-base font-normal">
            <Checkbox />
            Enable notifications
          </label>
        </Section>
      </div>
    </Container>
  );
}
