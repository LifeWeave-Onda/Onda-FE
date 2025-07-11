import { css } from "@emotion/react";

import { breakpoints, responsiveHorizontalPadding } from "@/styles/layout";

export default function LandingSection4() {
  return (
    <section css={sectionStyle}>
      <h1 css={titleStyle}>온다에서 만나는 반려가족</h1>

      <div css={gridStyle}>
        <div className="cell">1</div>
        <div className="cell">2</div>
        <div className="cell">3</div>
        <div className="cell">4</div>
      </div>
    </section>
  );
}

const sectionStyle = css`
  ${responsiveHorizontalPadding};
  padding-top: 96px;
  padding-bottom: 176px;
`;

const titleStyle = css`
  text-align: center;
  font-weight: 600;
  font-size: 36px;
`;

const gridStyle = css`
  margin-top: 76px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 30px;

  @media screen and (min-width: ${breakpoints.lg}) {
    height: 436px;
    display: flex;
  }

  .cell {
    background: lightgray;
    padding: 32px;
    text-align: center;
    border-radius: 10px;
    cursor: pointer;

    @media screen and (max-width: calc(${breakpoints.lg} - 1px)) {
      aspect-ratio: 1 / 1;
    }
    @media screen and (min-width: ${breakpoints.lg}) {
      flex: 1;
      transition: flex 0.3s ease;
      &:hover {
        flex: 1.5;
      }
    }
  }
`;
