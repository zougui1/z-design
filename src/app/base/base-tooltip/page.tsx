import {
  BaseButton,
  BaseTooltip,
  Container,
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

export default function BaseTooltipPage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <Section title="BaseTooltip">
          {(["left", "top", "bottom", "right"] as const).map((side) => (
            <BaseTooltip.Provider key={side}>
              <BaseTooltip.Root>
                <BaseTooltip.Trigger
                  render={
                    <BaseButton variant="outline" className="w-fit capitalize">
                      {side}
                    </BaseButton>
                  }
                />

                <BaseTooltip.Portal>
                  <BaseTooltip.Positioner side={side}>
                    <BaseTooltip.Popup>
                      <p>Add to library</p>
                      <BaseTooltip.Arrow />
                    </BaseTooltip.Popup>
                  </BaseTooltip.Positioner>
                </BaseTooltip.Portal>
              </BaseTooltip.Root>
            </BaseTooltip.Provider>
          ))}
        </Section>
      </div>
    </Container>
  );
}
