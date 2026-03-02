"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">

      {/* Background Image */}
      <div
        className="
          absolute inset-0
          bg-[url('/hero.jpg')]
          bg-cover
          bg-center
        "
      />

      {/* Dark Gradient Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 min-h-screen pt-28">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="
            text-white
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            xl:text-8xl
            font-semibold
            leading-[1]
            tracking-tight
          "
        >
          Green <br /> Infrastructure
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="
            mt-6
            text-white/90
            max-w-2xl
            text-base
            sm:text-lg
            md:text-xl
          "
        >
          A platform for planning, managing and scaling green infrastructure
          across complex systems.
        </motion.p>

      </div>
    </section>
  );
}