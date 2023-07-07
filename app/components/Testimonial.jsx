import Image from "next/image";
import React from "react";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

const Testimonial = () => {
  return (
    <section className="px-2 py-10 xl:px-0 bg-[#1F1C1C]">
      <div className="max-w-[1250px] mx-auto">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-14 items-center">
            <div className="w-full text-center md:text-left order-first md:order-last">
              <h3 className="text-[#4643d3] text-lg md:text-2xl font-bold mb-2 md:mb-3">
                Testimonial
              </h3>
              <h2 className="text-white text-2xl md:text-5xl font-bold leading-9 md:leading-[65px] capitalize mb-4 md:mb-6">
                What our Customer Say About us
              </h2>
              <p className="text-[#777777] text-xs md:text-base leading-4 md:leading-6 mb-5 md:mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,,
                lacus non massa id amet tincidunt. Lacus ut integer blandit
                diam.
              </p>
              <div className="flex justify-center items-center gap-4 md:gap-5">
                <div className="w-11 md:w-[60px] h-11 md:h-[60px] flex justify-center items-center rounded-full bg-gradient-to-tr from-[#F76B1C] to-[#FAD961]">
                  <HiArrowNarrowLeft className="text-white text-2xl" />
                </div>
                <div className="w-11 md:w-[60px] h-11 md:h-[60px] flex justify-center items-center rounded-full bg-gradient-to-br from-[#4643D3] to-[#0500FF]">
                  <HiArrowNarrowRight className="text-white text-2xl" />
                </div>
              </div>
            </div>
            <div className="w-full h-[315px] md:h-[534px] relative order-last md:order-first">
              <div className="w-[261px] md:w-3/4 absolute right-0 top-7 md:top-10">
                <Image
                  src="/assets/images/testimonial/joha-smith.png"
                  width={443}
                  height={210}
                  alt="joha-smith"
                />
              </div>
              <div className="w-[261px] md:w-3/4 absolute left-0 bottom-3 md:bottom-5">
                <Image
                  src="/assets/images/testimonial/joha-smith.png"
                  width={443}
                  height={210}
                  alt="joha-smith"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
