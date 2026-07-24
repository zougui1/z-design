import { Container, Spinner, Typography } from "~/ui/components";

const colors = [
  "default",
  "neutral",
  "primary",
  "secondary",
  "success",
  "warning",
  "destructive",
  "info",
] as const;

export default function SpinnerPage() {
  return (
    <Container>
      <div className="flex flex-col gap-4">
        <Typography.H2>Spinner</Typography.H2>
        <div className="flex flex-wrap items-center gap-6">
          {colors.map((color) => (
            <Spinner key={color} color={color} />
          ))}
        </div>
      </div>
    </Container>
  );
}
