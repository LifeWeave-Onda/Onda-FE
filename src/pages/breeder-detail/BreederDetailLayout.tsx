import { css } from "@emotion/react";
import { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

import addressIcon from "@/assets/breeder-detail/address.svg";
import emailIcon from "@/assets/breeder-detail/email.svg";
import HeartIcon from "@/assets/breeder-detail/heart.svg?react";
import phoneIcon from "@/assets/breeder-detail/phone.svg";
import animalProfileImg from "@/assets/breeder-detail/temp/animal-profile.png";
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
        <LeftSidebar />

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

function LeftSidebar() {
  const location = useLocation();
  const isBreederInfoPage = location.pathname.endsWith("/info");
  const isAnimalPage = location.pathname.endsWith("/animal");

  const [isLiked, setIsLiked] = useState(false);

  return (
    <div css={leftSidebarStyle}>
      <h1 className="title">
        {isBreederInfoPage && <>노일호특수목적견</>}
        {isAnimalPage && <>보미</>}
      </h1>
      <div style={{ position: "relative" }}>
        <img
          src={isBreederInfoPage ? breederProfileImg : animalProfileImg}
          alt="profile"
          className="profile-img"
        />
        <button
          type="button"
          className="heart-btn"
          onClick={() => setIsLiked((prev) => !prev)}
        >
          <HeartIcon fill={!isLiked ? "white" : "#FF4D4F"} />
        </button>
      </div>

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
  );
}

const layoutStyle = css`
  ${responsiveHorizontalPadding}
  padding-bottom: 240px;
  margin-top: 36px;
  display: flex;
  gap: 20px;

  @media screen and (min-width: ${breakpoints.lg}) {
    gap: 36px;
  }

  .right-content {
    flex: 1.3;
  }
`;

const leftSidebarStyle = css`
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

  .heart-btn {
    position: absolute;
    right: 24px;
    bottom: 24px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: #ffffff66;
    backdrop-filter: blur(10px);
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
