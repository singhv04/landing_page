"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { testimonials } from "@/lib/testimonidals-data";
import { allIcons } from "@/icons/all-icons";
import Image from "next/image";

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
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Set the swiper instance to the ref
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          875: {
            slidesPerView: 2,
          },
          1290: {
            slidesPerView: 3,
          },
        }}
        className="custom-swiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div
              className={`flex h-[450px] w-[275px] mx-auto flex-col justify-between rounded-md border-2 border-emerald-500/25 bg-background p-6 transition-all duration-300 ${
                index === activeIndex
                  ? "shadow-2xl shadow-emerald-500/50"
                  : "shadow-lg"
              }`}
            >
              {/* Main text content */}
              <p className="relative text-sm leading-[1.3] text-white">
                <span className="relative text-emerald-500">
                  <span
                    className="absolute -left-2 mr-1 -top-1 text-emerald-500"
                    style={{ fontSize: "1.75em", lineHeight: "1" }}
                  >
                    “
                  </span>
                  <span className="text-white px-1">{testimonial.text}</span>
                  <span
                    className="absolute -right-2 -bottom-1 text-emerald-500"
                    style={{ fontSize: "1.75em", lineHeight: "1" }}
                  >
                    ”
                  </span>
                </span>
              </p>

              {/* Name and position at the bottom */}
              <div className="flex items-center space-x-2">
                <div className="relative flex items-center justify-center w-[40px] h-[40px] rounded-full bg-background text-emerald-500 font-bold text-sm overflow-hidden border-2 border-emerald-500/45">
                  {testimonial?.image ? (
                    <Image
                      src={testimonial?.image}
                      fill
                      sizes="(max-width: 768px) 40px, (max-width: 1200px) 50px"
                      alt={`${testimonial.name}'s profile`}
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    testimonial.name
                      .split(" ")
                      .map((part) => part[0].toUpperCase())
                      .slice(0, 2)
                      .join("")
                  )}
                </div>
                <div>
                  <h3 className="text-md font-medium text-emerald-500">
                    {testimonial.name}
                  </h3>
                  <p className="text-xs text-muted text-wrap">{testimonial.position}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
