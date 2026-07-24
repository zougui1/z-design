import { Container, Meter, Typography } from "~/ui/components";

export default function MeterPage() {
  return (
    <Container>
      <div className="flex flex-col gap-6">
        <Typography.H2>Meter</Typography.H2>
        <Meter value={24} label="Storage used" showValue className="w-64" />
        <Meter value={72} className="w-64" />
      </div>
    </Container>
  );
}
