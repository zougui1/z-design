import { User } from "lucide-react";

import { BaseAvatar } from "../base";

export interface AvatarProps
  extends BaseAvatar.Root.Props, Pick<BaseAvatar.Image.Props, "src" | "alt"> {
  fallback?: React.ReactNode;
  slotProps?: {
    image?: Partial<BaseAvatar.Image.Props>;
    fallback?: Partial<BaseAvatar.Fallback.Props>;
    badge?: Partial<BaseAvatar.Badge.Props>;
  };
}

export const Avatar = ({
  src,
  alt,
  fallback,
  slotProps,
  ...props
}: AvatarProps) => {
  return (
    <BaseAvatar.Root {...props}>
      <BaseAvatar.Image src={src} alt={alt} {...slotProps?.image} />

      <BaseAvatar.Fallback {...slotProps?.fallback}>
        {slotProps?.fallback?.children ?? fallback ?? <User />}
      </BaseAvatar.Fallback>

      {slotProps?.badge && <BaseAvatar.Badge {...slotProps.badge} />}
    </BaseAvatar.Root>
  );
};
