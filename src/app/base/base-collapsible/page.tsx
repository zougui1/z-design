import { BaseCollapsible, Container, Typography } from "~/ui/components/base";
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

export default function BasecollapsiblePage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <Section title="Basecollapsible">
          <BaseCollapsible.Root className="min-h-36 w-56">
            <BaseCollapsible.Trigger className="rounded-md">
              <BaseCollapsible.TriggerIcon />
              Recovery keys
            </BaseCollapsible.Trigger>
            <BaseCollapsible.Panel
              className="mt-1 flex cursor-text flex-col justify-end gap-2
                rounded-xs py-2 pl-7 text-sm"
            >
              <div>alien-bean-pasta</div>
              <div>wild-irish-burrito</div>
              <div>horse-battery-staple</div>
            </BaseCollapsible.Panel>
          </BaseCollapsible.Root>
        </Section>
      </div>
    </Container>
  );
}
