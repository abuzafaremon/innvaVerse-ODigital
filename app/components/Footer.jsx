import Image from "next/image";
import React from "react";
import { BsArrowRight, BsEnvelopeOpen } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <section className="px-2 py-10 mx-auto xl:px-0 bg-white">
      <div className="max-w-[1250px] mx-auto">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row flex-wrap gap-5 justify-center sm:justify-between py-8">
            <div className="flex flex-col gap-7 items-center sm:items-start">
              <Image
                src="/assets/images/logo/LogoOD2.png"
                width={180}
                height={42}
                alt="Logo"
              />
              <div className="flex items-center">
                <input
                  type="email"
                  placeholder="Enter Email"
                  id="email"
                  className="border-none outline-none bg-[#F7F6FC] py-3.5 px-4 placeholder:text-[#777] placeholder:font-bold placeholder:text-base w-[225px] h-[56px]"
                />
                <div className="bg-[#F4DCDC] flex items-center justify-center w-[60px] h-[56px]">
                  <BsArrowRight className="text-[#F76B1C] text-2xl" />
                </div>
              </div>
              <strong className="text-lg text-[#222] font-bold">
                Subscribe Our Weekly Blog
              </strong>
            </div>
            <div className="text-[#222] text-center sm:text-left">
              <h2 className="text-2xl font-bold mb-7">Company</h2>
              <div className="flex flex-col gap-5">
                <a href="#" className="font-bold hover:text-[#F88D31]">
                  About Us
                </a>
                <a href="#" className="font-bold hover:text-[#F88D31]">
                  Services
                </a>
                <a href="#" className="font-bold hover:text-[#F88D31]">
                  Blog
                </a>
                <a href="#" className="font-bold hover:text-[#F88D31]">
                  Features
                </a>
              </div>
            </div>
            <div className="text-[#222] text-center sm:text-left">
              <h2 className="text-2xl font-bold mb-7">Support </h2>
              <div className="flex flex-col gap-5">
                <a href="#" className="font-bold hover:text-[#F88D31]">
                  Help Center
                </a>
                <a href="#" className="font-bold hover:text-[#F88D31]">
                  Terms & privacy
                </a>
                <a href="#" className="font-bold hover:text-[#F88D31]">
                  Feedback
                </a>
                <a href="#" className="font-bold hover:text-[#F88D31]">
                  Affiliate
                </a>
              </div>
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              <div className="flex flex-col gap-5">
                <p className="text-[#222]">
                  Sed uterspis unde omnis iste lano natus error voluem
                </p>
                <div className="flex gap-2.5 items-center justify-center sm:justify-start">
                  <HiOutlineLocationMarker className="text-2xl text-[#F88D31]" />
                  <span className="text-[#222] font-bold">
                    255 Main street, New york
                  </span>
                </div>
                <div className="flex gap-2.5 items-center justify-center sm:justify-start">
                  <BsEnvelopeOpen className="text-2xl text-[#F88D31]" />
                  <span className="text-[#222] font-bold">
                    support@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-t-[#E8C1C1] py-5 flex flex-col sm:flex-row gap-7 items-center justify-between">
            <p className="text-[#222] text-lg font-bold">
              &copy; 2022 | All rights Reserved
            </p>
            <div className="flex items-center gap-7">
              <a href="#">
                <FaFacebookF className="text-2xl hover:text-[#F88D31]" />
              </a>
              <a href="#">
                <FaTwitter className="text-2xl hover:text-[#F88D31]" />
              </a>
              <a href="#">
                <FaInstagram className="text-2xl hover:text-[#F88D31]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
