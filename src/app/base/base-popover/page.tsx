import {
  BaseButton,
  BasePopover,
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

export default function BasePopoverPage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <Section title="BasePopover">
          {(["left", "top", "bottom", "right"] as const).map((side) => (
            <BasePopover.Root key={side}>
              <BasePopover.Trigger
                render={
                  <BaseButton variant="outline" className="w-fit capitalize">
                    {side}
                  </BaseButton>
                }
              />

              <BasePopover.Portal>
                <BasePopover.Positioner side={side}>
                  <BasePopover.Popup>
                    <BasePopover.Header>
                      <BasePopover.Title>Notifications</BasePopover.Title>
                      <BasePopover.Description>
                        Choose how you want to be notified.
                      </BasePopover.Description>
                    </BasePopover.Header>

                    <BasePopover.Arrow />
                  </BasePopover.Popup>
                </BasePopover.Positioner>
              </BasePopover.Portal>
            </BasePopover.Root>
          ))}
        </Section>

        <Section title="With footer actions" className="flex-col">
          <BasePopover.Root>
            <div>
              <BasePopover.Trigger render={<BaseButton />}>
                Edit dimensions
              </BasePopover.Trigger>
            </div>

            <BasePopover.Portal>
              <BasePopover.Positioner align="start">
                <BasePopover.Popup>
                  <BasePopover.CloseIcon />

                  <BasePopover.Header>
                    <BasePopover.Title>Dimensions</BasePopover.Title>
                    <BasePopover.Description>
                      Set the dimensions for the layer.
                    </BasePopover.Description>
                  </BasePopover.Header>

                  <BasePopover.Footer>
                    <BasePopover.Close
                      render={<BaseButton variant="outline" />}
                    >
                      Cancel
                    </BasePopover.Close>
                    <BasePopover.Close render={<BaseButton />}>
                      Save
                    </BasePopover.Close>
                  </BasePopover.Footer>

                  <BasePopover.Arrow />
                </BasePopover.Popup>
              </BasePopover.Positioner>
            </BasePopover.Portal>
          </BasePopover.Root>
        </Section>
      </div>
    </Container>
  );
}
