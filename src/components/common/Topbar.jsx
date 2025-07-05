import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { RiInstagramFill } from "react-icons/ri";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Topbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const hotels = [
    { name: "Lazystay Grand", path: "/grand" },
    { name: "Lazystay Elite", path: "/elite" },
  ];

  const filteredResults = hotels.filter((hotel) =>
    hotel.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleHotelClick = (path) => {
    setShowSearch(false);
    setSearchTerm("");
    navigate(path);
  };

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0 text-sm">
        {/* Left: Contact Info */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 text-center sm:text-left">
          <div className="flex items-center gap-2 text-red-600">
            <i className="fas fa-phone-alt" />
            <span className="text-gray-700 font-medium text-xs sm:text-sm">
              (+91) 8455007723
            </span>
          </div>
          <div className="hidden sm:block w-[1px] h-4 bg-gray-300" />
          <div className="flex items-center gap-2 text-red-600">
            <i className="fas fa-envelope" />
            <span className="text-gray-700 font-medium text-xs sm:text-sm">
              sales@lazystay.com
            </span>
          </div>
        </div>

        {/* Right: Socials, Booking, Search */}
        <div className="flex items-center gap-4 relative">
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() =>
                window.open("https://www.facebook.com/lazystay", "_blank")
              }
              className="text-gray-500 hover:text-red-600 transition"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </button>

            <button
              onClick={() =>
                window.open("https://twitter.com/lazystayhotels", "_blank")
              }
              className="text-gray-500 hover:text-red-600 transition"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </button>

            <button
              onClick={() =>
                window.open(
                  "https://www.instagram.com/lazystayhospitality",
                  "_blank"
                )
              }
              className="text-gray-500 hover:text-red-600 transition text-lg"
              aria-label="Instagram"
            >
              <RiInstagramFill />
            </button>

            <button
              onClick={() =>
                window.open("https://www.youtube.com/@lazystay", "_blank")
              }
              className="text-gray-500 hover:text-red-600 transition text-lg"
              aria-label="YouTube"
            >
              <i className="fab fa-youtube" />
            </button>

            <button
              onClick={() =>
                window.open(
                  "https://www.google.com/search?q=LazyStay+Hospitality",
                  "_blank"
                )
              }
              className="text-gray-500 hover:text-red-600 transition text-lg"
              aria-label="Google"
            >
              <i className="fab fa-google" />
            </button>
          </div>

          {/* Booking CTA */}
          <button
            onClick={() => {
              const section = document.getElementById("hotels");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="hidden sm:inline-block bg-[#d2a76c] hover:bg-[#c6975d] text-white font-semibold text-xs sm:text-sm px-4 py-1 rounded uppercase"
          >
            Explore Hotels
          </button>

          {/* Search Icon */}
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="text-gray-600 hover:text-[#d2a76c] transition"
            aria-label="Search"
          >
            <FiSearch size={18} />
          </button>

          {/* Search Dropdown */}
          {showSearch && (
            <div className="absolute top-12 right-0 w-64 bg-white border rounded-lg shadow-lg p-4 z-50">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search hotels..."
                className="w-full border px-3 py-2 rounded text-sm mb-2 outline-none focus:ring-2 focus:ring-[#d2a76c]"
              />
              <ul className="max-h-40 overflow-y-auto text-sm">
                {filteredResults.length > 0 ? (
                  filteredResults.map((hotel, index) => (
                    <li
                      key={index}
                      onClick={() => handleHotelClick(hotel.path)}
                      className="py-2 px-3 hover:bg-gray-100 cursor-pointer rounded"
                    >
                      {hotel.name}
                    </li>
                  ))
                ) : (
                  <li className="py-2 px-3 text-gray-400">No results found</li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Topbar;
