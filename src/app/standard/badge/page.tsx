"use client";

import { CheckIcon } from "lucide-react";
import { useState } from "react";

import { Badge, Container, Typography } from "~/ui/components";

export default function BadgePage() {
  const [tags, setTags] = useState(["Design", "System", "Base UI"]);

  return (
    <Container>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Typography.H2>Badge</Typography.H2>
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Default</Badge>
            <Badge color="success" variant="soft">
              Active
            </Badge>
            <Badge color="destructive" variant="outline">
              Error
            </Badge>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Typography.H2>With icon</Typography.H2>
          <div className="flex flex-wrap items-center gap-2">
            <Badge color="success" variant="soft" icon={<CheckIcon />}>
              Verified
            </Badge>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Typography.H2>Removable</Typography.H2>
          <div className="flex flex-wrap items-center gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="soft"
                color="neutral"
                onRemove={() => setTags((prev) => prev.filter((t) => t !== tag))}
              >
                {tag}
              </Badge>
            ))}
            {tags.length === 0 && (
              <p className="text-muted-foreground text-sm">All tags removed.</p>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
