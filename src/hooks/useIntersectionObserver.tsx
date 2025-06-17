import { type RefObject, useEffect, useState } from "react";

/**
 * 주어진 ref 요소에 대해 IntersectionObserver를 사용해
 * 요소가 화면에 보이는지 여부를 감지하는 커스텀 훅입니다.
 *
 * @param {RefObject<HTMLElement | null>} ref - 관찰할 DOM 요소의 ref
 * @param {{ threshold?: number }} [option] - 교차 임계값 설정 (기본값: 0.5)
 * @returns {boolean} - 요소가 화면에 교차되고 있는지 여부
 *
 * @example
 * const ref = useRef<HTMLElement>(null);
 * const isVisible = useIntersectionObserver(ref, { threshold: 0.3 });
 *
 * return <div ref={ref}>{isVisible ? "보임" : "안 보임"}</div>;
 */
export default function useIntersectionObserver(
  ref: RefObject<HTMLElement | null>,
  option?: { threshold?: number },
): boolean {
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
