import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { StarField } from "@/components/star-field";
import { AmbientAudioControl } from "@/components/ambient-audio";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#060810",
};

export const metadata: Metadata = {
  title: "The Day Divya Was Born — 20 November 2007 | Digital Time Capsule",
  description:
    "A luxury cinematic digital time capsule dedicated to Divya, born on Tuesday, 20 November 2007 at 10:56 AM IST in Bengaluru, India.",
  keywords: [
    "Divya",
    "Birthday Time Capsule",
    "20 November 2007",
    "Bengaluru 2007",
    "Scorpio",
    "Astronomical Birthday",
    "BornHere",
  ],
  authors: [{ name: "The Day Divya Was Born Archive" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="relative bg-[#060810] text-[#FAF7F2] antialiased selection:bg-gold-500/30 selection:text-gold-200">
        {/* Subtle Film Grain Overlay */}
        <div className="film-grain" />

        {/* Dynamic Twinkling Celestial Starfield */}
        <StarField />

        {/* Global Floating Navigation Bar */}
        <Navbar />

        {/* Interactive Ambient Sound Control */}
        <AmbientAudioControl />

        {/* Main Content Viewport */}
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
