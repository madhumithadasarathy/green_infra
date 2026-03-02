import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "./components/About";

export default function Home() {
  return (
    <>
      {/* FULL WIDTH HERO */}
            <Navbar />
      <Hero />
      <About />
    </>
  );
}