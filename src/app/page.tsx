import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6">
      <Navbar />
      <Hero />
      <Features />
    </main>
  );
}