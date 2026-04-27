"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const solutions = [
  {
    title: "Urban Greenery",
    description: "Integrating vertical forests and green roofs to regulate city temperatures.",
    image: "/solutions-1.png",
    color: "bg-emerald-50"
  },
  {
    title: "Renewable Energy",
    description: "Hybrid solar and wind installations optimized for local ecosystems.",
    image: "/solutions-2.png",
    color: "bg-blue-50"
  },
  {
    title: "Water Management",
    description: "Bio-filtration systems that recycle storm water into usable resources.",
    image: "/solutions-3.png",
    color: "bg-cyan-50"
  },
  {
    title: "Smart Waste",
    description: "AI-driven circular waste facilities that turn organic matter into energy.",
    image: "/solutions-4.png",
    color: "bg-teal-50"
  }
];

export default function Solutions() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % solutions.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + solutions.length) % solutions.length);
  };

  return (
    <section className="w-full bg-white py-32 overflow-hidden">
      <div className="px-8 md:px-20 mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center px-4 py-1.5 text-xs font-medium bg-zinc-100 text-[#2f5f1e] rounded-full mb-6">
              Our Solutions
            </span>
            <h2 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-zinc-900">
              Innovative systems for <br /> a resilient planet
            </h2>
          </div>
          
          <div className="flex gap-4 mb-2">
            <button 
              onClick={prevSlide}
              className="w-14 h-14 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeftIcon sx={{ fontSize: 28 }} />
            </button>
            <button 
              onClick={nextSlide}
              className="w-14 h-14 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRightIcon sx={{ fontSize: 28 }} />
            </button>
          </div>
        </div>
      </div>

      <div className="relative px-8 md:px-20">
        <motion.div 
          className="flex gap-8"
          animate={{ x: `-${currentIndex * (400 + 32)}px` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-[320px] md:w-[400px] rounded-[40px] p-8 ${solution.color} group cursor-pointer hover:shadow-2xl transition-all duration-500`}
            >
              <div className="relative w-full h-[280px] rounded-[32px] overflow-hidden mb-8">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <h3 className="text-2xl font-semibold text-zinc-900 mb-4">{solution.title}</h3>
              <p className="text-zinc-600 mb-8 leading-relaxed">
                {solution.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold underline underline-offset-4 group-hover:text-[#2f5f1e] transition-colors">
                  View Details
                </span>
                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-[#2f5f1e] transition-colors">
                  <ArrowOutwardIcon sx={{ fontSize: 20 }} />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
