import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

const Partner = () => {
  return (
    <section className="px-2 py-10 mx-auto xl:px-0 bg-[#1F1C1C]">
      <div className="max-w-[1250px] mx-auto">
        <div className="container mx-auto">
          <div className="mb-5 lg:mb-0">
            <h2 className="text-sm md:text-5xl text-[#4643d3] md:text-white font-bold text-center md:text-left">
              Our Partner
            </h2>
          </div>
          <div className="flex items-center justify-between gap-y-5 gap-x-4 lg:gap-14 flex-wrap">
            <div className="w-20 sm:w-24 md:w-40 h-5 md:h-10 relative">
              <a href="#">
                <Image
                  className="invert"
                  src="/assets/images/partner/slack.png"
                  width={195}
                  height={40}
                  alt="slack"
                />
              </a>
            </div>
            <div className="w-24 md:w-40 h-5 md:h-10 relative">
              <a href="#">
                <Image
                  src="/assets/images/partner/microsoft.png"
                  width={195}
                  height={40}
                  alt="microsoft"
                />
              </a>
            </div>
            <div className="w-24 md:w-40 h-5 md:h-10 relative">
              <a href="#">
                <Image
                  src="/assets/images/partner/facebook.png"
                  width={195}
                  height={40}
                  alt="facebook"
                />
              </a>
            </div>
            <div className="w-[70px] md:w-40 h-5 md:h-10 relative">
              <a href="#">
                <Image
                  src="/assets/images/partner/google.png"
                  width={195}
                  height={40}
                  alt="google"
                />
              </a>
            </div>
            <div className="flex items-center gap-1 sm:gap-5 md:flex-col">
              <div>
                <h2 className="text-2xl md:text-7xl font-bold text-white">
                  4.7K
                </h2>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center sm:gap-1">
                  <AiFillStar className="text-[#F5A623]" />
                  <AiFillStar className="text-[#F5A623]" />
                  <AiFillStar className="text-[#F5A623]" />
                  <AiFillStar className="text-[#F5A623]" />
                  <AiFillStar className="text-[#F5A623]" />
                </div>
                <div>
                  <span className="text-xs md:text-base font-semibold text-white">
                    1,938 Rating
                  </span>
                </div>
              </div>
              <div>
                <h2 className="text-sm md:text-xl text-[#1E1AF7] md:text-white w-max">
                  Satisfy Client
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
