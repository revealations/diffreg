import { useEffect } from "react";

export const useWindowScrollEvent = (
  listener: (this: Window, ev: Event) => unknown,
) => {
  useEffect(() => {
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);
};
