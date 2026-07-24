import { Container, Fieldset, Input, Typography } from "~/ui/components";

export default function FieldsetPage() {
  return (
    <Container>
      <div className="flex flex-col gap-4">
        <Typography.H2>Fieldset</Typography.H2>
        <Fieldset legend="Billing details" className="w-full max-w-xs">
          <Input label="Company" placeholder="Enter company name" />
          <Input label="Tax ID" placeholder="Enter fiscal number" />
        </Fieldset>
      </div>
    </Container>
  );
}
