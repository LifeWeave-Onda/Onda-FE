import { css } from "@emotion/react";

import bottomArrow from "@/assets/breeder-list/bottom-arrow.svg";

import { useBreederFilterContext } from "./Root";

export default function Trigger({ label }: { label: string }) {
  const { isOpen, toggle } = useBreederFilterContext();

  return (
    <button type="button" onClick={toggle} css={triggerStyle(isOpen)}>
      <span>{label}</span>
      <img src={bottomArrow} alt="arrow" />
    </button>
  );
}

const triggerStyle = (isOpen: boolean) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;
  width: 100%;

  img {
    transition: transform 0.3s ease;
    transform: rotate(${isOpen ? "180deg" : "0deg"});
  }
`;
