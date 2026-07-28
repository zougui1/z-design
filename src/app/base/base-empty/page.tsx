import { FolderIcon, PlusIcon, SearchIcon } from "lucide-react";

import {
  BaseButton,
  BaseEmpty,
  Container,
  Typography,
} from "~/ui/components";
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

const Row = ({ children }: { children?: React.ReactNode }) => {
  return <div className="flex flex-wrap gap-2">{children}</div>;
};

export default function BaseEmptyPage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <Section title="BaseEmpty">
          <BaseEmpty.Root className="border border-dashed">
            <BaseEmpty.Header>
              <BaseEmpty.Media variant="icon">
                <FolderIcon />
              </BaseEmpty.Media>
              <BaseEmpty.Title>No projects yet</BaseEmpty.Title>
              <BaseEmpty.Description>
                Create your first project to get started.
              </BaseEmpty.Description>
            </BaseEmpty.Header>

            <BaseEmpty.Content>
              <BaseButton>
                <PlusIcon /> New project
              </BaseButton>
            </BaseEmpty.Content>
          </BaseEmpty.Root>
        </Section>

        <Section title="Default media (no background)">
          <BaseEmpty.Root className="border border-dashed">
            <BaseEmpty.Header>
              <BaseEmpty.Media>
                <SearchIcon className="text-muted-foreground" />
              </BaseEmpty.Media>
              <BaseEmpty.Title>No results found</BaseEmpty.Title>
              <BaseEmpty.Description>
                Try adjusting your search or filters.
              </BaseEmpty.Description>
            </BaseEmpty.Header>
          </BaseEmpty.Root>
        </Section>
      </div>
    </Container>
  );
}
