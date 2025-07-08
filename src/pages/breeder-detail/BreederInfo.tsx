import { css } from "@emotion/react";

import animalProfileImg from "@/assets/breeder-detail/temp/animal-profile.png";
import breederProfileImg from "@/assets/breeder-detail/temp/breeder-profile.png";
import ImageSwiper from "@/components/swiper/ImageSwiper";

export default function BreederInfo() {
  return (
    <>
      브리더 소개
      {/* ImageSwiper 테스트입니다. */}
      <ImageSwiper
        images={[animalProfileImg, breederProfileImg]}
        cssProp={imageSwiperStyle}
      />
    </>
  );
}

const imageSwiperStyle = css`
  height: 280px;
  border-radius: 8px;
`;
