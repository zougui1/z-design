"use client";

import {
  Container,
  Resizable,
  ResizableHandle,
  ResizablePanel,
  Typography,
} from "~/ui/components";

const Pane = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="flex h-full items-center justify-center p-6 text-sm font-medium">
      {children}
    </div>
  );
};

export default function ResizablePage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Typography.H2>Resizable</Typography.H2>
          <Resizable className="h-48 rounded-lg border">
            <ResizablePanel defaultSize="30">
              <Pane>Sidebar</Pane>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel>
              <Pane>Content</Pane>
            </ResizablePanel>
          </Resizable>
        </div>

        <div className="flex flex-col gap-4">
          <Typography.H2>Vertical</Typography.H2>
          <Resizable orientation="vertical" className="h-72 rounded-lg border">
            <ResizablePanel defaultSize="60">
              <Pane>Top</Pane>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel>
              <Pane>Bottom</Pane>
            </ResizablePanel>
          </Resizable>
        </div>
      </div>
    </Container>
  );
}
