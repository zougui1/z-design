import { BaseAvatar } from "../../base";
import { Avatar, type AvatarProps } from "../Avatar";

export interface AvatarGroupItem extends AvatarProps {
  key: React.Key;
}

export interface AvatarGroupProps extends BaseAvatar.Group.Props {
  items: AvatarGroupItem[];
  maxItems?: number;
  fallback?: React.ReactNode;
  slotProps?: {
    groupCount?: Partial<BaseAvatar.GroupCount.Props>;
  };
}

export const AvatarGroup = ({
  items,
  maxItems = Infinity,
  fallback,
  slotProps,
  ...props
}: AvatarGroupProps) => {
  const visibleItems = items.slice(0, maxItems);
  const invisibleItemsCount = items.length - visibleItems.length;

  return (
    <BaseAvatar.Group {...props}>
      {visibleItems.map((item) => (
        <Avatar fallback={fallback} {...item} key={item.key} />
      ))}

      {invisibleItemsCount > 0 && (
        <BaseAvatar.GroupCount {...slotProps?.groupCount}>
          {slotProps?.groupCount?.children ?? `+${invisibleItemsCount}`}
        </BaseAvatar.GroupCount>
      )}
    </BaseAvatar.Group>
  );
};
