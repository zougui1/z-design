import { Container, Select, Typography } from "~/ui/components";
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

const apples = [
  { label: "Gala", value: "gala" },
  { label: "Fuji", value: "fuji" },
  { label: "Honeycrisp", value: "honeycrisp" },
  { label: "Granny Smith", value: "granny-smith" },
  { label: "Pink Lady", value: "pink-lady" },
];

export default function SelectPage() {
  return (
    <Container>
      <div className="flex max-w-xs flex-col gap-8">
        <Section title="Default" className="flex-col">
          <Select items={apples} placeholder="Select an apple" />
        </Section>

        <Section title="With label" className="flex-col">
          <Select label="Apple" items={apples} placeholder="Select an apple" />
        </Section>

        <Section title="With description" className="flex-col">
          <Select
            label="Apple"
            items={apples}
            placeholder="Select an apple"
            description="Pick your favorite variety."
          />
        </Section>

        <Section title="Default value" className="flex-col">
          <Select label="Apple" items={apples} defaultValue="fuji" />
        </Section>

        <Section title="Disabled" className="flex-col">
          <Select
            disabled
            label="Apple"
            items={apples}
            placeholder="Select an apple"
          />
        </Section>

        <Section title="Invalid" className="flex-col">
          <Select
            label="Apple"
            items={apples}
            placeholder="Select an apple"
            description="Pick your favorite variety."
            errors={[{ message: "Please choose an apple." }]}
          />
        </Section>

        <Section title="Multiple" className="flex-col">
          <Select
            multiple
            label="Apple"
            items={apples}
            placeholder="Select apples"
          />
        </Section>

        <Section title="Multiple (disabled)" className="flex-col">
          <Select
            multiple
            disabled
            label="Apple"
            items={apples}
            placeholder="Select apples"
            defaultValue={["gala", "fuji"]}
          />
        </Section>
      </div>
    </Container>
  );
}
