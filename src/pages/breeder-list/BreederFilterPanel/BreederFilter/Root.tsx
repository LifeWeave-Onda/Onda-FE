import { css } from "@emotion/react";
import { ReactNode, createContext, useContext, useRef, useState } from "react";

interface IBreederFilterContext {
  isOpen: boolean;
  toggle: () => void;
}

const BreederFilterContext = createContext<IBreederFilterContext | null>(null);

export function useBreederFilterContext() {
  const context = useContext(BreederFilterContext);

  if (!context) {
    throw new Error("BreederFilter 컨텍스트를 호출할 수 없는 범위입니다.");
  }

  return context;
}

////////////////////////////////////////////////////////////////////////

export default function Root({
  children,
  initialWidth,
}: {
  children: ReactNode;
  initialWidth: number;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <BreederFilterContext.Provider value={{ isOpen, toggle }}>
      <div
        ref={filterRef}
        css={breederFilterWrapperStyle({ isOpen, initialWidth })}
      >
        {children}
      </div>
    </BreederFilterContext.Provider>
  );
}

const breederFilterWrapperStyle = ({
  isOpen,
  initialWidth,
}: {
  isOpen: boolean;
  initialWidth: number;
}) => css`
  width: ${!isOpen ? `${initialWidth}px` : "212px"};
  background-color: ${!isOpen ? "#F0F0F0" : "white"};
  padding: ${!isOpen ? "12px 20px" : "20px 24px"};
  border-radius: ${!isOpen ? "30px" : "10px"};
  border: ${!isOpen ? "none" : "1px solid #D9D9D9"};
  user-select: none;
`;
