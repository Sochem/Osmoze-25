"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BookAnimation = () => {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const sparkleInterval = setInterval(() => {
      setSparkles((prev) => [
        ...prev,
        {
          id: Date.now(),
          x: Math.random() * 300 - 150,
          y: Math.random() * 300 - 150,
        },
      ]);

      setTimeout(() => {
        setSparkles((prev) => prev.slice(1));
      }, 1000);
    }, 150);

    return () => clearInterval(sparkleInterval);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen overflow-hidden relative">
      <div className="relative flex justify-center items-center">
        {/* Book Image */}
        <motion.img
          src="/images/book.png"
          alt="Book"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="w-auto"
        />

        {/* Rising Text */}
        <div className="absolute text-center font-modern">
          <motion.div
            className="text-transparent bg-clip-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-modernAntiqua"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: -40 }}
            transition={{ duration: 1, delay: 1 }}
            style={{
              backgroundImage: "linear-gradient(to bottom, #D7D3FF, #8683A1)",
            }}
          >
            LEGACY
            <br />
            UNVEILED
          </motion.div>

          <motion.div
            className="text-[#FFE600] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: -40 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            WHISPERS OF TIME
          </motion.div>
        </div>
      </div>

      {/* Sparkles Animation */}
      <AnimatePresence>
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 1 }}
            className="absolute w-2 sm:w-3 md:w-4 lg:w-5 xl:w-6 h-2 sm:h-3 md:h-4 lg:h-5 xl:h-6 bg-white"
            style={{
              top: `calc(50% + ${sparkle.y}px)`,
              left: `calc(50% + ${sparkle.x}px)`,
              clipPath:
                "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default BookAnimation;
