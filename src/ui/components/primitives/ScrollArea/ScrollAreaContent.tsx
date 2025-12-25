"use client";

import { ScrollArea as BaseScrollArea } from "@base-ui/react";

export interface ScrollAreaContentProps extends BaseScrollArea.Content.Props {}

export const ScrollAreaContent = (props: ScrollAreaContentProps) => {
  return <BaseScrollArea.Content data-slot="scroll-area-content" {...props} />;
};
