"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const features = [
  {
    id: 0,
    title: "System-First Design",
    description:
      "Designed around how infrastructure systems connect and operate.",
    mainText:
      "Aazhira structures infrastructure ecosystems around system intelligence and connectivity.",
    images: ["/about-1.jpg", "/about-2.jpg"],
    cardImage: "/about-3.jpg",
  },
  {
    id: 1,
    title: "Built for Scale",
    description:
      "Support green systems across cities and regions without losing control.",
    mainText:
      "Scale green infrastructure confidently across cities and regions with unified oversight.",
    images: ["/about-3.jpg", "/about-4.jpg"],
    cardImage: "/about-4.jpg",
  },
  {
    id: 2,
    title: "Long-Term Focus",
    description:
      "Built to support durable, resilient infrastructure over time.",
    mainText:
      "Engineered for longevity and resilience in evolving environmental landscapes.",
    images: ["/about-5.jpg", "/about-6.jpg"],
    cardImage: "/about-5.jpg",
  },
];

export default function About() {
  const [active, setActive] = useState(0);
  const current = features[active];

  return (
    <section className="w-full bg-[#f5f6f4] py-28">
      <div className="w-full px-8 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-20">

        {/* LEFT SIDE */}
        <div className="space-y-10">

          <motion.div
            key={active}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-sm text-neutral-500 mb-4">
              About Aazhira
            </p>

            <h2 className="text-5xl font-semibold leading-tight">
              {current.title}
            </h2>

            <p className="mt-6 text-neutral-600 text-lg leading-relaxed max-w-xl">
              {current.mainText}
            </p>
          </motion.div>

          {/* Bigger aligned images */}
          <div className="flex gap-10 mt-4">
            {current.images.map((img) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="relative w-56 h-56 md:w-64 md:h-64 rounded-[28px] overflow-hidden shadow-lg"
              >
                <Image
                  src={img}
                  alt="Infrastructure"
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE CARDS */}
        <div className="space-y-8 -mt-10">

          {features.map((feature, index) => {
            const isActive = active === index;

            return (
              <motion.div
                key={feature.id}
                whileHover={{ y: -4 }}
                onClick={() => setActive(index)}
                className={`
                  cursor-pointer
                  rounded-[32px]
                  p-8
                  flex justify-between items-center
                  transition-all duration-300
                  ${
                    isActive
                      ? "bg-[#2f5f1e] text-white shadow-xl"
                      : "bg-white shadow-sm"
                  }
                `}
              >
                {/* TEXT */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>

                  <p
                    className={`mb-6 ${
                      isActive ? "text-white/90" : "text-neutral-600"
                    }`}
                  >
                    {feature.description}
                  </p>

                  {/* Learn More with MUI icon */}
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium underline">
                      Learn More
                    </span>

                    <div
                      className={`w-8 h-8 flex items-center justify-center rounded-md ${
                        isActive ? "bg-white" : "bg-black"
                      }`}
                    >
                      <ArrowOutwardIcon
                        style={{
                          fontSize: 16,
                          color: isActive ? "#2f5f1e" : "#ffffff",
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* CARD IMAGE */}
                <div className="relative w-28 h-28 rounded-2xl overflow-hidden ml-8">
                  <Image
                    src={feature.cardImage}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}