import { css } from "@emotion/react";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return <button css={buttonStyle}>{children}</button>;
}

const buttonStyle = css`
  background-color: #52d9ff;
  text-align: center;
  width: 410px;
  height: 52px;
  padding: 14px 27px 14px 16px;
  color: #222222;
  font-size: 18px;
  font-weight: 600;
`;
