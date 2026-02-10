import { steps } from "./homeData";
import Testimonial from "@/components/ui/Testimonial";

export default function Process() {
  return (
    <section id="ablauf" className="mx-auto max-w-6xl px-5 py-12">
      <h2 className="text-2xl font-extrabold tracking-tight">So läuft’s ab</h2>
      <p className="mt-2 text-black/70">Klarer Ablauf, keine Überraschungen.</p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.nr} className="rounded-3xl border border-black/10 bg-white/70 p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#2f5d3a] text-sm font-extrabold text-white">
                {s.nr}
              </span>
              <div>
                <p className="font-bold">{s.title}</p>
                <p className="text-sm text-black/70">{s.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Testimonial />
        <div className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-sm">
          <h3 className="text-lg font-bold">Warum MP-X?</h3>
          <ul className="mt-3 space-y-2 text-sm text-black/70">
            <li>• Hersteller-unabhängig (keine Produktverkäufe)</li>
            <li>• Verständliche Sprache, bodenständig</li>
            <li>• Fokus auf Datensouveränität & Sicherheit</li>
            <li>• Lösungen, die langfristig wartbar bleiben</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
