import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Features from "@/app/components/Features";

export default function Home() {
  return (
    <>
      {/* FULL WIDTH HERO */}
            <Navbar />
      <Hero />

      {/* Constrained Sections */}
      <main className="max-w-6xl mx-auto px-6">
        <Features />
      </main>
    </>
  );
}