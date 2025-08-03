import { css } from "@emotion/react";
import { IconButton, Modal } from "@mui/material";
import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import AddressIcon from "@/assets/breeder-detail/address.svg?react";
import EmailIcon from "@/assets/breeder-detail/email.svg?react";
import HeartIcon from "@/assets/breeder-detail/heart.svg?react";
import PhoneIcon from "@/assets/breeder-detail/phone.svg?react";
import ShowDetailIcon from "@/assets/breeder-detail/show-detail.svg?react";
import animalProfileImg from "@/assets/breeder-detail/temp/animal-profile.png";
import breederProfileImg from "@/assets/breeder-detail/temp/breeder-profile.png";
import MainLayout from "@/components/layout/MainLayout";
import { breakpoints, responsiveHorizontalPadding } from "@/styles/layout";

import BreederAnimal from "./BreederAnimal";
import BreederInfo from "./BreederInfo";

const CONTACT_INFO_DATA = {
  address: "경기도 화성시 양감면 사창리 741-1",
  phone: "010-1234-5678",
  email: "noilho@example.com",
};

type TabType = "브리더소개" | "분양중인동물" | "입양후기";
type AnimalTabType = "기본정보" | "건강정보" | "분양과정";

export default function BreederInfoPage() {
  const location = useLocation();
  const isBreederInfoPage = location.pathname.endsWith("/info");
  const isAnimalPage = location.pathname.endsWith("/bomi");
  const [activeTab, setActiveTab] = useState<TabType>("브리더소개");
  const [animalActiveTab, setanimalActiveTab] =
    useState<AnimalTabType>("기본정보");
  return (
    <MainLayout>
      <div css={layoutStyle}>
        <LeftSidebar />
        {isBreederInfoPage && (
          <div className="right-content">
            <div css={tabStyle}>
              {(["브리더소개", "분양중인동물", "입양후기"] as TabType[]).map(
                (tab) => (
                  <button
                    key={tab}
                    className={`item ${activeTab === tab ? "active" : ""}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ),
              )}
            </div>
            <BreederInfo activeTab={activeTab} />
          </div>
        )}
        {isAnimalPage && (
          <div className="right-content">
            <div css={tabStyle}>
              {(["기본정보", "건강정보", "분양과정"] as AnimalTabType[]).map(
                (tab) => (
                  <button
                    key={tab}
                    className={`item ${animalActiveTab === tab ? "active" : ""}`}
                    onClick={() => setanimalActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ),
              )}
            </div>
            <BreederAnimal activeTab={animalActiveTab} />
          </div>
        )}
      </div>
    </MainLayout>
  );
}

function LeftSidebar() {
  const location = useLocation();
  const isBreederInfoPage = location.pathname.endsWith("/info");
  const isAnimalPage = location.pathname.endsWith("/bomi");

  const [isLiked, setIsLiked] = useState(false);
  const [isShowDetailModalOpen, setIsShowDetailModalOpen] = useState(false);

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
            <AddressIcon width={20} height={20} />
            <span>{CONTACT_INFO_DATA.address}</span>
          </div>
          <div className="row">
            <PhoneIcon width={20} height={20} />
            <span>{CONTACT_INFO_DATA.phone}</span>
          </div>
          <div className="row">
            <EmailIcon width={20} height={20} />
            <span>{CONTACT_INFO_DATA.email}</span>
          </div>
        </div>
        <IconButton
          className="expansion-btn"
          onClick={() => setIsShowDetailModalOpen(true)}
        >
          <ShowDetailIcon />
        </IconButton>
        {isShowDetailModalOpen && (
          <Modal
            open={isShowDetailModalOpen}
            onClose={() => setIsShowDetailModalOpen(false)}
          >
            <div css={modalContentStyle}>
              <div className="contact-title">연락처 정보</div>
              <div className="contact-flexbox">
                <div className="row">
                  <AddressIcon width={20} height={20} />
                  <span>{CONTACT_INFO_DATA.address}</span>
                </div>
                <div className="row">
                  <PhoneIcon width={20} height={20} />
                  <span>{CONTACT_INFO_DATA.phone}</span>
                </div>
                <div className="row">
                  <EmailIcon width={20} height={20} />
                  <span>{CONTACT_INFO_DATA.email}</span>
                </div>
              </div>
            </div>
          </Modal>
        )}
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
    min-width: 0;
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
  position: relative;

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

  .expansion-btn {
    position: absolute;
    top: 10px;
    right: 12px;
  }
`;

const modalContentStyle = css`
  padding: 20px;
  background-color: white;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  min-width: 500px;

  .contact-title {
    font-weight: 700;
    font-size: 20px;
    color: #222222;
  }

  .contact-flexbox {
    margin-top: 20px;
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
