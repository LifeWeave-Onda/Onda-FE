import { css } from "@emotion/react";
import { Line } from "rc-progress";
import { useEffect, useRef } from "react";

import Guide1 from "@/assets/breeder-detail/adoption-process/guide1.png";
import Guide2 from "@/assets/breeder-detail/adoption-process/guide2.png";
import Guide3 from "@/assets/breeder-detail/adoption-process/guide3.png";
import Guide4 from "@/assets/breeder-detail/adoption-process/guide4.png";
import Guide5 from "@/assets/breeder-detail/adoption-process/guide5.png";
import Check from "@/assets/breeder-detail/check.png";
import BreederProfileImg from "@/assets/breeder-detail/temp/breeder-profile.png";
import BreedingEnvironmentImg from "@/assets/breeder-detail/temp/breeding-environment.png";
import HealthStatusImg from "@/assets/breeder-detail/temp/health-status.png";
import ParentDogImg from "@/assets/breeder-detail/temp/parent-dog.png";
import pedigreeCerfiticateImg from "@/assets/breeder-detail/temp/pedigree-certificate.png";
import ProgressBar from "@/components/progress-bar/ProgressBar";
import ImageSwiper from "@/components/swiper/ImageSwiper";

const BREEDER_ANIMAL_INFO_DATA = {
  animalBasicInfo: [
    { field: "품종", description: "말리노이즈" },
    { field: "성별", description: "암컷" },
    { field: "생일", description: "2025.03.01" },
    { field: "나이", description: "3개월" },
    { field: "아빠 품종", description: "말리노이즈" },
    { field: "엄마 품종", description: "말리노이즈" },
  ],
  animalDescription:
    "보미는 소심하지만 똑똑한 말리노이즈예요.\n 처음엔 낯을 가리지만 금세 마음을 열고, 주인 곁을 졸졸 따라다니는 다정한 아이랍니다. 뛰어노는 걸 무척 \n 좋아해 넓은 공간에서 신나게 달릴 때 가장 행복해해요. 조금은 여린 성격이지만, 함께라면 점점 더 단단해질 \n친구예요.",
  PETI: {
    name: "침착한 독립러(ICPO)",
    description:
      "활동성은 있지만 낯가림도 있고, 훈련 중심의 일상을 잘 따라오는 규칙형 아이",
  },
  healthStatusSummation: {
    healthStatus: "건강상태 : 정상",
    description: "모든 검진 항목에서 정상 소견을 보이고 있습니다.",
  },
  healthStatusInfo: [
    {
      field: "종합백신 2차",
      description: "생후 2개월부터 2주 간격",
      status: "접종완료",
    },
    {
      field: "중성화",
      description: "중성화수술",
      status: "미시행",
    },
    {
      field: "전신상태",
      description: "체온, 체중, 전반적 컨디션",
      status: "정상",
    },
    {
      field: "귀",
      description: "외이도, 고막, 염증 여부",
      status: "정상",
    },
    {
      field: "피부/피모",
      description: "털 상태, 피부 질환, 기생충",
      status: "정상",
    },
    {
      field: "눈",
      description: "각막, 결막, 시력, 분비물",
      status: "정상",
    },
    {
      field: "구강",
      description: "치아, 잇몸, 구취, 구강 내 이상",
      status: "정상",
    },
    {
      field: "비강/인후/경브",
      description: "코, 목, 목 주변 림프절",
      status: "정상",
    },
    {
      field: "근골격계",
      description: "관절, 근육, 보행 상태",
      status: "정상",
    },
    {
      field: "심장",
      description: "심박수, 심음, 심장 기능",
      status: "정상",
    },
    {
      field: "호흡기",
      description: "폐, 기관지, 호흡 패턴",
      status: "정상",
    },
    {
      field: "소화기계",
      description: "위, 장, 간, 소화 기능",
      status: "정상",
    },
  ],
  breederInfo: {
    animalInfo: "노일호특수목적견",
    breederDescription:
      "40년째 특수목적견을 브리딩 중인 말리노이즈 브리더입니다.\n 경찰견, 마약탐지견, 인명구조견 등 사람을 돕는 개를 만들고 있습니다.",
    breederTagInfo: [
      "동물생산업",
      "동물판매업",
      "혈통보증서",
      "한국애견협회",
      "한국애견연맹",
    ],
  },
  adoptoinProcessGuideInfo: [
    {
      icon: Guide1,
      title: "1.입양 문의",
      description:
        "입양을 고민 중인 분들과 가벼운 마음으로 상담을 시작합니다.\n 궁금한 점은 모두 물어보세요.",
    },
    {
      icon: Guide2,
      title: "2.방문상담",
      description:
        "브리더와 직접 만나 아이와 환경을 확인하고 입양 전 신뢰를 쌓는 시간을 갖습니다.",
    },
    {
      icon: Guide3,
      title: "3.분양예약",
      description:
        "상담 후 충분히 고민하고 결정하면 예약금을 통해 입양 의사를 확정합니다.",
    },
    {
      icon: Guide4,
      title: "4.입양 준비 및 교감",
      description:
        "입양 전까지 아이와 충분히 교감하며 양육 준비를 함께 합니다.",
    },
    {
      icon: Guide5,
      title: "5.입양 및 사후 준비",
      description:
        "새로운 가족을 맞이한 후에도 궁금한 점이 있다면 브리더님에게 연락해주세요.\n온다는 입양 이후도 함께합니다.",
    },
  ],
};

