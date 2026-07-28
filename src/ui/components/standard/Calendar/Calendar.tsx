"use client";

import { BaseCalendar, type BaseCalendarProps } from "../../base";

export type CalendarProps = BaseCalendarProps;

export const Calendar = (props: CalendarProps) => {
  return <BaseCalendar {...props} />;
};
