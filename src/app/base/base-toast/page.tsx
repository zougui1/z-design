"use client";

import { X } from "lucide-react";

import { BaseButton, BaseToast } from "~/ui/components/base";
import { Container, Typography } from "~/ui/components";

const manager = BaseToast.createManager();

const ToastList = () => {
  const { toasts } = BaseToast.useManager();

  return (
    <>
      {toasts.map((item) => (
        <BaseToast.Root
          key={item.id}
          toast={item}
          className="flex items-start gap-3 pr-7"
        >
          <BaseToast.Icon type={item.type} className="mt-0.5 size-5 shrink-0" />
          <BaseToast.Content>
            {item.title && <BaseToast.Title className="text-sm font-medium" />}
            {item.description && (
              <BaseToast.Description className="text-muted-foreground text-sm" />
            )}
          </BaseToast.Content>
          <BaseToast.Close aria-label="Close notification">
            <X className="size-4" />
          </BaseToast.Close>
        </BaseToast.Root>
      ))}
    </>
  );
};

export default function BaseToastPage() {
  return (
    <Container>
      <BaseToast.Provider toastManager={manager}>
        <div className="flex flex-col gap-4">
          <Typography.H2>BaseToast</Typography.H2>

          <div className="flex flex-wrap gap-2">
            <BaseButton
              color="neutral"
              variant="outline"
              onClick={() =>
                manager.add({
                  title: "Notification",
                  description: "Composed from base Toast parts.",
                })
              }
            >
              Add toast
            </BaseButton>

            <BaseButton
              color="success"
              onClick={() => manager.success({ title: "Success!" })}
            >
              Success
            </BaseButton>
          </div>
        </div>

        <BaseToast.Portal>
          <BaseToast.Viewport>
            <ToastList />
          </BaseToast.Viewport>
        </BaseToast.Portal>
      </BaseToast.Provider>
    </Container>
  );
}
