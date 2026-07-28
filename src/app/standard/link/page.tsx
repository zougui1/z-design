import { Container, Link, Typography } from "~/ui/components";

export default function LinkPage() {
  return (
    <Container>
      <div className="flex flex-col gap-4">
        <Typography.H2>Link</Typography.H2>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="#" className="w-fit">
            Internal link
          </Link>
          <Link href="https://base-ui.com" scope="external" className="w-fit">
            External link
          </Link>
        </div>
      </div>
    </Container>
  );
}
