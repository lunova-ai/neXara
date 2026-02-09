import { communityThemes } from "./homeData";

export default function Community() {
  return (
    <section id="gemeinschaft" className="mx-auto max-w-6xl px-5 py-12">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight">Region & Gemeinschaft</h2>
          <p className="mt-2 text-black/70">
            Am Land zählt Verlässlichkeit. Wir helfen, Förderungen, Vereinsarbeit und gemeinsame Projekte
            so zu organisieren, dass es im Alltag wirklich funktioniert.
          </p>
        </div>
        <span className="hidden rounded-full bg-[#2f5d3a]/10 px-3 py-1 text-xs font-semibold text-[#2f5d3a] md:inline">
          pragmatisch & bodenständig
        </span>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {communityThemes.map((t) => (
          <div
            key={t.title}
            className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-sm"
          >
            <h3 className="text-lg font-bold">{t.title}</h3>
            <p className="mt-2 text-sm text-black/70">{t.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-3xl border border-black/10 bg-[#f5f2ea] p-6">
        <p className="text-sm font-semibold">Warum das wichtig ist:</p>
        <p className="mt-1 text-sm text-black/70">
          Wenn Abläufe klar sind, hängt weniger an Einzelpersonen — und es bleibt mehr Zeit fürs Wesentliche.
        </p>
      </div>
    </section>
  );
}
