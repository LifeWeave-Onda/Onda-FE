import { useEffect, useState } from "react";

/**
 * 주어진 미디어 쿼리에 따라 현재 뷰포트가 해당 조건을 만족하는지 여부를 반환하는 커스텀 훅입니다.
 *
 * @param {string} query - CSS 미디어 쿼리 문자열
 * @returns {boolean} - 미디어 쿼리가 현재 화면 크기와 일치하면 true, 아니면 false
 *
 * @example
 * const isMobile = useMediaQuery(MOBILE_WIDTH);
 *
 * return <div>{isMobile ? '모바일' : 'PC 또는 태블릿'}</div>;
 */
export default function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    const handleChange = () => setMatches(matchMedia.matches);
    handleChange();

    matchMedia.addEventListener("change", handleChange);

    return () => {
      matchMedia.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
}

export const MOBILE_WIDTH = "(max-width: 767px)";
export const TABLET_WIDTH = "(min-width: 768px) and (max-width: 1279px)";
export const PC_WIDTH = "(min-width: 1280px)";
export const TABLET_AND_PC_WIDTH = "(min-width: 768px)";
