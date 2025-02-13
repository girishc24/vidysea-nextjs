"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { LeadershipTeam } from "@/constants";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaLinkedin } from "react-icons/fa";

const LeadershipTeamSection = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="bg-[#00264D] py-16">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex mb-12">
          <div className="w-1/3">
            <h2 className="text-5xl font-bold text-white">Leadership <br></br> Team</h2>
          </div>
          <div className="w-2/3">
            <Swiper
              modules={[Navigation]}
              spaceBetween={24}
              slidesPerView={2}
              loop={true}
              navigation={{
                prevEl: '.custom-prev-button',
                nextEl: '.custom-next-button',
              }}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 16 },
                768: { slidesPerView: 2, spaceBetween: 24 },
                1024: { slidesPerView: 2, spaceBetween: 24 }
              }}
            >
              {LeadershipTeam.map((member, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white rounded-[20px] p-3  overflow-hidden transition-all duration-300">
                    {expandedId !== index ? (
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={member.Img}
                          alt={member.name}
                          fill
                          className="object-cover rounded-2xl"
                          priority={index < 3}
                        />
                      </div>
                    ) : (
                      <div className="p-6 bg-white">
                        <div className="text-sm text-gray-600">
                          {member.content}
                        </div>
                      </div>
                    )}
                    <div className="p-6 flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                        <p className="text-gray-600 mt-1 text-sm">{member.position}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        {member.linkedin && (
                          <a 
                            href={member.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-600"
                          >
                            <FaLinkedin size={20} />
                          </a>
                        )}
                        <button
                          onClick={() => toggleExpand(index)}
                          className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-200 hover:bg-gray-50"
                        >
                          <span className="text-xl leading-none">
                            {expandedId === index ? "−" : "+"}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="flex gap-4">
          <button className="custom-prev-button w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button className="custom-next-button w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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