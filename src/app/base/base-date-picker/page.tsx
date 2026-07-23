"use client";

import { CalendarIcon } from "lucide-react";
import { useState } from "react";

import {
  BaseButton,
  BaseCalendar,
  BaseDatePicker,
  Container,
  Typography,
} from "~/ui/components/base";

export default function BaseDatePickerPage() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Date | undefined>(undefined);

  return (
    <Container>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Typography.H2>BaseDatePicker</Typography.H2>
          <Typography.Muted>
            base-ui popover parts hosting a react-day-picker calendar.
          </Typography.Muted>

          <BaseDatePicker.Root open={open} onOpenChange={setOpen}>
            <BaseDatePicker.Trigger
              render={
                <BaseButton
                  variant="outline"
                  color="neutral"
                  className="w-64 justify-start gap-2 font-normal"
                >
                  <CalendarIcon data-icon="inline-start" className="size-4" />
                  {selected
                    ? selected.toLocaleDateString()
                    : "Pick a date"}
                </BaseButton>
              }
            />

            <BaseDatePicker.Portal>
              <BaseDatePicker.Positioner>
                <BaseDatePicker.Popup>
                  <BaseCalendar
                    mode="single"
                    selected={selected}
                    onSelect={(date) => {
                      setSelected(date);
                      setOpen(false);
                    }}
                    autoFocus
                  />
                </BaseDatePicker.Popup>
              </BaseDatePicker.Positioner>
            </BaseDatePicker.Portal>
          </BaseDatePicker.Root>
        </div>
      </div>
    </Container>
  );
}
