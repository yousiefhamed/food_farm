import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import WhyUs from "./components/WhyUs";

export default function Home() {
  return (
    <main className="w-full grid gap-14 grid-cols-1">
      <HeroSection />
      <Features />
      <About />
      <WhyUs />
      <Testimonials />
    </main>
  );
}
