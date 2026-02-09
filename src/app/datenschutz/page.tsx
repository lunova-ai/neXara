import Link from "next/link";

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-[#f5f2ea] text-[#1f2937]">
      <div className="mx-auto max-w-3xl px-5 py-12">
        <h1 className="text-3xl font-extrabold tracking-tight">Datenschutzerklärung</h1>

        <section className="mt-6 space-y-6 text-sm text-black/80">
          <div>
            <p>
              Der Schutz Ihrer persönlichen Daten ist mir ein besonderes Anliegen.
              Ich verarbeite Ihre Daten daher ausschließlich auf Grundlage der
              gesetzlichen Bestimmungen (DSGVO, TKG 2003).
            </p>
          </div>

          <div>
            <p className="font-semibold">Kontakt mit mir</p>
            <p>
              Wenn Sie per E-Mail oder Telefon Kontakt aufnehmen, werden Ihre angegebenen
              Daten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen
              sechs Monate gespeichert. Diese Daten werden nicht ohne Ihre Einwilligung
              weitergegeben.
            </p>
          </div>

          <div>
            <p className="font-semibold">Hosting</p>
            <p>
              Diese Website wird bei Vercel Inc. (USA) gehostet.
              Dabei werden personenbezogene Daten (z.B. IP-Adresse) verarbeitet,
              soweit dies zur Bereitstellung und Sicherheit der Website erforderlich ist.
            </p>
            <p className="mt-2">
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse an einer sicheren und zuverlässigen Bereitstellung
              der Website).
            </p>
          </div>

          <div>
            <p className="font-semibold">Cookies</p>
            <p>
              Diese Website verwendet derzeit keine Cookies zu Analyse- oder
              Marketingzwecken. Es werden ausschließlich technisch notwendige
              Cookies eingesetzt, sofern dies für den Betrieb erforderlich ist.
            </p>
          </div>

          <div>
            <p className="font-semibold">Web-Analyse</p>
            <p>
              Es wird aktuell keine Webanalyse (z.B. Google Analytics) eingesetzt.
            </p>
          </div>

          <div>
            <p className="font-semibold">Ihre Rechte</p>
            <p>
              Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung,
              Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu.
            </p>
            <p className="mt-2">
              Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht
              verstößt, können Sie sich bei der Aufsichtsbehörde beschweren.
              In Österreich ist dies die Datenschutzbehörde.
            </p>
          </div>

          <div>
            <p className="font-semibold">Kontakt</p>
            <p>
              Verantwortlich für die Datenverarbeitung:<br />
              Monika Pichlhöfer<br />
              Wagendorf 98, 8230 Lafnitz<br />
              <a className="underline hover:text-black" href="mailto:morbo@gmx.at">morbo@gmx.at</a>
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
