"use client";

import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
} from "lucide-react";
import { useState } from "react";

import {
  Container,
  ToggleGroup,
  type ToggleGroupItem,
  Typography,
} from "~/ui/components";

const formatItems: ToggleGroupItem[] = [
  { value: "bold", label: <BoldIcon />, "aria-label": "Bold" },
  { value: "italic", label: <ItalicIcon />, "aria-label": "Italic" },
  { value: "underline", label: <UnderlineIcon />, "aria-label": "Underline" },
];

const alignItems: ToggleGroupItem[] = [
  { value: "left", label: <AlignLeftIcon />, "aria-label": "Align left" },
  { value: "center", label: <AlignCenterIcon />, "aria-label": "Align center" },
  { value: "right", label: <AlignRightIcon />, "aria-label": "Align right" },
];

export default function ToggleGroupPage() {
  const [align, setAlign] = useState<readonly string[]>(["left"]);

  return (
    <Container>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Typography.H2>Multiple</Typography.H2>
          <ToggleGroup
            multiple
            variant="outline"
            items={formatItems}
            defaultValue={["bold"]}
          />
        </div>

        <div className="flex flex-col gap-4">
          <Typography.H2>Single (controlled)</Typography.H2>
          <ToggleGroup
            items={alignItems}
            value={align}
            onValueChange={setAlign}
          />
          <p className="text-muted-foreground text-sm">
            Selected: {align.join(", ") || "none"}
          </p>
        </div>
      </div>
    </Container>
  );
}
