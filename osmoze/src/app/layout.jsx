import { Geist, Geist_Mono } from "next/font/google";
import { Risque } from "next/font/google";
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${risque.className} antialiased  vsc-initialized`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
