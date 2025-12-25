import { ScrollArea } from "../primitives/ScrollArea";

export interface ZScrollAreaProps extends ScrollArea.ContentProps {
  shadow?: ScrollArea.ViewportProps["shadow"];
}

export const ZScrollArea = ({
  vertical,
  horizontal,
  shadow,
  ...props
}: ZScrollAreaProps) => {
  const getDefaultShadow = () => {
    if (vertical && horizontal) return true;
    if (vertical) return "y" as const;
    if (horizontal) return "x" as const;
  };

  return (
    <ScrollArea.Root>
      <ScrollArea.Viewport shadow={shadow ?? getDefaultShadow()}>
        <ScrollArea.Content {...props} />
      </ScrollArea.Viewport>

      {vertical && (
        <ScrollArea.Scrollbar>
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
      )}

      {horizontal && (
        <ScrollArea.Scrollbar orientation="horizontal">
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
      )}

      {vertical && horizontal && <ScrollArea.Corner />}
    </ScrollArea.Root>
  );
};
