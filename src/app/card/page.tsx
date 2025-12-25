import { Container, Button, Card, Label, Input } from "~/ui/components";
import { cn } from "~/ui/utils";

const variants: Card.RootProps["variant"][] = [
  "solid",
  "transparent",
  "outline",
];

const ExampleCard = ({ className, ...props }: Card.RootProps) => {
  return (
    <Card.Root {...props} className={cn("w-[400px]", className)}>
      <Card.Header>
        <Card.Title>Login to your account</Card.Title>
        <Card.Description>
          Enter your email below to login to your account
        </Card.Description>

        <Card.Action>
          <Button variant="link">Sign Up</Button>
        </Card.Action>
      </Card.Header>

      <Card.Content>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                variant="outline"
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

              <Input variant="outline" id="password" type="password" required />
            </div>
          </div>
        </form>
      </Card.Content>

      <Card.Footer className="flex-col gap-2">
        <Button type="submit" className="w-full" color="primary">
          Login
        </Button>
        <Button variant="outline" className="w-full" color="primary">
          Login with Google
        </Button>
      </Card.Footer>
    </Card.Root>
  );
};

export default function HomePage() {
  return (
    <Container>
      <div className="flex flex-wrap gap-4">
        {variants.map((variant) => (
          <ExampleCard key={variant} variant={variant} />
        ))}

        {variants
          .filter((v) => v !== "solid")
          .map((variant) => (
            <ExampleCard key={variant} variant={variant} blur />
          ))}
      </div>
    </Container>
  );
}
