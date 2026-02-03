import { Toast } from "@base-ui/react";

const useManager = Toast.useToastManager;
const createManager = Toast.createToastManager;

export { useManager, createManager };

export {
  ToastAction as Action,
  type ToastActionProps as ActionProps,
} from "./ToastAction";
export {
  ToastArrow as Arrow,
  type ToastArrowProps as ArrowProps,
} from "./ToastArrow";
export {
  ToastClose as Close,
  type ToastCloseProps as CloseProps,
} from "./ToastClose";
export {
  ToastContent as Content,
  type ToastContentProps as ContentProps,
} from "./ToastContent";
export {
  ToastDescription as Description,
  type ToastDescriptionProps as DescriptionProps,
} from "./ToastDescription";
export {
  ToastPortal as Portal,
  type ToastPortalProps as PortalProps,
} from "./ToastPortal";
export {
  ToastPositioner as Positioner,
  type ToastPositionerProps as PositionerProps,
} from "./ToastPositioner";
export {
  ToastProvider as Provider,
  type ToastProviderProps as ProviderProps,
} from "./ToastProvider";
export {
  ToastRoot as Root,
  type ToastRootProps as RootProps,
} from "./ToastRoot";
export {
  ToastTitle as Title,
  type ToastTitleProps as TitleProps,
} from "./ToastTitle";
export {
  ToastViewport as Viewport,
  type ToastViewportProps as ViewportProps,
} from "./ToastViewport";
