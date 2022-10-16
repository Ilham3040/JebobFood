import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carousel.css";

// import required modules
import { Pagination, Navigation ,Autoplay } from "swiper";

const Carousel = () => {
  return (
    <div className="slide z-10">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 1800,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation , Autoplay]}
        className="mySwiper max-h-fit"
      >
        <SwiperSlide><img className="object-cover" Src="./img/AyamBakar.jpg" alt="" srcset="" /></SwiperSlide>
        <SwiperSlide><img className="object-cover" Src="./img/AyamGoreng.jpg" alt="" srcset="" /></SwiperSlide>
        <SwiperSlide><img className="object-cover" Src="./img/Rames.jpg" alt="" srcset="" /></SwiperSlide>
      </Swiper>
    </div>
  );
}


export default Carousel