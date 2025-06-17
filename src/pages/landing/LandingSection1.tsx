import { css, keyframes } from "@emotion/react";

import bottomArrow from "@/assets/landing/bottom-arrow.svg";
import landingSectionBGImg from "@/assets/landing/landing-section1-bg.png";
import { breakpoints, layoutPaddingX } from "@/styles/layout";

export default function LandingSection1() {
  return (
    <section css={sectionStyle}>
      <h1 css={titleStyle}>
        건강한 가족을
        <br />
        만나는 곳
      </h1>

      <img src={bottomArrow} alt="arrow" css={arrowStyle} />
    </section>
  );
}

const sectionStyle = css({
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${landingSectionBGImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  position: "relative",
});

const titleStyle = css`
  font-weight: 600;
  font-size: 80px;
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

const bounce = keyframes`
  0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(-10px);
  }
`;

const arrowStyle = css`
  position: absolute;
  bottom: 36px;
  left: 50%;
  transform: translateX(-50%);
  animation: ${bounce} 1.5s infinite;
`;
