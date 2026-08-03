import { Sidebar, type SidebarNavGroup, type SidebarNavLink, cn } from "../ui";

interface NavItem {
  label: string;
  url: SidebarNavLink["href"];
  className?: string;
}

interface GroupNavItem {
  label: string;
  items: NavItem[];
  collapsible?: boolean;
  className?: string;
}

const themeItems: NavItem[] = [
  {
    label: "Colors",
    url: "/theme/colors",
  },
  {
    label: "Typography",
    url: "/theme/typography",
  },
];

const componentItems: GroupNavItem[] = [
  {
    label: "Base",
    items: [
      {
        label: "Base Accordion",
        url: "/base/base-accordion",
      },
      {
        label: "Base Alert",
        url: "/base/base-alert",
      },
      {
        label: "Base Alert Dialog",
        url: "/base/base-alert-dialog",
      },
      {
        label: "Base Autocomplete",
        url: "/base/base-autocomplete",
      },
      {
        label: "Base Aspect Ratio",
        url: "/base/base-aspect-ratio",
      },
      {
        label: "Base Avatar",
        url: "/base/base-avatar",
      },
      {
        label: "Base Badge",
        url: "/base/base-badge",
      },
      {
        label: "Base Breadcrumb",
        url: "/base/base-breadcrumb",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Base Button",
        url: "/base/base-button",
      },
      {
        label: "Base Button Group",
        url: "/base/base-button-group",
      },
      {
        label: "Base Calendar",
        url: "/base/base-calendar",
      },
      {
        label: "Base Card",
        url: "/base/base-card",
      },
      {
        label: "Base Carousel",
        url: "/base/base-carousel",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Base Chart",
        url: "/base/base-chart",
      },
      {
        label: "Base Checkbox",
        url: "/base/base-checkbox",
      },
      {
        label: "Base Checkbox Group",
        url: "/base/base-checkbox-group",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Base Collapsible",
        url: "/base/base-collapsible",
      },
      {
        label: "Base Combobox",
        url: "/base/base-combobox",
      },
      {
        label: "Base Context Menu",
        url: "/base/base-context-menu",
      },
      {
        label: "Base Data Table",
        url: "/base/base-data-table",
      },
      {
        label: "Base Date Picker",
        url: "/base/base-date-picker",
      },
      {
        label: "Base Dialog",
        url: "/base/base-dialog",
      },
      {
        label: "Base Direction",
        url: "/base/base-direction",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Base Drawer",
        url: "/base/base-drawer",
      },
      {
        label: "Base Empty",
        url: "/base/base-empty",
      },
      {
        label: "Base Field",
        url: "/base/base-field",
      },
      {
        label: "Base Fieldset",
        url: "/base/base-fieldset",
      },
      {
        label: "Base Form",
        url: "/base/base-form",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Base Input",
        url: "/base/base-input",
      },
      {
        label: "Base Input Group",
        url: "/base/base-input-group",
      },
      {
        label: "Base Item",
        url: "/base/base-item",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Base Kbd",
        url: "/base/base-kbd",
      },
      {
        label: "Base Label",
        url: "/base/base-label",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Base Link",
        url: "/base/base-link",
      },
      {
        label: "Base Menu",
        url: "/base/base-menu",
      },
      {
        label: "Base Menubar",
        url: "/base/base-menubar",
      },
      {
        label: "Base Meter",
        url: "/base/base-meter",
      },
      {
        label: "Base Number Field",
        url: "/base/base-number-field",
      },
      {
        label: "Base Pagination",
        url: "/base/base-pagination",
      },
      {
        label: "Base Popover",
        url: "/base/base-popover",
      },
      {
        label: "Base Preview Card",
        url: "/base/base-preview-card",
      },
      {
        label: "Base Progress",
        url: "/base/base-progress",
      },
      {
        label: "Base Radio",
        url: "/base/base-radio",
      },
      {
        label: "Base Resizable",
        url: "/base/base-resizable",
      },
      {
        label: "Base Scroll Area",
        url: "/base/base-scroll-area",
      },
      {
        label: "Base Select",
        url: "/base/base-select",
      },
      {
        label: "Base Separator",
        url: "/base/base-separator",
      },
      {
        label: "Base Sidebar",
        url: "/base/base-sidebar",
      },
      {
        label: "Base Slider",
        url: "/base/base-slider",
      },
      {
        label: "Base Switch",
        url: "/base/base-switch",
      },
      {
        label: "Base Table",
        url: "/base/base-table",
      },
      {
        label: "Base Tabs",
        url: "/base/base-tabs",
      },
      {
        label: "Base Textarea",
        url: "/base/base-textarea",
      },
      {
        label: "Base Toast",
        url: "/base/base-toast",
      },
      {
        label: "Base Toggle",
        url: "/base/base-toggle",
      },
      {
        label: "Base Toggle Group",
        url: "/base/base-toggle-group",
      },
      {
        label: "Base Tooltip",
        url: "/base/base-tooltip",
      },
    ],
    collapsible: true,
  },
  {
    label: "Standard",
    items: [
      {
        label: "Accordion",
        url: "/standard/accordion",
      },
      {
        label: "Alert",
        url: "/standard/alert",
      },
      {
        label: "Alert Dialog",
        url: "/standard/alert-dialog",
      },
      {
        label: "Aspect Ratio",
        url: "/standard/aspect-ratio",
      },
      {
        label: "Autocomplete",
        url: "/standard/autocomplete",
      },
      {
        label: "Avatar",
        url: "/standard/avatar",
      },
      {
        label: "Avatar Group",
        url: "/standard/avatar-group",
      },
      {
        label: "Badge",
        url: "/standard/badge",
      },
      {
        label: "Button",
        url: "/standard/button",
      },
      {
        label: "Button Group",
        url: "/standard/button-group",
      },
      {
        label: "Calendar",
        url: "/standard/calendar",
      },
      {
        label: "Card",
        url: "/standard/card",
      },
      {
        label: "Chart",
        url: "/standard/chart",
      },
      {
        label: "Checkbox",
        url: "/standard/checkbox",
      },
      {
        label: "Collapsible",
        url: "/standard/collapsible",
      },
      {
        label: "Combobox",
        url: "/standard/combobox",
      },
      {
        label: "Context Menu",
        url: "/standard/context-menu",
      },
      {
        label: "Data Table",
        url: "/standard/data-table",
      },
      {
        label: "Date Picker",
        url: "/standard/date-picker",
      },
      {
        label: "Dialog",
        url: "/standard/dialog",
      },
      {
        label: "Drawer",
        url: "/standard/drawer",
      },
      {
        label: "Empty",
        url: "/standard/empty",
      },
      {
        label: "Field",
        url: "/standard/field",
      },
      {
        label: "Fieldset",
        url: "/standard/fieldset",
      },
      {
        label: "Form",
        url: "/standard/form",
      },
      {
        label: "Input",
        url: "/standard/input",
      },
      {
        label: "Kbd",
        url: "/standard/kbd",
      },
      {
        label: "Link",
        url: "/standard/link",
      },
      {
        label: "Menu",
        url: "/standard/menu",
      },
      {
        label: "Menubar",
        url: "/standard/menubar",
      },
      {
        label: "Meter",
        url: "/standard/meter",
      },
      {
        label: "Number Field",
        url: "/standard/number-field",
      },
      {
        label: "Pagination",
        url: "/standard/pagination",
      },
      {
        label: "Popover",
        url: "/standard/popover",
      },
      {
        label: "Preview Card",
        url: "/standard/preview-card",
      },
      {
        label: "Progress",
        url: "/standard/progress",
      },
      {
        label: "Radio",
        url: "/standard/radio",
      },
      {
        label: "Relative Time",
        url: "/standard/relative-time",
      },
      {
        label: "Resizable",
        url: "/standard/resizable",
      },
      {
        label: "Scroll Area",
        url: "/standard/scroll-area",
      },
      {
        label: "Select",
        url: "/standard/select",
      },
      {
        label: "Separator",
        url: "/standard/separator",
      },
      {
        label: "Sidebar",
        url: "/standard/sidebar",
      },
      {
        label: "Skeleton",
        url: "/standard/skeleton",
      },
      {
        label: "Slider",
        url: "/standard/slider",
      },
      {
        label: "Spinner",
        url: "/standard/spinner",
      },
      {
        label: "Switch",
        url: "/standard/switch",
      },
      {
        label: "Tabs",
        url: "/standard/tabs",
      },
      {
        label: "Textarea",
        url: "/standard/textarea",
      },
      {
        label: "Time Input",
        url: "/standard/time-input",
      },
      {
        label: "Toast",
        url: "/standard/toast",
      },
      {
        label: "Toggle",
        url: "/standard/toggle",
      },
      {
        label: "Toggle Group",
        url: "/standard/toggle-group",
      },
      {
        label: "Tooltip",
        url: "/standard/tooltip",
      },
    ],
    collapsible: true,
  },
];

const prototypeItems: GroupNavItem[] = [
  {
    label: "Firestone",
    collapsible: true,
    items: [
      {
        label: "WarMachineCard",
        url: "/prototypes/war-machine-card",
      },
    ],
  },
];

const toLink = (item: NavItem): SidebarNavLink => ({
  label: item.label,
  href: item.url,
  className: item.className,
});

const toGroupLink = (item: GroupNavItem): SidebarNavLink => ({
  label: item.label,
  className: item.className,
  items: item.items.map(toLink),
});

const groups: SidebarNavGroup[] = [
  { label: "Theme", items: themeItems.map(toLink) },
  { label: "Components", items: componentItems.map(toGroupLink) },
  { label: "Prototypes", items: prototypeItems.map(toGroupLink) },
];

export interface AppSidebarProps {
  children?: React.ReactNode;
}

export const AppSidebar = ({ children }: AppSidebarProps) => {
  return (
    <Sidebar
      groups={groups}
      slotProps={{
        provider: { className: "isolate" },
        root: { className: "sidebar-below-header" },
      }}
    >
      {children}
    </Sidebar>
  );
};
