"use client";
import Header from "./Header";
import Hero from "./Hero";

const HeroSection = () => {
  return (
    <section className="bg-[#0C0B0A] w-full md:py-5 overflow-hidden">
      <Header />
      <Hero />
      <section className="py-10"></section>
      <div className="hidden md:block bg-[#F76B1C] blur-[900px] brightness-[.3] w-full min-h-[40vh] absolute top-0 right-0 left-0"></div>
    </section>
  );
};

export default HeroSection;
