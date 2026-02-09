export default function Testimonial() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/70 p-6 shadow-sm">
      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#2f5d3a]/10 blur-2xl" />
      <p className="text-sm font-semibold">Stimme aus der Region</p>
      <p className="mt-3 text-sm text-black/70">
        „Jetzt läuft bei uns vieles viel einfacher. Es geht nicht um Technik –
        sondern darum, dass wir weniger Büro haben.“
      </p>
      <p className="mt-4 text-xs font-semibold text-black/60">— Platzhalter-Kund:in</p>
    </div>
  );
}
