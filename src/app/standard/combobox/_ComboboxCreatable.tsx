"use client";

import { useState } from "react";

import { CreatableCombobox } from "~/ui/components";

const tag = ["dragon", "kobold", "wolf", "hellhound"];

export function ComboboxCreatable() {
  const [value, setValue] = useState<string[]>([]);
  return (
    <CreatableCombobox
      multiple
      autoHighlight
      value={value}
      onValueChange={setValue}
      items={tag}
      defaultValue={[]}
      placeholder="Select tags"
    />
  );
}
