import { Geist, Geist_Mono, Modern_Antiqua, Merriweather } from "next/font/google";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const modernAntiqua = Modern_Antiqua({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-modern-antiqua",
});

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"], // Choose weights as needed
  subsets: ["latin"],
  variable: "--font-merriweather",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${modernAntiqua.variable} ${merriweather.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
