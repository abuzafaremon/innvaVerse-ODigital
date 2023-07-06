import Image from "next/image";
import React from "react";
import { FaAngleRight } from "react-icons/fa";

const OurTeam = () => {
  return (
    <section className="px-2 xl:px-0 py-10 bg-[url('/assets/images/team/bg.png')] h-[615px] bg-cover bg-center">
      <div className="max-w-[1250px] mx-auto container h-full">
        <div className="flex flex-col md:flex-row items-center gap-12 h-full">
          <div className="w-full text-center md:text-left">
            <h3 className="text-[#4643d3] text-lg md:text-2xl font-bold mb-2.5 md:mb-3">
              Our Team
            </h3>
            <h2 className="text-[#2c2a2b] text-2xl md:text-5xl font-bold mb-2.5 md:mb-6 leading-[35px] md:leading-[48px] capitalize">
              Discussion your project with our Team
            </h2>
            <p className="text-[#777777] text-xs md:text-base leading-[26px] mb-5 md:mb-9">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,,
              lacus non massa id amet tincidunt. Lacus ut integer blandit diam.
            </p>
            <a
              href="#"
              className="bg-[#4643D3] inline-flex items-center gap-2 md:gap-3 px-3 md:px-[18px] py-1.5 md:py-2 rounded-lg md:rounded-[10px]"
            >
              <span className="text-white text-xs md:text-base font-bold">
                Started Chart
              </span>
              <div className="w-8 md:w-11 h-8 md:h-11 flex justify-center items-center rounded-full bg-white">
                <FaAngleRight className="text-[#1388E5] text-xl" />
              </div>
            </a>
          </div>
          <div className="w-full">
            <Image
              src="/assets/images/team/images-right.png"
              width={767}
              height={390}
              alt="image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
