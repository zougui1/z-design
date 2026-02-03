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
        url: "/button",
      },
      {
        label: "Calendar",
        url: "/calendar",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Card",
        url: "/card",
      },
      {
        label: "Checkbox",
        url: "/checkbox",
      },
      {
        label: "Collapsible",
        url: "/collapsible",
      },
      {
        label: "Combobox",
        url: "/combobox",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Command",
        url: "/command",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Data Table",
        url: "/data-table",
      },
      {
        label: "Date Picker",
        url: "/date-picker",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Dialog",
        url: "/dialog",
      },
      {
        label: "Field",
        url: "/field",
      },
      {
        label: "Hover Card",
        url: "/hover-card",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Input",
        url: "/input",
      },
      {
        label: "InputGroup",
        url: "/input-group",
      },
      {
        label: "Number Field",
        url: "/number-field",
      },
      {
        label: "Pagination",
        url: "/pagination",
      },
      {
        label: "Popover",
        url: "/popover",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Progress",
        url: "/progress",
      },
      {
        label: "Scroll Area",
        url: "/scroll-area",
      },
      {
        label: "Select",
        url: "/select",
      },
      {
        label: "Separator",
        url: "/separator",
      },
      {
        label: "Sheet",
        url: "/sheet",
      },
      {
        label: "Sidebar",
        url: "/sidebar",
      },
      {
        label: "Skeleton",
        url: "/skeleton",
      },
      {
        label: "Spinner",
        url: "/spinner",
      },
      {
        label: "Switch",
        url: "/switch",
      },
      {
        label: "Table",
        url: "/table",
      },
      {
        label: "Tabs",
        url: "/tabs",
      },
      {
        label: "Textarea",
        url: "/textarea",
      },
      {
        label: "Toast",
        url: "/toast",
      },
      {
        label: "Tooltip",
        url: "/tooltip",
      },
    ],
    collapsible: true,
  },
  {
    label: "Standard",
    items: [
      {
        label: "Combobox",
        url: "/z-combobox",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Data Table",
        url: "/data-table",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Dialog",
        url: "/z-dialog",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Hover Card",
        url: "/z-hover-card",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Scroll Area",
        url: "/z-scroll-area",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Select",
        url: "/z-select",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Sidebar",
        url: "/z-sidebar",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Tabs",
        url: "/z-tabs",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Toast",
        url: "/z-toast",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "ToastButton",
        url: "/z-toast",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Tooltip",
        url: "/z-tooltip",
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
