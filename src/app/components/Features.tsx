export default function Features() {
  return (
    <section className="mt-24 grid md:grid-cols-2 gap-16">
      
      <div>
        <h2 className="text-3xl font-semibold">
          Built for Green Infrastructure
        </h2>

        <p className="mt-4 text-neutral-600">
          Plan, manage and scale infrastructure systems with clarity.
        </p>
      </div>

      <div className="grid gap-6">
        <Card title="System-First Design" />
        <Card title="Built for Scale" highlight />
        <Card title="Long-Term Focus" />
      </div>

    </section>
  );
}

function Card({ title, highlight = false }: { title: string; highlight?: boolean }) {
  return (
    <div
      className={`rounded-3xl p-6 shadow-sm ${
        highlight
          ? "bg-green-900 text-white"
          : "bg-white"
      }`}
    >
      <div className="h-36 bg-green-100 rounded-xl mb-4 flex items-center justify-center">
        Image Placeholder
      </div>

      <h3 className="font-medium text-lg">{title}</h3>

      <button className="mt-4 text-sm underline">
        Learn More
      </button>
    </div>
  );
}