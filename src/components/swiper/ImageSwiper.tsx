/* eslint-disable react/no-array-index-key */
import { type SerializedStyles, css } from "@emotion/react";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Props {
  images: string[];
  cssProp?: SerializedStyles;
}

/**
 * 이미지 배열을 받아 슬라이드로 보여주는 Swiper 컴포넌트입니다.
 *
 * @example
 * <ImageSwiper
 *   images={[
 *     "/images/dog1.jpg",
 *     "/images/dog2.jpg",
 *     "/images/dog3.jpg",
 *   ]}
 *   cssProp={imageSwiperStyle}
 * />
 *
 * const imageSwiperStyle = css`
 *   height: 280px;
 *   border-radius: 8px;
 * `;
 */
export default function ImageSwiper({ images, cssProp }: Props) {
  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <>
      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={1}
        navigation
        css={[cssProp, swiperStyle]}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex + 1)}
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img src={src} alt={`slide-${idx}`} css={imageStyle} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div css={dotIndicatorStyle}>
        {images.map((_, idx) => (
          <div key={idx} css={dotStyle(idx + 1 === currentSlide)} />
        ))}
      </div>
    </>
  );
}

const swiperStyle = css`
  .swiper-button-prev,
  .swiper-button-next {
    color: white;
    width: 30px;
    height: 30px;
    background: #222222;
    border-radius: 4px;

    &::after {
      font-size: 16px;
      font-weight: bold;
    }
  }
  .swiper-button-prev {
    left: 20px;
  }
  .swiper-button-next {
    right: 20px;
  }
  .swiper-button-disabled {
    display: none;
  }
`;

const imageStyle = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const dotIndicatorStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin-top: 12px;
`;

const dotStyle = (isActive: boolean) => css`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${isActive ? "#52D9FF" : "#d9d9d9"};
  transition: background-color 0.3s;
`;
