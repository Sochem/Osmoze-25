"use client";
import { useState, useEffect } from "react";
import dark from "../../../public/images/LoginBG.png";
import light from "../../../public/images/LightModeBG.png";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { Menu, X } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function dashboard() {
  const [lightTheme, setLightTheme] = useState(false);
  const [bgImage, setBgImage] = useState(dark.src);
  const [setOpen, setisOpen] = useState(false);

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

  const settings_sm = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  const events = [
    { id: 1, text: "Slide 1" },
    { id: 2, text: "Slide 2" },
    { id: 3, text: "Slide 3" },
    { id: 4, text: "Slide 4" },
    { id: 5, text: "Slide 5" },
    { id: 6, text: "Slide 6" },
    { id: 7, text: "Slide 7" },
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
      <Toaster position="top-center" reverseOrder={false} />
      <div
        className={`relative flex h-screen w-screen bg-cover bg-center overflow-hidden`}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div
          className="max-lg:hidden w-1/4 min-w-[150px] max-w-[300px] bg-[#09051A] text-yellow-300 flex flex-col justify-evenly text-center h-screen p-4 
            md:w-1/5 lg:w-1/4 xl:w-1/4"
        >
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

        <div className="lg:hidden relative z-[999] top-0 left-0 ml-auto gap-4">
          <div className="lg:hidden absolute items-center transition-transform duration-500 ease-in-out ">
            <button onClick={() => setisOpen(!setOpen)}>
              {setOpen ? (
                <div
                  className="aboslute min-w-[10rem] pt-[10px] h-[100vh] top-0 left-0 flex-col 
                   items-center gap-4 bg-[#09051A]"
                >
                  <X className="text-white ml-[10px] w-8 h-8 transition-transform duration-300 m-0 transform rotate-180" />
                  <div className="flex flex-col justify-start h-full gap-10">
                    <Link href="/" passHref>
                      <Image
                        src="/images/OsmozeLogoLogin.png"
                        alt="Logo"
                        href="/"
                        width={100}
                        height={100}
                        className="object-contain mx-auto"
                      />
                    </Link>

                    <ul className="space-y-4 text-yellow-300 hover:opacity-80 text-center text-md md:text-xl">
                      <li className="hover:text -white cursor-pointer">
                        <a href="/events">Home</a>
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
                      width={100}
                      height={100}
                      className="object-contain mx-auto"
                    />
                  </div>
                </div>
              ) : (
                <Menu className="text-white ml-[10px] mt-[10px] w-8 h-8 transition-transform duration-300 transform rotate-0" />
              )}
            </button>
          </div>
        </div>

        <div className="flex flex-col w-full justify-evenly gap-4">
          <div className="flex-1 flex-col max-h-[200px] p-4">
            <div className="flex flex-col lg:flex-row justify-between gap-4/5 items-center mt-4 mb-8">
              <div className="text-4xl font-bold text-white mb-6 md:ml-[50px]">
                Dashboard
              </div>
              <div className="text-center">
                <Image
                  src={user?.avatar || "/images/ProfilePic.png"}
                  alt="profile pic"
                  className="rounded-full mx-auto"
                  width={100}
                  height={100}
                />
                <span className="text-[#CC9292] text-lg md:text-2xl block font-bold mt-2">
                  {user?.name
                    ? user.name.split(" ").slice(0, 2).join(" ")
                    : "Guest"}
                </span>
              </div>
            </div>
          </div>
          <div
            className="border border-white bg-[#180F40] text-white p-5 mt-8 mx-auto 
             lg:w-3/4 w-3/4 rounded-lg"
          >
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

          <div className="w-full max-w-4xl mx-auto my-10 max-lg:hidden">
            <Slider {...settings}>
              {events.map((e) => (
                <div
                  key={e.id}
                  className={`lg:h-[125px] border-[5px] max-lg:w-25 max-lg:h-20
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

          <div className="w-full max-w-4xl mx-auto my-10 lg:hidden">
            <Slider {...settings_sm}>
              {events.map((e) => (
                <div
                  key={e.id}
                  className={` border-[5px] max-lg:w-10 max-lg:h-[8rem]
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
          ></hr>
          <div className="flex justify-between">
            <a
              href="/"
              className={`${
                lightTheme ? "text-black" : "text-yellow-300"
              } ml-[20px] inline text-2xl text-left  hover:opacity-80`}
            >
              Home{" "}
            </a>
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
