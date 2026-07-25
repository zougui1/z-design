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

export interface SidebarProps extends SidebarBase.RootProps {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  groups: SidebarNavGroup[];
  /** Override active-link detection. Defaults to matching the current path. */
  isActive?: (href: string) => boolean;
  slotProps?: {
    header?: Partial<SidebarBase.HeaderProps>;
    content?: Partial<SidebarBase.ContentProps>;
    footer?: Partial<SidebarBase.FooterProps>;
  };
}

export const Sidebar = ({
  header,
  footer,
  groups,
  isActive,
  slotProps,
  ...props
}: SidebarProps) => {
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
    <SidebarBase.Root {...props}>
      {header != null && (
        <SidebarBase.Header {...slotProps?.header}>{header}</SidebarBase.Header>
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
        <SidebarBase.Footer {...slotProps?.footer}>{footer}</SidebarBase.Footer>
      )}
    </SidebarBase.Root>
  );
};

const keyOf = (item: SidebarNavLink) =>
  item.href ?? (typeof item.label === "string" ? item.label : undefined);

const toTooltip = (label: React.ReactNode) =>
  typeof label === "string" ? label : undefined;
