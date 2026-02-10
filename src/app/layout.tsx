import type { Metadata } from "next";
import { Geist, Geist_Mono, Sora } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MP-X – Digitale Entlastung für Betriebe am Land",
    template: "%s • MP-X",
  },
  description:
    "Pragmatische Prozess-Beratung & digitale Lösungen für kleine Betriebe im ländlichen Raum – verständlich, regional, ohne IT-Blabla.",
  applicationName: "MP-X",

  // WICHTIG: muss eine gültige, klein geschriebene Domain sein
  // (später auf deine echte Domain ändern)
  metadataBase: new URL("https://mp-x.vercel.app"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "de_AT",
    url: "/",
    siteName: "MP-X",
    title: "MP-X – Digitale Entlastung für Betriebe am Land",
    description:
      "Weniger Büro. Mehr Zeit fürs Wesentliche. Für Handwerk, Landwirtschaft & kleine Unternehmen im ländlichen Raum.",
    // Optional später:
    // images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "MP-X" }],
  },

  twitter: {
    card: "summary_large_image",
    title: "MP-X – Digitale Entlastung für Betriebe am Land",
    description:
      "Weniger Büro. Mehr Zeit fürs Wesentliche. Für Betriebe im ländlichen Raum.",
    // Optional später:
    // images: ["/og.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} ${sora.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
