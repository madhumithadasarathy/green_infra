"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="w-full bg-[#f5f6f4] py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div className="space-y-10">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-neutral-500 mb-4">
              About Aazhira
            </p>

            <h2 className="text-4xl font-semibold leading-tight">
              Built for <span className="font-bold">Green</span> Infrastructure
            </h2>

            <p className="mt-6 text-neutral-600 leading-relaxed">
              Aazhira helps organizations plan, manage, and scale green
              infrastructure by bringing clarity and structure to complex,
              real-world systems.
            </p>
          </motion.div>

          {/* Two small images */}
          <div className="flex gap-6">
            <div className="relative w-32 h-32 rounded-2xl overflow-hidden">
              <Image
                src="/about-1.jpg"
                alt="Infrastructure 1"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative w-32 h-32 rounded-2xl overflow-hidden">
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
        <div className="space-y-6">

          {/* Card 1 */}
          <Card
            title="System-First Design"
            description="Designed around how infrastructure systems connect and operate."
            image="/about-3.jpg"
          />

          {/* Highlight Card */}
          <HighlightCard
            title="Built for Scale"
            description="Support green systems across cities and regions without losing control."
            image="/about-4.jpg"
          />

          {/* Card 3 */}
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-3xl p-6 shadow-sm flex justify-between items-center"
    >
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-neutral-600 mb-4">{description}</p>
        <button className="text-sm font-medium underline">
          Learn More
        </button>
      </div>

      <div className="relative w-24 h-24 rounded-2xl overflow-hidden ml-6">
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-[#2f5f1e] text-white rounded-3xl p-6 shadow-md flex justify-between items-center"
    >
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-white/90 mb-4">{description}</p>
        <button className="text-sm font-medium underline">
          Learn More
        </button>
      </div>

      <div className="relative w-24 h-24 rounded-2xl overflow-hidden ml-6">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
    </motion.div>
  );
}