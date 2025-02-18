import { useRef, useEffect } from "react";

export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  handler: (event: Event) => void,
  active = true
) {
  const ref = useRef<T>();

  useEffect(() => {
    if (active) {
      const listener = (event: Event) => {
        const el = ref?.current;

        if (el?.contains(event.target as Node)) {
          handler(event);
        }
      };

      window.addEventListener(`click`, listener);
      return () => window.removeEventListener(`click`, listener);
    }
  }, [handler, active]);

  return ref;
}
