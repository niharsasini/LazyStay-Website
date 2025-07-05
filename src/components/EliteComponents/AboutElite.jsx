import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import {
  ELITE_FEATURES,
  ELITE_OVERVIEW,
  ELITE_DETAILS,
} from "../../constants/aboutEliteData";

const AboutElite = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="py-4 mt-7">
      <h2 className="text-[24px] font-bold text-[rgb(74,74,74)] p-0 m-0">
        About Lazystay Elite Patia
      </h2>

      <div className="flex flex-wrap items-start gap-6 text-gray-700 text-sm">
        {ELITE_FEATURES.map((text, idx) => (
          <div key={idx} className="flex items-start gap-2">
            <FaCheckCircle className="text-gray-500 mt-1" />
            <span className="text-[14px] font-normal text-[rgb(114,113,113)] p-0 m-0">
              {text}
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={() => setShowMore(!showMore)}
        className="text-teal-600 mt-4 hover:underline text-sm"
      >
        {showMore ? "Read Less" : "Read More"}
      </button>

      {showMore && (
        <div className="mt-6 space-y-6 text-gray-700 text-sm leading-relaxed">
          {/* Overview Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {ELITE_OVERVIEW.map((column, i) => (
              <div key={i} className="space-y-4">
                {column.map((para, j) => (
                  <p key={j}>{para}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Details Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            {/* Attractions */}
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 shadow">
              <h3 className="text-blue-800 font-semibold mb-2">
                Nearby Attractions
              </h3>
              <ul className="list-disc list-inside text-[13.5px]">
                {ELITE_DETAILS.attractions.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Restaurants */}
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 shadow">
              <h3 className="text-blue-800 font-semibold mb-2">
                Popular Restaurants
              </h3>
              <ul className="list-disc list-inside text-[13.5px]">
                {ELITE_DETAILS.restaurants.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Hospitals */}
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 shadow">
              <h3 className="text-blue-800 font-semibold mb-2">
                Hospitals Nearby
              </h3>
              <ul className="list-disc list-inside text-[13.5px]">
                {ELITE_DETAILS.hospitals.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutElite;
