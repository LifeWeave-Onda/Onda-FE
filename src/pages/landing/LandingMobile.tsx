import { css } from "@emotion/react";
import { Link } from "react-router-dom";

import adoptionReviewImg1 from "@/assets/landing/adoption-review1.png";
import adoptionReviewImg2 from "@/assets/landing/adoption-review2.png";
import breeder1Img from "@/assets/landing/breeder1.png";
import breeder2Img from "@/assets/landing/breeder2.png";
import landingIntroBGImg from "@/assets/landing/landing-mobile-intro-bg.png";
import rightArrowIcon from "@/assets/landing/right-arrow.svg";
import { breakpoints } from "@/styles/layout";

export default function LandingMobile() {
  return (
    <>
      <div css={introBoxStyle}>
        <p className="subtitle">세상을 바꾸는 소중한 한걸음</p>
        <h1 className="title">온다</h1>
        <Link to="" className="adoption-btn">
          입양하기
        </Link>
      </div>

      <div css={bottomContentBoxStyle}>
        <div className="content-container">
          <Link to="/breeder-list" className="link">
            <span>온다 브리더</span>
            <img src={rightArrowIcon} alt="right-arrow" />
          </Link>
          <div className="img-container">
            <img src={breeder1Img} alt="브리더" />
            <img src={breeder2Img} alt="브리더" />
          </div>
        </div>
        <div className="content-container">
          <Link to="" className="link">
            <span>입양후기</span>
            <img src={rightArrowIcon} alt="right-arrow" />
          </Link>
          <div className="img-container">
            <img src={adoptionReviewImg1} alt="입양후기" />
            <img src={adoptionReviewImg2} alt="입양후기" />
          </div>
        </div>
      </div>
    </>
  );
}

const introBoxStyle = css`
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${landingIntroBGImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;

  .subtitle {
    font-size: 12px;
  }
  .title {
    margin-top: 8px;
    font-weight: 700;
    font-size: 24px;
  }
  .adoption-btn {
    margin-top: 40px;
    padding: 8px 16px;
    border: 0.5px solid #ffffff;
    font-size: 12px;
  }
`;

const bottomContentBoxStyle = css`
  min-height: 60%;
  padding: 36px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;

  .content-container {
    flex: 1;

    .link {
      display: flex;
      justify-content: center;
      padding-bottom: 24px;
      position: relative;

      span {
        font-weight: 700;
        font-size: 16px;
        color: #222222;
      }
      img {
        position: absolute;
        right: 0;
      }
    }

    .img-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 4px;

      @media screen and (min-width: ${breakpoints.xs}) {
        gap: 28px;
      }

      img {
        flex: 1;
        aspect-ratio: 1 / 1;
      }
    }
  }
`;
