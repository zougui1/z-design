import { BaseSelect, Container } from "~/ui/components";

const apples = [
  { label: "Gala", value: "gala" },
  { label: "Fuji", value: "fuji" },
  { label: "Honeycrisp", value: "honeycrisp" },
  { label: "Granny Smith", value: "granny-smith" },
  { label: "Pink Lady", value: "pink-lady" },
];

export default function BaseBasePage() {
  return (
    <Container className="space-y-4">
      <div className="flex flex-col gap-1">
        <BaseSelect.Root items={apples}>
          <BaseSelect.Label>Apple</BaseSelect.Label>
          <BaseSelect.Trigger>
            <BaseSelect.Value placeholder="Select apple" />
            <BaseSelect.Icon />
          </BaseSelect.Trigger>
          <BaseSelect.Portal>
            <BaseSelect.Positioner>
              <BaseSelect.Popup>
                <BaseSelect.ScrollUpArrow />

                <BaseSelect.List>
                  {apples.map(({ label, value }) => (
                    <BaseSelect.Item key={label} value={value}>
                      <BaseSelect.ItemText>{label}</BaseSelect.ItemText>

                      <BaseSelect.ItemIndicator />
                    </BaseSelect.Item>
                  ))}
                </BaseSelect.List>

                <BaseSelect.ScrollDownArrow />
              </BaseSelect.Popup>
            </BaseSelect.Positioner>
          </BaseSelect.Portal>
        </BaseSelect.Root>
      </div>
    </Container>
  );
}
