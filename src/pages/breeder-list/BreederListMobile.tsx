import { css } from "@emotion/react";

import MobileNavbar from "@/components/navbar/MobileNavbar";

import BreederFilter from "./BreederFilterPanel/BreederFilter";

const BREED_LIST = [
  "강아지",
  "고양이",
  "포메라니안",
  "골든리트리버",
  "랙돌",
  "싱가푸라",
  "보더콜리",
  "시베리안허스키",
  "푸들",
  "사모예드",
  "페키니즈",
  "말리노이즈",
];
const LOCATION_LIST = [
  "서울·인천·경기",
  "강원도",
  "충청도",
  "경상도",
  "전라도",
  "제주도",
];
const ADOPTION_PLACE_LIST = ["브리더", "보호소"];

export default function BreederListMobile() {
  return (
    <>
      <MobileNavbar title="입양" />

      <main css={contentStyle}>
        <div style={{ position: "relative" }}>
          <div css={filterContainerStyle}>
            <BreederFilter.Root initialWidth={90} openWidth={140}>
              <BreederFilter.Trigger label="품종" />
              <BreederFilter.List>
                <div css={listWrapperStyle}>
                  {BREED_LIST.map((item) => (
                    <button key={item} type="button" className="item">
                      {item}
                    </button>
                  ))}
                </div>
              </BreederFilter.List>
            </BreederFilter.Root>

            <BreederFilter.Root initialWidth={90} openWidth={140}>
              <BreederFilter.Trigger label="지역" />
              <BreederFilter.List>
                <div css={listWrapperStyle}>
                  {LOCATION_LIST.map((item) => (
                    <button key={item} type="button" className="item">
                      {item}
                    </button>
                  ))}
                </div>
              </BreederFilter.List>
            </BreederFilter.Root>

            <BreederFilter.Root initialWidth={104} openWidth={140}>
              <BreederFilter.Trigger label="입양처" />
              <BreederFilter.List>
                <div css={listWrapperStyle}>
                  {ADOPTION_PLACE_LIST.map((item) => (
                    <button key={item} type="button" className="item">
                      {item}
                    </button>
                  ))}
                </div>
              </BreederFilter.List>
            </BreederFilter.Root>
          </div>
        </div>

        <div css={gridStyle}>
          {Array.from({ length: 20 }).map((_, idx) => (
            <div key={idx} className="cell">
              <div className="img" />
              <span className="name">캣토피아</span>
              <span className="breed">노르웨이숲</span>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

const contentStyle = css`
  padding: 0 24px 20%;
`;

const filterContainerStyle = css`
  position: absolute;
  top: 0;
  z-index: 2;
  display: flex;
  gap: 10px;
  align-items: flex-start;
`;

const listWrapperStyle = css`
  margin-top: 14px;
  border-top: 0.5px solid #9a9a9a;
  padding-top: 14px;
  font-size: 14px;
  color: #666666;
  display: flex;
  flex-direction: column;
  gap: 8px;

  .item {
    display: block;
    text-align: left;

    &:hover {
      color: black;
    }
  }
`;

const gridStyle = css`
  display: grid;
  grid-template-rows: repeat(10, 1fr);
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  padding-top: 76px;

  .cell {
    .img {
      width: 100%;
      aspect-ratio: 1/1;
      background-color: lightgray;
    }

    .name,
    .breed {
      display: block;
      text-align: center;
    }
    .name {
      margin-top: 8px;
      font-weight: 600;
      color: #222222;
    }
    .breed {
      margin-top: 4px;
      color: #666666;
    }
  }
`;
