import Link from "next/link";

export default function DienstleistungPage() {
  return (
    <main className="min-h-screen bg-[#f5f2ea] p-8 text-[#1f2937]">
      <div className="mx-auto max-w-3xl rounded-3xl border border-black/10 bg-white/70 p-8 shadow-sm">
        <h1 className="text-3xl font-extrabold tracking-tight">Dienstleistung</h1>
        <p className="mt-3 text-black/70">Platzhalter-Seite. Inhalte kommen als nächstes.</p>
        <Link
          className="mt-6 inline-block rounded-xl bg-[#2f5d3a] px-4 py-2 text-sm font-semibold text-white"
          href="/"
        >
          ← Zur Startseite
        </Link>
      </div>
    </main>
  );
}
