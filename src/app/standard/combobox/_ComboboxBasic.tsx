"use client";

import { Combobox } from "~/ui/components";

const frameworks = [
  "Next.js",
  "SvelteKit",
  "Nuxt.js",
  "Remix",
  "Astro",
] as const;

export function ComboboxBasic() {
  return <Combobox items={frameworks.map((v) => ({ value: v, label: v }))} />;
}
