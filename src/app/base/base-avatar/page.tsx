import { BaseAvatar, Container, Typography } from "~/ui/components";
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

export default function BaseAvatarPage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <Section title="BaseAvatar">
          <BaseAvatar.Root>
            <BaseAvatar.Image
              src="https://github.com/shadcn.png"
              alt="@shadcn"
            />
            <BaseAvatar.Fallback>CN</BaseAvatar.Fallback>
          </BaseAvatar.Root>
        </Section>

        <Section title="With Badge">
          <BaseAvatar.Root>
            <BaseAvatar.Image
              src="https://github.com/evilrabbit.png"
              alt="@evilrabbit"
            />
            <BaseAvatar.Fallback>ER</BaseAvatar.Fallback>
            <BaseAvatar.Badge className="bg-green-600 dark:bg-green-800" />
          </BaseAvatar.Root>
        </Section>

        <Section title="Base Avatar Group">
          <BaseAvatar.Group>
            <BaseAvatar.Root>
              <BaseAvatar.Image
                src="https://github.com/shadcn.png"
                alt="@shadcn"
              />
              <BaseAvatar.Fallback>CN</BaseAvatar.Fallback>
            </BaseAvatar.Root>
            <BaseAvatar.Root>
              <BaseAvatar.Image
                src="https://github.com/maxleiter.png"
                alt="@maxleiter"
              />
              <BaseAvatar.Fallback>LR</BaseAvatar.Fallback>
            </BaseAvatar.Root>
            <BaseAvatar.Root>
              <BaseAvatar.Image
                src="https://github.com/evilrabbit.png"
                alt="@evilrabbit"
              />
              <BaseAvatar.Fallback>ER</BaseAvatar.Fallback>
            </BaseAvatar.Root>
            <BaseAvatar.GroupCount>+3</BaseAvatar.GroupCount>
          </BaseAvatar.Group>
        </Section>
      </div>
    </Container>
  );
}
