"use client";

import { motion } from "framer-motion";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="relative mt-6 rounded-[42px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

      {/* Background Image */}
      <div className="h-[650px] bg-[url('/hero.jpg')] bg-cover bg-center scale-105" />

      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />

      {/* Navbar */}


      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-white text-6xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] tracking-tight"
        >
          Green <br /> Infrastructure
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-8 text-white/90 max-w-2xl text-lg md:text-xl font-light"
        >
          A platform for planning, managing and scaling green infrastructure
          across complex systems.
        </motion.p>

      </div>

    </section>
  );
}