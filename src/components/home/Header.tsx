import Link from "next/link";

export default function Header({
  mobileOpen,
  setMobileOpen,
}: {
  mobileOpen: boolean;
  setMobileOpen: (v: boolean) => void;
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f5f2ea]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link
          href="/"
          className="flex items-baseline gap-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2f5d3a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5f2ea]"
        >
          <span className="text-xl font-extrabold tracking-tight">neXara</span>
          <span className="hidden text-sm text-black/60 sm:inline">Digital für Betriebe am Land</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium sm:flex">
          <a href="#loesungen" className="hover:text-black/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2f5d3a] rounded">Lösungen</a>
          <a href="#branchen" className="hover:text-black/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2f5d3a] rounded">Branchen</a>
          <a href="#ablauf" className="hover:text-black/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2f5d3a] rounded">Ablauf</a>
          <a href="#kontakt" className="hover:text-black/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2f5d3a] rounded">Kontakt</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#kontakt"
            className="hidden rounded-xl bg-[#2f5d3a] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2f5d3a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5f2ea] sm:inline-flex"
          >
            Betriebs-Check buchen
          </a>

          <button
            type="button"
            aria-label="Menü öffnen"
            className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white/70 px-3 py-2 text-sm font-semibold shadow-sm hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2f5d3a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5f2ea] sm:hidden"
            onClick={() => setMobileOpen(true)}
          >
            ☰
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="sm:hidden">
          <div className="fixed inset-0 z-50 bg-black/30" aria-hidden="true" onClick={() => setMobileOpen(false)} />
          <div className="fixed right-0 top-0 z-50 h-full w-[85%] max-w-sm border-l border-black/10 bg-[#f5f2ea] p-5 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-lg font-extrabold">neXara</span>
              <button
                type="button"
                aria-label="Menü schließen"
                className="rounded-xl border border-black/10 bg-white/70 px-3 py-2 text-sm font-semibold hover:bg-white"
                onClick={() => setMobileOpen(false)}
              >
                ✕
              </button>
            </div>

            <div className="mt-6 grid gap-2">
              {[
                ["Lösungen", "#loesungen"],
                ["Branchen", "#branchen"],
                ["Ablauf", "#ablauf"],
                ["Kontakt", "#kontakt"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm font-semibold hover:bg-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </a>
              ))}
            </div>

            <a
              href="#kontakt"
              className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-[#2f5d3a] px-4 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
              onClick={() => setMobileOpen(false)}
            >
              Betriebs-Check buchen
            </a>

            <p className="mt-6 text-xs text-black/60">Regional • Verständlich • Unabhängig</p>
          </div>
        </div>
      )}
    </header>
  );
}
