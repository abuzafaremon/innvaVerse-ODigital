import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import OurTeam from "./components/OurTeam";
import Partner from "./components/Partner";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <div className="max-w-[1450px] mx-auto">
      <HeroSection />
      <Partner />
      <Services />
      <OurTeam />
      <Testimonial />
      <Pricing />
      <Footer />
    </div>
  );
}
