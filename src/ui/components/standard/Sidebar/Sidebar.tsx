"use client";

import { ChevronsLeftIcon, PanelLeftIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "~/ui/utils";

import {
  BaseButton,
  BaseCollapsible,
  BaseSidebar as SidebarBase,
} from "../../base";

export interface SidebarNavLink {
  label: React.ReactNode;
  href?: string;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  className?: string;
  /** Nested links render as a collapsible submenu. */
  items?: SidebarNavLink[];
  defaultOpen?: boolean;
  isActive?: boolean;
}

export interface SidebarNavGroup {
  label?: React.ReactNode;
  items: SidebarNavLink[];
  className?: string;
}

export interface SidebarProps {
  /** Convenience title rendered inside the header. Ignored when `header` is set. */
  title?: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  groups: SidebarNavGroup[];
  /**
   * When true, the sidebar can be collapsed to an icon rail on desktop: a
   * chevron in the header collapses it, and an icon at the top expands it.
   * Defaults to false (always expanded on desktop).
   */
  collapsible?: boolean;
  /** Main content rendered beside the sidebar, inside the inset. */
  children?: React.ReactNode;
  /** Extra content rendered in the sticky top bar, right of the toggle. */
  toolbar?: React.ReactNode;
  /** Override active-link detection. Defaults to matching the current path. */
  isActive?: (href: string) => boolean;
  /**
   * Uncontrolled initial open state on desktop. On mobile the sidebar always
   * starts collapsed. Defaults to open.
   */
  defaultOpen?: boolean;
  /** Controlled open state — pass with `onOpenChange` to drive it externally. */
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  slotProps?: {
    provider?: Partial<SidebarBase.ProviderProps>;
    root?: Partial<SidebarBase.RootProps>;
    header?: Partial<SidebarBase.HeaderProps>;
    content?: Partial<SidebarBase.ContentProps>;
    footer?: Partial<SidebarBase.FooterProps>;
    inset?: Partial<SidebarBase.InsetProps>;
    trigger?: Partial<SidebarBase.TriggerProps>;
  };
}

/**
 * Header inner content + the collapse/expand controls. Lives inside the Provider
 * subtree so it can read the sidebar state via `useSidebar`. The desktop
 * controls are driven by the sidebar's `group` data-state (absent on the mobile
 * drawer); the double-chevron also shows on mobile to close the drawer.
 */
const SidebarHeaderContent = ({
  content,
  collapsible,
}: {
  content: React.ReactNode;
  collapsible: boolean;
}) => {
  const { toggleSidebar, isMobile } = SidebarBase.useSidebar();

  return (
    <>
      {collapsible && (
        <BaseButton
          variant="ghost"
          size="icon"
          aria-label="Expand sidebar"
          onClick={toggleSidebar}
          className="hidden size-7 md:group-data-[state=collapsed]:flex"
        >
          <PanelLeftIcon />
        </BaseButton>
      )}

      {content != null && (
        <div
          className="flex min-w-0 flex-1 items-center
            group-data-[state=collapsed]:hidden"
        >
          {content}
        </div>
      )}

      {/* Double chevron: closes the drawer on mobile; collapses on desktop
          (desktop only when collapsible). */}
      <BaseButton
        variant="ghost"
        size="icon"
        aria-label={isMobile ? "Close sidebar" : "Collapse sidebar"}
        onClick={toggleSidebar}
        className={cn(
          "ml-auto flex size-7 md:hidden",
          collapsible && "md:group-data-[state=expanded]:flex",
        )}
      >
        <ChevronsLeftIcon />
      </BaseButton>
    </>
  );
};

export const Sidebar = ({
  title,
  header,
  footer,
  groups,
  collapsible = false,
  children,
  toolbar,
  isActive,
  defaultOpen,
  open,
  onOpenChange,
  slotProps,
}: SidebarProps) => {
  const headerContent =
    header ??
    (title != null ? (
      <span className="px-2 text-sm font-semibold">{title}</span>
    ) : null);

  const pathname = usePathname();

  // Internal path-based detection matches a link when the current path equals
  // its href or sits below it. Multiple links can match at once (e.g. `/settings`
  // and `/settings/profile` on `/settings/profile`), so we keep only the most
  // specific one — the longest matching href — to leave a single internally
  // active link. Explicit `isActive` overrides bypass this and may mark any
  // number of links active.
  const matchesPath = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  const mostSpecificHref = (() => {
    // When the `isActive` prop override is supplied it fully replaces internal
    // detection, so there is no single-match to compute.
    if (isActive) return undefined;

    let best: string | undefined;

    const visit = (items: SidebarNavLink[]) => {
      for (const item of items) {
        if (item.href && matchesPath(item.href)) {
          if (best === undefined || item.href.length > best.length) {
            best = item.href;
          }
        }

        if (item.items?.length) visit(item.items);
      }
    };

    for (const group of groups) visit(group.items);

    return best;
  })();

  const active = (item: SidebarNavLink) => {
    // Explicit per-item override wins and is not subject to the single-active
    // limit — callers may mark as many links active as they want.
    if (item.isActive) return true;
    if (!item.href) return false;
    if (isActive) return isActive(item.href);
    return item.href === mostSpecificHref;
  };

  const renderLeaf = (item: SidebarNavLink) => {
    const content = (
      <>
        {item.icon}
        <span>{item.label}</span>
        {item.badge != null && (
          <SidebarBase.MenuBadge>{item.badge}</SidebarBase.MenuBadge>
        )}
      </>
    );

    return (
      <SidebarBase.MenuItem key={keyOf(item)} className={item.className}>
        {item.href ? (
          <SidebarBase.MenuButton
            tooltip={toTooltip(item.label)}
            isActive={active(item)}
            render={<Link href={item.href as any} />}
            nativeButton={false}
          >
            {content}
          </SidebarBase.MenuButton>
        ) : (
          <SidebarBase.MenuButton tooltip={toTooltip(item.label)}>
            {content}
          </SidebarBase.MenuButton>
        )}
      </SidebarBase.MenuItem>
    );
  };

  const renderItem = (item: SidebarNavLink) => {
    if (!item.items?.length) return renderLeaf(item);

    const groupActive = item.items.some((sub) => active(sub));

    return (
      <BaseCollapsible.Root
        key={keyOf(item)}
        render={<SidebarBase.MenuItem />}
        className={cn("group/collapsible", item.className)}
        defaultOpen={item.defaultOpen ?? groupActive}
      >
        <SidebarBase.MenuButton
          tooltip={toTooltip(item.label)}
          render={<BaseCollapsible.Trigger />}
          className="w-full"
        >
          {item.icon}
          <span>{item.label}</span>
          <BaseCollapsible.TriggerIcon className="ml-auto" />
        </SidebarBase.MenuButton>

        <BaseCollapsible.Panel>
          <SidebarBase.MenuSub>
            {item.items.map((sub) => (
              <SidebarBase.MenuSubItem
                key={keyOf(sub)}
                className={sub.className}
              >
                {sub.href ? (
                  <SidebarBase.MenuSubButton
                    isActive={active(sub)}
                    render={<Link href={sub.href as any} />}
                  >
                    {sub.icon}
                    <span>{sub.label}</span>
                  </SidebarBase.MenuSubButton>
                ) : (
                  <SidebarBase.MenuSubButton>
                    {sub.icon}
                    <span>{sub.label}</span>
                  </SidebarBase.MenuSubButton>
                )}
              </SidebarBase.MenuSubItem>
            ))}
          </SidebarBase.MenuSub>
        </BaseCollapsible.Panel>
      </BaseCollapsible.Root>
    );
  };

  return (
    <SidebarBase.Provider
      defaultOpen={defaultOpen}
      open={open}
      onOpenChange={onOpenChange}
      {...slotProps?.provider}
    >
      <SidebarBase.Root
        collapsible={collapsible ? "icon" : "offcanvas"}
        {...slotProps?.root}
      >
        {(headerContent != null || collapsible) && (
          <SidebarBase.Header
            {...slotProps?.header}
            className={cn(
              "flex-row items-center gap-2",
              "group-data-[state=collapsed]:justify-center",
              slotProps?.header?.className,
            )}
          >
            <SidebarHeaderContent
              content={headerContent}
              collapsible={collapsible}
            />
          </SidebarBase.Header>
        )}

        <SidebarBase.Content {...slotProps?.content}>
          {groups.map((group, index) => (
            <SidebarBase.Group key={index} className={group.className}>
              {group.label != null && (
                <SidebarBase.GroupLabel>{group.label}</SidebarBase.GroupLabel>
              )}
              <SidebarBase.Menu>{group.items.map(renderItem)}</SidebarBase.Menu>
            </SidebarBase.Group>
          ))}
        </SidebarBase.Content>

        {footer != null && (
          <SidebarBase.Footer {...slotProps?.footer}>
            {footer}
          </SidebarBase.Footer>
        )}
      </SidebarBase.Root>

      <SidebarBase.Inset {...slotProps?.inset}>
        <header
          className={cn(
            `bg-background border-border sticky top-0 z-10 flex h-12 shrink-0
            items-center gap-2 border-b px-4`,
            // The trigger is the bar's only content on mobile; with no toolbar
            // there's nothing to show on desktop, so drop the empty bar.
            !toolbar && "md:hidden",
          )}
        >
          <SidebarBase.Trigger
            {...slotProps?.trigger}
            className={cn("md:hidden", slotProps?.trigger?.className)}
          />
          {toolbar}
        </header>

        {children}
      </SidebarBase.Inset>
    </SidebarBase.Provider>
  );
};

const keyOf = (item: SidebarNavLink) =>
  item.href ?? (typeof item.label === "string" ? item.label : undefined);

const toTooltip = (label: React.ReactNode) =>
  typeof label === "string" ? label : undefined;
