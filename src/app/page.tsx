import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "./components/About";
import Platform from "./components/Platform";
import Solutions from "./components/Solutions";
import Metrics from "./components/Metrics";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Platform />
      <Solutions />
      <Metrics />
      <Footer />
    </>
  );
}