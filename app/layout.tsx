import type { Metadata } from "next";
import { Manrope, Instrument_Serif, Sora } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";

const fontSans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontDisplay = Sora({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-display",
  display: "swap",
});

const fontSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amaljith M V — UI/UX Designer & Frontend Developer",
  description:
    "Portfolio of Amaljith M V — a multi-disciplinary creator working across UI/UX design, frontend development, videography, and video editing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${fontSans.variable} ${fontSerif.variable} ${fontDisplay.variable}`}>
      <body className="antialiased font-sans">
        <Header />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
