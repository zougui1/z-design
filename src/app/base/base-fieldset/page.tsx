import {
  BaseField,
  BaseFieldset,
  BaseInput,
  Container,
  Typography,
} from "~/ui/components";
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

export default function BaseFieldsetPage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <Section title="BaseFieldset">
          <BaseFieldset.Root className="w-full max-w-xs">
            <BaseFieldset.Legend>Billing details</BaseFieldset.Legend>

            <BaseField.Root>
              <BaseField.Label>Company</BaseField.Label>
              <BaseField.Control
                placeholder="Enter company name"
                render={<BaseInput />}
              />
            </BaseField.Root>

            <BaseField.Root>
              <BaseField.Label>Tax ID</BaseField.Label>
              <BaseField.Control
                placeholder="Enter fiscal number"
                render={<BaseInput />}
              />
            </BaseField.Root>
          </BaseFieldset.Root>
        </Section>
      </div>
    </Container>
  );
}
