import { AvatarGroup } from "~/ui/components";
import { Container, Typography } from "~/ui/components/base";
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

export default function AvatarPage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <Section title="Avatar Group">
          <AvatarGroup
            maxItems={3}
            items={[
              {
                key: 1,
                src: "https://github.com/shadcn.png",
                alt: "@shadcn",
              },
              {
                key: 2,
                src: "https://github.com/maxleiter.png",
                alt: "@maxleiter",
              },
              {
                key: 3,
                src: "https://github.com/evilrabbit.png",
                alt: "@evilrabbit",
              },
              {
                key: 4,
                src: "https://github.com/evilrabbit.png",
                alt: "@evilrabbit",
              },
              {
                key: 5,
                src: "https://github.com/evilrabbit.png",
                alt: "@evilrabbit",
              },
            ]}
          />
        </Section>
      </div>
    </Container>
  );
}
