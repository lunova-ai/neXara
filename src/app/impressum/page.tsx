import Link from "next/link";

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-[#f5f2ea] text-[#1f2937]">
      <div className="mx-auto max-w-3xl px-5 py-12">
        <h1 className="text-3xl font-extrabold tracking-tight">Impressum</h1>

        <section className="mt-6 space-y-4 text-sm text-black/80">
          <div>
            <p className="font-semibold">Anbieter:</p>
            <p>Monika Pichlhöfer</p>
          </div>

          <div>
            <p className="font-semibold">Adresse:</p>
            <p>Wagendorf 98<br />8230 Lafnitz<br />Österreich</p>
          </div>

          <div>
            <p className="font-semibold">Kontakt:</p>
            <p>
              E-Mail: <a className="underline hover:text-black" href="mailto:morbo@gmx.at">morbo@gmx.at</a><br />
              Telefon: <a className="underline hover:text-black" href="tel:+436764106812">+43 676 410 68 12</a>
            </p>
          </div>

          <div>
            <p className="font-semibold">Unternehmensgegenstand:</p>
            <p>
              IT-Beratung, digitale Prozessoptimierung und Unterstützung kleiner Betriebe
              im ländlichen Raum.
            </p>
          </div>

          <div>
            <p className="font-semibold">Firmenbuchnummer:</p>
            <p>Derzeit nicht vorhanden</p>
          </div>

          <div>
            <p className="font-semibold">UID-Nummer:</p>
            <p>Derzeit nicht vorhanden</p>
          </div>

          <div>
            <p className="font-semibold">Haftung für Inhalte:</p>
            <p>
              Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
              kann jedoch keine Gewähr übernommen werden.
            </p>
          </div>

          <div>
            <p className="font-semibold">Haftung für Links:</p>
            <p>
              Diese Website enthält Links zu externen Websites Dritter,
              auf deren Inhalte kein Einfluss besteht.
              Für diese fremden Inhalte wird daher keine Gewähr übernommen.
            </p>
          </div>

          <div>
            <p className="font-semibold">Urheberrecht:</p>
            <p>
              Die durch die Seitenbetreiberin erstellten Inhalte und Werke
              auf dieser Website unterliegen dem österreichischen Urheberrecht.
            </p>
          </div>
        </section>

        <div className="mt-10 text-sm">
          <Link href="/" className="underline hover:text-black">
            ← Zurück zur Startseite
          </Link>
        </div>
      </div>
    </main>
  );
}
