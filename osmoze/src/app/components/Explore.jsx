import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function ExploreSection() {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center text-white bg-cover bg-center px-6 text-center">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="relative z-10 max-w-4xl space-y-6">
        <h2 className="text-[clamp(1.5rem,4vw,3rem)] font-bold font-modern leading-tight">Celebrate Life</h2>
        <div className="text-[clamp(1.2rem,3vw,2rem)] leading-relaxed font-modern space-y-2">
          <p>Embrace the moments</p>
          <p>of joy with friends</p>
          <p>
            and family across{" "}
            <Link href="/" className="text-purple-300 font-extrabold hover:underline">
              SoChem!
            </Link>
          </p>
        </div>
      </div>
      
      {/* Explore section positioned at the bottom-right with padding */}
      <div className="absolute bottom-10 right-10 flex items-center space-x-4 cursor-pointer font-modern">
        <p className="text-lg md:text-xl pr-2">Explore all events and sessions</p>
        <Link href="/events">
          <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-blue-600 rounded-full hover:bg-blue-700 transition">
            <FaArrowRight className="text-white text-2xl" />
          </div>
        </Link>
      </div>
    </div>
  );
}
