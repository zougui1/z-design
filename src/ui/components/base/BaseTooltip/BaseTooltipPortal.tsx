"use client";

import { PrimitiveTooltip } from "../../primitives";

export interface BaseTooltipPortalProps extends PrimitiveTooltip.Portal.Props {}

export const BaseTooltipPortal = (props: BaseTooltipPortalProps) => {
  return <PrimitiveTooltip.Portal data-slot="tooltip-portal" {...props} />;
};

export namespace BaseTooltipPortal {
  export type Props = BaseTooltipPortalProps;
  export type State = PrimitiveTooltip.Portal.State;
}
