import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white/40">
      <div className="mx-auto max-w-6xl px-5 pb-12">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-black/10 pt-6 text-xs text-black/60">
          <span>© {new Date().getFullYear()} neXara</span>
          <div className="flex gap-4">
            <Link className="hover:text-black/80" href="/datenschutz">Datenschutz</Link>
            <Link className="hover:text-black/80" href="/impressum">Impressum</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
