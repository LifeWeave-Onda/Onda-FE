import { css } from "@emotion/react";
import { Link } from "react-router-dom";

import heartIcon from "@/assets/shared/heart.svg";
import mainLogo from "@/assets/shared/main-logo.png";
import searchIcon from "@/assets/shared/search.svg";
import userIcon from "@/assets/shared/user.svg";
import { layoutPaddingX, responsiveHorizontalPadding } from "@/styles/layout";
import { zIndex } from "@/styles/zIndex";

export default function Navbar() {
  return (
    <nav css={navStyle}>
      <div />
      <Link to="/">
        <img src={mainLogo} alt="logo" width={38} height={38} />
      </Link>
      <div className="right">
        <img src={searchIcon} alt="search" width={20} height={20} />
        <img src={heartIcon} alt="heart" width={20} height={20} />
        <img src={userIcon} alt="user" width={20} height={20} />
      </div>
    </nav>
  );
}

const navStyle = css`
  ${responsiveHorizontalPadding};
  padding-top: 16px;
  padding-bottom: 16px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  background-color: white;
  padding: 16px ${layoutPaddingX.md};
  border-bottom: 0.5px solid #9a9a9a;
  position: sticky;
  top: 0;
  z-index: ${zIndex.navbar};

  .right {
    justify-self: end;
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;
