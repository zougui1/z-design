"use client";
import { cnState } from "../../../utils";
import { PrimitiveAvatar } from "../../primitives";

export interface BaseAvatarRootProps extends PrimitiveAvatar.Root.Props {
  size?: "default" | "sm" | "lg";
}

export type BaseAvatarRootState = PrimitiveAvatar.Root.State;

export const BaseAvatarRoot = ({
  className,
  size = "default",
  ...props
}: BaseAvatarRootProps) => {
  return (
    <PrimitiveAvatar.Root
      data-slot="avatar-root"
      data-size={size}
      {...props}
      className={cnState(
        `group/avatar after:border-border relative flex size-8 shrink-0
        rounded-full select-none after:absolute after:inset-0 after:rounded-full
        after:border after:mix-blend-darken data-[size=lg]:size-10
        data-[size=sm]:size-6 dark:after:mix-blend-lighten`,
        className,
      )}
    />
  );
};

export namespace BaseAvatarRoot {
  export type Props = BaseAvatarRootProps;
  export type State = BaseAvatarRootState;
}
