"use client";

import React from 'react';
import Image from 'next/image';
import { awards } from "@/constants";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const AwardsAndAchievements = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Awards & Achievements</h2>
            <p className="text-3xl text-gray-700">We Are Proud Of</p>
          </div>
          
          <div className="flex gap-4">
            <button className="custom-prev-button w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button className="custom-next-button w-12 h-12 rounded-full border bg-[#00264D] text-white flex items-center justify-center hover:bg-[#003366] transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={4}
          loop={true}
          navigation={{
            prevEl: '.custom-prev-button',
            nextEl: '.custom-next-button',
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 16 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
            1280: { slidesPerView: 4, spaceBetween: 24 }
          }}
        >
          {awards.map((award, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-8 rounded-2xl shadow-sm h-full hover:shadow-md transition-shadow">
                <div className="relative w-32 h-32 mb-6 transform -rotate-12 ">
                  <Image 
                    src={award.Img} 
                    alt={award.name} 
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {award.name}
                </h3>
                <p className="text-gray-500 text-sm mb-2">
                  {award.date}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {award.content}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-slide {
          height: auto;
        }
        .swiper-button-next,
        .swiper-button-prev {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default AwardsAndAchievements;