"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Platform", href: "#" },
    { name: "How It Works", href: "#" },
    { name: "About", href: "#" },
  ];

  return (
    <>
      <header
        className={`
          fixed top-6 left-1/2 -translate-x-1/2
          w-[92%] max-w-6xl
          z-50
          transition-all duration-500
          rounded-2xl
          px-6 md:px-8 py-4
          flex items-center justify-between
          ${
            scrolled || isMenuOpen
              ? "bg-white/90 backdrop-blur-xl shadow-xl border border-black/10"
              : "bg-white/60 backdrop-blur-lg border border-white/40"
          }
        `}
      >
        {/* MOBILE MENU BUTTON */}
        <button 
          className="md:hidden text-black hover:text-green-700 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        {/* LEFT NAV (DESKTOP) */}
        <nav className="hidden md:flex gap-10 text-sm font-bold text-black">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-green-700 transition">
              {link.name}
            </a>
          ))}
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
        <button className="bg-black text-white px-5 py-2 rounded-full text-xs md:text-sm font-medium hover:bg-green-800 transition">
          Explore Platform
        </button>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-28 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl z-40 md:hidden"
          >
            <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-black/5">
              <nav className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-2xl font-semibold text-black hover:text-green-700 transition-colors border-b border-black/5 pb-4"
                  >
                    {link.name}
                  </motion.a>
                ))}
                <motion.button 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-4 w-full bg-black text-white py-4 rounded-2xl font-semibold hover:bg-green-800 transition"
                >
                  Start a Project
                </motion.button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}