"use client";

import { cn } from "../../../utils";

export interface BaseScrollAreaShadowsProps {
  className?: string;
}

const base =
  "pointer-events-none absolute z-10 opacity-0 transition-opacity duration-200";

/**
 * Edge fades that appear whenever there is scrollable content past an edge, in
 * whichever direction the scroll goes. Gated by the `data-overflow-*` attributes
 * base-ui sets on the viewport (matched via `group/scroll-area` on the root).
 *
 * The fade uses the surface color (`--scroll-shadow-color`, defaulting to the
 * page background) rather than the app's purple shadow tint. Override the
 * variable when the scroll area sits on a different surface.
 */
export const BaseScrollAreaShadows = ({
  className,
}: BaseScrollAreaShadowsProps) => {
  return (
    <>
      {/* top */}
      <div
        aria-hidden
        data-slot="scroll-area-shadow"
        className={cn(
          base,
          `inset-x-0 top-0 h-5
          bg-[linear-gradient(to_bottom,var(--scroll-shadow-color,var(--background)),transparent)]
          group-has-[[data-overflow-y-start]]/scroll-area:opacity-100`,
          className,
        )}
      />
      {/* bottom */}
      <div
        aria-hidden
        data-slot="scroll-area-shadow"
        className={cn(
          base,
          `inset-x-0 bottom-0 h-5
          bg-[linear-gradient(to_top,var(--scroll-shadow-color,var(--background)),transparent)]
          group-has-[[data-overflow-y-end]]/scroll-area:opacity-100`,
          className,
        )}
      />
      {/* left */}
      <div
        aria-hidden
        data-slot="scroll-area-shadow"
        className={cn(
          base,
          `inset-y-0 left-0 w-5
          bg-[linear-gradient(to_right,var(--scroll-shadow-color,var(--background)),transparent)]
          group-has-[[data-overflow-x-start]]/scroll-area:opacity-100`,
          className,
        )}
      />
      {/* right */}
      <div
        aria-hidden
        data-slot="scroll-area-shadow"
        className={cn(
          base,
          `inset-y-0 right-0 w-5
          bg-[linear-gradient(to_left,var(--scroll-shadow-color,var(--background)),transparent)]
          group-has-[[data-overflow-x-end]]/scroll-area:opacity-100`,
          className,
        )}
      />
    </>
  );
};

export namespace BaseScrollAreaShadows {
  export type Props = BaseScrollAreaShadowsProps;
}
