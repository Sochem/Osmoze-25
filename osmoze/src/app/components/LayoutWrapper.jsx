"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const dashboard = pathname === "/dashboard";

  return (
    <>
      {!dashboard && <Navbar />}
      {children}
      {!dashboard && <Footer />}
    </>
  );
}
