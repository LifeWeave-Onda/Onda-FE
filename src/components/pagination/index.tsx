import { css } from "@emotion/react";
import { createContext, useContext } from "react";

import { NextButtons, PageList, PrevButtons } from "./PageControls";

interface IPaginationContext {
  totalPages: number;
  currentPage: number;
  onPageChange: (newPage: number) => void;
  pageRangeDisplayed: number;
}

const PaginationContext = createContext<IPaginationContext | null>(null);

export function usePaginationContext() {
  const context = useContext(PaginationContext);

  if (!context) {
    throw new Error("Pagination 컨텍스트를 호출할 수 없는 범위입니다.");
  }

  return context;
}

////////////////////////////////////////////////////////////////////////

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
  pageRangeDisplayed?: number;
}

/**
 * @example
 * const [page, setPage] = useState(1);
 *
 * <Pagination
 *   currentPage={page}
 *   totalPages={20}
 *   onPageChange={(newPage) => setPage(newPage)}
 *   pageRangeDisplayed={5}
 * />
 */
export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  pageRangeDisplayed = 10,
}: Props) {
  return (
    <PaginationContext.Provider
      value={{ currentPage, totalPages, onPageChange, pageRangeDisplayed }}
    >
      <div css={paginationWrapper}>
        <PrevButtons />
        <PageList />
        <NextButtons />
      </div>
    </PaginationContext.Provider>
  );
}

const paginationWrapper = css`
  display: flex;
  gap: 8px;
  align-items: center;
`;
