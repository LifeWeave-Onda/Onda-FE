import { css } from "@emotion/react";
import { useState } from "react";

import MainLayout from "@/components/layout/MainLayout";
import Pagination from "@/components/pagination";
import { breakpoints, layoutPaddingX } from "@/styles/layout";

import AdCarousel from "./AdCarousel";
import ListGrid from "./ListGrid";

export default function BreederListPC() {
  const [page, setPage] = useState(1);

  return (
    <MainLayout>
      <div css={pageContentStyle}>
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

const pageContentStyle = css`
  padding-left: ${layoutPaddingX.md};
  padding-right: ${layoutPaddingX.md};

  @media screen and (min-width: ${breakpoints.lg}) {
    padding-left: ${layoutPaddingX.lg};
    padding-right: ${layoutPaddingX.lg};
  }
  @media screen and (min-width: ${breakpoints.xl}) {
    padding-left: ${layoutPaddingX.xl};
    padding-right: ${layoutPaddingX.xl};
  }
  @media screen and (min-width: ${breakpoints["2xl"]}) {
    padding-left: ${layoutPaddingX["2xl"]};
    padding-right: ${layoutPaddingX["2xl"]};
  }
`;

const paginationWrapper = css`
  display: flex;
  justify-content: center;
  margin-bottom: 140px;
`;
