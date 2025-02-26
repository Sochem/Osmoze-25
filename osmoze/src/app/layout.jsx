"use client";
import { Geist, Geist_Mono, Modern_Antiqua, Merriweather } from "next/font/google";
import { Risque } from "next/font/google";
import { usePathname } from "next/navigation";
import "../styles/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const risque = Risque({ subsets: ["latin"], weight: "400" });

const modernAntiqua = Modern_Antiqua({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-modern-antiqua",
});

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

export default function RootLayout({ children }) {
  const pathname = usePathname()
  const dashboard = pathname === "/dashboard";

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${modernAntiqua.variable} ${merriweather.variable} antialiased`}
      >
        {!dashboard && <Navbar />}
        {children}
        {!dashboard && <Footer />}
      </body>
    </html>
  );
}
