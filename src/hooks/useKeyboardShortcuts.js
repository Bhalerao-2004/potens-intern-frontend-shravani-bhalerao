import { useEffect } from "react";

function useKeyboardShortcuts(
  selected,
  setSelected,
  items,
  approve,
  hold
) {
  useEffect(() => {
    const handle = (e) => {
      if (e.key === "j") {
        setSelected((s) =>
          Math.min(s + 1, items.length - 1)
        );
      }

      if (e.key === "k") {
        setSelected((s) =>
          Math.max(s - 1, 0)
        );
      }

      if (e.key === "a") {
        approve(selected);
      }

      if (e.key === "h") {
        hold(selected);
      }
    };

    window.addEventListener("keydown", handle);

    return () =>
      window.removeEventListener(
        "keydown",
        handle
      );
  }, [selected]);
}

export default useKeyboardShortcuts;