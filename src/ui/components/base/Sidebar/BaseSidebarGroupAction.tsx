import { Button } from "@base-ui/react";

import { cnState } from "~/ui/utils";

export type BaseSidebarGroupActionProps = Button.Props;

export function BaseSidebarGroupAction({
  className,
  ...props
}: BaseSidebarGroupActionProps) {
  return (
    <Button
      data-slot="sidebar-group-action"
      data-sidebar="group-action"
      className={cnState(
        `text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent
        hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex
        aspect-square w-5 cursor-pointer items-center justify-center rounded-md
        p-0 outline-hidden transition-transform focus-visible:ring-2
        [&>svg]:size-4 [&>svg]:shrink-0`,
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  );
}
