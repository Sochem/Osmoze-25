import { Geist, Geist_Mono } from "next/font/google";
import { Risque } from 'next/font/google';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const risque = Risque({ subsets: ['latin'], weight: '400' });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${risque.className} antialiased  vsc-initialized`}
      >
        {children}
      </body>
    </html>
  );
}
