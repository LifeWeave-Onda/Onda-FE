import { css } from "@emotion/react";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { breakpoints } from "@/styles/layout";

export default function AdCarousel() {
  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <div css={swiperWrapperStyle}>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={16}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 3000 }}
        loop={true}
        css={swiperStyle}
        onSlideChange={(swiper) => {
          setCurrentSlide(swiper.realIndex + 1);
        }}
      >
        <SwiperSlide>
          <div css={slideStyle("#ffadad")}>Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div css={slideStyle("#ffd6a5")}>Slide 2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div css={slideStyle("#caffbf")}>Slide 3</div>
        </SwiperSlide>
      </Swiper>

      <div css={indicatorStyle}>
        <span className="current-slide">
          {String(currentSlide).padStart(2, "0")}
        </span>
        <span className="total-slide"> / {String(3).padStart(2, "0")}</span>
      </div>
    </div>
  );
}

const swiperWrapperStyle = css`
  position: relative;
`;

const swiperStyle = css`
  .swiper-button-prev,
  .swiper-button-next {
    color: white;
    width: 52px;
    height: 52px;
    background-color: #22222233;

    &::after {
      font-size: 20px;
      font-weight: bold;
    }
  }

  .swiper-button-prev {
    left: 0;
  }
  .swiper-button-next {
    right: 0;
  }
`;

const slideStyle = (bgColor: string) => css`
  height: 240px;
  background-color: ${bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;

  @media screen and (min-width: ${breakpoints.lg}) {
    height: 300px;
  }
  @media screen and (min-width: ${breakpoints.xl}) {
    height: 360px;
  }
  @media screen and (min-width: ${breakpoints["2xl"]}) {
    height: 480px;
  }
`;

const indicatorStyle = css`
  position: absolute;
  right: 24px;
  bottom: 20px;
  color: white;
  font-size: 16px;
  background-color: #22222280;
  padding: 6px 16px;
  border-radius: 20px;
  z-index: 2;
  min-width: 84px;
  text-align: center;

  .current-slide {
    font-size: 18px;
  }
  .total-slide {
    font-size: 14px;
  }
`;
