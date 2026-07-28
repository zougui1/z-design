import { Container, Link, PreviewCard, Typography } from "~/ui/components";

const Preview = () => {
  return (
    <>
      <div className="bg-muted h-24 w-full rounded-md" />
      <Typography.H3 className="text-sm font-medium">Base UI</Typography.H3>
      <p className="text-muted-foreground">
        Unstyled UI components for building accessible web apps and design
        systems.
      </p>
    </>
  );
};

export default function PreviewCardPage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Typography.H2>Preview Card</Typography.H2>
          <p className="max-w-prose">
            Built with{" "}
            <PreviewCard content={<Preview />}>
              <Link href="#">Base UI</Link>
            </PreviewCard>{" "}
            — hover the link to preview it.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <Typography.H2>Sides</Typography.H2>
          <div className="flex flex-wrap gap-5">
            {(["left", "top", "bottom", "right"] as const).map((side) => (
              <PreviewCard key={side} side={side} content={<Preview />}>
                <Link href="#" className="capitalize">
                  {side}
                </Link>
              </PreviewCard>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
