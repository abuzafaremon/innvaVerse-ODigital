import HeroSection from "./components/HeroSection";
import OurTeam from "./components/OurTeam";
import Partner from "./components/Partner";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="max-w-[1450px] mx-auto">
      <HeroSection />
      <Partner />
      <Services />
      <OurTeam />
    </div>
  );
}
