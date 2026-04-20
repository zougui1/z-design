import { Container, Typography } from "~/ui/components/base";
import { cn } from "~/ui/utils";

const Color = ({
  className,
  color,
  name,
  foreground,
}: {
  className?: string;
  color: string;
  name?: string;
  foreground?: string;
}) => {
  return (
    <div className="grid">
      <div
        className={cn(
          "flex size-[150px] items-center justify-center rounded-md text-center",
          color,
          className,
        )}
      >
        {foreground && (
          <div className={foreground}>{foreground.replace(/^text-/, "")}</div>
        )}
      </div>

      <span>{name ?? color.replace(/^bg-/, "")}</span>
    </div>
  );
};

const Section = ({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) => {
  return (
    <div>
      <Typography.H2 className="pb-3">{title}</Typography.H2>

      <div className="flex flex-wrap gap-6">{children}</div>
    </div>
  );
};

export default function HomePage() {
  return (
    <Container className="flex flex-col gap-6">
      <Typography.H1>Palette</Typography.H1>

      <Section title="Background">
        <Color
          color="bg-background-dark"
          foreground={cn("text-foreground")}
          className="bg-background-dark border border-white"
        />
        <Color color="bg-background" foreground={cn("text-foreground")} />
        <Color color="bg-background-light" foreground={cn("text-foreground")} />
      </Section>

      <Section title="Neutral">
        <Color
          color="bg-neutral-dark"
          foreground={cn("text-foreground")}
          className="bg-neutral-dark border border-white"
        />
        <Color color="bg-neutral" foreground={cn("text-foreground")} />
        <Color color="bg-neutral-light" foreground={cn("text-foreground")} />
      </Section>

      <Section title="Primary">
        <Color
          color="bg-primary-dark"
          foreground={cn("text-primary-foreground")}
        />
        <Color color="bg-primary" foreground={cn("text-primary-foreground")} />
        <Color
          color="bg-primary-light"
          foreground={cn("text-primary-foreground")}
        />
      </Section>

      <Section title="Secondary">
        <Color
          color="bg-secondary-dark"
          foreground={cn("text-secondary-foreground")}
        />
        <Color
          color="bg-secondary"
          foreground={cn("text-secondary-foreground")}
        />
        <Color
          color="bg-secondary-light"
          foreground={cn("text-secondary-light-foreground")}
        />
      </Section>

      <Section title="Success">
        <Color
          color="bg-success-dark"
          foreground={cn("text-success-foreground")}
        />
        <Color color="bg-success" foreground={cn("text-success-foreground")} />
        <Color
          color="bg-success-light"
          foreground={cn("text-success-foreground")}
        />
      </Section>

      <Section title="Warning">
        <Color
          color="bg-warning-dark"
          foreground={cn("text-warning-foreground")}
        />
        <Color color="bg-warning" foreground={cn("text-warning-foreground")} />
        <Color
          color="bg-warning-light"
          foreground={cn("text-warning-light-foreground")}
        />
      </Section>

      <Section title="Destructive">
        <Color
          color="bg-destructive-dark"
          foreground={cn("text-destructive-foreground")}
        />
        <Color
          color="bg-destructive"
          foreground={cn("text-destructive-foreground")}
        />
        <Color
          color="bg-destructive-light"
          foreground={cn("text-destructive-light-foreground")}
        />
      </Section>

      <Section title="Info">
        <Color color="bg-info-dark" foreground={cn("text-info-foreground")} />
        <Color color="bg-info" foreground={cn("text-info-foreground")} />
        <Color color="bg-info-light" foreground={cn("text-info-foreground")} />
      </Section>
    </Container>
  );
}
