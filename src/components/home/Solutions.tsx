import Card from "@/components/ui/Card";

export default function Solutions() {
  return (
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
  );
}
