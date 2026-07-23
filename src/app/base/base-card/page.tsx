import {
  BaseButton,
  BaseCard,
  BaseField,
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

export default function BaseCardPage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <Section title="Default">
          <BaseCard.Root className="w-full max-w-sm">
            <BaseCard.Header>
              <BaseCard.Title>Login to your account</BaseCard.Title>
              <BaseCard.Description>
                Enter your email below to login to your account
              </BaseCard.Description>
              <BaseCard.Action>
                <BaseButton variant="link">Sign Up</BaseButton>
              </BaseCard.Action>
            </BaseCard.Header>

            <BaseCard.Content>
              <div className="flex flex-col gap-6">
                <BaseField.Root>
                  <BaseField.Label>Email</BaseField.Label>
                  <BaseInput type="email" placeholder="m@example.com" />
                </BaseField.Root>

                <BaseField.Root>
                  <BaseField.Label>Password</BaseField.Label>
                  <BaseInput type="password" />
                </BaseField.Root>
              </div>
            </BaseCard.Content>

            <BaseCard.Footer className="flex-col gap-2">
              <BaseButton className="w-full">Login</BaseButton>
              <BaseButton variant="outline" className="w-full">
                Login with Google
              </BaseButton>
            </BaseCard.Footer>
          </BaseCard.Root>
        </Section>

        <Section title="With border header / footer">
          <BaseCard.Root className="w-full max-w-sm">
            <BaseCard.Header className="border-border border-b pb-6">
              <BaseCard.Title>Notifications</BaseCard.Title>
              <BaseCard.Description>
                You have 3 unread messages.
              </BaseCard.Description>
            </BaseCard.Header>

            <BaseCard.Content>
              <p className="text-sm">
                A set of beautifully designed components that you can customize,
                extend, and build on.
              </p>
            </BaseCard.Content>

            <BaseCard.Footer className="border-border justify-end border-t pt-6">
              <BaseButton variant="outline">Dismiss</BaseButton>
            </BaseCard.Footer>
          </BaseCard.Root>
        </Section>
      </div>
    </Container>
  );
}
