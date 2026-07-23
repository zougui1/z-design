import { type GroupNavItem, type NavItem, SidebarNav } from "./SidebarNav";
import { Sidebar } from "./components/base";
import { cn } from "./utils";

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
    label: "Primitives",
    items: [
      {
        label: "Primitive Accordion",
        url: "/primitive/primitive-accordion",
      },
      {
        label: "Primitive Alert",
        url: "/primitive/primitive-alert",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Primitive Alert Dialog",
        url: "/primitive/primitive-alert-dialog",
      },
      {
        label: "Primitive Autocomplete",
        url: "/primitive/primitive-autocomplete",
      },
      {
        label: "Primitive Aspect Ratio",
        url: "/primitive/primitive-aspect-ratio",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Primitive Avatar",
        url: "/primitive/primitive-avatar",
      },
      {
        label: "Primitive Badge",
        url: "/primitive/primitive-badge",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Primitive Breadcrumb",
        url: "/primitive/primitive-breadcrumb",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Primitive Button",
        url: "/primitive/primitive-button",
      },
      {
        label: "Primitive Button Group",
        url: "/primitive/primitive-button-group",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Primitive Calendar",
        url: "/primitive/primitive-calendar",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Primitive Card",
        url: "/primitive/primitive-card",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Primitive Carousel",
        url: "/primitive/primitive-carousel",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Primitive Checkbox",
        url: "/primitive/primitive-checkbox",
      },
      {
        label: "Primitive Checkbox Group",
        url: "/primitive/primitive-checkbox-group",
      },
      {
        label: "Primitive Collapsible",
        url: "/primitive/primitive-collapsible",
      },
      {
        label: "Primitive Combobox",
        url: "/primitive/primitive-combobox",
      },
      {
        label: "Primitive Context Menu",
        url: "/primitive/primitive-context-menu",
      },
      {
        label: "Primitive Data Table",
        url: "/primitive/primitive-data-table",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Primitive Date Picker",
        url: "/primitive/primitive-date-picker",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Primitive Dialog",
        url: "/primitive/primitive-dialog",
      },
      {
        label: "Primitive Direction",
        url: "/primitive/primitive-direction",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Primitive Drawer",
        url: "/primitive/primitive-drawer",
      },
      {
        label: "Primitive Empty",
        url: "/primitive/primitive-empty",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Primitive Field",
        url: "/primitive/primitive-field",
      },
      {
        label: "Primitive Fieldset",
        url: "/primitive/primitive-fieldset",
      },
      {
        label: "Primitive Form",
        url: "/primitive/primitive-form",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Primitive Input",
        url: "/primitive/primitive-input",
      },
      {
        label: "Primitive InputGroup",
        url: "/primitive/primitive-input-group",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Primitive Item",
        url: "/primitive/primitive-item",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Primitive Kbd",
        url: "/primitive/primitive-kbd",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Primitive Label",
        url: "/primitive/primitive-label",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Primitive Menu",
        url: "/primitive/primitive-menu",
      },
      {
        label: "Primitive Menubar",
        url: "/primitive/primitive-menubar",
      },
      {
        label: "Primitive Meter",
        url: "/primitive/primitive-meter",
      },
      {
        label: "Primitive Number Field",
        url: "/primitive/primitive-number-field",
      },
      {
        label: "Primitive Pagination",
        url: "/primitive/primitive-pagination",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Primitive Popover",
        url: "/primitive/primitive-popover",
      },
      {
        label: "Primitive Preview Card",
        url: "/primitive/primitive-preview-card",
      },
      {
        label: "Primitive Progress",
        url: "/primitive/primitive-progress",
      },
      {
        label: "Primitive Radio",
        url: "/primitive/primitive-radio",
      },
      {
        label: "Primitive Resizable",
        url: "/primitive/primitive-resizable",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Primitive Scroll Area",
        url: "/primitive/primitive-scroll-area",
      },
      {
        label: "Primitive Select",
        url: "/primitive/primitive-select",
      },
      {
        label: "Primitive Separator",
        url: "/primitive/primitive-separator",
      },
      {
        label: "Primitive Sidebar",
        url: "/primitive/primitive-sidebar",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Primitive Skeleton",
        url: "/primitive/primitive-skeleton",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Primitive Slider",
        url: "/primitive/primitive-slider",
      },
      {
        label: "Primitive Spinner",
        url: "/primitive/primitive-spinner",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Primitive Switch",
        url: "/primitive/primitive-switch",
      },
      {
        label: "Primitive Table",
        url: "/primitive/primitive-table",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Primitive Tabs",
        url: "/primitive/primitive-tabs",
      },
      {
        label: "Primitive Textarea",
        url: "/primitive/primitive-textarea",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Primitive Toast",
        url: "/primitive/primitive-toast",
      },
      {
        label: "Primitive Toggle",
        url: "/primitive/primitive-toggle",
      },
      {
        label: "Primitive Toggle Group",
        url: "/primitive/primitive-toggle-group",
      },
      {
        label: "Primitive Tooltip",
        url: "/primitive/primitive-tooltip",
      },
    ],
    collapsible: true,
  },
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
        className: cn("text-muted-foreground opacity-60"),
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
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Base Avatar",
        url: "/base/base-avatar",
      },
      {
        label: "Base Badge",
        url: "/base/base-badge",
        className: cn("text-muted-foreground opacity-60"),
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
        className: cn("text-muted-foreground opacity-60"),
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
        className: cn("text-muted-foreground opacity-60"),
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
        className: cn("text-muted-foreground opacity-60"),
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
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Base Label",
        url: "/base/base-label",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Base Menu",
        url: "/base/base-menu",
      },
      {
        label: "Base Menubar",
        url: "/base/base-menubar",
        className: cn("text-muted-foreground opacity-60"),
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
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Base Preview Card",
        url: "/base/base-preview-card",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Base Progress",
        url: "/base/base-progress",
      },
      {
        label: "Base Radio",
        url: "/base/base-radio",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Base Resizable",
        url: "/base/base-resizable",
        className: cn("text-muted-foreground opacity-60"),
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
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Base Slider",
        url: "/base/base-slider",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Base Spinner",
        url: "/base/base-spinner",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Base Switch",
        url: "/base/base-switch",
        className: cn("text-muted-foreground opacity-60"),
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
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Base Toggle",
        url: "/base/base-toggle",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Base Toggle Group",
        url: "/base/base-toggle-group",
        className: cn("text-muted-foreground opacity-60"),
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
        label: "Alert",
        url: "/standard/alert",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Alert Dialog",
        url: "/standard/alert-dialog",
        className: cn("text-muted-foreground opacity-60"),
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
        label: "Button",
        url: "/standard/button",
      },
      {
        label: "Calendar",
        url: "/standard/calendar",
      },
      {
        label: "Checkbox",
        url: "/standard/checkbox",
      },
      {
        label: "Combobox",
        url: "/standard/combobox",
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
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Drawer",
        url: "/standard/drawer",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Field",
        url: "/standard/field",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Fieldset",
        url: "/standard/fieldset",
        className: cn("text-muted-foreground opacity-60"),
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
        label: "Menu",
        url: "/standard/menu",
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Meter",
        url: "/standard/meter",
        className: cn("text-muted-foreground opacity-60"),
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
        label: "Progress",
        url: "/standard/progress",
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
        className: cn("text-muted-foreground opacity-60"),
      },
      {
        label: "Skeleton",
        url: "/standard/skeleton",
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
        label: "Tooltip",
        url: "/standard/tooltip",
      },
    ],
    collapsible: true,
  },
  {
    label: "Future (next)",
    items: [],
    collapsible: true,
    className: cn("text-muted-foreground opacity-60"),
  },
  {
    label: "Future (unknown)",
    items: [],
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
