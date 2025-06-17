import { css } from "@emotion/react";

import hope1Img from "@/assets/landing/hope1.png";
import hope2Img from "@/assets/landing/hope2.png";
import hope3Img from "@/assets/landing/hope3.png";
import { breakpoints, layoutPaddingX } from "@/styles/layout";

export default function LandingSection3() {
  return (
    <section css={sectionStyle}>
      <h1 css={titleStyle}>온다가 바라는 입양</h1>

      <div css={hopeContainerStyle}>
        <div className="hope">
          <img src={hope1Img} alt="hope1" />
          <div className="description">
            <span className="subtitle">기다림이 사랑이 되는</span>
            <span className="title">오래 고민하는 입양</span>
            <span className="skyblue">Thinking Long</span>
          </div>
        </div>
        <div className="hope">
          <div className="description text-right">
            <span className="subtitle">건강, 성격, 특징</span>
            <span className="title">입양 전 충분한 공부</span>
            <span className="skyblue">Learning Deep</span>
          </div>
          <img src={hope2Img} alt="hope2" />
        </div>
        <div className="hope">
          <img src={hope3Img} alt="hope3" />
          <div className="description">
            <span className="subtitle">입양자만큼 브리더도 중요합니다</span>
            <span className="title">생명의 시작을 책임지는</span>
            <span className="skyblue">Where Life Begins</span>
          </div>
        </div>
      </div>
    </section>
  );
}

const sectionStyle = css`
  padding: 120px ${layoutPaddingX.md} 96px;

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
  text-align: center;
  font-weight: 600;
  font-size: 36px;
`;

const hopeContainerStyle = css`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  .hope {
    display: flex;
    align-items: center;
    gap: 32px;

    @media screen and (min-width: ${breakpoints.lg}) {
      gap: 64px;
    }

    img {
      flex: 1;
      width: 50%;
    }

    .description {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 16px;
      &.text-right {
        text-align: right;
      }

      .subtitle {
        font-size: 16px;
        color: #666666;
      }
      .title {
        font-size: 36px;
        color: #222222;
      }
      .skyblue {
        font-weight: 600;
        font-size: 36px;
        color: #52d9ff;
      }
    }
  }
`;
