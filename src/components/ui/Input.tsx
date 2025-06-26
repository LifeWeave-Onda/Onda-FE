import { css } from "@emotion/react";
import { InputHTMLAttributes } from "react";

// input 요소의 모든 기본 속성을 포함하는 props 정의
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input(props: InputProps) {
  return <input css={inputStyle} {...props} />;
}

const inputStyle = css`
  width: 100%;
  padding: 14px 27px 14px 16px;
  border: 1px solid #d9d9d9;

  ::placeholder {
    color: #666666;
    font-size: 14px;
    font-weight: 400;
  }
`;