type TabType = "기본정보" | "건강정보" | "분양과정";

interface BreederAnimalProps {
  activeTab: TabType;
}

export default function BreederAnimal({ activeTab }: BreederAnimalProps) {
  const healthRef = useRef<HTMLElement>(null);
  const adoptionProcessRef = useRef<HTMLElement>(null);
  useEffect(() => {
    let target = null;
    if (activeTab === "건강정보") target = healthRef;
    if (activeTab === "분양과정") target = adoptionProcessRef;

    if (target?.current) {
      target.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [activeTab]);

  return (
    <div css={breederAnimalPage}>
      <div css={infoCardStyle}>
        <h1 css={infoCardTitle}>기본 정보</h1>
        <div css={basicInfoDetailCard}>
          {BREEDER_ANIMAL_INFO_DATA.animalBasicInfo.map((item) => (
            <div key={item.field} css={basicInfoDetailCardStyle}>
              <h2 css={basicInfoField}>{item.field}</h2>
              <p css={basicInfoDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div css={infoCardStyle}>
        <h1 css={infoCardTitle}>소개</h1>
        <p css={animalDescription}>
          {BREEDER_ANIMAL_INFO_DATA.animalDescription}
        </p>
      </div>
      <div css={infoCardStyle}>
        <h1 css={infoCardTitle}>PETI(반려동물 성격 유형)</h1>
        <div css={PETIBarStyle}>
          <ProgressBar
            trailColor="rgba(240,240,240,1)"
            strokeColor="rgba(17,138,178,1)"
            chartTitle="사회성"
            leftPercent={37}
            leftText="사교적"
            rightPercent={63}
            rightText="독립적"
          />
          <ProgressBar
            trailColor="rgba(240,240,240,1)"
            strokeColor="rgba(17,138,178,1)"
            chartTitle="자극 반응"
            leftPercent={30}
            leftText="예민함"
            rightPercent={70}
            rightText="차분함"
          />
          <ProgressBar
            trailColor="rgba(240,240,240,1)"
            strokeColor="rgba(17,138,178,1)"
            chartTitle="활동성"
            leftPercent={60}
            leftText="활동적"
            rightPercent={40}
            rightText="즉훙적"
          />
          <ProgressBar
            trailColor="rgba(240,240,240,1)"
            strokeColor="rgba(17,138,178,1)"
            chartTitle="규칙성"
            leftPercent={37}
            leftText="즉흥적"
            rightPercent={63}
            rightText="계획적"
          />
        </div>
        <div css={PETIResult}>
          <h2 css={resultName}>{BREEDER_ANIMAL_INFO_DATA.PETI.name}</h2>
          <p css={resultDescription}>
            {BREEDER_ANIMAL_INFO_DATA.PETI.description}
          </p>
        </div>
      </div>
      <div css={infoCardStyle}>
        <h1 css={infoCardTitle}>털빠짐정도</h1>
        <div css={hairLossBarStyle}>
          <Line
            percent={50}
            trailColor="rgba(240,240,240,1)"
            strokeColor="rgba(255,90,88,1)"
            style={{
              height: "14px",
              width: "100%",
              borderRadius: "10px",
              borderTopRightRadius: 0,
            }}
          />
        </div>
      </div>
      <div css={infoCardStyle} ref={healthRef}>
        <h1 css={infoCardTitle}>건강상태</h1>
        <div css={healthStatusSummation}>
          <div css={healthStatusSummationDetail}>
            <img src={Check} />
            <h1>
              {BREEDER_ANIMAL_INFO_DATA.healthStatusSummation.healthStatus}
            </h1>
          </div>
          <p css={healthStatusSummationDescription}>
            {BREEDER_ANIMAL_INFO_DATA.healthStatusSummation.description}
          </p>
        </div>
        <div css={healthStatusDetail}>
          {BREEDER_ANIMAL_INFO_DATA.healthStatusInfo.map((item) => (
            <div key={item.field} css={healthStatusDetailCard}>
              <img src={HealthStatusImg} />
              <div css={healthStatusCardDescription}>
                <div css={healthStatusCardField}>
                  <h2>{item.field}</h2>
                  <p>{item.description}</p>
                </div>
                <div
                  css={[statusStyle, item.status === "미시행" && notPerformed]}
                >
                  {item.status === "접종완료" || item.status === "정상" ? (
                    <img src={Check} css={checkImgStyle} />
                  ) : (
                    ""
                  )}
                  {item.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div css={infoCardStyle}>
        <div css={titleAndSeeMoreBtnStyle}>
          <h1 css={infoCardTitle}>양육환경</h1>
          <button css={seeMoreBtn}>자세히보기→</button>
        </div>
        <ImageSwiper
          images={[BreedingEnvironmentImg, ParentDogImg]}
          cssProp={breedingEnvironmentImgStyle}
        />
      </div>
      <div css={infoCardStyle}>
        <div css={titleAndSeeMoreBtnStyle}>
          <h1 css={infoCardTitle}>부모견</h1>
          <button css={seeMoreBtn}>자세히보기→</button>
        </div>
        <ImageSwiper
          images={[ParentDogImg, BreedingEnvironmentImg]}
          cssProp={parentDogImgStyle}
        />
      </div>
      <div css={infoCardStyle}>
        <div css={titleAndSeeMoreBtnStyle}>
          <h1 css={infoCardTitle}>브리더 정보</h1>
          <button css={seeMoreBtn}>자세히보기→</button>
        </div>
        <div css={breederDetailCard}>
          <div css={breederDatailInfo}>
            <img src={BreederProfileImg} alt="BreederImg" css={breederImg} />
            <div>
              <h2 css={breederName}>
                {BREEDER_ANIMAL_INFO_DATA.breederInfo.animalInfo}
              </h2>
              <p css={breederDescription}>
                {BREEDER_ANIMAL_INFO_DATA.breederInfo.breederDescription}
              </p>
            </div>
          </div>
          <div css={breederTag}>
            {BREEDER_ANIMAL_INFO_DATA.breederInfo.breederTagInfo.map((item) => (
              <div key={item} css={breederTagDetailStyle}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div css={infoCardStyle}>
        <h1 css={infoCardTitle}>혈통보증서</h1>
        <img
          src={pedigreeCerfiticateImg}
          alt="pedigree-certificate"
          css={pedigreeCerfiticateImgStyle}
        />
      </div>
      <div css={infoCardStyle} ref={adoptionProcessRef}>
        <h1 css={infoCardTitle}>분양과정안내</h1>
        <div css={adoptionProcessGuideDiv}>
          {BREEDER_ANIMAL_INFO_DATA.adoptoinProcessGuideInfo.map((item) => (
            <div key={item.title} css={adoptionProcessGuideCard}>
              <img src={item.icon} alt="icon" css={guideImg} />
              <div css={guideText}>
                <h2 css={guideTitle}>{item.title}</h2>
                <p css={guideDescription}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const infoCardStyle = css`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  border: none;
  box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.25);
`;

const breederAnimalPage = css`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const infoCardTitle = css`
  font-size: 20px;
  font-weight: 700;
  color: rgba(34, 34, 34, 1);
`;

const hairLossBarStyle = css`
  margin-top: 16px;
`;

const PETIBarStyle = css`
  margin-top: 24px;
`;

const basicInfoDetailCard = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px 16px;
  margin-top: 16px;
`;
const basicInfoDetailCardStyle = css`
  height: 77px;
  border-radius: 10px;
  border: 1px solid rgba(217, 217, 217, 1);
  padding: 14px;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const basicInfoField = css`
  font-size: 16px;
  font-weight: 500;
  color: rgba(34, 34, 34, 1);
`;

const basicInfoDescription = css`
  font-size: 16px;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
`;

const animalDescription = css`
  margin-top: 12px;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: rgba(34, 34, 34, 1);
  white-space: pre-line;
`;

const breederDetailCard = css`
  display: flex;
  flex-direction: column;
  margin-top: 18px;
  gap: 18px;
`;

const breederDatailInfo = css`
  display: flex;
  gap: 20px;
  align-items: center;
`;
const breederImg = css`
  border-radius: 50%;
  width: 91px;
  height: 91px;
`;

const breederName = css`
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 10px;
`;

const breederDescription = css`
  font-weight: 500;
  font-size: 16px;
  color: rgba(102, 102, 102, 1);
  line-height: 21px;
  white-space: pre-line;
`;
const breederTag = css`
  display: flex;
  gap: 10px;
`;

const breederTagDetailStyle = css`
  height: 29px;
  border-radius: 20px;
  padding: 4px 14px;
  background-color: rgba(17, 138, 178, 1);
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  font-weight: 300;
  line-height: 21px;
`;

const PETIResult = css`
  margin-top: 21px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: rgba(34, 34, 34, 1);
`;

const resultName = css`
  font-size: 18px;
  font-weight: 500;
`;

const resultDescription = css`
  font-size: 16px;
  font-weight: 500;
`;

const healthStatusSummation = css`
  display: flex;
  flex-direction: column;
  height: 68px;
  border-radius: 10px;
  border: 1px solid rgba(195, 248, 214, 1);
  background-color: rgba(240, 253, 244, 1);
  color: rgba(30, 106, 58, 1);
  padding: 10px 15px 15px 14px;
  gap: 8px;
  margin-top: 14px;
  margin-bottom: 20px;
`;

const healthStatusSummationDetail = css`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 16px;
  font-weight: 500;
  > img {
    width: 17px;
    height: 10px;
  }
`;

const healthStatusSummationDescription = css`
  font-size: 14px;
  font-weight: 400;
`;

const healthStatusDetail = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;

const healthStatusDetailCard = css`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(217, 217, 217, 1);
  height: 184px;
  border-radius: 10px;
  padding: 20px 20px;

  > img {
    width: 76px;
    height: 76px;
    margin-bottom: 24px;
    align-self: center;
  }
`;

const healthStatusCardDescription = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const healthStatusCardField = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
  > h2 {
    color: rgba(34, 34, 34, 1);
    font-size: 16px;
    font-weight: 500;
  }
  > p {
    color: rgba(102, 102, 102, 1);
    font-weight: 400;
    font-size: 13px;
  }
`;
const pedigreeCerfiticateImgStyle = css`
  margin-top: 14px;
  width: 100%;
`;
const titleAndSeeMoreBtnStyle = css`
  display: flex;
  justify-content: space-between;
`;
const breedingEnvironmentImgStyle = css`
  width: 100%;
  height: 280px;
  border-radius: 10px;
  margin-top: 12px;
`;

const parentDogImgStyle = css`
  width: 100%;
  height: 280px;
  border-radius: 10px;
  margin-top: 12px;
`;
const adoptionProcessGuideDiv = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 14px;
`;
const adoptionProcessGuideCard = css`
  height: 124px;
  padding: 14px 32px;
  border: 1px solid rgba(217, 217, 217, 1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 25px;
`;

const guideImg = css`
  width: 70px;
  height: 70px;
`;
const guideText = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const guideTitle = css`
  font-weight: 500;
  font-size: 16px;
  color: rgba(34, 34, 34, 1);
`;

const guideDescription = css`
  font-size: 16px;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  line-height: 110%;
  white-space: pre-line;
`;

const seeMoreBtn = css`
  font-weight: 500;
  font-size: 16px;
  color: rgba(102, 102, 102, 1);
`;

const statusStyle = css`
  font-weight: 500;
  font-size: 15px;
  color: rgba(28, 166, 79, 1);
`;
const notPerformed = css`
  color: rgba(230, 145, 47, 1);
`;

const checkImgStyle = css`
  width: 17px;
  height: 11px;
  margin-right: 5px;
`;
