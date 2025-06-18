import { css } from "@emotion/react";

import landingSection2BGImg from "@/assets/landing/landing-section2-bg.png";
import { breakpoints, layoutPaddingX } from "@/styles/layout";

export default function LandingSection2() {
  return (
    <section css={sectionStyle}>
      <p css={pStyle}>
        온다는
        <br />
        철저히 선별된 브리더를 통해
        <br />
        안전한 입양을 돕습니다
      </p>

      <div css={statContainerStyle}>
        <div className="stat-item">
          <span className="label">온다 브리더 수</span>
          <span className="stat">200명</span>
        </div>
        <div className="stat-item">
          <span className="label">온다와 함께하는 보호소</span>
          <span className="stat">4곳</span>
        </div>
        <div className="stat-item">
          <span className="label">반려가족을 만난 수</span>
          <span className="stat">120</span>
        </div>
      </div>
    </section>
  );
}

const sectionStyle = css({
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${landingSection2BGImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  position: "relative",
});

const pStyle = css`
  font-weight: 600;
  font-size: 40px;
  color: white;
  line-height: 1.3;
  position: absolute;
  left: ${layoutPaddingX.md};
  top: 40%;

  @media screen and (min-width: ${breakpoints.lg}) {
    left: ${layoutPaddingX.lg};
  }
  @media screen and (min-width: ${breakpoints.xl}) {
    left: ${layoutPaddingX.xl};
  }
  @media screen and (min-width: ${breakpoints["2xl"]}) {
    left: ${layoutPaddingX["2xl"]};
  }
`;

const statContainerStyle = css`
  position: absolute;
  bottom: 86px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  width: 90%;
  justify-content: space-between;
  color: white;

  @media screen and (min-width: ${breakpoints.xl}) {
    width: 70%;
  }
  @media screen and (min-width: ${breakpoints["2xl"]}) {
    width: 60%;
  }

  .stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;

    .label {
      font-weight: 700;
      font-size: 20px;
    }

    .stat {
      font-weight: 300;
      font-size: 80px;
    }
  }
`;
