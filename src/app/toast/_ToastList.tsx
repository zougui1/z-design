"use client";

import { XIcon } from "lucide-react";

import { Toast } from "~/ui/components";

export const ToastList = () => {
  const { toasts } = Toast.useManager();

  return toasts.map((toast) => (
    <Toast.Root key={toast.id} toast={toast}>
      <Toast.Content>
        <Toast.Title />
        <Toast.Description />
        <Toast.Action />
        <Toast.Close>
          <XIcon />
        </Toast.Close>
      </Toast.Content>
    </Toast.Root>
  ));
};
