import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Tools from "./components/Tools";

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <Services />
      <Pricing />
      <Tools />
    </main>
  );
}
