import HeroSection from "./components/HeroSection";
import Partner from "./components/Partner";

export default function Home() {
  return (
    <div className="max-w-[1450px] mx-auto">
      <HeroSection />
      <Partner />
    </div>
  );
}
