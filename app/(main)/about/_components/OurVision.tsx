import React from 'react';
import Image from 'next/image';
import { who_we_are } from '@/public/assets/images';
import { ourvisionicon } from '@/public/assets/icons';

export default function OurVision() {
  return (
    <div className="bg-white max-w-7xl mx-auto pb-12 pt-8 rounded-2xl shadow-lg flex flex-col md:flex-row items-center md:items-start gap-4">
      {/* Left Content */}
      <div className="flex-1 mt-12 p-20 max-sm:px-6">
        <h2 className="text-4xl font-bold mb-3">Our Vision</h2>
        <p className="text-gray-600 mb-6 leading-relaxed w-4/5 max-sm:w-full">
          To be the ultimate education partner, helping every student to unlock their
          full potential through the right opportunities.
        </p>

        <h2 className="text-4xl font-bold mb-3 pt-5">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed w-4/5 max-sm:w-full">
          To champion student success by guiding them towards their academic and career goals,
          ensuring that every step they take leads to achievement.
        </p>
      </div>

     
      <div className="relative flex-1">
        <Image
          src={who_we_are}
          alt="Who we are"
          width={480}
          height={320}
          className="rounded-lg h-auto"
        />

        <div className="absolute top-6 left-[-5rem] w-40 h-60 max-sm:left-[12rem] max-sm:top-[20rem] ">
          <Image
            src={ourvisionicon}
            alt="Our Vision"
           
          />
        </div>
      </div>
    </div>
  );
}
