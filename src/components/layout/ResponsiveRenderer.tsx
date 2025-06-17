import { css } from "@emotion/react";
import { ReactNode } from "react";

import useMediaQuery, { MOBILE_WIDTH } from "@/hooks/useMediaQuery";

interface Props {
  mobile: ReactNode;
  pc: ReactNode;
}

export default function ResponsiveRenderer({ mobile, pc }: Props) {
  const isMobile = useMediaQuery(MOBILE_WIDTH);

  return <>{isMobile ? <div css={mobileContainerStyle}>{mobile}</div> : pc}</>;
}

const mobileContainerStyle = css`
  height: 100dvh;
  overflow: auto;
`;
