"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { LeadershipTeam } from "@/constants";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Linkedin } from 'lucide-react';

const LeadershipTeamSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCard = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="bg-[#00264D] py-16">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section */}
          <div className="md:w-1/4 flex flex-col">
            <h2 className="text-5xl font-bold text-white mb-4 leading-[1.4]">
              Leadership<br />Team
            </h2>
            <div className="flex gap-4 mt-8 max-sm:hidden">
              <button className="custom-prev-button w-[4.5rem] h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button className="custom-next-button w-[4.5rem] h-12 rounded-full border border-white/20 flex items-center justify-center bg-white hover:bg-white/10 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00264D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="md:w-3/4">
            <Swiper
              modules={[Navigation]}
              spaceBetween={24}
              slidesPerView={2}
              loop={true}
              navigation={{
                prevEl: '.custom-prev-button, .custom-prev-button-mobile',
                nextEl: '.custom-next-button, .custom-next-button-mobile',
              }}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 16 },
                768: { slidesPerView: 2, spaceBetween: 24 },
                1024: { slidesPerView: 3, spaceBetween: 24 },
              }}
              className="h-full"
            >
              {LeadershipTeam.map((member, index) => (
                <React.Fragment key={index}>
                  {/* Image Card */}
                  <SwiperSlide key={`image-${index}`}>
                    <div className="bg-white rounded-[20px] h-full p-2 overflow-hidden transition-all duration-300">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={member.Img}
                          alt={member.name}
                          fill
                          className="object-cover rounded-2xl"
                          priority={index < 3}
                        />
                      </div>
                      <div className="p-2 flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                          <p className="text-gray-600 mt-1 text-sm">{member.position}</p>
                        </div>
                        <button
                          className="w-8 h-8 flex items-center justify-center border border-[#00264D] rounded-full transition"
                          onClick={() => toggleCard(index)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>

                  {/* Content Card */}
                  {openIndex === index && (
                    <SwiperSlide key={`content-${index}`}>
                      <div className="bg-white rounded-[20px] h-full p-3 overflow-hidden transition-all duration-300">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                          <a
                            href={member.linkedin}
                            className="text-[#00264D] hover:opacity-80 transition-opacity"
                            aria-label="LinkedIn Profile"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Linkedin size={20} />
                          </a>
                        </div>
                        <p className="text-gray-600 text-[12px]">{member.content}</p>
                        <button
                          className="w-8 h-8 flex items-center justify-center border border-[#00264D] rounded-full transition mt-4 float-right"
                          onClick={() => toggleCard(index)}
                        >
                          -
                        </button>
                      </div>
                    </SwiperSlide>
                  )}
                </React.Fragment>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex gap-4 mt-8 justify-center md:hidden">
          <button className="custom-prev-button-mobile w-[4.5rem] h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button className="custom-next-button-mobile w-[4.5rem] h-12 rounded-full border border-white/20 flex items-center justify-center bg-white hover:bg-white/10 transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00264D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

export default LeadershipTeamSection;
