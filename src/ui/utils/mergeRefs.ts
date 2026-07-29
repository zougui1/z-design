export type PossibleRef<T> = React.Ref<T> | undefined;

const assignRef = <T>(ref: PossibleRef<T>, value: T | null) => {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref != null) {
    (ref as React.RefObject<T | null>).current = value;
  }
};

/** Combine several refs into a single callback ref that forwards to each of them. */
export const mergeRefs = <T>(
  ...refs: PossibleRef<T>[]
): React.RefCallback<T> => {
  return (value) => {
    for (const ref of refs) {
      assignRef(ref, value);
    }
  };
};
