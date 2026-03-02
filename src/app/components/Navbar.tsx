"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

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
        flex items-center justify-between
        ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-xl border border-black/10"
            : "bg-white/60 backdrop-blur-lg border border-white/40"
        }
      `}
    >
      {/* LEFT NAV */}
      <nav className="hidden md:flex gap-10 text-sm font-bold text-black">
        <a href="#" className="hover:text-green-700 transition">
          Platform
        </a>
        <a href="#" className="hover:text-green-700 transition">
          How It Works
        </a>
        <a href="#" className="hover:text-green-700 transition">
          About
        </a>
      </nav>

      {/* CENTER BRAND */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3">
        <Image
          src="/logo.svg"
          alt="Aazhira Logo"
          width={28}
          height={28}
          priority
        />
        <span className="text-lg font-semibold tracking-wide text-black">
          Aazhi
        </span>
      </div>

      {/* RIGHT CTA */}
      <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-green-800 transition">
        Explore Platform
      </button>
    </header>
  );
}