import { FaAngleRight } from "react-icons/fa";
import { BsPlayFill } from "react-icons/bs";
import Image from "next/image";
import heroRight from "../../public/assets/images/hero/hero-right.png";
import heroRightSm from "../../public/assets/images/hero/hero-right-sm-device.png";
import heroMiddle from "../../public/assets/images/hero/hero-middle.png";
const Hero = () => {
  return (
    <section className="px-2 py-10 relative z-20 max-w-[1250px] mx-auto lg:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white md:leading[75px]">
              Best Solution For Your
              <span
                className="text-blue-600 inline-block px-3 h-14 md:h-[85px]"
                style={{
                  backgroundImage: 'url("/assets/images/hero/businessBG.png")',
                  backgroundSize: "cover",
                  backgroundPosition: "top center",
                }}
              >
                Business
              </span>
              Startup
            </h1>
            <p className="text-lg font-semibold text-white text-opacity-75 mt-4 md:mt-6">
              Pellentesque non pretium sem. Sed sit amet diam vitae tortor
              mattis tincidunt et at neque.
            </p>
            <div className="mt-5 md:mt-9 flex items-center justify-center md:justify-start gap-3 md:gap-7">
              <button className="bg-gradient-to-br from-[#4643d3bf] to-[#0500ff] h-9 md:h-14 flex items-center gap-5 pr-1 pl-3 rounded-lg">
                <span className="text-white font-bold">Get Started</span>
                <div className="w-6 md:w-11 h-6 md:h-11 rounded-full bg-white flex items-center justify-center">
                  <FaAngleRight className="text-xl text-[#0500ff]" />
                </div>
              </button>
              <button className="bg-gradient-to-br from-[#FAD961] to-[#F76B1C] rounded-lg h-9 md:h-14 flex items-center justify-center w-9 md:w-14">
                <BsPlayFill className="text-2xl text-white" />
              </button>
            </div>
          </div>
          <div className="w-full relative">
            <Image
              className="hidden lg:block"
              src={heroRight}
              width={737}
              height={400}
              alt="image"
              priority
            />
            <Image
              className="lg:hidden"
              src={heroRightSm}
              width={737}
              height={400}
              alt="image"
              priority
            />
            <div className="w-[180px] lg:w-[385px] absolute lg:-left-1/4 lg:-bottom-1/4 hidden lg:block">
              <Image className="w-full" src={heroMiddle} alt="image" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
