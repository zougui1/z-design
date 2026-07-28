"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "~/ui/utils";

import { BaseCollapsible, Sidebar as SidebarBase } from "../../base";

export interface SidebarNavLink {
  label: React.ReactNode;
  href?: string;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  className?: string;
  /** Nested links render as a collapsible submenu. */
  items?: SidebarNavLink[];
  defaultOpen?: boolean;
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

export const Sidebar = ({
  title,
  header,
  footer,
  groups,
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

  const active = (href?: string) => {
    if (!href) return false;
    if (isActive) return isActive(href);
    return pathname === href || pathname.startsWith(`${href}/`);
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
            isActive={active(item.href)}
            render={<Link href={item.href} />}
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

    const groupActive = item.items.some((sub) => active(sub.href));

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
              <SidebarBase.MenuSubItem key={keyOf(sub)} className={sub.className}>
                {sub.href ? (
                  <SidebarBase.MenuSubButton
                    isActive={active(sub.href)}
                    render={<Link href={sub.href} />}
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
      <SidebarBase.Root {...slotProps?.root}>
        {headerContent != null && (
          <SidebarBase.Header {...slotProps?.header}>
            {headerContent}
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
          className="bg-background border-border sticky top-0 z-10 flex h-12
            shrink-0 items-center gap-2 border-b px-4"
        >
          <SidebarBase.Trigger {...slotProps?.trigger} />
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
