import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <WhyUs />
      <Gallery />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
