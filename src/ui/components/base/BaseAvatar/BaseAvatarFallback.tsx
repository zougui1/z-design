"use client";
import { cnState } from "../../../utils";
import { PrimitiveAvatar } from "../../primitives";

export interface BaseAvatarFallbackProps
  extends PrimitiveAvatar.Fallback.Props {}

export type BaseAvatarFallbackState = PrimitiveAvatar.Fallback.State;

export const BaseAvatarFallback = ({
  className,
  ...props
}: BaseAvatarFallbackProps) => {
  return (
    <PrimitiveAvatar.Fallback
      data-slot="avatar-fallback"
      {...props}
      className={cnState(
        `bg-muted text-muted-foreground flex size-full items-center
        justify-center rounded-full text-sm group-data-[size=sm]/avatar:text-xs`,
        className,
      )}
    />
  );
};

export namespace BaseAvatarFallback {
  export type Props = BaseAvatarFallbackProps;
  export type State = BaseAvatarFallbackState;
}
