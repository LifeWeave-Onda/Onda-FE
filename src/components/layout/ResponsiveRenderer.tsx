import { css } from "@emotion/react";
import { ReactNode } from "react";

import useMediaQuery, { MOBILE_WIDTH } from "@/hooks/useMediaQuery";

interface Props {
  mobile: ReactNode;
  pc: ReactNode;
}

/**
 * 반응형 렌더링을 위한 컴포넌트입니다.
 *
 * 화면 너비가 768px 미만일 경우 `mobile` 컴포넌트를,
 * 768px 이상일 경우 `pc` 컴포넌트를 렌더링합니다.
 *
 * @example
 * <ResponsiveRenderer
 *   mobile={<MobileComponent />}
 *   pc={<PCComponent />}
 * />
 */
export default function ResponsiveRenderer({ mobile, pc }: Props) {
  const isMobile = useMediaQuery(MOBILE_WIDTH);

  return <>{isMobile ? <div css={mobileContainerStyle}>{mobile}</div> : pc}</>;
}

const mobileContainerStyle = css`
  height: 100dvh;
  overflow: auto;
`;
