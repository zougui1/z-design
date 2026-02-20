import { ChevronDownIcon } from "lucide-react";
import { Container, Collapsible } from "~/ui/components";

export default function HomePage() {
  return (
    <Container>
      <Collapsible.Root className="flex w-56 flex-col justify-center">
        <Collapsible.Trigger
          className="m-0 flex items-center gap-2 rounded-sm border-none
            bg-gray-700 px-2 py-1 text-sm hover:bg-gray-600 active:bg-gray-500"
        >
          <ChevronDownIcon className="size-3 transition-transform" />
          Recovery keys
        </Collapsible.Trigger>

        <Collapsible.Content className="flex flex-col justify-end text-sm">
          <div
            className="mt-1 flex cursor-text flex-col gap-2 rounded-sm
              bg-gray-700 px-2 py-1"
          >
            <div>alien-bean-pasta</div>
            <div>wild-irish-burrito</div>
            <div>horse-battery-staple</div>
          </div>
        </Collapsible.Content>
      </Collapsible.Root>
    </Container>
  );
}
