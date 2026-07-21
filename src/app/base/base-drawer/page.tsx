import { BaseDrawer, Container } from "~/ui/components/base";

export default function BaseDrawerPage() {
  return (
    <Container>
      <div className="flex gap-4">
        <BaseDrawer.Root swipeDirection="right">
          <BaseDrawer.Trigger>Right</BaseDrawer.Trigger>
          <BaseDrawer.Portal>
            <BaseDrawer.Backdrop />
            <BaseDrawer.Viewport side="right">
              <BaseDrawer.Popup>
                <BaseDrawer.Handle />

                <BaseDrawer.Content>
                  <BaseDrawer.Header>
                    <BaseDrawer.Title>BaseDrawer</BaseDrawer.Title>
                    <BaseDrawer.Description>
                      This is a drawer that slides in from the side. You can
                      swipe to dismiss it.
                    </BaseDrawer.Description>
                  </BaseDrawer.Header>

                  <BaseDrawer.Body>
                    <div className="flex justify-end gap-4">
                      <BaseDrawer.Close>Close</BaseDrawer.Close>
                    </div>
                  </BaseDrawer.Body>
                </BaseDrawer.Content>
              </BaseDrawer.Popup>
            </BaseDrawer.Viewport>
          </BaseDrawer.Portal>
        </BaseDrawer.Root>

        <BaseDrawer.Root swipeDirection="down">
          <BaseDrawer.Trigger>Bottom</BaseDrawer.Trigger>
          <BaseDrawer.Portal>
            <BaseDrawer.Backdrop />
            <BaseDrawer.Viewport side="bottom">
              <BaseDrawer.Popup>
                <BaseDrawer.Handle />

                <BaseDrawer.Content>
                  <BaseDrawer.Header>
                    <BaseDrawer.Title>BaseDrawer</BaseDrawer.Title>
                    <BaseDrawer.Description>
                      This is a drawer that slides in from the side. You can
                      swipe to dismiss it.
                    </BaseDrawer.Description>
                  </BaseDrawer.Header>

                  <BaseDrawer.Body>
                    <div className="flex justify-end gap-4">
                      <BaseDrawer.Close>Close</BaseDrawer.Close>
                    </div>
                  </BaseDrawer.Body>
                </BaseDrawer.Content>
              </BaseDrawer.Popup>
            </BaseDrawer.Viewport>
          </BaseDrawer.Portal>
        </BaseDrawer.Root>

        <BaseDrawer.Root swipeDirection="left">
          <BaseDrawer.Trigger>Left</BaseDrawer.Trigger>
          <BaseDrawer.Portal>
            <BaseDrawer.Backdrop />
            <BaseDrawer.Viewport side="left">
              <BaseDrawer.Popup>
                <BaseDrawer.Handle />

                <BaseDrawer.Content>
                  <BaseDrawer.Header>
                    <BaseDrawer.Title>BaseDrawer</BaseDrawer.Title>
                    <BaseDrawer.Description>
                      This is a drawer that slides in from the side. You can
                      swipe to dismiss it.
                    </BaseDrawer.Description>
                  </BaseDrawer.Header>

                  <BaseDrawer.Body>
                    <div className="flex justify-end gap-4">
                      <BaseDrawer.Close>Close</BaseDrawer.Close>
                    </div>
                  </BaseDrawer.Body>
                </BaseDrawer.Content>
              </BaseDrawer.Popup>
            </BaseDrawer.Viewport>
          </BaseDrawer.Portal>
        </BaseDrawer.Root>

        <BaseDrawer.Root swipeDirection="up">
          <BaseDrawer.Trigger>Top</BaseDrawer.Trigger>
          <BaseDrawer.Portal>
            <BaseDrawer.Backdrop />
            <BaseDrawer.Viewport side="top">
              <BaseDrawer.Popup>
                <BaseDrawer.Handle />

                <BaseDrawer.Content>
                  <BaseDrawer.Header>
                    <BaseDrawer.Title>BaseDrawer</BaseDrawer.Title>
                    <BaseDrawer.Description>
                      This is a drawer that slides in from the side. You can
                      swipe to dismiss it.
                    </BaseDrawer.Description>
                  </BaseDrawer.Header>

                  <BaseDrawer.Body>
                    <div className="flex justify-end gap-4">
                      <BaseDrawer.Close>Close</BaseDrawer.Close>
                    </div>
                  </BaseDrawer.Body>
                </BaseDrawer.Content>
              </BaseDrawer.Popup>
            </BaseDrawer.Viewport>
          </BaseDrawer.Portal>
        </BaseDrawer.Root>
      </div>
    </Container>
  );
}
<div className="h-1 w-[100px]" />;
