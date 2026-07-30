import { Container, type TabItem, Tabs, Typography } from "~/ui/components";

import { FormDemo } from "./_FormDemo";
import { FormDialogDemo } from "./_FormDialogDemo";
import { FormDrawerDemo } from "./_FormDrawerDemo";

const items: TabItem[] = [
  { value: "inline", label: "Inline", content: <FormDemo /> },
  { value: "dialog", label: "Dialog", content: <FormDialogDemo /> },
  { value: "drawer", label: "Drawer", content: <FormDrawerDemo /> },
];

export default function FormPage() {
  return (
    <Container>
      <div className="flex flex-col gap-4">
        <Typography.H2>Form</Typography.H2>

        <p className="text-muted-foreground max-w-md text-sm">
          Built with TanStack Form (<code>useAppForm</code>). Each field wires a
          standard component to the form state. Submit is disabled until the
          form is valid. The same form works inline, in a dialog, or in a
          drawer.
        </p>

        <Tabs items={items} defaultValue="inline" />
      </div>
    </Container>
  );
}
