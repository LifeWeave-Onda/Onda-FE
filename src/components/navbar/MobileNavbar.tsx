import { css } from "@emotion/react";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

import backIcon from "@/assets/shared/back.svg";
import hamburger from "@/assets/shared/hamburger.svg";

export default function MobileNavbar({ title }: { title: string }) {
  const navigate = useNavigate();

  return (
    <nav css={navStyle}>
      <IconButton onClick={() => navigate(-1)}>
        <img src={backIcon} alt="뒤로가기" />
      </IconButton>
      <h1 className="title">{title}</h1>
      <IconButton>
        <img src={hamburger} alt="menu" />
      </IconButton>
    </nav>
  );
}

const navStyle = css`
  padding: 24px 8px 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .title {
    font-weight: 700;
    font-size: 20px;
  }
`;
