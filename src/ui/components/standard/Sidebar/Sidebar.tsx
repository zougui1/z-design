"use client";

import { ChevronsLeftIcon, PanelLeftIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

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
  /**
   * Full-width bar rendered inside the provider, above the sidebar + content
   * row. Because it lives within the provider it can host a sidebar toggle (see
   * {@link SidebarBase.Trigger}). When set, the built-in mobile toggle bar in the
   * inset is dropped — place the toggle in the banner instead.
   */
  banner?: React.ReactNode;
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
 * The sidebar header: holds the optional header content, the desktop
 * collapse/expand controls, and — on the mobile drawer — a close button. Lives
 * inside the Provider subtree so it can read the sidebar state via `useSidebar`.
 * The desktop controls are driven by the sidebar's `group` data-state (absent on
 * the mobile drawer); the double-chevron also shows on mobile to close the
 * drawer.
 *
 * Renders nothing on desktop when there's no header content and no collapse
 * control, so bare sidebars stay flush — but always renders on the mobile drawer
 * so the close button is reachable.
 */
const SidebarHeaderSlot = ({
  content,
  collapsible,
  headerProps,
}: {
  content: React.ReactNode;
  collapsible: boolean;
  headerProps?: Partial<SidebarBase.HeaderProps>;
}) => {
  const { toggleSidebar, isMobile } = SidebarBase.useSidebar();

  if (content == null && !collapsible && !isMobile) return null;

  return (
    <SidebarBase.Header
      {...headerProps}
      className={cn(
        "flex-row items-center gap-2",
        "group-data-[state=collapsed]:justify-center",
        headerProps?.className,
      )}
    >
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
    </SidebarBase.Header>
  );
};

export const Sidebar = ({
  title,
  header,
  banner,
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

  // The mobile toggle bar in the inset only exists to reach the sidebar when
  // there's no other trigger. With a banner the toggle lives there instead, so
  // the inset bar is kept only when a toolbar needs a home.
  const insetHeader =
    banner == null || toolbar != null ? (
      <header
        className={cn(
          `bg-background border-border sticky top-0 z-10 flex h-12 shrink-0
          items-center gap-2 border-b px-4`,
          // The trigger is the bar's only content on mobile; with no toolbar
          // there's nothing to show on desktop, so drop the empty bar.
          !toolbar && "md:hidden",
        )}
      >
        {banner == null && (
          <SidebarBase.Trigger
            {...slotProps?.trigger}
            className={cn("md:hidden", slotProps?.trigger?.className)}
          />
        )}
        {toolbar}
      </header>
    ) : null;

  const body = (
    <>
      <SidebarBase.Root
        collapsible={collapsible ? "icon" : "offcanvas"}
        {...slotProps?.root}
      >
        <SidebarHeaderSlot
          content={headerContent}
          collapsible={collapsible}
          headerProps={slotProps?.header}
        />

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
        {insetHeader}
        {children}
      </SidebarBase.Inset>
    </>
  );

  return (
    <SidebarBase.Provider
      defaultOpen={defaultOpen}
      open={open}
      onOpenChange={onOpenChange}
      {...slotProps?.provider}
      // With a banner the provider stacks vertically: the full-width banner on
      // top, the sidebar + content row beneath it.
      className={cn(banner != null && "flex-col", slotProps?.provider?.className)}
    >
      {banner != null ? (
        <>
          {/* `banner` crosses the RSC boundary (it's typically created in a
              server layout), so it arrives without React's key-validation flag.
              Keying both siblings avoids a spurious list-key warning. */}
          <Fragment key="banner">{banner}</Fragment>
          <div key="row" className="flex w-full flex-1">
            {body}
          </div>
        </>
      ) : (
        body
      )}
    </SidebarBase.Provider>
  );
};

const keyOf = (item: SidebarNavLink) =>
  item.href ?? (typeof item.label === "string" ? item.label : undefined);

const toTooltip = (label: React.ReactNode) =>
  typeof label === "string" ? label : undefined;
