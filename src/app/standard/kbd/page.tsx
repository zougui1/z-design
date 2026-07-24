import { Container, Kbd, Typography } from "~/ui/components";

export default function KbdPage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Typography.H2>Kbd</Typography.H2>
          <div className="flex items-center gap-4">
            <Kbd>⌘</Kbd>
            <Kbd>Esc</Kbd>
            <Kbd>Enter</Kbd>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Typography.H2>Key sequence</Typography.H2>
          <div className="flex items-center gap-4 text-sm">
            <Kbd keys={["⌘", "K"]} />
            <Kbd keys={["Ctrl", "Shift", "P"]} />
          </div>
        </div>
      </div>
    </Container>
  );
}
