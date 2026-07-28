import { AspectRatio, Container, Typography } from "~/ui/components";
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

export default function AspectRatioPage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <Section title="Aspect Ratio">
          <div className="w-80">
            <AspectRatio ratio={16 / 9}>
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80"
                alt="Landscape"
              />
            </AspectRatio>
          </div>

          <div className="w-64">
            <AspectRatio ratio={1}>
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80"
                alt="Landscape"
              />
            </AspectRatio>
          </div>
        </Section>
      </div>
    </Container>
  );
}
