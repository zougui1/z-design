import { Container, Button, Tooltip } from "~/ui/components";
import { AnimatedTooltip } from "./_demo";

export default function HomePage() {
  return (
    <Container>
      <div className="flex flex-col gap-6">
        <div className="mt-12 flex gap-2">
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger render={<Button />}>Left</Tooltip.Trigger>

              <Tooltip.Portal>
                <Tooltip.Positioner side="left">
                  <Tooltip.Popup>
                    <Tooltip.Arrow />
                    Test
                  </Tooltip.Popup>
                </Tooltip.Positioner>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>

          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger render={<Button />}>Top</Tooltip.Trigger>

              <Tooltip.Portal>
                <Tooltip.Positioner side="top">
                  <Tooltip.Popup>
                    <Tooltip.Arrow />
                    Test
                  </Tooltip.Popup>
                </Tooltip.Positioner>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>

          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger render={<Button />}>Bottom</Tooltip.Trigger>

              <Tooltip.Portal>
                <Tooltip.Positioner side="bottom">
                  <Tooltip.Popup>
                    <Tooltip.Arrow />
                    Test
                  </Tooltip.Popup>
                </Tooltip.Positioner>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>

          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger render={<Button />}>Right</Tooltip.Trigger>

              <Tooltip.Portal>
                <Tooltip.Positioner side="right">
                  <Tooltip.Popup>
                    <Tooltip.Arrow />
                    Test
                  </Tooltip.Popup>
                </Tooltip.Positioner>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        </div>

        <div>
          <AnimatedTooltip />
        </div>
      </div>
    </Container>
  );
}
