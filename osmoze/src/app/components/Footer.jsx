import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-[#07000B] bg-opacity-67 text-[#F4F269] font-modernAntiqua py-8 px-6 md:px-12">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center max-w-6xl space-y-6 lg:space-y-0">
        {/* Left Section - Logo & Event Details */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/">
            <Image
              src="/images/OsmozeLogo.png"
              alt="Osmoze Logo"
              width={90}
              height={90}
            />
          </Link>
          <div className="text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-bold">Osmoze’25</h1>
            <p className="text-lg mt-1">
              The Annual <br className="hidden sm:block" /> Chemical
              Extravaganza
            </p>
          </div>
        </div>

        {/* Right Section - Contact & Socials */}
        <div className="flex flex-col items-center lg:items-start space-y-6 w-full lg:w-auto">
          {/* Contact Us */}
          <div className="flex flex-col sm:flex-row items-center sm:justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6">
            <h2 className="text-xl sm:text-2xl font-bold whitespace-nowrap">
              Contact Us
            </h2>
            <p className="hover:text-[#8DD5FF] transition-colors duration-300 cursor-pointer">
              Raksha Kushwaha
            </p>
            <p className="hover:text-[#8DD5FF] transition-colors duration-300 cursor-pointer">
              +91 82505 75696
            </p>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col sm:flex-row items-center sm:justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6">
            <h2 className="text-xl sm:text-2xl font-bold whitespace-nowrap">
              Follow Us
            </h2>
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com/Sochem.iitbhu/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-125 transition-transform duration-300"
              >
                <FaFacebookF className="text-blue-500 text-2xl sm:text-3xl" />
              </a>
              <a
                href="https://www.instagram.com/sochem_iitbhu/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-125 transition-transform duration-300"
              >
                <FaInstagram className="text-pink-500 text-2xl sm:text-3xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/sochem/?originalSubdomain=in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-125 transition-transform duration-300"
              >
                <FaLinkedinIn className="text-blue-700 text-2xl sm:text-3xl" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Divider & Copyright */}
      <div className="w-full border-t border-[#8DD5FF] opacity-75 mt-6"></div>
      <p className="text-center text-base sm:text-lg mt-4">
        &copy; 2025 All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
