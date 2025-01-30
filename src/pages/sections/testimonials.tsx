"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Card } from "../../components/Card";

export function Testimonials() {
  return (
    <div className="overflow-hidden my-10 py-20 bg-gradient-to-r from-purple-200 via-blue-100 to-sky-100">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        modules={[Navigation]}
        navigation
        style={{ overflow: "visible" }}
      >
        {new Array(10).fill(0).map((_, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex justify-center">
              <Card
                name="John Doe"
                role="CEO"
                feedback={`
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. excepteur sint occaecat cupidatat non proident,

                `}
                image="https://via.placeholder.com/150"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}