import Link from "next/link";

const industries = [
  { title: "Landwirtschaft", desc: "Dokumentation, Pacht & Ab-Hof", href: "/landwirtschaft" },
  { title: "Handwerk", desc: "Angebote, Termine & Rechnungen", href: "/handwerk" },
  { title: "Bau", desc: "Baustellen, Stundenzettel & Mahnungen", href: "/bau" },
  { title: "Dienstleistung", desc: "Kunden, Termine & WhatsApp-Ordnung", href: "/dienstleistung" },
  { title: "Waldwirtschaft", desc: "Hackgut, Maschinen teilen & Abrechnung", href: "/waldwirtschaft" },
  { title: "Direktvermarktung", desc: "Google Maps, Mini-Web & Bestellen", href: "/direktvermarktung" },
];

const steps = [
  { nr: "1", title: "Büro-Check", desc: "Vor Ort Analyse & 3 Sofort-Tipps." },
  { nr: "2", title: "Schnell-Lösung", desc: "Mini-Optimierung in 7 Tagen." },
  { nr: "3", title: "Digitaler Plan", desc: "Passende Lösung, einfach umgesetzt." },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f5f2ea] text-[#1f2937]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f5f2ea]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link href="/" className="flex items-baseline gap-2">
            <span className="text-xl font-extrabold tracking-tight">neXara</span>
            <span className="hidden text-sm text-black/60 sm:inline">Digital für Betriebe am Land</span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium sm:flex">
            <a href="#loesungen" className="hover:text-black/80">Lösungen</a>
            <a href="#branchen" className="hover:text-black/80">Branchen</a>
            <a href="#ablauf" className="hover:text-black/80">Ablauf</a>
            <a href="#kontakt" className="hover:text-black/80">Kontakt</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#kontakt"
              className="rounded-xl bg-[#2f5d3a] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95"
            >
              Betriebs-Check buchen
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* warm “wood” band */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#2f5d3a] to-transparent opacity-25" />
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-12 md:grid-cols-2 md:py-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-semibold">
              Regional • Verständlich • Unabhängig
            </p>

            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
              Weniger Büro.
              <span className="block text-[#2f5d3a]">Mehr Zeit fürs Wesentliche.</span>
            </h1>

            <p className="mt-4 text-base leading-relaxed text-black/70 md:text-lg">
              Für Handwerk, Landwirtschaft & kleine Unternehmen, die einfach arbeiten wollen –
              nicht kompliziert digitalisieren.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#kontakt"
                className="rounded-xl bg-[#2f5d3a] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
              >
                Betriebs-Check buchen
              </a>
              <a
                href="#branchen"
                className="rounded-xl border border-black/15 bg-white/70 px-5 py-3 text-sm font-semibold hover:bg-white"
              >
                Branchen ansehen
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <Stat title="90 Min." desc="Büro-Check" />
              <Stat title="7 Tage" desc="Schnell-Lösung" />
              <Stat title="planbar" desc="Fixe Pakete" />
            </div>
          </div>

          {/* Visual block (placeholder “photo” area) */}
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-3xl border border-black/10 bg-gradient-to-br from-white to-[#e8e1d2] shadow-sm" />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-black/10 bg-white/80 p-4 backdrop-blur">
              <p className="text-sm font-semibold">Beispiel-Nutzen</p>
              <p className="mt-1 text-sm text-black/70">
                Angebote schneller • weniger WhatsApp-Chaos • bessere Übersicht • Nachweise griffbereit
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Branchen */}
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
              className="group rounded-3xl border border-black/10 bg-white/70 p-5 shadow-sm transition hover:bg-white"
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

      {/* Lösungen */}
      <section id="loesungen" className="border-y border-black/5 bg-white/40">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <h2 className="text-2xl font-extrabold tracking-tight">
            Unsere Prozess-Beratung: einfach, stark, verlässlich.
          </h2>
          <p className="mt-2 text-black/70">
            Wir starten klein, liefern schnell Wirkung und bauen nur, was wirklich gebraucht wird.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Card title="Büro-Check" price="Fixpreis" bullets={["90 Minuten", "3 Sofort-Verbesserungen", "klare Prioritäten"]} />
            <Card title="Schnell-Lösung" price="7 Tage" bullets={["eine konkrete Optimierung", "Setup + Einschulung", "sofort spürbar"]} />
            <Card title="Digitaler Plan" price="transparent" bullets={["Proof of Concept", "Aufwand & Kosten klar", "Entscheidung leicht"]} />
          </div>

          <div className="mt-6 rounded-3xl border border-black/10 bg-[#f5f2ea] p-5">
            <p className="text-sm font-semibold">Zusatzmodule (optional)</p>
            <p className="mt-1 text-sm text-black/70">
              Wetter & Risiko • Google Maps „man findet uns nicht“ • Pacht & Flächen • Maschinen teilen • Ab-Hof Bestellen
            </p>
          </div>
        </div>
      </section>

      {/* Ablauf */}
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
            <h3 className="text-lg font-bold">Warum neXara?</h3>
            <ul className="mt-3 space-y-2 text-sm text-black/70">
              <li>• Hersteller-unabhängig (keine Produktverkäufe)</li>
              <li>• Verständliche Sprache, bodenständig</li>
              <li>• Fokus auf Datensouveränität & Sicherheit</li>
              <li>• Lösungen, die langfristig wartbar bleiben</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="border-t border-black/5 bg-white/40">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight">Kostenloses Erstgespräch</h2>
              <p className="mt-2 text-black/70">
                Erzähl kurz, was dich im Alltag nervt. Wir sagen dir ehrlich, ob und wie wir helfen können.
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
                (Platzhalter-Kontakt – ersetzen wir später mit deinen echten Daten.)
              </p>
            </div>

            <div className="rounded-3xl border border-black/10 bg-[#f5f2ea] p-6">
              <p className="text-sm font-semibold">Betriebs-Check (Fixpreis)</p>
              <p className="mt-1 text-sm text-black/70">
                90 Minuten, vor Ort oder online. Du bekommst 3 konkrete Verbesserungen, die sofort wirken.
              </p>
              <div className="mt-4 rounded-2xl border border-black/10 bg-white/70 p-4 text-sm text-black/70">
                <p className="font-semibold text-black">Was du mitbringen musst:</p>
                <ul className="mt-2 space-y-1">
                  <li>• ein Beispiel-Angebot/Rechnung (PDF oder Foto)</li>
                  <li>• kurz zeigen, wie du aktuell arbeitest (Excel/WhatsApp/Ordner)</li>
                  <li>• 3 Dinge, die dich am meisten nerven</li>
                </ul>
              </div>
            </div>
          </div>

          <footer className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-black/10 pt-6 text-xs text-black/60">
            <span>© {new Date().getFullYear()} neXara</span>
            <div className="flex gap-4">
              <a className="hover:text-black/80" href="#">Datenschutz</a>
              <a className="hover:text-black/80" href="#">Impressum</a>
            </div>
          </footer>
        </div>
      </section>
    </main>
  );
}

function Stat({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/60 p-4">
      <p className="text-lg font-extrabold tracking-tight">{title}</p>
      <p className="text-xs font-semibold text-black/60">{desc}</p>
    </div>
  );
}

function Card({ title, price, bullets }: { title: string; price: string; bullets: string[] }) {
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

function Testimonial() {
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
