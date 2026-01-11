import { Container, Dialog, Button } from "~/ui/components";
import { ZScrollArea } from "~/ui/components/standard";

const variants = ["solid", "transparent", "outline"] as const;

export default function HomePage() {
  return (
    <Container>
      <div className="mt-2 flex flex-col gap-8">
        <div className="flex gap-4">
          {variants.map((variant) => (
            <Dialog.Root key={variant}>
              <Dialog.Trigger
                render={
                  <Button
                    variant={variant === "transparent" ? "ghost" : variant}
                  />
                }
              >
                Open Dialog
              </Dialog.Trigger>

              <Dialog.Content variant={variant}>
                <Dialog.Header>
                  <Dialog.Title>Dialog</Dialog.Title>
                  <Dialog.Description>Test</Dialog.Description>
                </Dialog.Header>

                <ZScrollArea className="flex flex-col gap-6" vertical>
                  {new Array(25).fill(0).map((_, i) => (
                    <p key={i}>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Ipsum voluptates nobis voluptatem ab est repellendus
                      officiis voluptas, inventore libero. Harum vero ad cumque
                      necessitatibus optio rem iusto odit dolore omnis!
                    </p>
                  ))}
                </ZScrollArea>

                <Dialog.Footer>Footer</Dialog.Footer>
              </Dialog.Content>
            </Dialog.Root>
          ))}
        </div>

        <div className="flex gap-4">
          {variants.map((variant) => (
            <Dialog.Root key={variant}>
              <Dialog.Trigger
                render={
                  <Button
                    blur
                    variant={variant === "transparent" ? "ghost" : variant}
                  />
                }
              >
                Open Dialog
              </Dialog.Trigger>

              <Dialog.Content
                variant={variant}
                backdropBlur
                className="h-[500px]"
              >
                <Dialog.Header>
                  <Dialog.Title>Dialog</Dialog.Title>
                  <Dialog.Description>Test</Dialog.Description>
                </Dialog.Header>

                <ZScrollArea className="flex flex-col gap-6" vertical>
                  {new Array(25).fill(0).map((_, i) => (
                    <p key={i}>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Ipsum voluptates nobis voluptatem ab est repellendus
                      officiis voluptas, inventore libero. Harum vero ad cumque
                      necessitatibus optio rem iusto odit dolore omnis!
                    </p>
                  ))}
                </ZScrollArea>

                <Dialog.Footer>Footer</Dialog.Footer>
              </Dialog.Content>
            </Dialog.Root>
          ))}
        </div>

        <div className="flex gap-4">
          <Dialog.Root>
            <Dialog.Trigger render={<Button />}>
              Open Dialog Stack
            </Dialog.Trigger>

            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>Dialog</Dialog.Title>
                <Dialog.Description>Test</Dialog.Description>
              </Dialog.Header>

              <ZScrollArea className="flex flex-col gap-6" vertical>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ipsum voluptates nobis voluptatem ab est repellendus officiis
                  voluptas, inventore libero. Harum vero ad cumque
                  necessitatibus optio rem iusto odit dolore omnis!
                </p>
              </ZScrollArea>

              <Dialog.Footer>
                <Dialog.Root>
                  <Dialog.Trigger render={<Button />}>
                    Open Dialog Stack
                  </Dialog.Trigger>

                  <Dialog.Content>
                    <Dialog.Header>
                      <Dialog.Title>Dialog</Dialog.Title>
                      <Dialog.Description>Test</Dialog.Description>
                    </Dialog.Header>

                    <ZScrollArea className="flex flex-col gap-6" vertical>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ipsum voluptates nobis voluptatem ab est
                        repellendus officiis voluptas, inventore libero. Harum
                        vero ad cumque necessitatibus optio rem iusto odit
                        dolore omnis!
                      </p>
                    </ZScrollArea>

                    <Dialog.Footer>
                      <Dialog.Close render={<Button />}>Close</Dialog.Close>
                    </Dialog.Footer>
                  </Dialog.Content>
                </Dialog.Root>
              </Dialog.Footer>
            </Dialog.Content>
          </Dialog.Root>
        </div>

        {new Array(10).fill(0).map((_, i) => (
          <p key={i}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
            voluptates nobis voluptatem ab est repellendus officiis voluptas,
            inventore libero. Harum vero ad cumque necessitatibus optio rem
            iusto odit dolore omnis!
          </p>
        ))}
      </div>
    </Container>
  );
}
