"use client";

import { useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

import css from "./gallery.module.css";

interface CamperGalleryProps {
  images: {
    id: string;
    thumb: string;
    original: string;
  }[];
}

export default function CamperGallery({ images }: CamperGalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className={css.wrapper}>
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#f7f7f7;",
          } as React.CSSProperties
        }
        loop
        spaceBetween={10}
        navigation
        thumbs={{
          swiper: thumbsSwiper,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className={css.mainSwiper}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <div className={css.imageWrapper}>
              <Image
                src={image.original}
                alt="Camper"
                fill
                className={css.mainImage}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop
        spaceBetween={32}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        modules={[FreeMode, Navigation, Thumbs]}
        className={css.thumbsSwiper}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <div className={css.thumbWrapper}>
              <Image
                src={image.thumb}
                alt="Camper thumbnail"
                fill
                className={css.image}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
