import { BaseKbd, Container, Typography } from "~/ui/components";

export default function BaseKbdPage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Typography.H2>BaseKbd</Typography.H2>
          <div className="flex items-center gap-4">
            <BaseKbd.Root>⌘</BaseKbd.Root>
            <BaseKbd.Root>Esc</BaseKbd.Root>
            <BaseKbd.Root>Shift</BaseKbd.Root>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Typography.H2>Group</Typography.H2>
          <BaseKbd.Group>
            <BaseKbd.Root>⌘</BaseKbd.Root>
            <BaseKbd.Root>K</BaseKbd.Root>
          </BaseKbd.Group>
        </div>
      </div>
    </Container>
  );
}
