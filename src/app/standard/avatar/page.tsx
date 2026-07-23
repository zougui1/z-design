import { Avatar, Container, Typography } from "~/ui/components";
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
        <Section title="Avatar">
          <Avatar
            src="https://github.com/shadcn.png"
            alt="@shadcn"
            fallback="CN"
          />
          <Avatar alt="@shadcn" fallback="CN" />
          <Avatar alt="@shadcn" />
        </Section>

        <Section title="With Badge">
          <Avatar
            src="https://github.com/evilrabbit.png"
            alt="@evilrabbit"
            slotProps={{
              badge: {
                className: "bg-green-600 dark:bg-green-800",
              },
            }}
          />
        </Section>
      </div>
    </Container>
  );
}
