import { FolderIcon, PlusIcon, SearchIcon } from "lucide-react";

import { Button, Container, Empty, Typography } from "~/ui/components";

export default function EmptyPage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Typography.H2>Empty</Typography.H2>
          <Empty
            className="border border-dashed"
            media={<FolderIcon />}
            title="No projects yet"
            description="Create your first project to get started."
          >
            <Button>
              <PlusIcon /> New project
            </Button>
          </Empty>
        </div>

        <div className="flex flex-col gap-4">
          <Typography.H2>Plain media</Typography.H2>
          <Empty
            className="border border-dashed"
            mediaVariant="default"
            media={<SearchIcon className="text-muted-foreground" />}
            title="No results found"
            description="Try adjusting your search or filters."
          />
        </div>
      </div>
    </Container>
  );
}
