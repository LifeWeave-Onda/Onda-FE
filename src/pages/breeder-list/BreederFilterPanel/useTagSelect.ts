import { useState } from "react";

export default function useTagSelect(initialTags: string[] = []) {
  const [selectedTags, setSelectedTags] = useState<string[]>(initialTags);

  const selectTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev : [...prev, tag]));
  };

  const removeTag = (tag: string) => {
    setSelectedTags((prev) => prev.filter((t) => t !== tag));
  };

  const clearTags = () => {
    setSelectedTags([]);
  };

  return {
    selectedTags,
    selectTag,
    removeTag,
    clearTags,
  };
}
