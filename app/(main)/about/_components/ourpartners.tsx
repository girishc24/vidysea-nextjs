"use client";

import Image from "next/image";
import { OurPartnersLogos } from "@/constants";
import { motion } from "framer-motion";

export default function OurPartners() {
  return (
    <section className="py-16 overflow-hidden bg-white">
      <h3 className="text-4xl font-bold text-center mb-12">Our Partners</h3>

      {/* Marquee Left to Right */}
      <div className="relative flex space-x-8 overflow-hidden">
        <motion.div
          className="flex space-x-12"
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
        >
          {OurPartnersLogos.concat(OurPartnersLogos).map((logo, index) => (
            <div
              key={`left-${index}`}
              className="bg-white p-6 rounded-lg shadow-md flex justify-center items-center min-w-[200px] h-[100px]"
            >
              <Image
                src={logo.src}
                alt={logo.alt || "Partner Logo"}
                width={160}
                height={80}
                className="w-auto h-20 object-contain hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Marquee Right to Left */}
      <div className="relative flex space-x-8 overflow-hidden mt-12">
        <motion.div
          className="flex space-x-12"
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
        >
          {OurPartnersLogos.concat(OurPartnersLogos).map((logo, index) => (
            <div
              key={`right-${index}`}
              className="bg-white p-6 rounded-lg shadow-md flex justify-center items-center min-w-[200px] h-[100px]"
            >
              <Image
                src={logo.src}
                alt={logo.alt || "Partner Logo"}
                width={160}
                height={80}
                className="w-auto h-20 object-contain hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}