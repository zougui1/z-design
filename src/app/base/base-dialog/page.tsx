import { BaseButton, BaseDialog, Container, Typography } from "~/ui/components";
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

export default function BaseDialogPage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <Section title="BaseButton" className="flex-col">
          <BaseDialog.Root>
            <div>
              <BaseDialog.Trigger render={<BaseButton />}>
                Discard draft
              </BaseDialog.Trigger>
            </div>

            <BaseDialog.Portal>
              <BaseDialog.Backdrop />

              <BaseDialog.Popup>
                <BaseDialog.Header>
                  <BaseDialog.Title>Discard draft?</BaseDialog.Title>
                  <BaseDialog.Description>
                    You can’t undo this action.
                  </BaseDialog.Description>
                </BaseDialog.Header>

                <BaseDialog.Footer>
                  <BaseDialog.Close render={<BaseButton variant="outline" />}>
                    Cancel
                  </BaseDialog.Close>
                  <BaseDialog.Close render={<BaseButton />}>
                    Ok
                  </BaseDialog.Close>
                </BaseDialog.Footer>
              </BaseDialog.Popup>
            </BaseDialog.Portal>
          </BaseDialog.Root>

          <div>
            <CloseConfirmationDialog />
          </div>
        </Section>
      </div>
    </Container>
  );
}
