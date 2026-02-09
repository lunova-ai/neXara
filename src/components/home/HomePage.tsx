"use client";

import { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Industries from "./Industries";
import Community from "./Community";
import Solutions from "./Solutions";
import Process from "./Process";
import Contact from "./Contact";
import Footer from "./Footer";

export default function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f5f2ea] text-[#1f2937]">
      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <Hero />
      <Industries />
      <Community />
      <Solutions />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
