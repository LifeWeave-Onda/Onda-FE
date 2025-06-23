import { css } from "@emotion/react";

import xIcon from "@/assets/breeder-list/x.svg";

interface Props {
  name: string;
  onClick: () => void;
}

export default function BreederFilterTag({ name, onClick }: Props) {
  return (
    <button type="button" onClick={onClick} css={tagStyle}>
      <span>{name}</span>
      <img src={xIcon} alt="x" width={8} height={8} />
    </button>
  );
}

const tagStyle = css`
  padding: 6px 20px;
  font-size: 14px;
  border-radius: 20px;
  border: 1px solid #d9d9d9;
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: fit-content;

  &:hover {
    color: #666666;
  }
`;
