import { css } from "@emotion/react";
import { useState } from "react";

import MainLayout from "@/components/layout/MainLayout";
import Pagination from "@/components/pagination";
import { responsiveHorizontalPadding } from "@/styles/layout";

import AdCarousel from "./AdCarousel";
import ListGrid from "./ListGrid";

export default function BreederListPC() {
  const [page, setPage] = useState(1);

  return (
    <MainLayout>
      <div css={responsiveHorizontalPadding}>
        <AdCarousel />
        <ListGrid />
        <div css={paginationWrapper}>
          <Pagination
            currentPage={page}
            totalPages={30}
            onPageChange={(page) => {
              setPage(page);
            }}
          />
        </div>
      </div>
    </MainLayout>
  );
}

const paginationWrapper = css`
  display: flex;
  justify-content: center;
  margin-bottom: 140px;
`;
