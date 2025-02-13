import Image from "next/image";
import { statistics } from "@/constants";
import { FrameGlobal } from "@/public/assets/icons";

export default function GlobalImpact() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 ">
    <div className="bg-blue-100 rounded-2xl px-10 pt-10 max-sm:px-3 max-sm:pb-4 flex flex-col lg:flex-row items-center gap-10">     
      <div className="lg:w-1/2 text-left">
        <h2 className="text-4xl font-extrabold text-gray-900">Our Global Impact</h2>
        <p className="mt-4 text-gray-700 leading-relaxed w-4/5">
          At Vidysea, we’ve helped thousands of students achieve their dreams of 
          studying at the world’s top universities. Our proven track record speaks for itself.
        </p>
        <div className="relative mt-6 flex justify-center lg:justify-start max-sm:hidden">
          <Image
            src={FrameGlobal}
            alt="Global Impact"
            
            className="w-[80%] h-auto"
          />
        </div>
      </div>

      {/* Right Section - Statistics Grid */}
      <div className="lg:w-1/2 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 pl-5 rounded-xl shadow-sm flex flex-col items-start"
              >
                <Image 
                  src={stat.icon} 
                  alt={stat.label} 
                  width={40} 
                  height={40} 
                  className="pb-10"
                />
                <p className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                  {stat.value}
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
