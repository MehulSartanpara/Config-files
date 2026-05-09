import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Apps from "@/components/Apps";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import VantaBackground from "@/components/VantaBackground";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />

      {/* Vanta NET — fixed behind all content */}
      <VantaBackground />

      {/* Dark scrim — dims Vanta so content stays readable */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0"
        style={{ zIndex: 0, background: "rgba(9,9,11,0.78)" }}
      />

      {/* Page content sits above the canvas */}
      <main className="relative" style={{ zIndex: 1 }}>
        <Navbar />
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Testimonials />
        <Apps />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
