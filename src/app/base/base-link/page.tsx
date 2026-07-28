import { BaseLink, Container, Typography } from "~/ui/components";

export default function BaseLinkPage() {
  return (
    <Container>
      <div className="flex flex-col gap-4">
        <Typography.H2>BaseLink</Typography.H2>
        <Typography.Muted>
          Unstyled polymorphic link primitive (sets <code>rel</code> for external
          links).
        </Typography.Muted>

        <div className="flex flex-col gap-2 text-sm">
          <BaseLink
            href="#"
            className="text-primary w-fit underline underline-offset-4"
          >
            Internal link
          </BaseLink>
          <BaseLink
            href="https://base-ui.com"
            scope="external"
            className="text-primary w-fit underline underline-offset-4"
          >
            External link
          </BaseLink>
        </div>
      </div>
    </Container>
  );
}
