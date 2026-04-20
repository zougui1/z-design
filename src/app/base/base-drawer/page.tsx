import { BaseDrawer, Container } from "~/ui/components/base";

export default function BaseDrawerPage() {
  return (
    <Container className="space-y-4">
      <BaseDrawer.Root swipeDirection="right">
        <BaseDrawer.Trigger>Open drawer</BaseDrawer.Trigger>
        <BaseDrawer.Portal>
          <BaseDrawer.Backdrop />
          <BaseDrawer.Viewport>
            <BaseDrawer.Popup>
              <BaseDrawer.Content>
                <BaseDrawer.Header>
                  <BaseDrawer.Title>BaseDrawer</BaseDrawer.Title>
                  <BaseDrawer.Description>
                    This is a drawer that slides in from the side. You can swipe
                    to dismiss it.
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
    </Container>
  );
}
