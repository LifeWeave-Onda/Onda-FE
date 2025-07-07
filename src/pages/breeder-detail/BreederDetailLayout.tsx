import { css } from "@emotion/react";
import { Outlet } from "react-router-dom";

import MainLayout from "@/components/layout/MainLayout";
import { breakpoints, responsiveHorizontalPadding } from "@/styles/layout";

export default function BreederDetailLayout() {
  return (
    <MainLayout>
      <div css={layoutStyle}>
        <div className="left-content">asfd</div>

        <div className="right-content">
          <Outlet />
        </div>
      </div>
    </MainLayout>
  );
}

const layoutStyle = css`
  ${responsiveHorizontalPadding}
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 36px;
  display: flex;
  gap: 20px;

  @media screen and (min-width: ${breakpoints.lg}) {
    gap: 36px;
  }

  .left-content {
    flex: 1;
    background-color: red;
  }

  .right-content {
    flex: 1.5;
    background-color: blue;
    @media screen and (min-width: ${breakpoints.lg}) {
      flex: 1.8;
    }
    @media screen and (min-width: ${breakpoints.xl}) {
      flex: 2;
    }
  }
`;
