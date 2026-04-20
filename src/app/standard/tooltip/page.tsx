import { BaseButton, Container, Typography } from "~/ui/components/base";
import { Tooltip } from "~/ui/components/standard";
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

export default function TooltipPage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <Section title="Tooltip">
          {(["left", "top", "bottom", "right"] as const).map((side) => (
            <Tooltip key={side} side={side} content={<p>Add to library</p>}>
              <BaseButton variant="outline" className="w-fit capitalize">
                {side}
              </BaseButton>
            </Tooltip>
          ))}
        </Section>
      </div>
    </Container>
  );
}
