import { Container, Separator, Typography } from "~/ui/components";

export default function SeparatorPage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Typography.H2>Horizontal</Typography.H2>
          <div className="flex max-w-sm flex-col gap-4 text-sm">
            <div>The Foundation for your Design System</div>
            <Separator />
            <div>A set of beautifully designed components.</div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Typography.H2>With label</Typography.H2>
          <div className="max-w-sm">
            <Separator>or</Separator>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Typography.H2>Vertical</Typography.H2>
          <div className="flex h-5 items-center gap-4 text-sm">
            <div>Blog</div>
            <Separator orientation="vertical" />
            <div>Docs</div>
            <Separator orientation="vertical" />
            <div>Source</div>
          </div>
        </div>
      </div>
    </Container>
  );
}
