import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import Solutions from "@/sections/Solutions";
import Transformation from "@/sections/Transformation";
import Industries from "@/sections/Industries";
import Stats from "@/sections/Stats";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Solutions />
      <Transformation />
      <Industries />
      <Stats />
      <Contact />
      <Footer />
    </main>
  );
}