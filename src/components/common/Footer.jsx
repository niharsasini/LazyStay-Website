import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube, FaGoogle } from "react-icons/fa";

import { CONTACT_INFO, SOCIAL_LINKS } from "../../constants/footerLinks";

const iconMap = {
  facebook: <FaFacebookF />,
  instagram: <FaInstagram />,
  youtube: <FaYoutube />,
  google: <FaGoogle />,
};

const Footer = () => {
  return (
    <footer className="bg-[#0b0a11] text-white pt-14 pb-6 px-4 sm:px-6 md:px-8 text-sm">
      {/* ================= TOP SECTION ================= */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 border-b border-orange-500 pb-10">
        {/* Branding */}
        <div>
          <div className="flex items-center space-x-3 mb-5">
            <img
              src="/assets/images/logo.png"
              alt="LazyStay Logo"
              className="h-10 w-auto object-contain"
            />
            <h2 className="text-lg font-semibold text-orange-500 leading-tight">
              LazyStay <br /> Hospitality
            </h2>
          </div>

          <p className="text-gray-400 leading-relaxed">
            Discover comfort and luxury in Bhubaneswar. Experience premium
            hospitality with personalized service and elegant stays.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-orange-500 font-semibold mb-5 text-base">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li>
              <Link to="/" className="hover:text-orange-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/hotels" className="hover:text-orange-400 transition">
                Our Hotels
              </Link>
            </li>
            <li>
              <Link
                to="/amenities"
                className="hover:text-orange-400 transition"
              >
                Amenities
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-orange-400 transition">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-orange-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-orange-400 transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Our Hotels */}
        <div>
          <h3 className="text-orange-500 font-semibold mb-5 text-base">
            Our Hotels
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li>
              <Link to="/grand" className="hover:text-orange-400 transition">
                LazyStay Grand
              </Link>
            </li>
            <li>
              <Link to="/elite" className="hover:text-orange-400 transition">
                LazyStay Elite
              </Link>
            </li>
          </ul>

          <div className="mt-6 text-gray-400 text-sm">
            <p>Check-in: 12:00 PM</p>
            <p>Check-out: 11:00 AM</p>
          </div>
        </div>

        {/* Contact & Policies */}
        <div>
          <h3 className="text-orange-500 font-semibold mb-5 text-base">
            Contact & Policies
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li>📞 {CONTACT_INFO.phone}</li>

            <li>
              ✉️{" "}
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="hover:text-orange-400 transition"
              >
                {CONTACT_INFO.email}
              </a>
            </li>

            <li>📍 {CONTACT_INFO.address}</li>

            <li>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition"
              >
                View on Google Maps
              </a>
            </li>

            <li>
              <Link
                to="/privacy-policy"
                className="hover:text-orange-400 transition"
              >
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link
                to="/terms-of-service"
                className="hover:text-orange-400 transition"
              >
                Terms of Service
              </Link>
            </li>

            <li>
              <Link
                to="/refund-policy"
                className="hover:text-orange-400 transition"
              >
                Refund & Cancellation Policy
              </Link>
            </li>

            <li className="text-gray-500 text-xs pt-2">
              GSTIN: 22ABCDE1234F1Z5
            </li>
          </ul>
        </div>

        {/* Newsletter / Extra */}
        <div>
          <h3 className="text-orange-500 font-semibold mb-5 text-base">
            Stay Updated
          </h3>

          <p className="text-gray-400 mb-4">
            Subscribe for special offers and updates.
          </p>

          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded bg-gray-800 text-white outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 transition text-white py-2 rounded font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* ================= BOTTOM SECTION ================= */}
      <div className="max-w-7xl mx-auto mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <div>
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} LazyStay Hospitality. All rights
            reserved.
          </p>

          <p className="text-gray-500 text-xs mt-1">
            We Accept: UPI | Visa | MasterCard | Cash
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 text-lg text-gray-300">
          {SOCIAL_LINKS.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="hover:text-orange-400 transition"
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
