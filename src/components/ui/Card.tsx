export default function Card({ title, price, bullets }: { title: string; price: string; bullets: string[] }) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-sm">
      <div className="flex items-baseline justify-between gap-2">
        <h3 className="text-lg font-bold">{title}</h3>
        <span className="rounded-full bg-[#2f5d3a]/10 px-3 py-1 text-xs font-semibold text-[#2f5d3a]">
          {price}
        </span>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-black/70">
        {bullets.map((b) => (
          <li key={b}>• {b}</li>
        ))}
      </ul>
    </div>
  );
}
