import React, { useState } from "react";
import Image from "next/image";
import { CgClose, CgMenuRight } from "react-icons/cg";
const Header = () => {
  const [isNavShow, setIsNavShow] = useState(false);
  const navItems = ["Home", "About", "Service", "Team", "Contact"];
  return (
    <header className="bg-black px-2 lg:px-5 py-4 rounded w-full max-w-[1250px] mx-auto relative z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="w-24 h-6 md:w-52 md:h-14 relative">
            <a href="#">
              <Image
                src="/assets/images/logo/LogoOD.png"
                alt="O-Digital"
                fill
              />
            </a>
          </div>
          <nav className="relative">
            <ul
              className={`flex flex-col absolute md:static top-full md:flex-row items-center gap-3 md:gap-10 bg-black py-5 px-10 md:p-0 rounded-lg text-white transition-all ${
                isNavShow ? "right-0 transition-all" : "-right-[250px]"
              }`}
            >
              {navItems.map((item, i) => (
                <li key={i}>
                  <a className="font-semibold text-xl" href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setIsNavShow(!isNavShow)}
              className="md:hidden bg-gradient-to-br from-[#FAD961] to-[#F76B1C] p-1 outline-none rounded"
            >
              {isNavShow ? (
                <CgClose className="text-3xl text-white" />
              ) : (
                <CgMenuRight className="text-3xl text-white" />
              )}
            </button>
          </nav>
          <div className="hidden lg:block">
            <button className="py-3 px-5 min-w-max bg-gradient-to-br from-[#FAD961] to-[#F76B1C] text-lg font-semibold text-[#222222] rounded-lg">
              Get A Quote
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
