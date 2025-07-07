import { css } from "@emotion/react";
import { NavLink, Outlet } from "react-router-dom";

import addressIcon from "@/assets/breeder-detail/address.svg";
import emailIcon from "@/assets/breeder-detail/email.svg";
import phoneIcon from "@/assets/breeder-detail/phone.svg";
import breederProfileImg from "@/assets/breeder-detail/temp/breeder-profile.png";
import MainLayout from "@/components/layout/MainLayout";
import { breakpoints, responsiveHorizontalPadding } from "@/styles/layout";

const CONTACT_INFO_DATA = {
  address: "경기도 화성시 양감면 사창리 741-1",
  phone: "010-1234-5678",
  email: "noilho@example.com",
};

export default function BreederDetailLayout() {
  return (
    <MainLayout>
      <div css={layoutStyle}>
        <div className="left-content">
          <h1 className="title">노일호특수목적견</h1>
          <img src={breederProfileImg} alt="profile" className="profile-img" />
          <div css={contactInfoStyle}>
            <div className="contact-title">연락처 정보</div>
            <div className="contact-flexbox">
              <div className="row">
                <img src={addressIcon} alt="address" width={20} height={20} />
                <span>{CONTACT_INFO_DATA.address}</span>
              </div>
              <div className="row">
                <img src={phoneIcon} alt="phone" width={20} height={20} />
                <span>{CONTACT_INFO_DATA.phone}</span>
              </div>
              <div className="row">
                <img src={emailIcon} alt="email" width={20} height={20} />
                <span>{CONTACT_INFO_DATA.email}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="right-content">
          <div css={tabStyle}>
            <NavLink to="info" className="item">
              브리더 소개
            </NavLink>
            <NavLink to="animal" className="item">
              분양 중인 동물
            </NavLink>
          </div>
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
    max-width: 500px;

    .title {
      font-weight: 700;
      font-size: 24px;
      color: #222222;
    }

    .profile-img {
      width: 100%;
      aspect-ratio: 1 / 1;
      margin-top: 8px;
    }
  }

  .right-content {
    flex: 1.3;
  }
`;

const contactInfoStyle = css`
  background-color: white;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  margin-top: 30px;
  padding: 12px 20px;

  .contact-title {
    font-weight: 700;
    font-size: 20px;
    color: #222222;
  }

  .contact-flexbox {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;

    .row {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
`;

const tabStyle = css`
  display: flex;

  .item {
    flex: 1;
    text-align: center;
    border: 0.5px solid #d9d9d9;
    border-left: none;
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: white;
    color: #666666;
    font-size: 14px;

    &:first-of-type {
      border-left: 0.5px solid #d9d9d9;
    }

    &.active {
      background: #222222;
      color: white;
      font-weight: 700;
    }
  }
`;
