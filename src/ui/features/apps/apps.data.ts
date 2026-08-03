import type { AppMenuItem } from "~/ui/components/standard/AppMenu";

export const apps = {
  Scrap2: {
    name: "",
    url: "https://scrap2.zougui",
  },
  ROTMG: {
    name: "",
    url: "https://rotmg.zougui",
  },
  Trackers: {
    name: "",
    url: "https://trackers.zougui",
  },
  Firestone: {
    name: "",
    url: "https://firestone.zougui",
  },
  Gallery: {
    name: "",
    url: "https://gallery.zougui",
  },
  ZUI: {
    name: "",
    url: "https://zui.zougui",
  },
} satisfies Record<string, Pick<AppMenuItem, "name" | "url">>;

export type AppName = keyof typeof apps;

for (const [name, app] of Object.entries(apps)) {
  app.name = name;
}
