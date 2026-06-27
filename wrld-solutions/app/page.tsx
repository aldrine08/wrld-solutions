import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import Solutions from "@/sections/Solutions";
import Transformation from "@/sections/Transformation";
import Industries from "@/sections/Industries";
import Stats from "@/sections/Stats";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";
import Technologies from "@/sections/Technologies";
import Globe from "@/components/3d/Globe";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Globe />
      <Hero />
      <Services />
      <Solutions />
      <Transformation />
      <Industries />
      <Stats />
      <Technologies />
      <Contact />
      <Footer />
    </main>
  );
}