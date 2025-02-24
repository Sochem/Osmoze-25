import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-r from-[#180F40] via-[#281287] to-[#180F40] py-4 px-6 md:px-10 flex items-center shadow-lg relative z-50">
      {/* Left: Logo */}
      <div className="flex items-center">
        <div className="w-[200px] md:w-[260px] h-auto flex items-center">
          <Image src="/images/OsmozeLogo.png" alt="Osmoze Logo" width={260} height={160} />
        </div>
      </div>

      {/* Center: Navigation Links (Desktop) */}
      <div className="hidden md:flex gap-8 text-[#F4F269] text-lg font-modernAntiqua justify-start ml-6">
        {["About Us", "Team", "Events", "Announcements", "Dashboard"].map((item, index) => (
          <Link
            key={index}
            href={`/${item.toLowerCase().replace(/ /g, "")}`}
            className="relative px-2 transition-all duration-300 ease-in-out hover:text-[#DBD828] after:block after:w-full after:h-[2px] after:bg-[#DBD828] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Right: Login Button and Mobile Menu Button */}
      <div className="flex items-center ml-auto">
        <div className="hidden md:flex">
          <Link
            href="/login"
            className="px-6 py-2 text-[#F4F269] bg-[#2844A2] rounded-lg font-modernAntiqua text-lg transition-all duration-300 ease-out hover:shadow-[0_0_7px_5px_#E7F6FF]"
          >
            Log In
          </Link>
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
        className={`absolute top-full left-0 w-full bg-gradient-to-r from-[#180F40] via-[#281287] to-[#180F40] text-center text-[#F4F269] text-lg font-modernAntiqua py-4 flex flex-col gap-4 shadow-lg transform transition-all duration-500 ease-in-out ${menuOpen ? "translate-y-0 opacity-100 scale-100" : "-translate-y-[200%] opacity-0 scale-90"} md:hidden`}
      >
        {["About Us", "Team", "Events", "Announcements", "Dashboard"].map((item, index) => (
          <Link
            key={index}
            href={`/${item.toLowerCase().replace(/ /g, "")}`}
            className="hover:text-[#DBD828] transition-colors duration-300"
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </Link>
        ))}
        <Link
          href="/login"
          className="mt-2 px-6 py-2 text-[#F4F269] bg-[#2844A2] rounded-lg font-modernAntiqua text-lg transition-all duration-300 ease-out hover:shadow-[0_0_7px_5px_#E7F6FF]"
        >
          Log In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
