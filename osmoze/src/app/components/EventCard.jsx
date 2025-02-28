'use client';
import { useState } from "react";
import Image from "next/image";

export default function EventCard({ event, setSelectedEvent }) {
  // Function to truncate text to 60 words
  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
  };

  return (
    <div className="bg-blue-900 bg-opacity-70 rounded-2xl p-6 w-full max-w-3xl flex flex-col sm:flex-row justify-between items-center shadow-lg pb-4 min-h-[200px] px-4 sm:px-8">
      {/* Event Details */}
      <div className="text-left flex-1">
        <h2 className="text-xl font-semibold text-white">{event.title}</h2>
        <p className="mt-2 text-sm text-gray-200">{truncateText(event.description, 60)}</p>
        <button 
          onClick={() => setSelectedEvent(event)} 
          className="mt-3 text-blue-300 hover:underline"
        >
          Read More
        </button>
      </div>

      {/* Event Image (Hidden on Small Screens) */}
      <div className="hidden sm:flex w-1/3 justify-end">
        <Image 
          src={event.image} 
          alt={event.title} 
          width={160} 
          height={160} 
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  );
}
