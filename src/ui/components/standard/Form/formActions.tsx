import { type DialogAction } from "../Dialog";
import { type DrawerAction } from "../Drawer";
import FormCancelButton from "./components/FormCancelButton";
import FormSubmitButton from "./components/FormSubmitButton";

/**
 * Default actions for `form.Dialog`. Each builder merges the default action
 * props with the props passed to it (the passed props win).
 *
 * @example
 * actions={[defaultDialogActions.cancel({ children: "Discard" }), defaultDialogActions.submit()]}
 */
export const defaultDialogActions = {
  cancel: (action?: DialogAction): DialogAction => ({
    render: <FormCancelButton />,
    variant: "outline",
    children: "Cancel",
    ...action,
  }),
  submit: (action?: DialogAction): DialogAction => ({
    render: <FormSubmitButton />,
    // Closing is orchestrated by form.Dialog after submission, not on click.
    closeOnClick: false,
    ...action,
  }),
};

/**
 * Default actions for `form.Drawer`. Each builder merges the default action
 * props with the props passed to it (the passed props win).
 *
 * @example
 * actions={[defaultDrawerActions.cancel({ children: "Discard" }), defaultDrawerActions.submit()]}
 */
export const defaultDrawerActions = {
  cancel: (action?: DrawerAction): DrawerAction => ({
    render: <FormCancelButton />,
    variant: "outline",
    children: "Cancel",
    ...action,
  }),
  submit: (action?: DrawerAction): DrawerAction => ({
    render: <FormSubmitButton />,
    // Closing is orchestrated by form.Drawer after submission, not on click.
    closeOnClick: false,
    ...action,
  }),
};
