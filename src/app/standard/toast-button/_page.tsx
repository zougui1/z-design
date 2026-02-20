"use client";

import { Container, Typography } from "~/ui/components";
import { SuccessIcon } from "~/ui/components/icons";
import { ToastButton } from "~/ui/components/standard";
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

export default function ClientToastButtonPage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <Section title="Button" className="gap-12">
          <ToastButton
            onClick={(e, toastManager) => {
              toastManager.add({
                description: "Clicked!",
              });
            }}
          >
            Default
          </ToastButton>

          <ToastButton
            onClick={(e, toastManager) => {
              toastManager.success({
                description: "Clicked!",
              });
            }}
          >
            Success
          </ToastButton>

          <ToastButton
            onClick={(e, toastManager) => {
              toastManager.error({
                description: "Clicked!",
              });
            }}
          >
            Error
          </ToastButton>

          <ToastButton
            onClick={(e, toastManager) => {
              toastManager.info({
                description: "Clicked!",
              });
            }}
          >
            Info
          </ToastButton>

          <ToastButton
            onClick={(e, toastManager) => {
              toastManager.warning({
                description: "Clicked!",
              });
            }}
          >
            Warning
          </ToastButton>
        </Section>
      </div>
    </Container>
  );
}
