"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { auth } from "@/firebase/firebaseConfig";
import { signOut } from "firebase/auth";
import Link from "next/link";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import WelcomeSection from './components/Welcome';
import ExploreSection from './components/Explore';
import HeroSection from './components/Hero';

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('user');
      setUser(null);
    } catch (error) {
      console.log("Error logging out:", error);
    }
  };

  return (
    <>
      <div className="home">
      <HeroSection />
      <WelcomeSection />
      <ExploreSection />
      </div>
    </>
  );
}


