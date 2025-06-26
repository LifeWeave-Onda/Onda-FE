import { css } from "@emotion/react";
import { ButtonHTMLAttributes, ReactNode } from "react";

// button 요소의 모든 기본 속성을 props로 받을 수 있도록 설정합니다.
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

// rest 문법을 사용해 children을 제외한 나머지 props를 모읍니다.
export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button css={buttonStyle} {...props}>
      {children}
    </button>
  );
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
