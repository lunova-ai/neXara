import Link from "next/link";

const offers = [
  {
    title: "Termin & Kundenübersicht (ohne Chaos)",
    who: "Dienstleistung, Salon, Beratung, kleine Teams",
    bullets: [
      "Termine & Kunden sauber organisiert (statt Zettel/WhatsApp)",
      "No-Show/Absage-Regeln klar kommunizieren (Vorlagen)",
      "Wiederkehrende Termine & Erinnerungen einfacher",
    ],
    outcome: "Weniger Hin-und-Her – und du hast den Kopf frei für Kund:innen.",
  },
  {
    title: "Nachrichten & Anfragen strukturieren",
    who: "WhatsApp, Instagram, E-Mail, Telefon",
    bullets: [
      "Einfache Regeln: Was kommt wohin – und wer antwortet",
      "Textbausteine für häufige Fragen (Preise, Zeiten, Anfahrt)",
      "Anfragen werden zu Terminen/Tasks statt „verloren im Chat“",
    ],
    outcome: "Du verpasst weniger Anfragen – und antwortest schneller.",
  },
  {
    title: "Verkauf nebenbei – sauber & sichtbar",
    who: "Produkte, Selbstgemachtes, Möbel, Handwerk, Gutscheine",
    bullets: [
      "Mini-Katalog/Bestellweg (ohne großen Shop-Stress)",
      "Übersicht: was lagernd ist, was bestellt wurde, was offen ist",
      "Rechnungen/Quittungen einfacher (Vorlagen + Ablage)",
    ],
    outcome: "Mehr Umsatz nebenbei – ohne dass es dich aufhält.",
  },
];

const modules = [
  { title: "Google Maps & Auffindbarkeit", desc: "„Niemand findet uns“: Profil, Öffnungszeiten, Bilder, Bewertungen, Anfahrtslink." },
  { title: "Mini-Webauftritt", desc: "Eine klare Seite: Angebot, Preise/Leistungen, Kontakt, Anfahrt, Öffnungszeiten." },
  { title: "Reservierungen & Kapazität", desc: "Einfaches System, damit Stoßzeiten planbar bleiben (auch fürs Team)." },
  { title: "Gutscheine & Aktionen", desc: "Vorlagen, Ablauf & Übersicht – damit’s nicht im Chaos endet." },
  { title: "Rechnung & Ordnung", desc: "Ablage, Nummernkreis, offene Posten – damit du jederzeit den Überblick hast." },
];

const packages = [
  { name: "Büro-Check", price: "Fixpreis", desc: "90 Minuten vor Ort/online + 3 Sofort-Verbesserungen." },
  { name: "Quick Win", price: "7 Tage", desc: "Eine konkrete Entlastung schnell umgesetzt (z.B. Anfrage-Flow, Termin-Setup, Mini-Katalog)." },
  { name: "Digitaler Plan", price: "transparent", desc: "Proof of Concept + Aufwand/Kosten klar – Entscheidung leicht." },
  { name: "Umsetzung", price: "individuell", desc: "Wenn’s passt: sauber bauen, testen, übergeben." },
  { name: "Betreuung", price: "optional", desc: "Quartals-Check, Support, kleine Anpassungen – damit’s bleibt." },
];

export default function DienstleistungPage() {
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
          Dienstleistung • Termine • Verkauf
        </p>

        <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
          Mehr Ruhe im Alltag – Termine, Anfragen und Verkauf im Griff.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-black/70 md:text-lg">
          Ob Salon, Gastbetrieb, Beratung oder kleines Studio: Wir bringen Struktur in Termine,
          Kommunikation und einfache Verkaufsprozesse – so, dass es im echten Alltag funktioniert
          (auch wenn WhatsApp/Excel im Spiel sind).
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
          <MiniStat title="Termine" desc="einfach planbar" />
          <MiniStat title="Anfragen" desc="nicht mehr verlieren" />
          <MiniStat title="Verkauf" desc="ohne Shop-Stress" />
        </div>
      </section>

      {/* Angebote */}
      <section id="angebote" className="border-y border-black/5 bg-white/40">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <h2 className="text-2xl font-extrabold tracking-tight">3 typische Einstiegsangebote</h2>
          <p className="mt-2 text-black/70">
            Wir starten dort, wo es am schnellsten Entlastung bringt.
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
              Ziel ist nicht „mehr Tools“. Ziel ist: weniger Reibung.
              Wir nehmen, was da ist, und machen es strukturiert & verlässlich.
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
              Sag kurz, was dich am meisten nervt (Terminchaos, Anfragen, Verkauf, Sichtbarkeit).
              Ich sage dir ehrlich, ob und wie wir helfen können.
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
              Büro-Check (90 Minuten) – danach ist glasklar, was wir zuerst vereinfachen.
            </p>

            <div className="mt-4 rounded-2xl border border-black/10 bg-white/70 p-4 text-sm text-black/70">
              <p className="font-semibold text-black">Bring mit:</p>
              <ul className="mt-2 space-y-1">
                <li>• 1–2 Beispiele (Anfragen/Termine/Verkauf/Quittungen)</li>
                <li>• kurz zeigen: wie läuft’s aktuell (WhatsApp/Excel/Notizen)</li>
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
