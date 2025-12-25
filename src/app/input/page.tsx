import { Container, Input, type InputProps } from "~/ui/components";

const variants: InputProps["variant"][] = ["solid", "transparent", "outline"];

export default function HomePage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <div className="flex gap-4">
          {variants.map((variant) => (
            <Input
              key={variant}
              variant={variant}
              className="max-w-[25ch]"
              placeholder="Placeholder..."
            />
          ))}
        </div>

        <div className="flex gap-4">
          {variants.map((variant) => (
            <Input
              key={variant}
              variant={variant}
              blur
              className="max-w-[25ch]"
              placeholder="Placeholder..."
            />
          ))}
        </div>

        <div className="flex gap-4">
          {variants.map((variant) => (
            <Input
              key={variant}
              variant={variant}
              className="max-w-[25ch]"
              aria-invalid
              placeholder="Placeholder..."
            />
          ))}
        </div>

        <hr />

        <div className="flex gap-4">
          {variants.map((variant) => (
            <Input
              key={variant}
              variant={variant}
              className="max-w-[25ch]"
              disabled
              placeholder="Placeholder..."
            />
          ))}
        </div>

        <div className="flex gap-4">
          {variants.map((variant) => (
            <Input
              key={variant}
              variant={variant}
              blur
              className="max-w-[25ch]"
              disabled
              placeholder="Placeholder..."
            />
          ))}
        </div>

        <div className="flex gap-4">
          {variants.map((variant) => (
            <Input
              key={variant}
              variant={variant}
              className="max-w-[25ch]"
              disabled
              aria-invalid
              placeholder="Placeholder..."
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
