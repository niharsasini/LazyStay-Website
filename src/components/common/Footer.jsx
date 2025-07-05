import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaGoogle } from "react-icons/fa";
import {
  QUICK_LINKS,
  EXPLORE_LINKS,
  CONTACT_INFO,
  SOCIAL_LINKS,
} from "../../constants/footerLinks";

const iconMap = {
  facebook: <FaFacebookF />,
  instagram: <FaInstagram />,
  youtube: <FaYoutube />,
  google: <FaGoogle />,
};

const Footer = () => {
  return (
    <footer className="bg-[#0b0a11] text-white pt-10 pb-6 px-4 sm:px-6 md:px-8 text-sm">
      {/* Top Grid Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 border-b border-orange-500 pb-6">
        {/* Branding */}
        <div>
          <div className="flex items-center space-x-3 mb-3">
            <img
              src="/assets/images/logo.png"
              alt="LazyStay Logo"
              className="h-9 w-auto"
            />
            <h2 className="text-[17px] font-semibold text-orange-500 leading-tight">
              LazyStay <br /> Hospitality
            </h2>
          </div>
          <p className="text-gray-400 text-[14px] leading-relaxed">
            Discover comfort and luxury in Bhubaneswar. Your stay, our service.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-orange-500 font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            {QUICK_LINKS.map((link, idx) => (
              <li key={idx} className="hover:text-white cursor-pointer">
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-orange-500 font-bold mb-3">Explore</h3>
          <ul className="space-y-2 text-gray-300">
            {EXPLORE_LINKS.map((link, idx) => (
              <li key={idx} className="hover:text-white cursor-pointer">
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-orange-500 font-bold mb-3">Contact & Policies</h3>
          <ul className="space-y-2 text-gray-300">
            <li>📞 {CONTACT_INFO.phone}</li>
            <li>
              ✉️{" "}
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-orange-300 hover:underline"
              >
                {CONTACT_INFO.email}
              </a>
            </li>
            <li>📍 {CONTACT_INFO.address}</li>
            <li className="pt-2 hover:text-white cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-white cursor-pointer">
              Terms of Service
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-gray-500 text-xs">
          © {new Date().getFullYear()} LazyStay Hospitality. All rights
          reserved.
        </p>

        <div className="flex space-x-4 text-lg text-gray-300">
          {SOCIAL_LINKS.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="hover:text-white"
            >
              {iconMap[item.icon]}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
