import { Container, Field, Typography } from "~/ui/components";
import { BaseField, BaseInput } from "~/ui/components/base";

export default function FieldPage() {
  return (
    <Container>
      <div className="flex max-w-xs flex-col gap-6">
        <Typography.H2>Field</Typography.H2>

        <Field label="Username" description="Choose a unique username.">
          <BaseField.Control render={<BaseInput placeholder="Max Leiter" />} />
        </Field>

        <Field label="Email" errors={[{ message: "Email is required." }]}>
          <BaseField.Control
            render={<BaseInput type="email" placeholder="m@example.com" />}
          />
        </Field>
      </div>
    </Container>
  );
}
