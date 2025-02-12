"use client";
import Image from "next/image";
import { OurPartnersLogos } from "@/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function OurPartners() {
  return (
    <section className="py-10 ">
      <h3 className="text-3xl font-bold text-center mb-8">Our Partners</h3>

      {/* First Swiper - Moves Left to Right */}
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="w-full"
      >
        {OurPartnersLogos.map((logo, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="bg-white p-6 rounded-xl shadow-md flex justify-center items-center">
              <Image
                src={logo.src}
                alt={logo.alt || "Partner Logo"}
                width={120}
                height={50}
                className="w-auto h-12 object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Second Swiper - Moves Right to Left */}
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
        loop={true}
        autoplay={{ delay: 2000, reverseDirection: true, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="w-full mt-6"
      >
        {OurPartnersLogos.map((logo, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="bg-white p-6 rounded-xl shadow-md flex justify-center items-center">
              <Image
                src={logo.src}
                alt={logo.alt || "Partner Logo"}
                width={120}
                height={50}
                className="w-auto h-12 object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
