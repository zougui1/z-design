import {
  BaseField,
  BaseFieldset,
  BaseInput,
  Container,
  Typography,
} from "~/ui/components";
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

export default function BaseFieldPage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <Section title="BaseField">
          <BaseFieldset.Root className="w-full max-w-xs">
            <BaseField.Group>
              <BaseField.Root>
                <BaseField.Label htmlFor="username">Username</BaseField.Label>
                <BaseField.Control
                  render={
                    <BaseInput
                      id="username"
                      type="text"
                      placeholder="Max Leiter"
                    />
                  }
                />
                <BaseField.Description>
                  Choose a unique username for your account.
                </BaseField.Description>
              </BaseField.Root>

              <BaseField.Root>
                <BaseField.Label htmlFor="password">Password</BaseField.Label>
                <BaseField.Description>
                  Must be at least 8 characters long.
                </BaseField.Description>

                <BaseField.Control
                  render={
                    <BaseInput
                      id="password"
                      type="password"
                      placeholder="••••••••"
                    />
                  }
                />
              </BaseField.Root>
            </BaseField.Group>
          </BaseFieldset.Root>
        </Section>
      </div>
    </Container>
  );
}
