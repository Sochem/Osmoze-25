"use client";
import { useState, useEffect } from "react";
import EventCard from "../components/EventCard";
import Image from "next/image";
import { X } from "lucide-react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig"
import { toast, Toaster } from "react-hot-toast";
// import { useRouter } from "next/navigation";

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [registeredEvents, setRegisteredEvents] = useState([]);

  const handleRegistration = () => {
    const userData = localStorage.getItem("user");
    if (!userData) {
      toast.error("Please login to register for the event");
      return;
    }
    window.location.href = selectedEvent.form;
  };

  // Fetch data from events.json
  useEffect(() => {
    fetch("/events.json")
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedEvent ? "hidden" : "auto";
  }, [selectedEvent]);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const user = JSON.parse(userData);
      const userDoc = doc(db, "users", user.email);
      getDoc(userDoc).then((doc) => {
        if (doc.exists()) {
          setRegisteredEvents(doc.data().events || []);
        }
      });
    }
  }, []);

  return (
    <>
      <Toaster position="top-center" />
      <div className="relative w-screen min-h-screen text-white bg-[url('/images/events_bg.png')] bg-fixed bg-top bg-contain pb-10">
        {/* Page Header */}
        <section className="text-center py-10">
          <h1 className="text-4xl md:text-5xl font-modern font-bold text-[#6bb4e8] drop-shadow-[3px_3px_0px_rgba(0,0,0,0.7)]">
            UPCOMING EVENTS
          </h1>
          <p className="mt-2 text-lg max-w-2xl mx-auto px-4">
            Explore our amazing events and competitions.
          </p>
        </section>

        {/* Hide event cards when modal is open */}
        <div
          className={`transition-all duration-300 ${selectedEvent ? "hidden" : "block"
            }`}
        >
          <div className="flex flex-col items-center space-y-8 px-4 sm:px-8 md:px-16 lg:px-24">
            {events.length > 0 ? (
              events.map((event, index) => (
                <EventCard
                  key={index}
                  event={event}
                  setSelectedEvent={setSelectedEvent}
                />
              ))
            ) : (
              <p className="text-center text-gray-300">Loading events...</p>
            )}
          </div>
        </div>

        {/* Modal with Blurry Background */}
        {selectedEvent && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm px-4 sm:px-6 md:px-8">
            <div className="relative bg-blue-900 bg-opacity-70 rounded-2xl p-6 w-full max-w-3xl flex flex-col sm:flex-row justify-between items-center shadow-lg pb-4 min-h-[200px]">
              {/* Close Button (Inside the Modal, Top Right) */}
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 text-gray-300 hover:text-white transition"
              >
                <X size={28} />
              </button>

              {/* Event Image - Hidden on Small Screens */}
              <div className="hidden sm:flex w-1/3 justify-center">
                <Image
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  width={220}
                  height={220}
                  className="rounded-lg object-cover border-2 border-blue-300"
                />
              </div>

              {/* Event Details - Adjusted for Small Screens */}
              <div className="w-full sm:w-2/3 sm:pl-6 text-center sm:text-left">
                <h2 className="text-2xl sm:text-3xl font-modern font-semibold text-yellow-300">
                  {selectedEvent.title}
                </h2>
                <p className="mt-2 text-gray-200">{selectedEvent.description}</p>

                {/* Coordinators */}
                <div className="flex flex-wrap justify-center sm:justify-between mt-4 text-gray-300">
                  {selectedEvent.coordinators?.map((coordinator, index) => (
                    <div key={index} className="text-center px-2">
                      <p className="font-semibold text-white">
                        {coordinator.name}
                      </p>
                      <p>{coordinator.contact}</p>
                    </div>
                  ))}
                </div>

                {/* Prize */}
                {/* <p className="mt-4 font-bold text-yellow-300">
                Prize Worth: {selectedEvent.prize}
              </p> */}

                {/* Buttons */}
                {/* Buttons */}
                <div className="mt-6 flex flex-wrap justify-center sm:justify-start space-x-4">
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                  >
                    Close
                  </button>
                  {selectedEvent.launch && (
                    <button
                      className={`px-5 py-2 ${registeredEvents.some(event => event.toLowerCase() === selectedEvent.title.toLowerCase())
                          ? "bg-green-600 cursor-not-allowed"
                          : "bg-blue-500 hover:bg-yellow-600"
                        } text-white rounded-lg transition`}
                      disabled={registeredEvents.some(event => event.toLowerCase() === selectedEvent.title.toLowerCase())}
                      onClick={handleRegistration}
                    >
                      {registeredEvents.some(event => event.toLowerCase() === selectedEvent.title.toLowerCase())
                        ? "Already Registered"
                        : "Register Now"}
                    </button>
                  )}
                  {!selectedEvent.launch && (
                    <button
                      className="px-5 py-2 bg-gray-500 cursor-not-allowed text-white rounded-lg"
                      disabled
                    >
                      Coming Soon...
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
