"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { BaseCollapsible, Sidebar } from "./components/base";
import { cn } from "./utils";

export interface NavItem {
  label: string;
  url: Extract<React.ComponentProps<typeof Link>["href"], string>;
  className?: string;
}

export interface GroupNavItem {
  label: string;
  items: NavItem[];
  collapsible?: boolean;
  className?: string;
}

export interface SidebarNavProps {
  label: string;
  items: (NavItem | GroupNavItem)[];
}

export const SidebarNav = (props: SidebarNavProps) => {
  const { label, items } = props;
  const pathname = usePathname();

  const getIsActive = (item: NavItem) => {
    return item.url === pathname || pathname.startsWith(`${item.url}/`);
  };

  return (
    <Sidebar.Group>
      <Sidebar.GroupLabel>{label}</Sidebar.GroupLabel>

      <Sidebar.Menu>
        {items.map((item) => {
          if ("items" in item) {
            const isGroupActive = item.items.some(getIsActive);

            if (item.collapsible) {
              return (
                <BaseCollapsible.Root
                  key={item.label}
                  render={<Sidebar.MenuItem />}
                  className={cn("group/collapsible", item.className)}
                  defaultOpen={isGroupActive}
                >
                  <Sidebar.MenuButton
                    tooltip={item.label}
                    render={<BaseCollapsible.Trigger />}
                    className="w-full"
                  >
                    <span>{item.label}</span>

                    <BaseCollapsible.TriggerIcon className="ml-auto" />
                  </Sidebar.MenuButton>

                  <BaseCollapsible.Panel>
                    <Sidebar.MenuSub>
                      {item.items.map((subItem) => (
                        <Sidebar.MenuSubItem
                          key={subItem.label}
                          className={subItem.className}
                        >
                          <Sidebar.MenuSubButton
                            isActive={getIsActive(subItem)}
                            render={<Link href={subItem.url} />}
                          >
                            {subItem.label}
                          </Sidebar.MenuSubButton>
                        </Sidebar.MenuSubItem>
                      ))}
                    </Sidebar.MenuSub>
                  </BaseCollapsible.Panel>
                </BaseCollapsible.Root>
              );
            }

            return (
              <Sidebar.MenuItem key={item.label} className={item.className}>
                <Sidebar.MenuButton tooltip={item.label}>
                  <span>{item.label}</span>
                </Sidebar.MenuButton>

                <Sidebar.MenuSub>
                  {item.items.map((subItem) => (
                    <Sidebar.MenuSubItem
                      key={subItem.label}
                      className={subItem.className}
                    >
                      <Sidebar.MenuSubButton
                        isActive={getIsActive(subItem)}
                        render={<Link href={subItem.url} />}
                      >
                        {subItem.label}
                      </Sidebar.MenuSubButton>
                    </Sidebar.MenuSubItem>
                  ))}
                </Sidebar.MenuSub>
              </Sidebar.MenuItem>
            );
          }

          return (
            <Sidebar.MenuItem key={item.label} className={item.className}>
              <Sidebar.MenuButton
                tooltip={item.label}
                isActive={getIsActive(item)}
                render={<Link href={item.url} />}
                nativeButton={false}
              >
                <span>{item.label}</span>
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
          );
        })}
      </Sidebar.Menu>
    </Sidebar.Group>
  );
};
