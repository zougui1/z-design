export * from "@base-ui/react/csp-provider";
export * from "@base-ui/react/direction-provider";
export * from "@base-ui/react/merge-props";
export * from "@base-ui/react/use-render";

export * from "./base";
export * from "./icons";
export * from "./primitives";
export * from "./standard";

// `Sidebar` exists in both base (the primitive namespace) and standard (the
// composed component). Disambiguate the top-level barrel to the standard one;
// the base namespace stays available via `~/ui/components/base`.
export { Sidebar } from "./standard";
