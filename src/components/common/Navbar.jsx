import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  NAV_LINKS_LEFT,
  NAV_LINKS_RIGHT,
  MOBILE_NAV_LINKS,
  CONTACT_INFO,
  SOCIAL_ICONS,
} from "../../constants/navbarLinks";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  const formatLabel = (label) =>
    label.charAt(0).toUpperCase() + label.slice(1).toLowerCase();

  return (
    <header className="bg-black text-white py-3 md:py-4 shadow-md sticky top-0 z-50">
      {/* Mobile Top Bar */}
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between md:hidden">
        <img
          src="/assets/images/logo.png"
          alt="LazyStay Logo"
          className="h-10 w-auto drop-shadow object-cover"
        />
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="text-white text-2xl"
        >
          <i className="fas fa-bars" />
        </button>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex max-w-7xl mx-auto px-4 flex-col lg:flex-row items-center justify-between text-xs sm:text-sm md:text-base font-sans font-semibold tracking-wide gap-2 sm:gap-4">
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-y-3 md:gap-y-0 gap-x-4 md:gap-x-10">
          {/* Left Menu Items */}
          <nav className="flex flex-wrap justify-center md:justify-start items-center space-x-4">
            {NAV_LINKS_LEFT.map((item, index) =>
              item.scrollId ? (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.scrollId)}
                  className="relative px-2 py-1 transition duration-300 hover:text-red-400 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-red-400 after:transition-all after:duration-300"
                >
                  {formatLabel(item.label)}
                </button>
              ) : (
                <Link
                  key={index}
                  to={item.link}
                  className="relative px-2 py-1 transition duration-300 hover:text-red-400 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-red-400 after:transition-all after:duration-300"
                >
                  {formatLabel(item.label)}
                </Link>
              )
            )}
          </nav>

          {/* Center Logo */}
          <div className="flex items-center justify-center space-x-4">
            <div className="hidden md:block w-20 sm:w-24 h-px bg-gray-500" />
            <img
              src="/assets/images/logo.png"
              alt="LazyStay Logo"
              className="h-10 w-auto mx-auto drop-shadow object-cover"
            />
            <div className="hidden md:block w-20 sm:w-24 h-px bg-gray-500" />
          </div>

          {/* Right Menu Items */}
          <div className="flex flex-wrap justify-center md:justify-end items-center space-x-4">
            {NAV_LINKS_RIGHT.map((item, index) =>
              item.scrollId ? (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.scrollId)}
                  className="relative px-2 py-1 transition duration-300 hover:text-red-400 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-red-400 after:transition-all after:duration-300"
                >
                  {formatLabel(item.label)}
                </button>
              ) : (
                <Link
                  key={index}
                  to={item.link}
                  className="relative px-2 py-1 transition duration-300 hover:text-red-400 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-red-400 after:transition-all after:duration-300"
                >
                  {formatLabel(item.label)}
                </Link>
              )
            )}
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex">
          <div className="w-[80%] sm:w-[70%] bg-[#1a1a1a] p-6 flex flex-col justify-between min-h-screen">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <img
                src="/assets/images/logo.png"
                alt="Logo"
                className="h-10 w-auto"
              />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white text-2xl"
              >
                <i className="fas fa-times" />
              </button>
            </div>

            {/* Menu */}
            <nav className="space-y-3 text-sm font-medium">
              {MOBILE_NAV_LINKS.map((item, index) =>
                item.scrollId ? (
                  <button
                    key={index}
                    onClick={() => {
                      scrollToSection(item.scrollId);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left border-b border-gray-700 pb-2 text-white hover:text-[#d2a76c] transition"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={index}
                    to={item.link}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block border-b border-gray-700 pb-2 text-white hover:text-[#d2a76c] transition"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            {/* Contact Info */}
            <div className="mt-6 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <i className="fas fa-phone text-[#d2a76c] mt-1" />
                <div>
                  <p className="text-xs text-gray-400">CALL NOW</p>
                  <p className="text-white font-medium">{CONTACT_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <i className="fas fa-envelope text-[#d2a76c] mt-1" />
                <div>
                  <p className="text-xs text-gray-400">SEND EMAIL</p>
                  <p className="text-white font-medium">{CONTACT_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <i className="fas fa-clock text-[#d2a76c] mt-1" />
                <div>
                  <p className="text-xs text-gray-400">OFFICE HOURS</p>
                  <p className="text-white font-medium">{CONTACT_INFO.hours}</p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-between mt-8 border-t border-gray-600 pt-4 text-lg">
              {SOCIAL_ICONS.map((icon, index) => (
                <i
                  key={index}
                  className={`${icon} text-white hover:text-[#d2a76c] cursor-pointer`}
                />
              ))}
            </div>
          </div>

          {/* Click Outside to Close */}
          <div
            className="flex-1"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
