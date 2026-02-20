import { Container, Sheet, Button } from "~/ui/components";
import { ZScrollArea } from "~/ui/components/standard";

export default function HomePage() {
  return (
    <Container>
      <div className="mt-2 flex flex-col gap-8">
        <div className="flex gap-4">
          <Sheet.Root>
            <Sheet.Trigger render={<Button />}>Open Sheet</Sheet.Trigger>

            <Sheet.Content className="pr-0">
              <Sheet.Header>
                <Sheet.Title>Sheet</Sheet.Title>
                <Sheet.Description>Test</Sheet.Description>
              </Sheet.Header>

              <ZScrollArea className="flex flex-col gap-6 pl-4" vertical>
                {new Array(25).fill(0).map((_, i) => (
                  <p key={i}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ipsum voluptates nobis voluptatem ab est repellendus
                    officiis voluptas, inventore libero. Harum vero ad cumque
                    necessitatibus optio rem iusto odit dolore omnis!
                  </p>
                ))}
              </ZScrollArea>

              <Sheet.Footer>Footer</Sheet.Footer>
            </Sheet.Content>
          </Sheet.Root>
        </div>
      </div>
    </Container>
  );
}
