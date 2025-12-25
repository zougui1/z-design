import { useEffect, useState } from "react";

export const useWindowHasFocus = () => {
  const [hasFocus, setHasFocus] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!document.hasFocus()) {
      setHasFocus(false);
    }

    window.addEventListener("blur", () => {
      setHasFocus(false);
    });
    window.addEventListener("focus", () => {
      setHasFocus(true);
    });
  }, []);

  return hasFocus;
};
