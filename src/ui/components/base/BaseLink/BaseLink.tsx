"use client";

import { mergeProps, useRender } from "@base-ui/react";

interface BaseLinkProps extends useRender.ComponentProps<"a"> {
  scope?: BaseLink.Scope;
}

export const BaseLink = ({
  scope = "internal",
  className,
  render,
  ...props
}: BaseLinkProps) => {
  return useRender({
    defaultTagName: "a",
    render,
    props: mergeProps<"a">(
      {
        className,
        rel: scope === "external" ? "noreferer noopener" : undefined,
      },
      props,
    ),
  });
};

export namespace BaseLink {
  export type Props = BaseLinkProps;
  export type Scope = "internal" | "external";
}
