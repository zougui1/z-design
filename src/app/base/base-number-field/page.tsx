import { Minus, Plus } from "lucide-react";

import {
  BaseInput,
  BaseNumberField,
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

export default function BaseNumberFieldPage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <Section title="BaseNumberField">
          <BaseNumberField.Root
            id="number-fieldd-1"
            defaultValue={100}
            className="flex flex-col items-start gap-1"
          >
            <label htmlFor="number-fieldd-1" className="text-sm font-bold">
              Amount
            </label>

            <BaseNumberField.Group className="flex">
              <BaseNumberField.Decrement
                className="border-border rounded-l-sm border bg-clip-padding"
              >
                <Minus />
              </BaseNumberField.Decrement>

              <BaseNumberField.Input
                className="w-24 rounded-none border-t border-b text-center
                  tabular-nums focus:z-1"
                render={<BaseInput />}
              />

              <BaseNumberField.Increment
                className="border-border rounded-r-sm border bg-clip-padding"
              >
                <Plus />
              </BaseNumberField.Increment>
            </BaseNumberField.Group>
          </BaseNumberField.Root>
        </Section>
      </div>
    </Container>
  );
}
