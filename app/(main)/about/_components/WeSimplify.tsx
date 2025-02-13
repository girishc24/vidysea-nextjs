import Image from "next/image";
import React from "react";
import { StudentGroup } from "@/public/assets/icons";
import { students, studentsicons } from "@/public/assets/images";

export default function WeSimplify() {
  return (
    <div className="relative  text-center flex flex-col items-center px-4 pt-12 pb-0">
      <div className="absolute top-0 left-0 w-full h-full" ></div>

      <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-1 mb-4">
        <Image src={studentsicons} width={45} height={24} alt="Student Icons" />
        <p className="text-sm font-medium text-gray-600">
          Join 21k+ students & build your career.
        </p>
        </div>
     <div className=" bg-no-repeat bg-center bg-contain -z-10 " style={{ backgroundImage: `url(${StudentGroup.src})` }}> 
      <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
        We Simplify Your <br />
        <span className="text-primary">Study Abroad Journey</span>
      </h2>

      <div className="relative w-full max-w-4xl pt-8">
        <Image
          src={students}
          alt="Group of students"
          width={800}
          height={500}
          className="w-[100%] h-auto "
        />
      </div>
      </div>
    </div>
  );
}
