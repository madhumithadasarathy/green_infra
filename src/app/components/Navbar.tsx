export default function Navbar() {
  return (
    <header className="flex items-center justify-between py-6">
      <div className="font-semibold text-lg">
        Terrava
      </div>

      <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-600">
        <a href="#">Platform</a>
        <a href="#">How It Works</a>
        <a href="#">About</a>
      </nav>

      <button className="bg-black text-white px-4 py-2 rounded-full text-sm">
        Explore Platform
      </button>
    </header>
  );
}