import { type RefObject, useEffect, useState } from "react";

export default function useIntersectionObserver(
  ref: RefObject<HTMLElement | null>,
  option?: { threshold?: number },
) {
  const { threshold = 0.5 } = option || {};
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsIntersecting(entry.isIntersecting);
        });
      },
      { threshold },
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
      observer.disconnect();
    };
  }, [ref, threshold]);

  return isIntersecting;
}
