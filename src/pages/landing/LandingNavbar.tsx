import { css } from "@emotion/react";
import { Link } from "react-router-dom";

import mainLogo from "@/assets/shared/main-logo.png";
import { breakpoints, layoutPaddingX } from "@/styles/layout";
import { zIndex } from "@/styles/zIndex";

const MENU_LIST = [
  { name: "회사소개", link: "" },
  { name: "브리더입양", link: "/breeder-list" },
  { name: "보호소입양", link: "" },
  { name: "온다브리더", link: "" },
];

export default function LandingNavbar({
  isNavbarTransparent,
}: {
  isNavbarTransparent: boolean;
}) {
  return (
    <nav css={navStyle(isNavbarTransparent)}>
      <div css={titleStyle}>
        <img src={mainLogo} alt="logo" width={38} height={38} />
        온다
      </div>

      <div css={menuListContainerStyle}>
        {MENU_LIST.map((menu) => (
          <Link key={menu.name} to={menu.link}>
            {menu.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

const navStyle = (isTransparent: boolean) => css`
  background-color: ${isTransparent ? "transparent" : "white"};
  padding: 16px ${layoutPaddingX.md};
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${isTransparent ? "white" : "black"};
  font-weight: 600;
  font-size: 18px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: ${zIndex.navbar};
  border-bottom: ${isTransparent ? "none" : "1px solid #9A9A9A"};
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

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

const titleStyle = css`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`;

const menuListContainerStyle = css`
  display: flex;
  align-items: center;
  gap: 28px;

  @media screen and (min-width: ${breakpoints.lg}) {
    gap: 52px;
  }
`;
