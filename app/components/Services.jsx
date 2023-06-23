import Image from "next/image";
import { BsCheckLg } from "react-icons/bs";
import img1 from "../../public/assets/images/services/1.png";
import img2 from "../../public/assets/images/services/2.png";
import img3 from "../../public/assets/images/services/3.png";
import img4 from "../../public/assets/images/services/4.png";

const Services = () => {
  return (
    <section className="px-2 py-10 mx-auto xl:px-0 bg-[#1F1C1C]">
      <div className="max-w-[1250px] mx-auto">
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-3 lg:gap-5">
            <h2 className="text-2xl lg:text-5xl text-white font-bold">
              Our Best Services
            </h2>
            <div className="w-11 lg:w-[70px] h-1 lg:h-1.5 rounded-full bg-[#ff873e]"></div>
          </div>
          <div className="py-5 lg:py-10 grid grid-cols-1 lg:grid-cols-2 gap-y-3 lg:gap-y-11 lg:gap-x-7">
            <div className="bg-[#050505] hover:bg-gradient-to-br hover:from-[#4643d3bf] hover:to-[#0500FF] rounded-xl p-4 lg:p-8 group">
              <div className="flex justify-between items-center gap-1">
                <div className="flex items-center gap-2 lg:gap-4">
                  <div className="p-0.5 rounded-full border border-[#FCD546] text-[#FCD546] group-hover:text-white group-hover:bg-[#FCD546] text-xl lg:text-4xl">
                    <BsCheckLg />
                  </div>
                  <div>
                    <h3 className="text-sm lg:text-2xl text-white font-bold mb-2 lg:mb-3.5">
                      Create Idea Business
                    </h3>
                    <p className="text-xs lg:text-base text-[#777777] group-hover:text-[#ffffffcc] group-hover:font-medium">
                      Quis vestibulum diam vitae eget dissd.
                    </p>
                  </div>
                </div>
                <div className="w-12 lg:w-[77px] h-12 lg:h-[77px] rounded p-1 lg:p-2 bg-white">
                  <Image src={img1} width={77} height={77} alt="service1" />
                </div>
              </div>
            </div>
            <div className="bg-[#050505] hover:bg-gradient-to-br hover:from-[#4643d3bf] hover:to-[#0500FF] rounded-xl p-4 lg:p-8 group">
              <div className="flex justify-between items-center gap-1">
                <div className="flex items-center gap-2 lg:gap-4">
                  <div className="p-0.5 rounded-full border border-[#FF863E] text-[#FF863E] group-hover:text-white group-hover:bg-[#FF863E] text-xl lg:text-4xl">
                    <BsCheckLg />
                  </div>
                  <div>
                    <h3 className="text-sm lg:text-2xl text-white font-bold mb-2 lg:mb-3.5">
                      Smart Solutions
                    </h3>
                    <p className="text-xs lg:text-base text-[#777777] group-hover:text-[#ffffffcc] group-hover:font-medium">
                      Quis vestibulum diam vitae eget dissd.
                    </p>
                  </div>
                </div>
                <div className="w-12 lg:w-[77px] h-12 lg:h-[77px] rounded p-1 lg:p-2 bg-gradient-to-br from-[#FCD546] to-[#ff843e]">
                  <Image src={img2} width={77} height={77} alt="service2" />
                </div>
              </div>
            </div>
            <div className="bg-[#050505] hover:bg-gradient-to-br hover:from-[#4643d3bf] hover:to-[#0500FF] rounded-xl p-4 lg:p-8 group">
              <div className="flex justify-between items-center gap-1">
                <div className="flex items-center gap-2 lg:gap-4">
                  <div className="p-0.5 rounded-full border border-[#54E252] text-[#54E252] group-hover:text-white group-hover:bg-[#54E252] text-xl lg:text-4xl">
                    <BsCheckLg />
                  </div>
                  <div>
                    <h3 className="text-sm lg:text-2xl text-white font-bold mb-2 lg:mb-3.5">
                      Business analysis
                    </h3>
                    <p className="text-xs lg:text-base text-[#777777] group-hover:text-[#ffffffcc] group-hover:font-medium">
                      Quis vestibulum diam vitae eget dissd.
                    </p>
                  </div>
                </div>
                <div className="w-12 lg:w-[77px] h-12 lg:h-[77px] rounded p-1 lg:p-2 bg-gradient-to-br from-[#11F843] to-[#FFAA79]">
                  <Image src={img3} width={77} height={77} alt="service3" />
                </div>
              </div>
            </div>
            <div className="bg-[#050505] hover:bg-gradient-to-br hover:from-[#4643d3bf] hover:to-[#0500FF] rounded-xl p-4 lg:p-8 group">
              <div className="flex justify-between items-center gap-1">
                <div className="flex items-center gap-2 lg:gap-4">
                  <div className="p-0.5 rounded-full border border-[#FE31A2] text-[#FE31A2] group-hover:text-white group-hover:bg-[#FE31A2] text-xl lg:text-4xl">
                    <BsCheckLg />
                  </div>
                  <div>
                    <h3 className="text-sm lg:text-2xl text-white font-bold mb-2 lg:mb-3.5">
                      Free Support 24 hours
                    </h3>
                    <p className="text-xs lg:text-base text-[#777777] group-hover:text-[#ffffffcc] group-hover:font-medium">
                      Quis vestibulum diam vitae eget dissd.
                    </p>
                  </div>
                </div>
                <div className="w-12 lg:w-[77px] h-12 lg:h-[77px] rounded p-1 lg:p-2 bg-gradient-to-br from-[#FB6CBB] to-[#FF0C92]">
                  <Image src={img4} width={77} height={77} alt="service4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
