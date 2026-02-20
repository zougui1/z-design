import {
  Container,
  Button,
  Card,
  Label,
  Input,
  Typography,
} from "~/ui/components";
import { cn } from "~/ui/utils";

const colors = [
  "default",
  "primary",
  "secondary",
  "success",
  "warning",
  "destructive",
  "info",
] as const;

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

const ExampleCard = ({ className, ...props }: Card.RootProps) => {
  return (
    <Card.Root {...props} className={cn("w-[400px]", className)}>
      <Card.Header>
        <Card.Title>Login to your account</Card.Title>
        <Card.Description>
          Enter your email below to login to your account
        </Card.Description>

        <Card.Action>
          <Button appearance="link">Sign Up</Button>
        </Card.Action>
      </Card.Header>

      <Card.Content>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-3">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4
                    hover:underline"
                >
                  Forgot your password?
                </a>
              </div>

              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </Card.Content>

      <Card.Footer className="flex-col gap-2">
        <Button type="submit" className="w-full" variant="primary">
          Login
        </Button>
        <Button className="w-full" variant="secondary">
          Login with Google
        </Button>
      </Card.Footer>
    </Card.Root>
  );
};

export default function HomePage() {
  return (
    <Container>
      <Section title="Card">
        {colors.map((color) => (
          <ExampleCard key={color} color={color} />
        ))}
      </Section>
    </Container>
  );
}
