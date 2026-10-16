import Image from "next/image";
import React from "react";

const Hero = () => {
  const date = new Date();

  const today = date.toLocaleDateString("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <div className="hero bg-white min-h-[300px] p-8 rounded-2xl">
      <div className="hero-content grid grid-cols-5 gap-10">
        
        <div className="col-span-3">
          <div className="badge badge-soft badge-success text-[#05893E] py-4 px-6 font-medium text-[15px] rounded-3xl mb-3">{today}</div>
          <h1 className="text-5xl font-semibold">আজকের বাজারের দাম এক নজরে</h1>
          <p className="py-2 font-normal text-[#5F6761] text-[18px]">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>
          <button className="btn bg-[#05893E] text-[18px] text-white py-5 px-8 font-normal rounded-[11px] mt-4">সব পণ্য দেখুন</button>
        </div>

        <Image
          alt="Tailwind CSS hero component"
          src="/bazar-hero.png"
          width={400}
          height={400}
          className="rounded-lg col-span-2 flex items-center"
        />
      </div>
    </div>
  );
};

export default Hero;
