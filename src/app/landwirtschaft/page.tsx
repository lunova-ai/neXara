import Link from "next/link";

const offers = [
  {
    title: "Feld & Förderung ohne Zettelstress",
    who: "Ackerbau, Förderauflagen, Kontrollen",
    bullets: [
      "Einfache Feld-Dokumentation (Aussaat, Düngung, Pflanzenschutz, Ernte)",
      "Alles griffbereit für Kontrollen/Steuer/Förderstellen",
      "Klare Struktur statt Ordner/Excel-Mix",
    ],
    outcome: "Förder-Nachweise ohne Stress – und weniger Papierkrieg.",
  },
  {
    title: "Lieferfähig für Großkunden",
    who: "Kartoffeln, Mais, Getreide – Abnehmer, Lager, Handel",
    bullets: [
      "Übersicht: verfügbare Mengen, zugesagte Mengen, Liefertermine",
      "Chargen & Lieferdoku (einfach, nachvollziehbar)",
      "Vorlagen für Lieferscheine/Rechnungen (optional)",
    ],
    outcome: "Mehr Verlässlichkeit – weniger Excel-Chaos bei Lieferungen.",
  },
  {
    title: "Wald & Hackschnitzel im Griff",
    who: "Waldwirtschaft, Hackgut, Heizen, Maschinen teilen",
    bullets: [
      "Lieferübersicht: wer hat wann wieviel bekommen",
      "Maschinen teilen ohne Streit (wer hatte was wann)",
      "Monats-Abrechnung einfach & nachvollziehbar",
    ],
    outcome: "Ordnung bei Hackgut & Maschinennutzung – ohne Schmierzettel.",
  },
];

const modules = [
  { title: "Ab-Hof sichtbar & bestellbar", desc: "Google Maps, Öffnungszeiten, Mini-Webseite, Bestell-Setup (ohne Shop-Stress)." },
  { title: "Pacht & Flächen", desc: "Verträge, Laufzeiten, Erinnerungen, Zahlungsübersicht – alles an einem Ort." },
  { title: "Pferdehaltung", desc: "Einsteller, Beiträge, Termine (Tierarzt/Schmied), klare Kommunikation statt WhatsApp-Flut." },
  { title: "Wetter & Risiko", desc: "Schadensmappe, Nachweise für Versicherung/Förderung, „wenn’s kracht“ alles griffbereit." },
];

const packages = [
  { name: "Büro-Check", price: "Fixpreis", desc: "90 Minuten vor Ort/online + 3 Sofort-Verbesserungen." },
  { name: "Quick Win", price: "7 Tage", desc: "Eine konkrete Entlastung schnell umgesetzt (z.B. Doku, Abrechnung, Übersicht)." },
  { name: "Digitaler Plan", price: "transparent", desc: "Proof of Concept + Aufwand/Kosten klar – Entscheidung leicht." },
  { name: "Umsetzung", price: "individuell", desc: "Wenn’s passt: sauber bauen, testen, übergeben." },
  { name: "Betreuung", price: "optional", desc: "Quartals-Check, Support, kleine Anpassungen – damit’s bleibt." },
];

