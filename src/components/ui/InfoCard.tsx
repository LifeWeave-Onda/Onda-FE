import { css } from "@emotion/react";
import { ReactNode } from "react";

interface InfoCardProps {
  children: ReactNode;
}
export default function InfoCard({ children }: InfoCardProps) {
  return <div css={infoCardStyle}>{children}</div>;
}

const infoCardStyle = css`
  width: 705px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  border: none;
  box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.25);
`;
