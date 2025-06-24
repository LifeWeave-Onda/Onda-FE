import { css } from "@emotion/react";

import firstPageIcon from "@/assets/shared/first-page.svg";
import lastPageIcon from "@/assets/shared/last-page.svg";
import nextPageIcon from "@/assets/shared/next-page.svg";
import prevPageIcon from "@/assets/shared/prev-page.svg";

import { usePaginationContext } from ".";

export const PrevButtons = () => {
  const { currentPage, onPageChange, pageRangeDisplayed } =
    usePaginationContext();

  const currentGroupStart =
    Math.floor((currentPage - 1) / pageRangeDisplayed) * pageRangeDisplayed + 1;
  const prevGroupStart = Math.max(1, currentGroupStart - pageRangeDisplayed);

  return (
    <>
      <button
        disabled={currentGroupStart === 1}
        onClick={() => onPageChange(1)}
        css={paginationArrowStyle}
      >
        <img src={firstPageIcon} alt="처음" />
      </button>
      <button
        disabled={currentGroupStart === 1}
        onClick={() => onPageChange(prevGroupStart)}
        css={paginationArrowStyle}
      >
        <img src={prevPageIcon} alt="이전" />
      </button>
    </>
  );
};

export const NextButtons = () => {
  const { currentPage, totalPages, onPageChange, pageRangeDisplayed } =
    usePaginationContext();

  const currentGroupStart =
    Math.floor((currentPage - 1) / pageRangeDisplayed) * pageRangeDisplayed + 1;
  const nextGroupStart = currentGroupStart + pageRangeDisplayed;
  const lastGroupStart =
    Math.floor((totalPages - 1) / pageRangeDisplayed) * pageRangeDisplayed + 1;

  return (
    <>
      <button
        disabled={nextGroupStart > totalPages}
        onClick={() => onPageChange(nextGroupStart)}
        css={paginationArrowStyle}
      >
        <img src={nextPageIcon} alt="다음" />
      </button>
      <button
        disabled={currentGroupStart === lastGroupStart}
        onClick={() => onPageChange(lastGroupStart)}
        css={paginationArrowStyle}
      >
        <img src={lastPageIcon} alt="끝" />
      </button>
    </>
  );
};

export const PageList = () => {
  const { currentPage, totalPages, onPageChange, pageRangeDisplayed } =
    usePaginationContext();

  const currentGroupStart =
    Math.floor((currentPage - 1) / pageRangeDisplayed) * pageRangeDisplayed + 1;
  const currentGroupEnd = Math.min(
    totalPages,
    currentGroupStart + pageRangeDisplayed - 1,
  );

  const pages = Array.from(
    { length: currentGroupEnd - currentGroupStart + 1 },
    (_, i) => currentGroupStart + i,
  );

  return (
    <>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          disabled={page === currentPage}
          css={pageButtonStyle(page === currentPage)}
        >
          {page}
        </button>
      ))}
    </>
  );
};

const paginationArrowStyle = css`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ececec;

  &:disabled {
    opacity: 0;
    cursor: auto;
  }
`;

const pageButtonStyle = (isActive: boolean) => css`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: ${isActive ? "white" : "#666"};
  border: 1px solid #d9d9d9;
  background-color: ${isActive ? "#222222" : "white"};
`;
