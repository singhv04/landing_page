"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { testimonials } from "@/lib/testimonidals-data";
import { allIcons } from "@/icons/all-icons";

const TestimonialSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);
  const { leftArrow, rightArrow } = allIcons;

  return (
    <div className="relative">
      {/* Left and Right Navigation Buttons */}
      <button
        className="flex justify-center items-center h-10 w-10 absolute top-1/2 -left-[5%] z-10 -translate-y-1/2 bg-emerald-500 text-white rounded-full shadow-md hover:bg-emerald-600 transition"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        {leftArrow}
      </button>
      <button
        className="flex justify-center items-center h-10 w-10 absolute top-1/2 -right-[5%] z-10 -translate-y-1/2 bg-emerald-500 text-white rounded-full shadow-md hover:bg-emerald-600 transition"
        onClick={() => swiperRef.current?.slideNext()}
      >
        {rightArrow}
      </button>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Set the swiper instance to the ref
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        breakpoints={{
          640: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 1,
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 1,
          },
        }}
        className="custom-swiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div
              className={`flex h-[310px] w-full flex-col justify-between rounded-md border-2 border-emerald-500/25 bg-background p-6 transition-all duration-300 ${
                index === activeIndex
                  ? "shadow-2xl shadow-emerald-500/50"
                  : "shadow-lg"
              }`}
            >
              {/* Main text content */}
              <p className="relative text-xs text-foreground">
                <span className="mr-1 text-lg font-bold text-emerald-500">
                  “
                </span>
                {testimonial.text}
                <span className="ml-1 text-lg font-bold text-emerald-500">
                  ”
                </span>
              </p>
              {/* Name and position at the bottom */}
              <div>
                <h3 className="text-md font-medium text-emerald-500">
                  {testimonial.name}
                </h3>
                <p className="text-xs text-muted">{testimonial.position}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
