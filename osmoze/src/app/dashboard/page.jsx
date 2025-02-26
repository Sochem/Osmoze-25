"use client";
import { useState, useEffect } from "react";
import login from "../../../public/images/LoginBG.png"
import Image from "next/image";
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      toast.error('Please login to access dashboard 🔒');
      router.push('/login');
      return;
    }
    setUser(JSON.parse(userData));
  }, []);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex h-screen w-screen bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${login.src})` }}>
     
      <div className="w-1/4 min-w-[150px] max-w-[300px] bg-[#09051A] text-yellow-300 flex flex-col justify-evenly text-center h-screen p-4 
          md:w-1/5 lg:w-1/4 xl:w-1/4">
        <Image
          src="/images/OsmozeLogoLogin.png"
          alt="Logo"
          width={120}
          height={120}
          className="object-contain mx-auto"
        />
        <ul className="space-y-4 text-center text-lg md:text-xl">
          <li className="hover:text-white cursor-pointer"><a href="/events">Instructions</a></li>
          <li  className="hover:text-white cursor-pointer"><a href="/dashboard">Dashboard</a></li>
          <li className="hover:text-white cursor-pointer"><a href="/events">Event Registration</a></li>
          <li className="hover:text-white cursor-pointer"><a href="/login">Payment</a></li>
          <li className="hover:text-white cursor-pointer"><a href="/aboutUs">Contact Us</a></li>
        </ul>
        <Image
          src="/images/Legacy.png"
          alt="Logo"
          width={120}
          height={120}
          className="object-contain mx-auto"
        />
      </div>

      <div className="flex-1 p-4 overflow-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mt-4 mb-8">
          <div className="text-4xl md:text-5xl font-bold text-white mb-6 md:ml-[50px]">
            Dashboard
          </div>
          <div className="text-center">
            <Image
              src={user?.avatar || "/images/ProfilePic.png"}
              alt="profile pic"
              className="rounded-full mx-auto"
              width={120}
              height={120}
            />
            <span className="text-[#CC9292] text-lg md:text-2xl block mt-2">
            {user?.name || "Guest"}
            </span>
          </div>
        </div>

        <div className="border border-white bg-[#180F40] text-white p-5 mt-8 mx-auto w-11/12 md:w-3/4 rounded-lg">
          <div className="text-2xl md:text-3xl text-yellow-300 font-semibold mb-2">
            Registered Events
          </div>
          <div className="border border-white bg-[#4FA6DA] text-black text-lg px-5 p-2 mt-2">
            EVENTS
          </div>
          <div className="text-white mt-3 text-center">
            Not Registered For Any Events
          </div>
        </div>

        <div className="mt-8 mx-auto flex max-md:flex-col max-md:items-center flex-wrap justify-center gap-6">
          <div className="w-60 h-28 border-[5px] max-sm:w-25 max-sm:h-12 border-black bg-gray-200 flex items-center justify-center rounded-[30px] text-[#0F1035] font-bold">
            EVENTS
          </div>
          <div className="w-60 h-28 border-[5px] max-sm:w-25 max-sm:h-12 border-black bg-gray-200 flex items-center justify-center rounded-[30px] text-[#0F1035] font-bold">
            EVENTS
          </div>
          <div className="w-60 h-28 border-[5px] max-sm:w-25 max-sm:h-12 border-black bg-gray-200 flex items-center justify-center rounded-[30px] text-[#0F1035] font-bold">
            EVENTS
          </div>
        </div>

        <div className="mt-10 text-left text-[18px] text-[#D7D3FF]">
          Payments are non-refundable
        </div>
        <hr className="w-full border border-white my-4"></hr>
        <a href="/" className="inline text-2xl text-left text-yellow-300 block hover:opacity-80">
          Home
        </a>
      </div>
    </div>

    </>
  )
}

