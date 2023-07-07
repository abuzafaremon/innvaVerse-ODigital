import React from "react";
import { FaCheck } from "react-icons/fa";

const Pricing = () => {
  const basicPlan = {
    title: "Basic",
    price: "Free",
    options: [
      "Fusce luctus odio ac nibh",
      "luctus, in porttitor theo lacus",
      "Bring to the table win-win",
      "One of the main benefits",
      "Main benefits of using",
    ],
  };
  const standardPlan = {
    title: "Standard",
    price: "$39/",
    options: [
      "Quisque placerat vitae lacus",
      "luctus, in porttitor theo lacus",
      "Bring to the table win-win",
      "Main benefits of using",
      "Fusce luctus odio ac nibh",
    ],
  };
  const premiumPlan = {
    title: "Premium",
    price: "$50/",
    options: [
      "Bring to the table win-win",
      "One of the main benefits",
      "Main benefits of using",
      "Fusce luctus odio ac nibh",
      "luctus, in porttitor theo lacus",
    ],
  };

  return (
    <section className="px-2 py-10 xl:px-0 bg-[#1F1C1C]">
      <div className="max-w-[1250px] mx-auto">
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-3 lg:gap-5">
            <h2 className="text-2xl lg:text-5xl text-white font-bold">
              Choose Pricing Plan
            </h2>
            <div className="w-11 lg:w-[70px] h-1 lg:h-1.5 rounded-full bg-[#ff873e]"></div>
          </div>
          <div className="py-7 md:py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
            {/* basic */}
            <div className="bg-[#2E2727] rounded-2xl px-7 md:px-8 py-9 md:py-10 w-full max-w-[337px] mx-auto sm:max-w-full">
              <h2 className="text-[#F9B047] text-3xl md:text-4xl font-bold">
                {basicPlan.title}
              </h2>
              <div className="py-4 md:py-5 flex flex-col gap-3">
                {basicPlan?.options.map((plan, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-5 md:gap-6 py-1 px-3"
                  >
                    <FaCheck className="text-[#F88129] " />
                    <span className="text-[#777777] md:text-lg">{plan}</span>
                  </div>
                ))}
              </div>
              <h2 className="text-[42px] md:text-5xl text-white font-bold leading-[50px] md:leading-[56px]">
                {basicPlan?.price}
              </h2>
              <a
                href="#"
                className="block bg-gradient-to-br from-[#FAD961] to-[#F76B1C] rounded-lg py-4 md:py-[18px] text-sm md:text-base text-white font-bold text-center mt-7"
              >
                Start Free Trial
              </a>
            </div>
            {/* standard */}
            <div className="bg-[#2E2727] rounded-2xl px-7 md:px-8 py-9 md:py-10 w-full max-w-[337px] mx-auto sm:max-w-full">
              <h2 className="text-[#4643D3] text-3xl md:text-4xl font-bold">
                {standardPlan?.title}
              </h2>
              <div className="py-4 md:py-5 flex flex-col gap-3">
                {standardPlan?.options.map((plan, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-5 md:gap-6 py-1 px-3"
                  >
                    <FaCheck className="text-[#1914F8] " />
                    <span className="text-[#777777] md:text-lg">{plan}</span>
                  </div>
                ))}
              </div>
              <h2 className="text-[42px] md:text-5xl text-white font-bold leading-[50px] md:leading-[56px]">
                {standardPlan?.price}
                <span className="text-3xl">month</span>
              </h2>
              <a
                href="#"
                className="block bg-gradient-to-br from-[#4643D3] to-[#0500FF] rounded-lg py-4 md:py-[18px] text-sm md:text-base text-white font-bold text-center mt-7"
              >
                Start Free Trial
              </a>
            </div>
            {/* premium */}
            <div className="bg-[#2E2727] rounded-2xl px-7 md:px-8 py-9 md:py-10 w-full max-w-[337px] mx-auto sm:max-w-full">
              <h2 className="text-[#F042A2] text-3xl md:text-4xl font-bold">
                {premiumPlan?.title}
              </h2>
              <div className="py-4 md:py-5 flex flex-col gap-3">
                {premiumPlan?.options.map((plan, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-5 md:gap-6 py-1 px-3"
                  >
                    <FaCheck className="text-[#FD4AAD] " />
                    <span className="text-[#777777] md:text-lg">{plan}</span>
                  </div>
                ))}
              </div>
              <h2 className="text-[42px] md:text-5xl text-white font-bold leading-[50px] md:leading-[56px]">
                {premiumPlan?.price}
                <span className="text-3xl">month</span>
              </h2>
              <a
                href="#"
                className="block bg-gradient-to-br from-[#FB6CBB] to-[#FF0C92] rounded-lg py-4 md:py-[18px] text-sm md:text-base text-white font-bold text-center mt-7"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
