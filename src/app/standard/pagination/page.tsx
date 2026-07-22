"use client";

import { useState } from "react";

import { Pagination } from "~/ui/components";
import { Container, Typography } from "~/ui/components/base";
import { cn } from "~/ui/utils";

const Section = ({
  title,
  children,
  className,
}: {
  title?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className="flex flex-col gap-4">
      {title && <Typography.H2>{title}</Typography.H2>}

      <div className={cn("flex flex-col gap-5", className)}>{children}</div>
    </div>
  );
};

// widths chosen to fall inside each responsive variant's container range
const widths = [
  { label: "current only", className: "max-w-[16rem]" },
  { label: "edges", className: "max-w-[22rem]" },
  { label: "boundaries", className: "max-w-[30rem]" },
  { label: "siblings", className: "max-w-[40rem]" },
  { label: "full (with labels)", className: "max-w-full" },
];

export default function PaginationPage() {
  const [page, setPage] = useState(7);

  return (
    <Container>
      <div className="flex flex-col gap-8">
        <Section title="Pagination">
          <p className="text-muted-foreground text-sm">
            Resize the browser (or the boxes below) — the layout adapts to the
            container width, not the viewport.
          </p>

          {widths.map((width) => (
            <div key={width.label} className="flex flex-col gap-1">
              <span className="text-muted-foreground text-xs">
                {width.label}
              </span>
              <div
                className={cn(
                  "border-border resize-x overflow-auto rounded-lg border p-2",
                  width.className,
                )}
              >
                <Pagination
                  page={page}
                  lastPage={20}
                  onPageChange={setPage}
                />
              </div>
            </div>
          ))}
        </Section>
      </div>
    </Container>
  );
}