export default function LandwirtschaftPage() {
  return (
    <main className="min-h-screen bg-[#f5f2ea] text-[#1f2937]">
      {/* Top bar */}
      <header className="border-b border-black/5 bg-[#f5f2ea]/90">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link href="/" className="text-sm font-semibold hover:text-black/80">
            ← Zur Startseite
          </Link>
          <a
            href="#kontakt"
            className="rounded-xl bg-[#2f5d3a] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95"
          >
            Erstgespräch
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 py-10 md:py-14">
        <p className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-semibold">
          Landwirtschaft • Wald • Direktvermarktung
        </p>

        <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
          Digitale Entlastung für landwirtschaftliche Betriebe.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-black/70 md:text-lg">
          Nicht „Digitalisierung um jeden Preis“, sondern pragmatische Ordnung: weniger Zettel,
          weniger WhatsApp-Chaos, mehr Überblick – damit du dich auf Feld, Tiere und Familie konzentrieren kannst.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="#angebote"
            className="rounded-xl bg-[#2f5d3a] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
          >
            Angebote ansehen
          </a>
          <a
            href="#kontakt"
            className="rounded-xl border border-black/15 bg-white/70 px-5 py-3 text-sm font-semibold hover:bg-white"
          >
            Kostenloses Erstgespräch
          </a>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <MiniStat title="Ackerbau" desc="Doku & Förderung" />
          <MiniStat title="Wald" desc="Hackgut & Maschinen" />
          <MiniStat title="Ab-Hof" desc="Sichtbarkeit & Bestellen" />
        </div>
      </section>

      {/* Angebote */}
      <section id="angebote" className="border-y border-black/5 bg-white/40">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <h2 className="text-2xl font-extrabold tracking-tight">3 typische Einstiegsangebote</h2>
          <p className="mt-2 text-black/70">
            Wir starten mit dem, was am meisten nervt – und machen’s spürbar einfacher.
          </p>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {offers.map((o) => (
              <div key={o.title} className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-sm">
                <p className="text-xs font-semibold text-black/60">{o.who}</p>
                <h3 className="mt-2 text-lg font-bold">{o.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-black/70">
                  {o.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
                <div className="mt-5 rounded-2xl border border-black/10 bg-[#f5f2ea] p-4 text-sm text-black/70">
                  <span className="font-semibold text-black">Ergebnis:</span> {o.outcome}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-black/10 bg-[#f5f2ea] p-6">
            <p className="text-sm font-semibold">Wichtig:</p>
            <p className="mt-1 text-sm text-black/70">
              Wir verkaufen keine „eine Software für alles“. Wir schauen, was du schon nutzt (Excel/WhatsApp/Branchen-Tools)
              und bauen eine einfache Struktur drum herum, die wirklich hält.
            </p>
          </div>
        </div>
      </section>

      {/* Pakete */}
      <section className="mx-auto max-w-6xl px-5 py-12">
        <h2 className="text-2xl font-extrabold tracking-tight">So arbeiten wir (Pakete)</h2>
        <p className="mt-2 text-black/70">Fixe Schritte, klare Erwartung, keine Überraschungen.</p>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((p) => (
            <div key={p.name} className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-sm">
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="text-lg font-bold">{p.name}</h3>
                <span className="rounded-full bg-[#2f5d3a]/10 px-3 py-1 text-xs font-semibold text-[#2f5d3a]">
                  {p.price}
                </span>
              </div>
              <p className="mt-3 text-sm text-black/70">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Module */}
      <section className="border-t border-black/5 bg-white/40">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <h2 className="text-2xl font-extrabold tracking-tight">Module (je nach Betrieb)</h2>
          <p className="mt-2 text-black/70">
            Du brauchst nicht alles. Wir wählen nur das, was bei dir wirklich wirkt.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {modules.map((m) => (
              <div key={m.title} className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-sm">
                <h3 className="text-lg font-bold">{m.title}</h3>
                <p className="mt-2 text-sm text-black/70">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight">Kostenloses Erstgespräch</h2>
            <p className="mt-2 text-black/70">
              Sag mir kurz, was dich im Alltag nervt. Ich sage dir ehrlich, ob und wie wir helfen können.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="rounded-xl bg-[#2f5d3a] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
                href="mailto:hello@nexara.at"
              >
                E-Mail schreiben
              </a>
              <a
                className="rounded-xl border border-black/15 bg-white/70 px-5 py-3 text-sm font-semibold hover:bg-white"
                href="tel:+430000000000"
              >
                Anrufen
              </a>
            </div>

            <p className="mt-3 text-xs text-black/60">
              (Kontakt ist noch Platzhalter – ersetzen wir später mit deinen echten Daten.)
            </p>
          </div>

          <div className="rounded-3xl border border-black/10 bg-[#f5f2ea] p-6">
            <p className="text-sm font-semibold">Für den Start ideal:</p>
            <p className="mt-1 text-sm text-black/70">
              Büro-Check (90 Minuten) – danach weißt du glasklar, was wir zuerst vereinfachen.
            </p>

            <div className="mt-4 rounded-2xl border border-black/10 bg-white/70 p-4 text-sm text-black/70">
              <p className="font-semibold text-black">Bring mit:</p>
              <ul className="mt-2 space-y-1">
                <li>• 1–2 Beispiele (Angebot, Rechnung, Lieferschein)</li>
                <li>• kurz zeigen: wie läuft’s aktuell (Excel/WhatsApp/Ordner)</li>
                <li>• 3 Dinge, die dich am meisten nerven</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 text-xs text-black/60">
          <Link className="hover:text-black/80" href="/">← Zurück zur Startseite</Link>
        </div>
      </section>
    </main>
  );
}

function MiniStat({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/60 p-4">
      <p className="text-base font-extrabold tracking-tight">{title}</p>
      <p className="text-xs font-semibold text-black/60">{desc}</p>
    </div>
  );
}
