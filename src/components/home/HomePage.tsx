"use client";

import { useEffect, useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Industries from "./Industries";
import Solutions from "./Solutions";
import Process from "./Process";
import Contact from "./Contact";
import Footer from "./Footer";

export default function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <main className="min-h-screen bg-[#f5f2ea] text-[#1f2937]">
      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <Hero />
      <Industries />
      <Solutions />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
