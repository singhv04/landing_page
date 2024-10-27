"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { testimonials } from "@/lib/testimonidals-data";

const TestimonialSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      breakpoints={{
        640: {
          // Small screens
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        768: {
          // Medium screens
          slidesPerView: 2,
          slidesPerGroup: 1,
        },
        1024: {
          // Large screens
          slidesPerView: 3,
          slidesPerGroup: 1,
        },
      }}
      className="custom-swiper"
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <div
            className={`flex h-[310px] max-w-md flex-col justify-between rounded-md border-2 border-emerald-500/25 bg-background p-6 transition-all duration-300 ${
              index === activeIndex
                ? "shadow-2xl shadow-emerald-500/50"
                : "shadow-lg"
            }`}
          >
            {/* Main text content */}
            <p className="relative text-xs text-foreground">
              <span className="mr-1 text-lg font-bold text-emerald-500">“</span>
              {testimonial.text}
              <span className="ml-1 text-lg font-bold text-emerald-500">”</span>
            </p>
            {/* Name and position at the bottom */}
            <div>
              <h3 className="text-md font-semibold text-emerald-400">
                {testimonial.name}
              </h3>
              <p className="text-xs text-muted">{testimonial.position}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
