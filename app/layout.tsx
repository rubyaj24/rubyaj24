import type { Metadata } from "next";
import { Manrope, Instrument_Serif, Sora, Special_Gothic_Expanded_One, Unbounded } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import HashScrollHandler from "@/components/shared/HashScrollHandler";
import InitialLoader from "@/components/shared/InitialLoader";

const fontSans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// const fontDisplay = Sora({
//   subsets: ["latin"],
//   weight: "700",
//   variable: "--font-display",
//   display: "swap",
// });

const fontDisplay = Unbounded({
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

const fontExpanded = Special_Gothic_Expanded_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-expanded",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Amaljith M V — UI/UX Designer & Frontend Developer",
  description:
    "Portfolio of Amaljith M V — a multi-disciplinary creator working across UI/UX design, Branding, Frontend development, videography, and video editing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${fontSans.variable} ${fontSerif.variable} ${fontDisplay.variable} ${fontExpanded.variable}`}>
      <body className="antialiased font-sans">
        <InitialLoader />
        <Header />
        <HashScrollHandler />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
