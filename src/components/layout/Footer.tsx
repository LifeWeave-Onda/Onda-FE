import { css } from "@emotion/react";
import { Link } from "react-router-dom";

import instagramLogo from "@/assets/shared/instagram-logo.png";
import { breakpoints, layoutPaddingX } from "@/styles/layout";

const MENU_LIST = [
  { name: "회사소개", link: "" },
  { name: "개인정보처리방침", link: "" },
  { name: "이용약관", link: "" },
  { name: "지식재산권센터", link: "" },
  { name: "브리더신청", link: "" },
  { name: "광고신청", link: "" },
];

const ONDA_INFO = {
  대표: "우제언",
  위치: "서울특별시 중구 새봄로 123길 45",
  사업자등록번호: "123-45-67890",
  "통신판매업 신고번호": " 제2025-서울강남-11215호",
  개인정보보호책임자: "우제언",
  fax: "02-5678-1234",
  email: "search_pet@naver.com",
  instagram: "",
};

export default function Footer() {
  return (
    <footer>
      <div css={menuListStyle}>
        {MENU_LIST.map((menu, idx) => (
          <div key={menu.name} css={menuStyle}>
            <Link to={menu.link}>{menu.name}</Link>
            {idx !== MENU_LIST.length - 1 && <span className="divider">|</span>}
          </div>
        ))}
      </div>

      <div css={infoContainerStyle}>
        <div className="first-row">온다</div>
        <div className="second-row">
          <div className="left">
            <span>대표 : {ONDA_INFO.대표}</span>
            <span>{ONDA_INFO.위치}</span>
            <span>사업자등록번호 : {ONDA_INFO.사업자등록번호}</span>
            <span>
              통신판매업 신고번호 : {ONDA_INFO["통신판매업 신고번호"]}
            </span>
          </div>
          <div className="instagram-container">
            <span>ONDA.COM</span>
            <img src={instagramLogo} alt="instagram" />
          </div>
        </div>
        <div className="third-row">
          <span>개인정보보호책임자 : {ONDA_INFO.개인정보보호책임자}</span>
          <span>Fax : {ONDA_INFO.fax}</span>
          <span>{ONDA_INFO.email}</span>
        </div>
      </div>
    </footer>
  );
}

const menuListStyle = css`
  padding: 16px ${layoutPaddingX.md};
  border-top: 0.5px solid #9a9a9a;
  border-bottom: 0.5px solid #9a9a9a;
  display: flex;

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

const menuStyle = css`
  font-size: 14px;
  color: #666666;

  .divider {
    margin: 0 12px;
  }
`;

const infoContainerStyle = css`
  padding: 22px ${layoutPaddingX.md} 54px;
  color: #666666;

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

  .first-row {
    font-size: 14px;
  }

  .second-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    flex-wrap: wrap;
    gap: 6px;
    padding-top: 4px;
    padding-bottom: 4px;

    .left {
      display: flex;
      gap: 16px;
    }
    .instagram-container {
      display: flex;
      align-items: center;
      gap: 8px;

      @media screen and (min-width: ${breakpoints.lg}) {
        gap: 20px;
      }

      img {
        width: 24px;
        height: 24px;

        @media screen and (min-width: ${breakpoints.lg}) {
          width: 42px;
          height: 42px;
        }
      }
    }
  }

  .third-row {
    display: flex;
    gap: 16px;
    font-size: 12px;
  }
`;
