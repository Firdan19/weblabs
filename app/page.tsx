import Hero from "@/components/sections/hero";
import AboutHighlights from "@/components/sections/about";
import Services from "@/components/sections/services";
import Portfolio from "@/components/sections/portfolio";
import Careers from "@/components/sections/careers";
import AboutHighlightsDark from "@/components/sections/about";
export default function Home() {
  return (
    <main>
      <Hero />
      <AboutHighlights />
      <Services />
      <Portfolio />
      <Careers />
    </main>
  );
}
