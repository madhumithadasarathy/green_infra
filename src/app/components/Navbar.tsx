"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-6 left-1/2 -translate-x-1/2
        w-[92%] max-w-6xl
        z-50
        transition-all duration-500
        ${
          scrolled
            ? "bg-white/70 backdrop-blur-xl shadow-lg border border-white/30"
            : "bg-white/10 backdrop-blur-md border border-white/20"
        }
        rounded-2xl
        px-8 py-4
        flex justify-between items-center
      `}
    >
      {/* Left Links */}
      <nav className="hidden md:flex gap-8 text-sm font-medium text-white">
        <a href="#" className="hover:opacity-70 transition">
          Platform
        </a>
        <a href="#" className="hover:opacity-70 transition">
          How It Works
        </a>
        <a href="#" className="hover:opacity-70 transition">
          About
        </a>
      </nav>

      {/* Center Logo */}
      <div className="text-lg font-semibold text-white tracking-wide">
        Terrava
      </div>

      {/* CTA */}
      <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-neutral-200 transition">
        Explore Platform
      </button>
    </header>
  );
}