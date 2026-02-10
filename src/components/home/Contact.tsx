export default function Contact() {
  return (
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
                className="rounded-xl bg-[#2f5d3a] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2f5d3a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5f2ea]"
                href="mailto:hello@MP-X.at"
              >
                E-Mail schreiben
              </a>
              <a
                className="rounded-xl border border-black/15 bg-white/70 px-5 py-3 text-sm font-semibold hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2f5d3a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5f2ea]"
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
      </div>
    </section>
  );
}
