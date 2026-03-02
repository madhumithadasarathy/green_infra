"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="w-full bg-[#f5f6f4] py-28">

      {/* FULL WIDTH CONTAINER */}
      <div className="w-full px-8 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-20">

        {/* LEFT SIDE */}
        <div className="space-y-12">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-neutral-500 mb-4">
              About Aazhira
            </p>

            <h2 className="text-5xl font-semibold leading-tight">
              Built for <span className="font-bold">Green</span> Infrastructure
            </h2>

            <p className="mt-8 text-neutral-600 text-lg leading-relaxed max-w-xl">
              Aazhira helps organizations plan, manage, and scale green
              infrastructure by bringing clarity and structure to complex,
              real-world systems.
            </p>
          </motion.div>

          {/* Two small images */}
          <div className="flex gap-8">
            <div className="relative w-40 h-40 rounded-3xl overflow-hidden">
              <Image
                src="/about-1.jpg"
                alt="Infrastructure 1"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative w-40 h-40 rounded-3xl overflow-hidden">
              <Image
                src="/about-2.jpg"
                alt="Infrastructure 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE CARDS */}
        <div className="space-y-8">

          <Card
            title="System-First Design"
            description="Designed around how infrastructure systems connect and operate."
            image="/about-3.jpg"
          />

          <HighlightCard
            title="Built for Scale"
            description="Support green systems across cities and regions without losing control."
            image="/about-4.jpg"
          />

          <Card
            title="Long-Term Focus"
            description="Built to support durable, resilient infrastructure over time."
            image="/about-5.jpg"
          />
        </div>

      </div>
    </section>
  );
}

function Card({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-[32px] p-8 shadow-sm flex justify-between items-center"
    >
      <div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-neutral-600 mb-6">{description}</p>
        <button className="text-sm font-medium underline">
          Learn More
        </button>
      </div>

      <div className="relative w-32 h-32 rounded-3xl overflow-hidden ml-8">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
    </motion.div>
  );
}

function HighlightCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-[#2f5f1e] text-white rounded-[32px] p-8 shadow-md flex justify-between items-center"
    >
      <div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-white/90 mb-6">{description}</p>
        <button className="text-sm font-medium underline">
          Learn More
        </button>
      </div>

      <div className="relative w-32 h-32 rounded-3xl overflow-hidden ml-8">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
    </motion.div>
  );
}