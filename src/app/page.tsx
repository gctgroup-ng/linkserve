import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Solutions } from "@/components/sections/solutions";
import { Mvno } from "@/components/sections/mvno";
import { Why } from "@/components/sections/why";
import { Cta } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main" className="overflow-x-hidden">
        <Hero />
        <About />
        <Solutions />
        <Mvno />
        <Why />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
