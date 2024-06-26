import Features from "./components/Features";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="w-full grid gap-14 grid-cols-1">
      <HeroSection />
      <Features />
    </main>
  );
}
