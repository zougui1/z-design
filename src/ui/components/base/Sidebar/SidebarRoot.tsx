"use client";

import { cn } from "~/ui/utils";

import { BaseDrawer } from "../BaseDrawer";
import { useSidebar } from "./context";

export interface SidebarRootProps extends React.ComponentProps<"div"> {
  variant?: "sidebar" | "floating" | "inset";
  collapsible?: "offcanvas" | "icon" | "none";
}

export function SidebarRoot({
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  ...props
}: SidebarRootProps) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

  if (collapsible === "none") {
    return (
      <div
        data-slot="sidebar"
        className={cn(
          `bg-background text-sidebar-foreground flex h-full w-(--sidebar-width)
          flex-col`,
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  }

  if (isMobile) {
    return (
      <BaseDrawer.Root
        open={openMobile}
        onOpenChange={setOpenMobile}
        swipeDirection="left"
      >
        <BaseDrawer.Portal>
          <BaseDrawer.Backdrop />

          <BaseDrawer.Viewport side="left">
            <BaseDrawer.Popup
              data-sidebar="sidebar"
              data-slot="sidebar"
              data-mobile="true"
              // `--bleed` drives the enter/exit translate distance. The base
              // value (3rem) only nudges a left-anchored panel, so swiping it
              // off animates back on-screen before unmounting. Bleeding past
              // the panel's own width keeps it fully offscreen.
              className="text-sidebar-foreground [--bleed:120%]"
              {...props}
            >
              <BaseDrawer.Header className="sr-only">
                <BaseDrawer.Title>Sidebar</BaseDrawer.Title>
                <BaseDrawer.Description>
                  Displays the mobile sidebar.
                </BaseDrawer.Description>
              </BaseDrawer.Header>

              <div className="flex h-full w-full flex-col">{children}</div>
            </BaseDrawer.Popup>
          </BaseDrawer.Viewport>
        </BaseDrawer.Portal>
      </BaseDrawer.Root>
    );
  }

  return (
    <div
      className="group peer text-sidebar-foreground hidden md:block"
      data-state={state}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-variant={variant}
      data-slot="sidebar"
    >
      {/* This is what handles the sidebar gap on desktop */}
      <div
        data-slot="sidebar-gap"
        className={cn(
          `relative w-(--sidebar-width) bg-transparent transition-[width]
          duration-200 ease-linear`,
          "group-data-[collapsible=offcanvas]:w-0",
          "group-data-[side=right]:rotate-180",
          variant === "floating" || variant === "inset"
            ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]"
            : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)",
        )}
      />
      <div
        data-slot="sidebar-container"
        className={cn(
          `fixed inset-y-0 left-0 z-10 hidden h-svh w-(--sidebar-width)
          transition-[left,right,width] duration-200 ease-linear md:flex
          group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]`,
          // Adjust the padding for floating and inset variants.
          variant === "floating" || variant === "inset"
            ? `p-2
              group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]`
            : `border-border
              group-data-[collapsible=icon]:w-(--sidebar-width-icon)
              group-data-[side=left]:border-r group-data-[side=right]:border-l`,
          className,
        )}
        {...props}
      >
        <div
          data-sidebar="sidebar"
          data-slot="sidebar-inner"
          className="bg-background
            group-data-[variant=floating]:border-sidebar-border flex h-full
            w-full flex-col shadow-sm group-data-[variant=floating]:rounded-lg
            group-data-[variant=floating]:border"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
