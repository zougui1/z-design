import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ClassValueState<T extends Record<string, any>> =
  | ClassValue
  | ((state: T) => ClassValue);
//| Partial<Record<keyof T, ClassValue>>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function cnState<T extends Record<string, any>>(
  ...inputs: ClassValueState<T>[]
) {
  return function (state: T) {
    const values = inputs.map((input) => {
      if (typeof input === "function") {
        return (input as (state: T) => ClassValue)(state);
      }

      return input;
    });

    return cn(values);
  };
}
