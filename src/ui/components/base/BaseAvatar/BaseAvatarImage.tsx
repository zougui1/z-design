"use client";
import { cnState } from "../../../utils";
import { PrimitiveAvatar } from "../../primitives";

export interface BaseAvatarImageProps extends PrimitiveAvatar.Image.Props {}

export type BaseAvatarImageState = PrimitiveAvatar.Image.State;

export const BaseAvatarImage = ({
  className,
  ...props
}: BaseAvatarImageProps) => {
  return (
    <PrimitiveAvatar.Image
      data-slot="avatar-image"
      {...props}
      className={cnState(
        "aspect-square size-full rounded-full object-cover",
        className,
      )}
    />
  );
};

export namespace BaseAvatarImage {
  export type Props = BaseAvatarImageProps;
  export type State = BaseAvatarImageState;
}
