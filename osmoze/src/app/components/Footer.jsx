import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#07000B] bg-opacity-67 text-[#F4F269] font-modernAntiqua py-8 px-12">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center max-w-6xl">
        
        {/* Left Section - Logo & Event Details */}
        <div className="flex items-center space-x-4 lg:items-start">
          <Image src="/assets/b5d5f21c5320d8207e66caac935c0e36.png" alt="Osmoze Logo" width={90} height={90} />
          <div>
            <h1 className="text-3xl font-bold">Osmoze’25</h1>
            <p className="text-lg mt-1">The Annual <br /> Chemical Extravaganza</p>
          </div>
        </div>

        {/* Right Section - Contact & Socials (Vertically Aligned) */}
        <div className="flex flex-col items-start lg:items-start space-y-6 mt-6 lg:mt-0">
          
          {/* Contact Us Row */}
          <div className="flex flex-col lg:flex-row items-center lg:items-center space-y-2 lg:space-y-0 lg:space-x-8">
            <h2 className="text-2xl font-bold whitespace-nowrap">Contact Us</h2>
            <p className="hover:text-[#8DD5FF] transition-colors duration-300 cursor-pointer">Raksha Kushwaha</p>
            <p className="hover:text-[#8DD5FF] transition-colors duration-300 cursor-pointer">+91 82505 75696</p>
          </div>

          {/* Follow Us Row */}
          <div className="flex flex-col lg:flex-row items-center lg:items-center space-y-2 lg:space-y-0 lg:space-x-12">
            <h2 className="text-2xl font-bold whitespace-nowrap">Follow Us</h2>
            <div className="flex space-x-6">
              <a href="https://www.facebook.com/Sochem.iitbhu/" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform duration-300">
                <FaFacebookF className="text-blue-500 text-3xl" />
              </a>
              <a href="https://www.instagram.com/sochem_iitbhu/" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform duration-300">
                <FaInstagram className="text-pink-500 text-3xl" />
              </a>
              <a href="https://www.linkedin.com/in/sochem/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform duration-300">
                <FaLinkedinIn className="text-blue-700 text-3xl" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Divider & Copyright */}
      <div className="w-full border-t border-[#8DD5FF] opacity-75 mt-6"></div>
      <p className="text-center text-lg mt-4">&copy; 2025 All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
