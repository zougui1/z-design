import {
  Container,
  Spinner,
  type SpinnerProps,
  Typography,
} from "~/ui/components";

const colors: SpinnerProps["color"][] = [
  "default",
  "neutral",
  "primary",
  "secondary",
  "success",
  "warning",
  "destructive",
  "info",
];

const sizes: SpinnerProps["size"][] = ["xs", "sm", "default", "lg", "xl"];

export default function SpinnerPage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Typography.H2>Colors</Typography.H2>
          <div className="flex flex-wrap items-center gap-6">
            {colors.map((color) => (
              <Spinner key={color} color={color} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Typography.H2>Sizes</Typography.H2>
          <div className="flex flex-wrap items-center gap-6">
            {sizes.map((size) => (
              <Spinner key={size} size={size} color="primary" />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
