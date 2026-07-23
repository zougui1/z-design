import { Container, Typography } from "~/ui/components";
import { Skeleton } from "~/ui/components/standard";

const Section = ({
  title,
  children,
}: {
  title?: React.ReactNode;
  children?: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-4">
      {title && <Typography.H2>{title}</Typography.H2>}
      {children}
    </div>
  );
};

const colors = [
  "default",
  "neutral",
  "primary",
  "secondary",
  "success",
  "warning",
  "destructive",
  "info",
] as const;

export default function SkeletonPage() {
  return (
    <Container>
      <div className="flex flex-col gap-10">
        <Section title="Skeleton">
          {/* card placeholder */}
          <div className="border-border flex w-80 items-center gap-4 rounded-lg border p-4">
            <Skeleton className="size-12 rounded-full" />
            <div className="flex flex-1 flex-col gap-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </div>
        </Section>

        <Section title="Colors">
          <div className="flex flex-col gap-3">
            {colors.map((color) => (
              <div key={color} className="flex items-center gap-3">
                <span className="text-muted-foreground w-24 text-sm capitalize">
                  {color}
                </span>
                <Skeleton color={color} className="h-4 flex-1" />
              </div>
            ))}
          </div>
        </Section>
      </div>
    </Container>
  );
}
