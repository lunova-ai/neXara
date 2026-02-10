import Image from "next/image";
import Stat from "@/components/ui/Stat";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
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
            <a className="rounded-xl bg-[#2f5d3a] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95" href="#kontakt">
              Betriebs-Check buchen
            </a>
            <a className="rounded-xl border border-black/15 bg-white/70 px-5 py-3 text-sm font-semibold hover:bg-white" href="#branchen">
              Branchen ansehen
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <Stat title="90 Min." desc="Büro-Check" />
            <Stat title="7 Tage" desc="Schnell-Lösung" />
            <Stat title="planbar" desc="Fixe Pakete" />
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-black/10 shadow-sm">
            <Image
              src="/images/hero.jpg"
              alt="MP-X – Digitale Entlastung für Betriebe am Land"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-black/10 bg-white/80 p-4 backdrop-blur">
              <p className="text-sm font-semibold">Beispiel-Nutzen</p>
              <p className="mt-1 text-sm text-black/70">
                Angebote schneller • weniger WhatsApp-Chaos • bessere Übersicht • Nachweise griffbereit
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
