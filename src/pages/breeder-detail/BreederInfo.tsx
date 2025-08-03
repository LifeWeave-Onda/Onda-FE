import { css } from "@emotion/react";
import DOMPurify from "dompurify";
import { Fragment } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import breedAnimal1 from "@/assets/breeder-detail/temp/breed-animal1.png";
import breedAnimal2 from "@/assets/breeder-detail/temp/breed-animal2.jpg";
import breederAwardImg from "@/assets/breeder-detail/temp/breeder-award.png";
import breederLicenseImg from "@/assets/breeder-detail/temp/breeder-license.png";
import breedingEnvironmentImg from "@/assets/breeder-detail/temp/breeding-environment.png";
import ImageSwiper from "@/components/swiper/ImageSwiper";

const BREEDER_INFO_DATA = {
  name: "노일호",
  description: `40년째 특수목적견을 브리딩 중인 말리노이즈 브리더입니다.<br />
경찰견, 마약탐지견, 인명구조견 등 사람을 돕는 개를 만들고 있습니다.`,
  mission: `노일호 브리더님은 어릴 적 함께했던 말리노이즈와 셰퍼트를 통해 견종의 매력에 빠지셨습니다. 단순한 반려를 넘어, 집중력 있고 임무에 충실한 그들의 모습은 오랜 시간 가슴에 남았고, 결국 특수목적견을 브리딩하고 훈련하는 길로 이어졌습니다. 지금은 경찰견, 마약탐지견, 인명구조견 등 다양한 분야에서 활약하는 아이들을 직접 기르고 훈련하며, 수십 년간 경찰청·소방청과 함께 현장을 누비고 계십니다.<br /><br />
노일호 브리더님께는 확고한 신념이 있습니다. 좋은 유전자를 가진 개체를 만드는 것을 넘어, 각자의 임무를 잘 수행할 수 있는 능력과 성품을 길러주는 것. 그래서 말리노이즈를 분양할 때도, 충분한 이해와 준비가 된 분인지 꼭 확인하신다고 해요. 에너지가 넘치는 아이들인 만큼, 함께 훈련하고 교감할 수 있는 환경이 무엇보다 중요하다고 말씀하시죠.<br /><br />
그는 늘 말리노이즈가 ‘누군가의 삶에 깊이 스며드는 존재’가 되기를 바랍니다. 강아지의 가능성을 존중해주시고, 함께 성장할 준비가 되셨다면, 노일호 브리더님의 말리노이즈는 단순한 반려견을 넘어 든든한 동반자가 되어드릴 것입니다.`,
  history: `2017. IGP 1급 획득<br />
2018. IGP 3급 획득<br />
2019. 시민경찰견 1호 제스퍼 선정<br />
2021. 분당 고3 실종사건 수색 성공<br />
2025. 112시민경찰견구조대 설립`,
  awardsImages: [breederAwardImg],
  licensesImages: [breederLicenseImg],
  recommendedFor: `IGP 자격증 취득을 준비 중이신 분<br />
경찰견, 인명구조견, 마약탐지견 등 사람을 돕는 개를 키우고 싶으신 분<br />
똑똑하고 힘 넘치는 최고의 개를 키우고 싶으신 분<br /><br />
가정견도 가능합니다. 원하는 스타일을 말해주세요.`,
  breedInfo: {
    breeds: ["말리노이즈"],
    animals: [
      {
        id: 1,
        name: "보미",
        age: "2개월",
        gender: "수컷",
        image: breedAnimal1,
      },
      {
        id: 2,
        name: "짱구",
        age: "2개월",
        gender: "수컷",
        image: breedAnimal2,
      },
    ],
  },
  breedingEnvironment: [breedingEnvironmentImg],
};
type TabType = "브리더소개" | "분양중인동물" | "입양후기";

interface BreederInfoProps {
  activeTab: TabType;
}

export default function BreederInfo({ activeTab }: BreederInfoProps) {
  const animalsRef = useRef<HTMLElement>(null);
  const reviewsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let target = null;
    if (activeTab === "분양중인동물") target = animalsRef;
    if (activeTab === "입양후기") target = reviewsRef;

    if (target?.current) {
      target.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [activeTab]);

  return (
    <div css={breedeerInfoContainerStyle}>
      <div css={boxStyle}>
        <h2 css={titleStyle}>{BREEDER_INFO_DATA.name} 브리더</h2>
        <p
          css={textStyle}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(BREEDER_INFO_DATA.description),
          }}
        />
      </div>
      <div css={boxStyle}>
        <h2 css={titleStyle}>
          {BREEDER_INFO_DATA.name} 브리더님은 이런 사람이에요
        </h2>
        <p
          css={textStyle}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(BREEDER_INFO_DATA.mission),
          }}
        />
      </div>
      <div css={boxStyle}>
        <h2 css={titleStyle}>활동 경력</h2>
        <p
          css={textStyle}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(BREEDER_INFO_DATA.history),
          }}
        />
      </div>
      <div css={boxStyle}>
        <h2 css={titleStyle}>수상 경력</h2>
        <ImageSwiper
          images={BREEDER_INFO_DATA.awardsImages}
          cssProp={imageSwiperStyle(280)}
        />
      </div>
      <div css={boxStyle}>
        <h2 css={titleStyle}>공식 문서</h2>
        <ImageSwiper
          images={BREEDER_INFO_DATA.licensesImages}
          cssProp={imageSwiperStyle(660)}
        />
      </div>
      <div css={boxStyle}>
        <h2 css={titleStyle}>이런 사람에게 추천해요</h2>
        <p
          css={textStyle}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(BREEDER_INFO_DATA.recommendedFor),
          }}
        />
      </div>
      <div css={boxStyle}>
        <h2 css={titleStyle}>품종</h2>
        <p css={textStyle}>
          {BREEDER_INFO_DATA.breedInfo.breeds.map((breed) => (
            <Fragment key={breed}>{breed}</Fragment>
          ))}
        </p>
      </div>
      <div css={boxStyle} ref={animalsRef}>
        <h2 css={titleStyle}>분양 동물</h2>
        {BREEDER_INFO_DATA.breedInfo.animals.map((animal) => (
          <div key={animal.id} css={animalBoxStyle}>
            <Link to="bomi" className="animal-img-wrapper">
              <img src={animal.image} alt={animal.name} />
            </Link>
            <span>
              {animal.name} {animal.age} {animal.gender}
            </span>
          </div>
        ))}
      </div>
      <div css={boxStyle} ref={reviewsRef}>
        <h2 css={titleStyle}>양육 환경</h2>
        <ImageSwiper
          images={BREEDER_INFO_DATA.breedingEnvironment}
          cssProp={imageSwiperStyle(280)}
        />
      </div>
    </div>
  );
}

const breedeerInfoContainerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const boxStyle = css`
  padding: 20px;
  position: relative;
  background-color: white;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
`;

const titleStyle = css`
  font-weight: 700;
  font-size: 20px;
`;

const textStyle = css`
  margin-top: 12px;
  line-height: 20px;
`;

const imageSwiperStyle = (height: number) => css`
  height: ${height}px;
  border-radius: 8px;
  margin-top: 12px;
`;

const animalBoxStyle = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 12px;

  .animal-img-wrapper {
    width: 100%;
    height: 350px;
    border-radius: 10px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
    }
  }
`;
