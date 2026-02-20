import { Sidebar } from "./components";
import { SidebarNav, type GroupNavItem, type NavItem } from "./SidebarNav";
import { cn } from "./utils";

const themeItems: NavItem[] = [
  {
    label: "Colors",
    url: "/colors",
  },
  {
    label: "Typography",
    url: "/typography",
  },
];

const componentItems: GroupNavItem[] = [
  {
    label: "Primitives",
    items: [
      {
        label: "Button",
        url: "/primitives/button",
      },
      {
        label: "Calendar",
        url: "/primitives/calendar",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Card",
        url: "/primitives/card",
      },
      {
        label: "Checkbox",
        url: "/primitives/checkbox",
      },
      {
        label: "Collapsible",
        url: "/primitives/collapsible",
      },
      {
        label: "Combobox",
        url: "/primitives/combobox",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Command",
        url: "/primitives/command",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Data Table",
        url: "/primitives/data-table",
      },
      {
        label: "Date Picker",
        url: "/primitives/date-picker",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Dialog",
        url: "/primitives/dialog",
      },
      {
        label: "Field",
        url: "/primitives/field",
      },
      {
        label: "Hover Card",
        url: "/primitives/hover-card",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Input",
        url: "/primitives/input",
      },
      {
        label: "InputGroup",
        url: "/primitives/input-group",
      },
      {
        label: "Number Field",
        url: "/primitives/number-field",
      },
      {
        label: "Pagination",
        url: "/primitives/pagination",
      },
      {
        label: "Popover",
        url: "/primitives/popover",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Progress",
        url: "/primitives/progress",
      },
      {
        label: "Scroll Area",
        url: "/primitives/scroll-area",
      },
      {
        label: "Select",
        url: "/primitives/select",
      },
      {
        label: "Separator",
        url: "/primitives/separator",
      },
      {
        label: "Sheet",
        url: "/primitives/sheet",
      },
      {
        label: "Sidebar",
        url: "/primitives/sidebar",
      },
      {
        label: "Skeleton",
        url: "/primitives/skeleton",
      },
      {
        label: "Spinner",
        url: "/primitives/spinner",
      },
      {
        label: "Switch",
        url: "/primitives/switch",
      },
      {
        label: "Table",
        url: "/primitives/table",
      },
      {
        label: "Tabs",
        url: "/primitives/tabs",
      },
      {
        label: "Textarea",
        url: "/primitives/textarea",
      },
      {
        label: "Toast",
        url: "/primitives/toast",
      },
      {
        label: "Tooltip",
        url: "/primitives/tooltip",
      },
    ],
    collapsible: true,
  },
  {
    label: "Standard",
    items: [
      {
        label: "Combobox",
        url: "/standard/combobox",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Data Table",
        url: "/standard/data-table",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Dialog",
        url: "/standard/dialog",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Hover Card",
        url: "/standard/hover-card",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Scroll Area",
        url: "/standard/scroll-area",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Select",
        url: "/standard/select",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Sidebar",
        url: "/standard/sidebar",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Tabs",
        url: "/standard/tabs",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Toast",
        url: "/standard/toast",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "ToastButton",
        url: "/standard/toast-button",
      },
      {
        label: "ToastButton",
        url: "/standard/toast",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Tooltip",
        url: "/standard/tooltip",
        className: cn("text-muted-foreground opacity-60"),
      },
    ],
    collapsible: true,
    className: cn("text-muted-foreground opacity-60"),
  },
  {
    label: "Future (next)",
    items: [
      {
        label: "Accordion",
        url: "/accordion",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Alert Dialog",
        url: "/alert-dialog",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Alert",
        url: "/alert",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Badge",
        url: "/badge",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Button Group",
        url: "/button-group",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Drawer",
        url: "/drawer",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Dropdown",
        url: "/dropdown",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Form",
        url: "/form",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Hover Card",
        url: "/hover-card",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Input Group",
        url: "/input-group",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Label",
        url: "/label",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Pagination",
        url: "/pagination",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Radio Group",
        url: "/radio-group",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Slider",
        url: "/slider",
        className: cn("text-muted-foreground opacity-60"),
      },
    ],
    collapsible: true,
    className: cn("text-muted-foreground opacity-60"),
  },
  {
    label: "Future (unknown)",
    items: [
      {
        label: "Aspect Ratio",
        url: "/aspect-ratio",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Avatar",
        url: "/avatar",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Breadcrumb",
        url: "/breadcrumb",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Carousel",
        url: "/carousel",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Chart",
        url: "/chart",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Context Menu",
        url: "/context-menu",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Empty",
        url: "/empty",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Input OTP",
        url: "/input-otp",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Item",
        url: "/item",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Kbd",
        url: "/kbd",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Menubar",
        url: "/menubar",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Navigation Menu",
        url: "/navigation-menu",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Resizable",
        url: "/resizable",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Toggle Group",
        url: "/toggle-group",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Toggle",
        url: "/toggle",
        className: cn("text-muted-foreground opacity-60"),
      },
    ],
    collapsible: true,
    className: cn("text-muted-foreground opacity-60"),
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

export const AppSidebar = () => {
  return (
    <Sidebar.Root>
      <Sidebar.Header>Z Design</Sidebar.Header>

      <Sidebar.Content>
        <SidebarNav label="Theme" items={themeItems} />
        <SidebarNav label="Components" items={componentItems} />
        <SidebarNav label="Prototypes" items={prototypeItems} />
      </Sidebar.Content>
    </Sidebar.Root>
  );
};
