import { BaseAspectRatio, Container, Typography } from "~/ui/components";
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

const ratios = [
  { label: "1 / 1", value: 1 / 1 },
  { label: "4 / 3", value: 4 / 3 },
  { label: "16 / 9", value: 16 / 9 },
] as const;

export default function BaseAspectRatioPage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <Section title="BaseAspectRatio">
          {ratios.map((ratio) => (
            <div key={ratio.label} className="w-64">
              <BaseAspectRatio
                ratio={ratio.value}
                className="bg-muted flex items-center justify-center rounded-lg"
              >
                <span className="text-muted-foreground text-sm">
                  {ratio.label}
                </span>
              </BaseAspectRatio>
            </div>
          ))}
        </Section>
      </div>
    </Container>
  );
}
