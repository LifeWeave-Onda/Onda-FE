import { css } from "@emotion/react";
import { ReactNode } from "react";

import Navbar from "../navbar/Navbar";
import Footer from "./Footer";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main css={mainContentStyle}>{children}</main>
      <Footer />
    </>
  );
}

const mainContentStyle = css`
  // 전체 화면 높이에서 Navbar(74px)와 Footer(200px)의 높이를 뺀 영역
  min-height: calc(100vh - 74px - 200px);
`;
