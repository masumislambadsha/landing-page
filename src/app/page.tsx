import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Tools from "./components/Tools";
import GettingStarted from "./components/GettingStarted";
import WhyChooseUs from "./components/WhyChooseUs";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <Services />
      <Pricing />
      <Tools />
      <GettingStarted />
      <WhyChooseUs />
      <Reviews />
      <FAQ />
    </main>
  );
}
