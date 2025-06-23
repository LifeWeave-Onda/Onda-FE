import Fuse from "fuse.js";
import { useMemo, useState } from "react";

export function useFuzzySearch<T>(list: T[], threshold: number = 0.3) {
  const [inputValue, setInputValue] = useState("");

  const fuse = useMemo(() => new Fuse(list, { threshold }), [list, threshold]);

  const filteredList = useMemo(() => {
    if (!inputValue) return list;
    return fuse.search(inputValue).map((result) => result.item);
  }, [inputValue, fuse, list]);

  return {
    inputValue,
    setInputValue,
    filteredList,
  };
}
