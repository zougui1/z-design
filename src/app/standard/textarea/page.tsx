import { Container, Textarea, Typography } from "~/ui/components";
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

export default function TextareaPage() {
  return (
    <Container>
      <div className="flex max-w-md flex-col gap-8">
        <Section title="Default" className="flex-col">
          <Textarea placeholder="Enter text" />
        </Section>

        <Section title="With label" className="flex-col">
          <Textarea label="Bio" placeholder="Tell us about yourself" />
        </Section>

        <Section title="With description" className="flex-col">
          <Textarea
            label="Bio"
            placeholder="Tell us about yourself"
            description="A short description that appears on your profile."
          />
        </Section>

        <Section title="Disabled" className="flex-col">
          <Textarea disabled label="Bio" placeholder="Tell us about yourself" />
        </Section>

        <Section title="Invalid" className="flex-col">
          <Textarea
            label="Bio"
            placeholder="Tell us about yourself"
            description="A short description that appears on your profile."
            errors={[{ message: "This field is required." }]}
          />
        </Section>
      </div>
    </Container>
  );
}
