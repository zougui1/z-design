"use client";

import { BaseButtonGroup } from "../../base";
import { Button, type ButtonProps } from "../Button";

export interface ButtonGroupItem extends ButtonProps {
  key?: React.Key;
  label?: React.ReactNode;
}

export interface ButtonGroupProps extends BaseButtonGroup.Props {
  /** Convenience: render a Button per entry. Omit and pass children instead. */
  items?: ButtonGroupItem[];
  children?: React.ReactNode;
}

export const ButtonGroup = ({
  items,
  children,
  ...props
}: ButtonGroupProps) => {
  return (
    <BaseButtonGroup {...props}>
      {items
        ? items.map(({ key, label, children: itemChildren, ...item }, index) => (
            <Button key={key ?? index} {...item}>
              {label ?? itemChildren}
            </Button>
          ))
        : children}
    </BaseButtonGroup>
  );
};
