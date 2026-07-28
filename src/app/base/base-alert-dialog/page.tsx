import { CircleFadingPlus } from "lucide-react";

import {
  BaseAlertDialog,
  BaseButton,
  Container,
  Typography,
} from "~/ui/components";
import { cn } from "~/ui/utils";

import { CloseConfirmationDialog } from "./_CloseConfirmationDialog";

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

export default function BaseBaseAlertDialogPage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <Section title="BaseButton" className="flex-col">
          <BaseAlertDialog.Root>
            <div>
              <BaseAlertDialog.Trigger render={<BaseButton />}>
                Discard draft
              </BaseAlertDialog.Trigger>
            </div>

            <BaseAlertDialog.Portal>
              <BaseAlertDialog.Backdrop />

              <BaseAlertDialog.Popup>
                <BaseAlertDialog.Header>
                  <BaseAlertDialog.Media>
                    <CircleFadingPlus />
                  </BaseAlertDialog.Media>

                  <BaseAlertDialog.Title>Discard draft?</BaseAlertDialog.Title>
                  <BaseAlertDialog.Description>
                    You can’t undo this action.
                  </BaseAlertDialog.Description>
                </BaseAlertDialog.Header>

                <BaseAlertDialog.Footer>
                  <BaseAlertDialog.Cancel>Cancel</BaseAlertDialog.Cancel>
                  <BaseAlertDialog.Action>Discard</BaseAlertDialog.Action>
                </BaseAlertDialog.Footer>
              </BaseAlertDialog.Popup>
            </BaseAlertDialog.Portal>
          </BaseAlertDialog.Root>

          <div>
            <CloseConfirmationDialog />
          </div>
        </Section>
      </div>
    </Container>
  );
}
