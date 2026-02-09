export const industries = [
  { title: "Landwirtschaft", desc: "Dokumentation, Pacht & Ab-Hof", href: "/landwirtschaft" },
  { title: "Handwerk", desc: "Angebote, Termine & Rechnungen", href: "/handwerk" },
  { title: "Bau", desc: "Baustellen, Stundenzettel & Mahnungen", href: "/bau" },
  // Dienstleistung inkl. Gastgewerbe „mitdenken“
  { title: "Dienstleistung", desc: "Kunden, Termine, Reservierungen & WhatsApp-Ordnung", href: "/dienstleistung" },
  { title: "Waldwirtschaft", desc: "Hackgut, Maschinen teilen & Abrechnung", href: "/waldwirtschaft" },
  { title: "Direktvermarktung", desc: "Google Maps, Mini-Web & Bestellen", href: "/direktvermarktung" },
] as const;

export const steps = [
  { nr: "1", title: "Büro-Check", desc: "Vor Ort Analyse & 3 Sofort-Tipps." },
  { nr: "2", title: "Schnell-Lösung", desc: "Mini-Optimierung in 7 Tagen." },
  { nr: "3", title: "Digitaler Plan", desc: "Passende Lösung, einfach umgesetzt." },
] as const;
