export default function Stat({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/60 p-4">
      <p className="text-lg font-extrabold tracking-tight">{title}</p>
      <p className="text-xs font-semibold text-black/60">{desc}</p>
    </div>
  );
}
