import { Container, Typography } from "~/ui/components";

import { FormDemo } from "./_FormDemo";

export default function FormPage() {
  return (
    <Container>
      <div className="flex flex-col gap-4">
        <Typography.H2>Form</Typography.H2>

        <p className="text-muted-foreground max-w-md text-sm">
          Built with TanStack Form (<code>useAppForm</code>). Each field wires a
          standard component to the form state. Submit is disabled until the
          form is valid.
        </p>

        <FormDemo />
      </div>
    </Container>
  );
}
