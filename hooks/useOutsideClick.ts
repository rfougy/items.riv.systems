import { useEffect, RefObject } from "react";

function useOutsideClick(ref: RefObject<any>, callback: () => any): void {
  useEffect(() => {
    function handleOutsideClick(event: MouseEvent): void {
      if (ref.current && !ref.current.contains(event.target as Node))
        callback();
    }

    window.addEventListener("mousedown", handleOutsideClick);
    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [ref, callback]);
}

export default useOutsideClick;
