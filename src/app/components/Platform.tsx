"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function Platform() {
  return (
    <section className="w-full bg-[#f5f6f4] min-h-screen flex items-center py-20">
      <div className="w-full px-8 md:px-20 grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-24 items-center">

        {/* LEFT LARGE IMAGE (Reduced Width) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative w-full h-[85vh] rounded-[40px] overflow-hidden"
        >
          <Image
            src="/platform1.jpg"
            alt="Platform Overview"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <div className="space-y-14">

          {/* Label */}
          <span className="inline-flex items-center px-4 py-1.5 text-xs font-medium bg-zinc-200 text-neutral-700 rounded-full">
            The Platform
          </span>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold leading-tight"
          >
            Manage Infrastructure as One System
          </motion.h2>

          {/* Icon Row */}
          <div className="flex gap-6 text-neutral-600 text-lg">
            <span>▣</span>
            <span>◦</span>
            <span>↗</span>
          </div>

          {/* System Design Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-14 items-start"
          >
            {/* Text */}
            <div className="max-w-md">
              <h3 className="text-xl font-semibold mb-4">
                System Design
              </h3>

              <p className="text-neutral-600 mb-6 leading-relaxed">
                Design infrastructure as a connected system,
                bringing structure to assets, locations,
                and operations across complex environments.
              </p>

              <div className="flex items-center gap-3">
                <span className="text-sm font-medium underline">
                  Learn More
                </span>

                <div className="w-8 h-8 flex items-center justify-center rounded-md bg-black">
                  <ArrowOutwardIcon
                    sx={{ fontSize: 16, color: "#ffffff" }}
                  />
                </div>
              </div>
            </div>

            {/* SMALL IMAGE (Increased Height) */}
            <div className="relative w-full md:w-80 h-96 rounded-[28px] overflow-hidden">
              <Image
                src="/platform2.jpg"
                alt="System Design"
                fill
                className="object-cover"
              />
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}