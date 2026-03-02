import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "./components/About";
import Platform from "./components/Platform";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Platform />
    </>
  );
}