import {
  BasePreviewCard,
  Container,
  Link,
  Typography,
} from "~/ui/components";
import { cn } from "~/ui/utils";

const Section = ({
  title,
  children,
  className,
}: {
  title?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className="flex flex-col gap-4">
      {title && <Typography.H2>{title}</Typography.H2>}

      <div className={cn("flex flex-wrap gap-5", className)}>{children}</div>
    </div>
  );
};

const Row = ({ children }: { children?: React.ReactNode }) => {
  return <div className="flex flex-wrap gap-2">{children}</div>;
};

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

export default function BasePreviewCardPage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <Section title="BasePreviewCard">
          {(["left", "top", "bottom", "right"] as const).map((side) => (
            <BasePreviewCard.Root key={side}>
              <BasePreviewCard.Trigger
                render={
                  <Link href="#" className="capitalize">
                    {side}
                  </Link>
                }
              />

              <BasePreviewCard.Portal>
                <BasePreviewCard.Positioner side={side}>
                  <BasePreviewCard.Popup>
                    <Preview />
                    <BasePreviewCard.Arrow />
                  </BasePreviewCard.Popup>
                </BasePreviewCard.Positioner>
              </BasePreviewCard.Portal>
            </BasePreviewCard.Root>
          ))}
        </Section>

        <Section title="In a paragraph" className="flex-col">
          <p className="max-w-prose">
            Built with{" "}
            <BasePreviewCard.Root>
              <BasePreviewCard.Trigger render={<Link href="#">Base UI</Link>} />

              <BasePreviewCard.Portal>
                <BasePreviewCard.Positioner>
                  <BasePreviewCard.Popup>
                    <Preview />
                    <BasePreviewCard.Arrow />
                  </BasePreviewCard.Popup>
                </BasePreviewCard.Positioner>
              </BasePreviewCard.Portal>
            </BasePreviewCard.Root>{" "}
            — hover the link to preview it.
          </p>
        </Section>
      </div>
    </Container>
  );
}
