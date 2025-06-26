import { ReactNode } from "react";

import { useBreederFilterContext } from "./Root";

export default function List({ children }: { children: ReactNode }) {
  const { isOpen } = useBreederFilterContext();

  if (!isOpen) return null;
  return children;
}
