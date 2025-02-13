import Image from "next/image";
import { aboutus } from "@/constants";

export default function AboutWhoWeAre() {
  return (
    <div className="max-w-6xl mx-auto py-20 px-6 md:px-12">
      <h1 className="text-4xl font-bold text-center mb-16">About Us</h1>

      <div className="space-y-24">
        {aboutus.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col-reverse md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } gap-12`}
          >
           
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-3xl font-semibold">{item.heading}</h2>
              <p className="text-gray-700 leading-relaxed text-sm pr-5">
                {item.content}
              </p>
            </div>

            
            <div className="relative md:w-1/2">
              <Image
                src={item.Img}
                alt={item.heading}
                width={450}
                height={350}
                className="rounded-2xl shadow-xl"
              />

              <div className="absolute top-10 left-[-4rem] max-sm:top-[-1rem] max-sm:left-[-1rem]">
                <Image src={item.icon_one} alt="Icon" width={100} height={80} />
              </div>
              <div className="absolute bottom-10 right-4 max-sm:bottom-2">
                <Image src={item.icon_one} alt="Icon" width={100} height={80} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}