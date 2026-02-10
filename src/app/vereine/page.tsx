import Link from "next/link";

const offers = [
  {
    title: "Mitglieder & Beiträge ohne Zettelwirtschaft",
    who: "Mitgliederlisten, Beiträge, Rollen, Ein-/Austritte",
    bullets: [
      "Mitglieder sauber verwalten (Kontakt, Status, Rollen)",
      "Beitragsübersicht: bezahlt / offen / Erinnerung",
      "Einfacher Ablauf statt Excel + WhatsApp + Zettel",
    ],
    outcome: "Mehr Überblick – und weniger Nachlaufen wegen Beiträgen.",
  },
  {
    title: "Veranstaltungen planbar organisieren",
    who: "Fest, Turnier, Ausflug, JHV, Sammelaktion",
    bullets: [
      "Aufgabenliste & Zuständigkeiten (wer macht was bis wann?)",
      "Helferlisten/Schichten übersichtlich",
      "Kommunikation strukturiert: Infos gehen nicht verloren",
    ],
    outcome: "Weniger Chaos vor dem Termin – und alle wissen Bescheid.",
  },
  {
    title: "Kassa & Nachweise sauber führen",
    who: "Kassabuch, Belege, Förderungen, Prüfungen",
    bullets: [
      "Belege und Rechnungen sauber gesammelt & auffindbar",
      "Kassabuch/Übersicht nachvollziehbar (einfach, nicht bürokratisch)",
      "Ordnung für Förderungen, Sponsoren und interne Kontrolle",
    ],
    outcome: "Sicherer Umgang mit Geld – und Ruhe bei Rückfragen.",
  },
];

const modules = [
  { title: "Mitgliederverwaltung", desc: "Rollen, Listen, Beiträge, Kontakt – sauber & verständlich." },
  { title: "Event-Organisation", desc: "Aufgaben, Helfer, Schichten, Materiallisten – alles an einem Ort." },
  { title: "Kommunikation", desc: "Weniger WhatsApp-Chaos: klare Kanäle & Textbausteine." },
  { title: "Dokumentenmappe", desc: "Protokolle, Statuten, Genehmigungen, Versicherungen – schnell gefunden." },
  { title: "Sponsoren & Förderungen", desc: "Unterlagen, Fristen, Nachweise – damit nichts liegen bleibt." },
  { title: "Gemeinschaftsprojekte", desc: "Teilen, tauschen, helfen: Regeln & Abläufe transparent." },
];

const packages = [
  { name: "Vereins-Check", price: "Fixpreis", desc: "90 Minuten + 3 Sofort-Verbesserungen (Ablauf, Kassa, Kommunikation)." },
  { name: "Quick Win", price: "7 Tage", desc: "Eine konkrete Entlastung (Mitglieder/Beiträge oder Event-Setup) umgesetzt." },
  { name: "Digitaler Plan", price: "transparent", desc: "Proof of Concept + klarer Aufwand – damit alle zustimmen können." },
  { name: "Umsetzung", price: "individuell", desc: "Wir setzen es sauber um, schulen kurz, und es funktioniert." },
  { name: "Betreuung", price: "optional", desc: "Saison- oder Jahres-Check, Support, kleine Anpassungen." },
];

export default function VereinePage() {
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
          Vereine • Ehrenamt • Gemeinschaft
        </p>

        <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
          Vereinsarbeit leichter machen – ohne Bürokratie.
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-black/70 md:text-lg">
          Ob Feuerwehr, Musikverein, Eisstock, Jagd, Fischerei oder Sport:
          Wir bringen Ordnung in Mitglieder, Beiträge, Veranstaltungen und Dokumente –
          so einfach, dass es im Ehrenamt wirklich passt.
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
          <MiniStat title="Mitglieder" desc="Beiträge im Blick" />
          <MiniStat title="Events" desc="Helfer & Aufgaben" />
          <MiniStat title="Kassa" desc="Belege sauber" />
        </div>
      </section>

      {/* Angebote */}
      <section id="angebote" className="border-y border-black/5 bg-white/40">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <h2 className="text-2xl font-extrabold tracking-tight">3 typische Einstiegsangebote</h2>
          <p className="mt-2 text-black/70">
            Wir starten dort, wo es sofort Entlastung bringt – ohne dass der Verein „umlernen“ muss.
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
              Ehrenamt braucht einfache Lösungen. Wir bauen so, dass es auch dann funktioniert,
              wenn nicht alle technikbegeistert sind – und dass Wissen nicht bei einer Person hängt.
            </p>
          </div>

          {/* Crosslink Förderungen */}
          <div className="mt-6 rounded-3xl border border-black/10 bg-[#f5f2ea] p-6">
            <p className="text-sm font-semibold">Förderungen, Sponsoren & Nachweise</p>
            <p className="mt-1 text-sm text-black/70">
              Unterlagen, Fristen und Belege so organisieren, dass es bei Rückfragen sofort passt.
            </p>
            <Link
              className="mt-3 inline-flex text-sm font-semibold text-[#2f5d3a] hover:underline"
              href="/foerderungen"
            >
              Mehr zu Förderungen →
            </Link>
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
          <h2 className="text-2xl font-extrabold tracking-tight">Module (je nach Verein)</h2>
          <p className="mt-2 text-black/70">
            Du brauchst nicht alles. Wir nehmen nur das, was bei euch wirklich wirkt.
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
              Sag kurz, was euch aufhält: Mitglieder/Beiträge, Event-Organisation, Kassa, Dokumente,
              Förderungen. Ich sage dir ehrlich, ob und wie wir helfen können.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="rounded-xl bg-[#2f5d3a] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
                href="mailto:hello@MP-X.at"
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
            <p className="text-sm font-semibold">Bring mit:</p>
            <ul className="mt-3 space-y-1 text-sm text-black/70">
              <li>• wie ihr aktuell organisiert (WhatsApp/Excel/Zettel)</li>
              <li>• Beispiel: Mitgliederliste oder Event-Ablauf oder Kassabelege</li>
              <li>• 3 Dinge, die euch am meisten nerven</li>
            </ul>
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