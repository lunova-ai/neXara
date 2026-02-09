import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "neXara – Digitale Entlastung für Betriebe am Land",
    template: "%s • neXara",
  },
  description:
    "Pragmatische Prozess-Beratung & digitale Lösungen für kleine Betriebe im ländlichen Raum – verständlich, regional, ohne IT-Blabla.",
  applicationName: "neXara",
  metadataBase: new URL("https://nexara.vercel.app"), // später auf deine echte Domain ändern
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_AT",
    url: "/",
    siteName: "neXara",
    title: "neXara – Digitale Entlastung für Betriebe am Land",
    description:
      "Weniger Büro. Mehr Zeit fürs Wesentliche. Für Handwerk, Landwirtschaft & kleine Unternehmen im ländlichen Raum.",
    // Optional später: images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "neXara" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "neXara – Digitale Entlastung für Betriebe am Land",
    description:
      "Weniger Büro. Mehr Zeit fürs Wesentliche. Für Betriebe im ländlichen Raum.",
    // Optional später: images: ["/og.jpg"],
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
    <html lang="de" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
