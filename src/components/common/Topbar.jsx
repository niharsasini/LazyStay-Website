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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 sm:py-3 flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-0">
        {/* Contact Info + Mobile Social Icons + Search (Mobile) */}
        <div className="flex flex-col md:flex-row md:items-center gap-2 w-full md:w-auto">
          {/* Phone & Social (mobile) */}
          <div className="flex items-center justify-between gap-1 text-red-600 text-xs w-full sm:w-auto">
            {/* Phone Number */}
            <div className="flex items-center gap-1">
              <i className="fas fa-phone-alt" />
              <span className="text-gray-700 font-medium">
                (+91) 8455007723
              </span>
            </div>

            {/* 👇 Mobile Social Icons (visible only on small screens) */}
            <div className="flex sm:hidden items-center gap-2 ml-2">
              <button
                onClick={() =>
                  window.open("https://www.facebook.com/lazystay", "_blank")
                }
                className="text-gray-500 hover:text-red-600 text-sm"
              >
                <i className="fab fa-facebook-f" />
              </button>
              <button
                onClick={() =>
                  window.open("https://twitter.com/lazystayhotels", "_blank")
                }
                className="text-gray-500 hover:text-red-600 text-sm"
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
                className="text-gray-500 hover:text-red-600 text-base"
              >
                <RiInstagramFill />
              </button>
              <button
                onClick={() =>
                  window.open("https://www.youtube.com/@lazystay", "_blank")
                }
                className="text-gray-500 hover:text-red-600 text-sm"
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
                className="text-gray-500 hover:text-red-600 text-sm"
              >
                <i className="fab fa-google" />
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-[1px] h-4 bg-gray-300" />

          {/* Email + Search (mobile inline) */}
          <div className="flex items-center justify-between gap-2 text-red-600 text-xs w-full sm:w-auto">
            <div className="flex items-center gap-1">
              <i className="fas fa-envelope" />
              <span className="text-gray-700 font-medium">
                sales@lazystay.com
              </span>
            </div>
            {/* 👇 Search icon always visible now on mobile */}
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="sm:hidden text-gray-600 hover:text-[#d2a76c] transition"
              aria-label="Search"
            >
              <FiSearch size={16} />
            </button>
          </div>
        </div>

        {/* Social (desktop only) + CTA + Search (desktop only) */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-end gap-2 w-full md:w-auto relative">
          {/* Social Icons (hidden on mobile) */}
          <div className="hidden sm:flex items-center gap-2 sm:gap-3 text-sm">
            <button
              onClick={() =>
                window.open("https://www.facebook.com/lazystay", "_blank")
              }
              className="text-gray-500 hover:text-red-600"
            >
              <i className="fab fa-facebook-f" />
            </button>
            <button
              onClick={() =>
                window.open("https://twitter.com/lazystayhotels", "_blank")
              }
              className="text-gray-500 hover:text-red-600"
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
              className="text-gray-500 hover:text-red-600 text-base"
            >
              <RiInstagramFill />
            </button>
            <button
              onClick={() =>
                window.open("https://www.youtube.com/@lazystay", "_blank")
              }
              className="text-gray-500 hover:text-red-600"
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
              className="text-gray-500 hover:text-red-600"
            >
              <i className="fab fa-google" />
            </button>
          </div>

          {/* Explore Hotels Button */}
          <button
            onClick={() => {
              const section = document.getElementById("hotels");
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full sm:w-auto bg-[#d2a76c] hover:bg-[#c6975d] text-white font-semibold text-xs px-4 py-1 sm:py-1.5 rounded uppercase"
          >
            Explore Hotels
          </button>

          {/* Search Icon (desktop only) */}
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="hidden sm:block text-gray-600 hover:text-[#d2a76c] transition"
            aria-label="Search"
          >
            <FiSearch size={16} />
          </button>

          {/* Search Dropdown */}
          {showSearch && (
            <div className="absolute top-12 right-0 w-full sm:w-64 bg-white border rounded-lg shadow-lg p-3 z-50">
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
