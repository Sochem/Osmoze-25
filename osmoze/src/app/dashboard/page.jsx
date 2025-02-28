"use client";
import { useState, useEffect } from "react";
import dark from "../../../public/images/LoginBG.png";
import light from "../../../public/images/LightModeBG.png";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function dashboard() {
  const [lightTheme, setLightTheme] = useState(false);
  const [bgImage, setBgImage] = useState(dark.src);

  const changeTheme = () => {
    setLightTheme(!lightTheme);
  };

  const changeBG = () => {
    setBgImage(bgImage === dark.src ? light.src : dark.src);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const events = [
    { id: 1, text: "Slide 1" },
    { id: 2, text: "Slide 2" },
    { id: 3, text: "Slide 3" },
    { id: 4, text: "Slide 4" },
    { id: 5, text: "Slide 5" },
    { id: 6, text: "Slide 5" },
    { id: 7, text: "Slide 5" },
  ];

  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (!userData) {
      router.push("/login");
      return;
    }
    setUser(JSON.parse(userData));
  }, []);

  if (!user) return null;

  return (
    <>
      <div
        className={`flex h-screen w-screen bg-cover bg-center overflow-hidden`}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="w-1/4 min-w-[150px] max-w-[300px] bg-[#09051A] text-yellow-300 flex flex-col justify-evenly text-center h-screen p-4 md:w-1/5 lg:w-1/4 xl:w-1/4">
          <Link href="/" passHref>
            <Image
              src="/images/OsmozeLogoLogin.png"
              alt="Logo"
              width={120}
              height={120}
              className="object-contain mx-auto"
            />
          </Link>
          <ul className="space-y-4 text-center text-lg md:text-xl">
            <li className="hover:text-white cursor-pointer">
              <a href="/">Home</a>
            </li>

            <li className="hover:text-white cursor-pointer">
              <a href="/events">Event Registration</a>
            </li>
            <li className="hover:text-white cursor-pointer">
              <a href="https://www.instagram.com/sochem_iitbhu/">
                Announcements
              </a>
            </li>

            <li className="hover:text-white cursor-pointer">
              <a href="/aboutUs">Contact Us</a>
            </li>
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
            <div
              className={`text-4xl md:text-5xl font-bold ${
                lightTheme ? "text-[#071153]" : "text-white"
              } mb-6 md:ml-[50px]`}
            >
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
              <span
                className={`${
                  lightTheme ? "text-black" : "text-[#CC9292]"
                } text-lg md:text-2xl block mt-2`}
              >
                {user?.name
                  ? user.name.split(" ").slice(0, 2).join(" ")
                  : "Guest"}
              </span>
            </div>
          </div>

          <div className="border border-white bg-[#180F40] text-white p-5 mt-8 mx-auto w-11/12 md:w-3/4 rounded-lg">
            <div className="text-2xl md:text-3xl text-yellow-300 font-semibold mb-2">
              Registered Events
            </div>
            <div
              className={`border border-white ${
                lightTheme ? "bg-[#3D6CBB] text-white" : "bg-[#4FA6DA]"
              }  text-black text-lg px-5 p-2 mt-2`}
            >
              EVENTS
            </div>
            <div className="text-white mt-3 text-center">
              Not Registered For Any Events
            </div>
          </div>

          <div className="w-full max-w-4xl mx-auto my-10">
            <Slider {...settings}>
              {events.map((e) => (
                <div
                  key={e.id}
                  className={`w-[300px] h-[150px] border-[5px] max-sm:w-25 max-sm:h-12
                  border-black ${
                    lightTheme ? "bg-[#3D6CBB] text-white" : "bg-gray-200"
                  }  
                  flex text-center align-middle justify-center rounded-[30px] text-3xl text-[#0F1035] font-bold`}
                >
                  {e.text}
                </div>
              ))}
            </Slider>
          </div>

          <hr
            className={`${
              lightTheme ? "border-black" : "border-white"
            } w-full border my-4`}
          />

          <div className="flex justify-between">
            <button
              className="mr-[20px] hover:opacity-80 cursor-pointer"
              onClick={() => {
                changeTheme();
                changeBG();
              }}
            >
              {lightTheme ? (
                <FaMoon size={30} color="black" />
              ) : (
                <FaSun size={30} />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
