import { Container, Typography } from "~/ui/components";
import { ZScrollArea } from "~/ui/components/standard";
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
    <div className="space-y-4">
      {title && <Typography.H2>{title}</Typography.H2>}

      <div className={cn("flex flex-wrap gap-5", className)}>{children}</div>
    </div>
  );
};

export default function HomePage() {
  return (
    <Container>
      <div className="mt-2 flex flex-col gap-8">
        <Section title="Vertical">
          <ZScrollArea className="flex h-[500px] flex-col gap-6" vertical>
            {new Array(25).fill(0).map((_, i) => (
              <p key={i}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
                voluptates nobis voluptatem ab est repellendus officiis
                voluptas, inventore libero. Harum vero ad cumque necessitatibus
                optio rem iusto odit dolore omnis!
              </p>
            ))}
          </ZScrollArea>
        </Section>

        <Section title="Horizontal" className="w-[700px]">
          <ZScrollArea className="flex min-w-0 gap-6 pb-6" horizontal>
            {new Array(10).fill(0).map((_, i) => (
              <div key={i} className="bg-background size-32" />
            ))}
          </ZScrollArea>
        </Section>

        <Section title="Vertical & Horizontal" className="w-[700px]">
          <ZScrollArea
            className="flex h-[500px] flex-col gap-6 pb-6"
            vertical
            horizontal
          >
            {new Array(10).fill(0).map((_, i) => (
              <div key={i} className="flex gap-6">
                {new Array(10).fill(0).map((_, i) => (
                  <div key={i} className="bg-background size-32" />
                ))}
              </div>
            ))}
          </ZScrollArea>
        </Section>
      </div>
    </Container>
  );
}
