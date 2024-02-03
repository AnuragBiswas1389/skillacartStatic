// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";

// function CarouselSlider(props) {
//   return (
//     <div className="h-64 sm:h-80">
//       <Carousel
//         showArrows={true}
//         autoPlay={true}
//         infiniteLoop={true}
//         showThumbs={false}
//         interval={4500}
//       >
//         <div className="">
//           <img
//             className={`object-cover w-full sm:h-80 ${
//               props.isRounded ? "rounded-md" : ""
//             }`}
//             src="https://source.unsplash.com/user/erondu/3000x900"
//             alt="slide 1"
//           />
//         </div>
//         <div className="h-64 sm:h-80">
//           <img
//             className="object-cover w-full h-full"
//             src="https://source.unsplash.com/collection/190727/3000x900"
//             alt="slide 2"
//           />
//         </div>
//         <div className="h-64 sm:h-80">
//           <img
//             className="object-cover w-full h-full"
//             src="https://source.unsplash.com/collection/190728/3000x900"
//             alt="slide 3"
//           />
//         </div>
//       </Carousel>
//     </div>
//   );
// }

// export default CarouselSlider;

import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "./CarouselStyle.css";

// import required modules
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

export default function Carousel(props) {
  let borderRadius = props.isRounded ? "8px" : "0"
  let config = {};
  if (props.autoPlay) {
    config = {
    delay: 4300,
    disableOnInteraction: false,
  };
  } else {
    config=false
  }
  
  return (
    <>
      <Swiper
        spaceBetween={50}
        centeredSlides={true}
        autoplay={config}
        pagination={{
          clickable: true,
        }}
        effect={"fade"}
        fadeEffect={{
          crossFade: true,
        }}
        modules={[Autoplay, EffectFade, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <div
            className={`w-full ${
              props.forProduct ? " h-80 sm:h-96 " : "h-64 sm:h-80"
            }`}
          >
            <LazyLoadImage
              src="/assets/banner/banner1.jpg"
              width="100%"
              height="100%"
              effect="blur"
              PlaceholderSrc="assets/banner/banner1Lazy.jpg"
              style={{ borderRadius: borderRadius }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`w-full ${
              props.forProduct ? " h-80 sm:h-96 " : "h-64 sm:h-80"
            }`}
          >
            <LazyLoadImage
              src="assets/banner/banner2.jpg"
              width="100%"
              height="100%"
              effect="blur"
              PlaceholderSrc="assets/banner/banner2Lazy.jpg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`w-full ${
              props.forProduct ? " h-80 sm:h-96 " : "h-64 sm:h-80"
            }`}
          >
            <LazyLoadImage
              src="/assets/banner/banner3.jpg"
              width="100%"
              height="100%"
              effect="blur"
              PlaceholderSrc="assets/banner/banner3Lazy.jpg"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
