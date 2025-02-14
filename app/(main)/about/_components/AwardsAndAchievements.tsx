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
      <div className="max-w-[1400px] mx-auto px-8 pb-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12">
          <div className="mb-8 md:mb-0">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Awards & Achievements</h2>
            <p className="text-4xl font-bold text-gray-900">We Are Proud Of</p>
          </div>
          
          <div className="flex gap-4 justify-end max-sm:hidden">
            <button className="desktop-prev-button w-[2.5rem] md:w-[5rem] h-10 md:h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button className="desktop-next-button w-[2.5rem] md:w-[5rem] h-10 md:h-12 rounded-full border bg-[#00264D] text-white flex items-center justify-center hover:bg-[#003366] transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
            prevEl: '.desktop-prev-button, .mobile-prev-button',
            nextEl: '.desktop-next-button, .mobile-next-button',
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
              <div className="bg-white p-3 rounded-2xl shadow-sm h-full hover:shadow-md transition-shadow">
                <div className="flex justify-center items-center w-full mb-6 bg-gray-100">
                  <div className="relative w-52 h-[13rem] transform -rotate-12 rounded-lg flex items-center justify-center">
                    <Image 
                      src={award.Img} 
                      alt={award.name} 
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {award.name}
                </h3>
                <p className="text-gray-500 text-sm mb-2">
                  <small>{award.date}</small>
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {award.content}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex gap-4 justify-center mt-5 md:hidden">
            <button className="mobile-prev-button w-[4.5rem] md:w-[5rem] h-10 md:h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button className="mobile-next-button w-[4.5rem] md:w-[5rem] h-10 md:h-12 rounded-full border bg-[#00264D] text-white flex items-center justify-center hover:bg-[#003366] transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
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