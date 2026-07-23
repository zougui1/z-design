"use client";

import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
} from "lucide-react";

import { cn } from "../../../utils";
import { PrimitiveCalendar, type PrimitiveCalendarProps } from "../../primitives";

export type BaseCalendarProps = PrimitiveCalendarProps;

interface ChevronProps {
  className?: string;
  size?: number;
  disabled?: boolean;
  orientation?: "up" | "down" | "left" | "right";
}

const Chevron = ({ orientation, className }: ChevronProps) => {
  if (orientation === "right") return <ChevronRight className={className} />;
  if (orientation === "up") return <ChevronUp className={className} />;
  if (orientation === "down") return <ChevronDown className={className} />;
  return <ChevronLeft className={className} />;
};

export const BaseCalendar = ({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "dropdown",
  startMonth,
  endMonth,
  components,
  ...props
}: BaseCalendarProps) => {
  // the month/year dropdowns only render options within the navigable range,
  // so default to a wide window (overridable via startMonth / endMonth)
  const currentYear = new Date().getFullYear();
  const resolvedStartMonth = startMonth ?? new Date(currentYear - 100, 0);
  const resolvedEndMonth = endMonth ?? new Date(currentYear + 10, 11);

  return (
    <PrimitiveCalendar
      data-slot="calendar"
      showOutsideDays={showOutsideDays}
      captionLayout={captionLayout}
      startMonth={resolvedStartMonth}
      endMonth={resolvedEndMonth}
      className={cn("p-3", className)}
      classNames={{
        ...classNames,
        root: cn("relative", classNames?.root),
        months: cn("relative flex flex-col gap-4 sm:flex-row", classNames?.months),
        month: cn("flex flex-col gap-4", classNames?.month),

        // navigation: buttons sit at the edges, caption centered between them
        nav: cn(
          "absolute inset-x-0 top-0 flex h-9 items-center justify-between px-1",
          classNames?.nav,
        ),
        button_previous: cn(
          `border-border text-foreground hover:bg-accent inline-flex size-8
          cursor-pointer items-center justify-center rounded-md border bg-transparent
          opacity-70 transition-opacity hover:opacity-100
          aria-disabled:pointer-events-none aria-disabled:opacity-30`,
          classNames?.button_previous,
        ),
        button_next: cn(
          `border-border text-foreground hover:bg-accent inline-flex size-8
          cursor-pointer items-center justify-center rounded-md border bg-transparent
          opacity-70 transition-opacity hover:opacity-100
          aria-disabled:pointer-events-none aria-disabled:opacity-30`,
          classNames?.button_next,
        ),
        chevron: cn("size-4", classNames?.chevron),

        month_caption: cn(
          "flex h-9 items-center justify-center",
          classNames?.month_caption,
        ),
        caption_label: cn(
          `inline-flex items-center gap-1 rounded-md px-1 text-sm font-medium
          select-none [&>svg]:text-muted-foreground [&>svg]:size-3.5`,
          classNames?.caption_label,
        ),

        // month / year dropdown menus (a transparent <select> overlaying the
        // styled caption label above)
        dropdowns: cn(
          "flex items-center justify-center gap-1.5",
          classNames?.dropdowns,
        ),
        dropdown_root: cn(
          `border-border focus-within:ring-ring hover:bg-accent relative inline-flex
          items-center rounded-md border transition-colors focus-within:ring-2`,
          classNames?.dropdown_root,
        ),
        dropdown: cn(
          "absolute inset-0 z-10 cursor-pointer opacity-0",
          classNames?.dropdown,
        ),

        month_grid: cn("w-full border-collapse", classNames?.month_grid),
        weekdays: cn("flex", classNames?.weekdays),
        weekday: cn(
          "text-muted-foreground w-9 rounded-md text-[0.8rem] font-normal",
          classNames?.weekday,
        ),
        week: cn("mt-2 flex w-full", classNames?.week),

        // the gridcell carries data-selected / data-today / … attributes, so the
        // day button below is styled via group-data-* variants
        day: cn(
          "group/day relative size-9 p-0 text-center text-sm",
          classNames?.day,
        ),
        day_button: cn(
          `hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring
          inline-flex size-9 cursor-pointer items-center justify-center rounded-md
          p-0 text-sm font-normal transition-colors focus-visible:ring-2
          focus-visible:outline-none
          group-data-[today=true]/day:ring-primary/50 group-data-[today=true]/day:font-medium
          group-data-[today=true]/day:ring-1 group-data-[today=true]/day:ring-inset
          group-data-[selected=true]/day:bg-primary group-data-[selected=true]/day:text-primary-foreground
          group-data-[selected=true]/day:hover:bg-primary
          group-data-[outside=true]/day:text-muted-foreground group-data-[outside=true]/day:opacity-50
          group-data-[disabled=true]/day:text-muted-foreground group-data-[disabled=true]/day:pointer-events-none group-data-[disabled=true]/day:opacity-50`,
          classNames?.day_button,
        ),

        hidden: cn("invisible", classNames?.hidden),
      }}
      components={{
        Chevron,
        ...components,
      }}
      {...props}
    />
  );
};
