import Link from "next/link";
import { industries } from "./homeData";

export default function Industries() {
  return (
    <section id="branchen" className="mx-auto max-w-6xl px-5 py-12">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight">Für wen wir arbeiten</h2>
          <p className="mt-2 text-black/70">
            Kleine Betriebe, die pragmatische Entlastung wollen – ohne IT-Blabla.
          </p>
        </div>
        <span className="hidden rounded-full bg-[#2f5d3a]/10 px-3 py-1 text-xs font-semibold text-[#2f5d3a] md:inline">
          Platzhalter-Unterseiten
        </span>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((c) => (
          <Link
            key={c.title}
            href={c.href}
            className="group rounded-3xl border border-black/10 bg-white/70 p-5 shadow-sm transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2f5d3a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5f2ea]"
            aria-label={`${c.title} ansehen`}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-bold">{c.title}</h3>
                <p className="mt-1 text-sm text-black/70">{c.desc}</p>
              </div>
              <span className="rounded-full border border-black/10 bg-[#f5f2ea] px-3 py-1 text-xs font-semibold text-black/70 group-hover:bg-white">
                ansehen →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
