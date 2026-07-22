"use client";

import { Autocomplete, Container, Typography } from "~/ui/components";
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

      <div className={cn("flex flex-wrap gap-5", className)}>{children}</div>
    </div>
  );
};

const frameworks = [
  "Next.js",
  "SvelteKit",
  "Nuxt.js",
  "Remix",
  "Astro",
  "Solid",
  "Express",
  "Nest",
];

const languages = [
  { id: "ts", name: "TypeScript" },
  { id: "js", name: "JavaScript" },
  { id: "py", name: "Python" },
  { id: "rs", name: "Rust" },
  { id: "go", name: "Go" },
];

export default function AutocompletePage() {
  return (
    <Container>
      <div className="flex max-w-xs flex-col gap-8">
        <Section title="Default" className="flex-col">
          <Autocomplete items={frameworks} placeholder="Search frameworks" />
        </Section>

        <Section title="With label & description" className="flex-col">
          <Autocomplete
            label="Framework"
            items={frameworks}
            placeholder="Search frameworks"
            description="Start typing to filter the list."
          />
        </Section>

        <Section title="Object items" className="flex-col">
          <Autocomplete
            label="Language"
            items={languages}
            getItemLabel={(item) => item.name}
            getItemKey={(item) => item.id}
            placeholder="Search languages"
          />
        </Section>

        <Section title="Disabled" className="flex-col">
          <Autocomplete
            disabled
            label="Framework"
            items={frameworks}
            placeholder="Search frameworks"
          />
        </Section>

        <Section title="Invalid" className="flex-col">
          <Autocomplete
            label="Framework"
            items={frameworks}
            placeholder="Search frameworks"
            errors={[{ message: "Please pick a framework." }]}
          />
        </Section>
      </div>
    </Container>
  );
}
