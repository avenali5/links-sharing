import { useEffect, useRef, RefObject } from "react";

const useClickOutside = <T extends HTMLElement>(
  callback: () => void
): RefObject<T> => {
  const ref = useRef<T>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return ref;
};

export default useClickOutside;
