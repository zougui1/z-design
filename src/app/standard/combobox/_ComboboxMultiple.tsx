"use client";

import { Combobox } from "~/ui/components";

const frameworks = [
  "Next.js",
  "SvelteKit",
  "Nuxt.js",
  "Remix",
  "Astro",
] as const;

export function ComboboxMultiple() {
  return (
    <Combobox
      multiple
      autoHighlight
      items={frameworks}
      defaultValue={[frameworks[0]]}
      placeholder="Choose a framework"
    />
  );
}
