"use client";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center text-white">
      
      <nav className="hidden md:flex gap-8 text-sm font-light">
        <a href="#" className="hover:opacity-70 transition">
          Platform
        </a>
        <a href="#" className="hover:opacity-70 transition">
          How It Works
        </a>
        <a href="#" className="hover:opacity-70 transition">
          About
        </a>
      </nav>

      <div className="text-lg font-medium tracking-wide">
        Terrava
      </div>

      <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-neutral-200 transition">
        Explore Platform
      </button>

    </header>
  );
}