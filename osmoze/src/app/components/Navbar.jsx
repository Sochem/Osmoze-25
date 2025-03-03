"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Toaster } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  const checkUserStatus = () => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      setUser(null);
    }
  };

  useEffect(() => {
    checkUserStatus();
    window.addEventListener("storage", checkUserStatus);
    window.addEventListener("userStateChange", checkUserStatus);

    return () => {
      window.removeEventListener("storage", checkUserStatus);
      window.removeEventListener("userStateChange", checkUserStatus);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when screen size increases beyond tablet size (768px)
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    toast.success("Logged out successfully 👋");
    window.dispatchEvent(new Event("userStateChange"));
    router.push("/");
  };

  const handleProtectedRoute = (e, path) => {
    if (path === "/dashboard" && !user) {
      e.preventDefault();
      toast.error("Please login to access dashboard");
      setTimeout(() => {
        router.push("/login");
      }, 100);
    }
  };

  const navItems = [
    { name: "AboutUs", path: "/aboutus" },
    { name: "Team", path: "/team" },
    { name: "Events", path: "/events" },
    { 
      name: "Announcements", 
      path: "https://www.instagram.com/sochem_iitbhu/", 
      external: true 
    },
    { name: "Dashboard", path: "/dashboard" }
  ];

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <nav className="w-full bg-gradient-to-r from-[#0c081d] via-[#1d0d64] to-[#0c081d] px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 flex items-center shadow-lg relative z-50">
        {/* Left: Logo and Event Name */}
        <div className="flex items-center flex-shrink-0">
          <Link href="/" className="flex items-center gap-1 xs:gap-2 group">
            <Image
              src="/images/OsmozeLogo.png"
              alt="Osmoze Logo"
              width={80}
              height={80}
              className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <motion.span 
              className="text-[#FFE15D] font-modernAntiqua text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl transition-colors duration-300 group-hover:text-[#F4F269] whitespace-nowrap"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Osmoze&apos;25
            </motion.span>
          </Link>
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <div className="hidden md:flex gap-1 lg:gap-4 xl:gap-6 text-[#F4F269] text-sm lg:text-base xl:text-lg font-modernAntiqua justify-start ml-2 md:ml-4 lg:ml-6 flex-grow">
          {navItems.map((item, index) => (
            item.external ? (
              <a
                key={index}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="relative px-1 lg:px-2 transition-all duration-300 ease-in-out hover:text-[#DBD828] after:block after:w-full after:h-[2px] after:bg-[#DBD828] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 whitespace-nowrap"
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={index}
                href={item.path}
                className="relative px-1 lg:px-2 transition-all duration-300 ease-in-out hover:text-[#DBD828] after:block after:w-full after:h-[2px] after:bg-[#DBD828] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 whitespace-nowrap"
                onClick={(e) => handleProtectedRoute(e, item.path)}
              >
                {item.name}
              </Link>
            )
          ))}
        </div>

        {/* Right: Login Button and Mobile Menu Button */}
        <div className="flex items-center ml-auto gap-1 xs:gap-2 sm:gap-3">
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            {user ? (
              <motion.button
                onClick={handleLogout}
                className="flex items-center gap-1 lg:gap-2 px-3 py-1 lg:px-4 lg:py-2 text-[#F4F269] bg-[#2844A2] rounded-lg font-modernAntiqua text-sm lg:text-base transition-all duration-300 hover:bg-[#33569e] hover:shadow-[0_0_7px_5px_rgba(231,246,255,0.3)] whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Logout
              </motion.button>
            ) : (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/login"
                  className="px-3 py-1 lg:px-4 lg:py-2 text-[#F4F269] bg-[#2844A2] rounded-lg font-modernAntiqua text-sm lg:text-base transition-all duration-300 hover:bg-[#33569e] hover:shadow-[0_0_7px_5px_rgba(231,246,255,0.3)] whitespace-nowrap"
                >
                  Log In
                </Link>
              </motion.div>
            )}
          </div>

          {/* Mobile Menu Button - Only visible on screens below tablet size (768px) */}
          <div className="md:hidden flex items-center">
            <motion.button 
              onClick={() => setMenuOpen(!menuOpen)}
              whileTap={{ scale: 0.9 }}
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 180 }}
                    exit={{ rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <X className="text-[#F4F269] w-6 h-6 xs:w-7 xs:h-7" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 180 }}
                    animate={{ rotate: 0 }}
                    exit={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Menu className="text-[#F4F269] w-6 h-6 xs:w-7 xs:h-7" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu - AnimatePresence for smooth animation */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="absolute top-full left-0 w-full bg-gradient-to-r from-[#180F40] via-[#281287] to-[#180F40] text-center text-[#F4F269] text-sm xs:text-base sm:text-lg font-modernAntiqua py-2 xs:py-3 flex flex-col gap-1 xs:gap-2 shadow-lg md:hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="px-3 py-1 xs:px-4 xs:py-2 flex justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/" className="text-[#FFE15D] hover:text-[#F4F269] font-modernAntiqua text-base xs:text-xl transition-colors duration-300">
                  Osmoze&apos;25
                </Link>
              </motion.div>
              
              {navItems.map((item, index) => (
                item.external ? (
                  <motion.a
                    key={index}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#DBD828] transition-colors duration-300 py-1 xs:py-1.5 whitespace-nowrap"
                    onClick={() => setMenuOpen(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.a>
                ) : (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={item.path}
                      className="hover:text-[#DBD828] transition-colors duration-300 py-1 xs:py-1.5 block whitespace-nowrap"
                      onClick={(e) => {
                        setMenuOpen(false);
                        handleProtectedRoute(e, item.path);
                      }}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                )
              ))}

              {user ? (
                <motion.button
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                  className="flex items-center justify-center gap-1 xs:gap-1.5 mt-1 xs:mt-1.5 px-3 py-1 xs:px-4 xs:py-1.5 text-[#F4F269] bg-[#2844A2] rounded-lg font-modernAntiqua text-sm xs:text-base mx-auto w-4/5 whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Logout
                </motion.button>
              ) : (
                <motion.div
                  className="w-4/5 mx-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/login"
                    className="mt-1 xs:mt-1.5 px-3 py-1 xs:px-4 xs:py-1.5 block text-center text-[#F4F269] bg-[#2844A2] rounded-lg font-modernAntiqua text-sm xs:text-base transition-all duration-300 hover:bg-[#33569e] whitespace-nowrap"
                    onClick={() => setMenuOpen(false)}
                  >
                    Log In
                  </Link>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;