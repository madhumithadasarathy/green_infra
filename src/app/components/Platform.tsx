"use client";

import { motion } from "framer-motion";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function Platform() {
  return (
    <section className="w-full bg-[#f5f6f4] py-32">
      <div className="w-full px-8 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* LEFT LARGE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full h-[520px] rounded-[32px] bg-zinc-300 overflow-hidden"
        >
          {/* IMAGE PLACEHOLDER */}
          <div className="w-full h-full flex items-center justify-center text-zinc-500 text-sm">
            Large Image Placeholder
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <div className="space-y-10">

          {/* Label */}
          <span className="inline-flex items-center px-4 py-1.5 text-xs font-medium bg-zinc-200 text-neutral-700 rounded-full">
            The Platform
          </span>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl font-semibold leading-tight"
          >
            Manage Infrastructure as One System
          </motion.h2>

          {/* Icon Row */}
          <div className="flex gap-6 text-neutral-600 text-lg">
            <span>▣</span>
            <span>◦</span>
            <span>↗</span>
          </div>

          {/* Sub Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-[32px] p-8 shadow-sm flex justify-between items-center"
          >
            <div className="max-w-sm">
              <h3 className="text-xl font-semibold mb-3">
                System Design
              </h3>

              <p className="text-neutral-600 mb-6">
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
                    style={{
                      fontSize: 16,
                      color: "#ffffff",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* SMALL IMAGE PLACEHOLDER */}
            <div className="relative w-44 h-32 rounded-2xl bg-zinc-300 overflow-hidden ml-8">
              <div className="w-full h-full flex items-center justify-center text-zinc-500 text-xs">
                Small Image
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}