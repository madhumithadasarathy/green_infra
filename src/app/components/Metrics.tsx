"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "CO2 Reduced", value: "2.4M", suffix: " Tons", color: "text-emerald-600" },
  { label: "Water Saved", value: "850M", suffix: " Liters", color: "text-blue-600" },
  { label: "Energy Generated", value: "1.2", suffix: " GW", color: "text-amber-600" },
  { label: "Protected Land", value: "45k", suffix: " Acres", color: "text-teal-600" },
];

export default function Metrics() {
  return (
    <section className="w-full bg-[#111827] py-32 text-white overflow-hidden relative">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -ml-32 -mb-32"></div>

      <div className="px-8 md:px-20 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="inline-flex items-center px-4 py-1.5 text-xs font-medium bg-emerald-500/10 text-emerald-400 rounded-full mb-6 border border-emerald-500/20">
            Real-world Impact
          </span>
          <h2 className="text-4xl md:text-6xl font-semibold mb-8 tracking-tight">
            Measurable results for <br /> a sustainable future
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Our platform provides real-time monitoring and reporting, ensuring every 
            green infrastructure project meets its environmental targets.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: false }}
              className="flex flex-col items-center text-center p-8 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <span className={`text-5xl md:text-6xl font-bold mb-4 ${stat.color}`}>
                {stat.value}
                <span className="text-2xl font-medium opacity-80">{stat.suffix}</span>
              </span>
              <span className="text-zinc-400 font-medium uppercase tracking-widest text-sm">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
