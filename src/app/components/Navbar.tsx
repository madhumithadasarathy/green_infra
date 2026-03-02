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
        rounded-2xl
        px-8 py-4
        flex justify-between items-center
        ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-xl border border-black/10"
            : "bg-white/60 backdrop-blur-lg border border-white/40"
        }
      `}
    >
      {/* Left Links */}
      <nav className="hidden md:flex gap-8 text-sm font-medium text-black">
        <a href="#" className="hover:opacity-60 transition">
          Platform
        </a>
        <a href="#" className="hover:opacity-60 transition">
          How It Works
        </a>
        <a href="#" className="hover:opacity-60 transition">
          About
        </a>
      </nav>

      {/* Center Logo */}
      <div className="text-lg font-semibold text-black tracking-wide">
        Terrava
      </div>

      {/* CTA */}
      <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-neutral-800 transition">
        Explore Platform
      </button>
    </header>
  );
}