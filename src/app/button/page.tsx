import { Container, Button, type ButtonProps } from "~/ui/components";

const variants: ButtonProps["variant"][] = [
  "solid",
  "outline",
  "ghost",
  "link",
];

const colors: ButtonProps["color"][] = [
  "default",
  "primary",
  "secondary",
  "destructive",
];

export default function HomePage() {
  return (
    <Container className="flex flex-col gap-4">
      {variants.map((variant) => (
        <div key={variant} className="flex gap-2">
          {colors.map((color) => (
            <Button key={color} variant={variant} color={color}>
              Click me
            </Button>
          ))}
        </div>
      ))}

      {variants
        .filter((v) => v !== "solid")
        .map((variant) => (
          <div key={variant} className="flex gap-2">
            {colors.map((color) => (
              <Button key={color} variant={variant} color={color} blur>
                Click me
              </Button>
            ))}
          </div>
        ))}
    </Container>
  );
}
