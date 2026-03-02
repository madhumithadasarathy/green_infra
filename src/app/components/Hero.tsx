export default function Hero() {
  return (
    <section className="relative mt-6 rounded-[40px] overflow-hidden">
      
      {/* Image Placeholder */}
      <div className="h-[540px] bg-gradient-to-br from-green-200 via-green-300 to-green-400 flex items-center justify-center">
        <span className="text-neutral-700">
          Hero Landscape Placeholder
        </span>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 flex items-center">
        <div className="px-16 max-w-2xl text-white">
          <h1 className="text-6xl font-semibold leading-tight">
            Green <br /> Infrastructure
          </h1>

          <p className="mt-6 text-white/90">
            A platform for planning, managing and scaling green infrastructure
            across complex systems.
          </p>
        </div>
      </div>

    </section>
  );
}