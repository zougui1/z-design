import type { AppMenuItem } from "~/ui/components/standard/AppMenu";

export const apps = {
  Scrap2: {
    name: "",
    url: "https://scrap2.zougui.com",
  },
  ROTMG: {
    name: "",
    url: "https://rotmg.zougui.com",
  },
  Trackers: {
    name: "",
    url: "https://trackers.zougui.com",
  },
  Firestone: {
    name: "",
    url: "https://firestone.zougui.com",
  },
  Gallery: {
    name: "",
    url: "https://gallery.zougui.com",
  },
  ZUI: {
    name: "",
    url: "https://zui.zougui.com",
  },
} satisfies Record<string, Pick<AppMenuItem, "name" | "url">>;

export type AppName = keyof typeof apps;

for (const [name, app] of Object.entries(apps)) {
  app.name = name;
}
