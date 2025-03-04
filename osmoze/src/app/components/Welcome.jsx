import Image from "next/image";
import Link from "next/link";

export default function WelcomeSection() {
  return (
    <div className="relative w-full h-screen flex flex-col sm:justify-around md:flex-row items-center text-white bg-cover bg-center px-6">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Left Section */}
      <div className="relative z-10 md:w-2/5 text-center md:text-left flex flex-col items-center md:items-start space-y-4 sm:pt-4">
        <h3 className="text-lg md:text-xl text-yellow-300 font-merriweather">
          Welcome to the Annual
        </h3>
        <h1 className="text-4xl md:text-5xl font-bold font-merriweather">
          Chemical Extravaganza
        </h1>
        <h2 className="text-3xl md:text-4xl font-extrabold text-purple-300">
          OSMOZE'25
        </h2>
        <div className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg text-lg">
          <Link href="/aboutus">Explore</Link>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative z-10 flex flex-col items-center md:w-2/5 space-y-6">
        <div
          className="relative flex flex-col items-center"
          style={{ width: "clamp(300px, 50vw, 500px)" }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h2
              className="text-[clamp(1.5rem,4vw,3rem)] font-bold text-transparent drop-shadow-lg font-modern"
              style={{
                backgroundImage: "linear-gradient(to bottom, #D7D3FF, #8683A1)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              LEGACY UNVEILED
            </h2>
            <p className="text-[clamp(1rem,3vw,2rem)] text-yellow-300 drop-shadow-lg font-modern">
              Whispers of Time
            </p>
          </div>
          <Image
            src="/images/book.png"
            alt="Open book"
            width={500}
            height={400}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
