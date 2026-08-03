import { InfoIcon } from "~/ui/components/icons";
import type { AppMenuItem } from "~/ui/components/standard/AppMenu";

export const apps = {
  Scrap2: {
    name: "",
    url: "https://scrap2.zougui",
    icon: InfoIcon,
  },
  ROTMG: {
    name: "",
    url: "https://rotmg.zougui",
    icon: InfoIcon,
  },
  Trackers: {
    name: "",
    url: "https://trackers.zougui",
    icon: InfoIcon,
  },
  Firestone: {
    name: "",
    url: "https://firestone.zougui",
    icon: InfoIcon,
  },
  Gallery: {
    name: "",
    url: "https://gallery.zougui",
    icon: InfoIcon,
  },
  ZUI: {
    name: "",
    url: "https://zui.zougui",
    icon: InfoIcon,
  },
} satisfies Record<string, AppMenuItem>;

export type AppName = keyof typeof apps;

for (const [name, app] of Object.entries(apps)) {
  app.name = name;
}
