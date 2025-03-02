"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, LogOut } from "lucide-react";
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { Toaster } from 'react-hot-toast';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  const checkUserStatus = () => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      setUser(null);
    }
  };

  useEffect(() => {
    checkUserStatus();
    window.addEventListener('storage', checkUserStatus);
    window.addEventListener('userStateChange', checkUserStatus);

    return () => {
      window.removeEventListener('storage', checkUserStatus);
      window.removeEventListener('userStateChange', checkUserStatus);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    toast.success('Logged out successfully 👋');
    window.dispatchEvent(new Event('userStateChange'));
    router.push('/');
  };

  const handleProtectedRoute = (e, path) => {
    if (path === '/dashboard' && !user) {
      e.preventDefault();
      toast.error('Please login to access dashboard');
      router.push('/login');
    }
  };

  return (
    <>
    <Toaster position="top-center" reverseOrder={false} />
    <nav className="w-full bg-gradient-to-r from-[#0c081d] via-[#1d0d64] to-[#0c081d]  px-6 md:px-10 flex items-center shadow-lg relative z-50">
      {/* Left: Logo */}
      <div className="flex items-center">
        <div className="w-[200px] md:w-[260px] h-auto flex items-center">
          <Link href="/">
          <Image
            src="/images/OsmozeLogo.png"
            alt="Osmoze Logo"
            width={100}
            height={100}
          />
          </Link>
        </div>
      </div>

      {/* Center: Navigation Links (Desktop) */}
      <div className="hidden md:flex gap-8 text-[#F4F269] text-lg font-modernAntiqua justify-start ml-6">
        {/* {["AboutUs", "Team", "Events", "Announcements", "Dashboard"].map(
          (item, index) => (
            <Link
              key={index}
              href={`/${item.toLowerCase().replace(/ /g, "")}`}
              className="relative px-2 transition-all duration-300 ease-in-out hover:text-[#DBD828] after:block after:w-full after:h-[2px] after:bg-[#DBD828] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              {item}
            </Link>
          )
        )} */}
        {["AboutUs", "Team", "Events", "Announcements", "Dashboard"].map((item, index) => (
  item.toLowerCase() === "announcements" ? (
    <a
      key={index}
      href="https://www.instagram.com/sochem_iitbhu/"
      target="_blank"
      rel="noopener noreferrer"
      className="relative px-2 transition-all duration-300 ease-in-out hover:text-[#DBD828] after:block after:w-full after:h-[2px] after:bg-[#DBD828] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
    >
      {item}
    </a>
  ) : (
    <Link
      key={index}
      href={`/${item.toLowerCase().replace(/ /g, "")}`}
      className="relative px-2 transition-all duration-300 ease-in-out hover:text-[#DBD828] after:block after:w-full after:h-[2px] after:bg-[#DBD828] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
    >
      {item}
    </Link>
  )
))}
      </div>

      {/* Right: Login Button and Mobile Menu Button */}
      <div className="flex items-center ml-auto gap-4">
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-4">
              
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-[#F4F269] bg-[#2844A2] rounded-lg font-modernAntiqua text-lg transition-all duration-300 hover:shadow-[0_0_7px_5px_#E7F6FF]"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="px-6 py-2 text-[#F4F269] bg-[#2844A2] rounded-lg font-modernAntiqua text-lg transition-all duration-300 hover:shadow-[0_0_7px_5px_#E7F6FF]"
            >
              Log In
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center ml-4">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X className="text-[#F4F269] w-8 h-8 transition-transform duration-300 transform rotate-180" />
            ) : (
              <Menu className="text-[#F4F269] w-8 h-8 transition-transform duration-300 transform rotate-0" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-gradient-to-r from-[#180F40] via-[#281287] to-[#180F40] text-center text-[#F4F269] text-lg font-modernAntiqua py-4 flex flex-col gap-4 shadow-lg transform transition-all duration-500 ease-in-out ${
          menuOpen
            ? "translate-y-0 opacity-100 scale-100"
            : "-translate-y-[200%] opacity-0 scale-90"
        } md:hidden`}
      >
        {/* {["AboutUs", "Team", "Events", "Announcements", "Dashboard"].map(
          (item, index) => (
            <Link
              key={index}
              href={`/${item.toLowerCase().replace(/ /g, "")}`}
              className="hover:text-[#DBD828] transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          )
        )} */}
        {["AboutUs", "Team", "Events", "Announcements", "Dashboard"].map((item, index) => (
  item.toLowerCase() === "announcements" ? (
    <a
      key={index}
      href="https://www.instagram.com/sochem_iitbhu/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#DBD828] transition-colors duration-300"
      onClick={() => setMenuOpen(false)}
    >
      {item}
    </a>
  ) : (
    <Link
      key={index}
      href={`/${item.toLowerCase().replace(/ /g, "")}`}
      className="hover:text-[#DBD828] transition-colors duration-300"
      onClick={() => setMenuOpen(false)}
    >
      {item}
    </Link>
  )
))}

        {user ? (
          <>
            
            <button
              onClick={handleLogout}
              className="flex items-center justify-center gap-2 mt-2 px-6 py-2 text-[#F4F269] bg-[#2844A2] rounded-lg font-modernAntiqua text-lg mx-auto"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            href="/login"
            className="mt-2 px-6 py-2 text-[#F4F269] bg-[#2844A2] rounded-lg font-modernAntiqua text-lg transition-all duration-300 hover:shadow-[0_0_7px_5px_#E7F6FF]"
          >
            Log In
          </Link>
        )}
      </div>
    </nav>
    </>
  );
};

export default Navbar;
