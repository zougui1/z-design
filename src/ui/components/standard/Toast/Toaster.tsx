"use client";

import { X } from "lucide-react";

import { Toast as BaseToast } from "../../base";
import { toast } from "./toast";

export interface ToasterProps extends BaseToast.ProviderProps {}

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

/**
 * Renders the toast provider, portal and viewport. Mount once (e.g. in the root
 * layout); trigger toasts imperatively via the shared `toast` manager.
 */
export const Toaster = ({ toastManager = toast, ...props }: ToasterProps) => {
  return (
    <BaseToast.Provider toastManager={toastManager} {...props}>
      <BaseToast.Portal>
        <BaseToast.Viewport>
          <ToastList />
        </BaseToast.Viewport>
      </BaseToast.Portal>
    </BaseToast.Provider>
  );
};
