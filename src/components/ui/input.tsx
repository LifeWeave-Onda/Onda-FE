import { css } from "@emotion/react";

interface InputProps {
  type: string;
  placeholder: string;
}

export default function Input(props: InputProps) {
  return (
    <input type={props.type} placeholder={props.placeholder} css={inputStyle} />
  );
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
