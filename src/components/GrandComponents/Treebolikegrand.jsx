import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { IoLocationSharp, IoClose } from "react-icons/io5";
import { FaStar, FaShareAlt, FaWifi, FaBed, FaParking } from "react-icons/fa";
import {
  MdOutlineAcUnit,
  MdOutlineShower,
  MdSecurity,
  MdElevator,
  MdOutlinePayment,
} from "react-icons/md";
import { PiToiletLight } from "react-icons/pi";
import { GiFlatbed, GiIronHulledWarship } from "react-icons/gi";
import { RiRestaurant2Line } from "react-icons/ri";
import { TbIroning1 } from "react-icons/tb";
import RoomtypeGrand from "./RoomtypeGrand.jsx";
import RatingsGrand from "./RatingsGrand.jsx";
import AboutGrand from "./AboutGrand.jsx";
import RulespolicyGrand from "./RulespolicyGrand.jsx";
import QuestionGrand from "./QuestionGrand.jsx";

const Treebolike = () => {
  const [showMore, setShowMore] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const images = [
    "/assets/images/grand/grand1.JPG",
    "/assets/images/grand/grand2.JPG",
    "/assets/images/grand/grand3.JPG",
    "/assets/images/grand/grand4.JPG",
  ];

  const groupedAmenities = {
    "In room facilities": [
      { label: "Free Wifi", icon: <FaWifi /> },
      { label: "Ac Room", icon: <MdOutlineAcUnit /> },
      { label: "Complimentary Toiletries", icon: <PiToiletLight /> },
      { label: "Queen Bed", icon: <FaBed />, highlight: true },
      { label: "King Bed", icon: <FaBed />, highlight: true },
      { label: "Geyser", icon: <MdOutlineShower /> },
      { label: "Flat Screen Tv", icon: <GiFlatbed /> },
    ],
    "Eating & Dining": [
      { label: "Restaurant", icon: <RiRestaurant2Line />, dot: true },
      { label: "Free Breakfast", icon: <IoClose /> },
    ],
    General: [
      { label: "Limited Parking", icon: <FaParking /> },
      { label: "24 Hour Security", icon: <MdSecurity /> },
      { label: "Elevator", icon: <MdElevator /> },
    ],
    "Personal Services": [
      { label: "Room Service", icon: <GiIronHulledWarship /> },
      { label: "Card Payment Accepted", icon: <MdOutlinePayment /> },
      { label: "Ironing Board", icon: <TbIroning1 /> },
    ],
  };

  return (
    <div className="bg-white px-6 py-4 max-w-7xl mx-auto mt-4">
      {/* Remaining Sections */}
      <div className="mt-10 border-t pt-6">
        <h3 className="text-[24px] font-bold text-[rgb(74,74,74)] p-0 m-0">
          Amenities
        </h3>

        {!showMore && (
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-700 mt-4">
            {Object.values(groupedAmenities)[0]
              ?.slice(0, 6)
              .map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="bg-gray-100 w-8 h-8 flex items-center justify-center rounded-full text-gray-600 text-base">
                    {item.icon}
                  </div>
                  <span className="text-[13px] font-medium text-[rgb(114,113,113)] p-0 m-0">
                    {item.label}
                  </span>
                </div>
              ))}
            <button
              onClick={() => setShowMore(true)}
              className="text-teal-600 hover:underline font-medium whitespace-nowrap"
            >
              +{Object.values(groupedAmenities).flat().length - 6} more
            </button>
          </div>
        )}

        {showMore && (
          <div className="w-full mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
              {Object.entries(groupedAmenities).map(
                ([groupTitle, amenities], groupIdx) => (
                  <div key={groupIdx} className="flex flex-col">
                    <h4 className="text-base font-semibold text-[#004d40] mb-3">
                      {groupTitle}
                    </h4>
                    <div className="space-y-3 text-sm text-gray-700">
                      {amenities.map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="bg-gray-100 w-8 h-8 flex items-center justify-center rounded-full text-gray-600 text-base">
                            {item.icon}
                          </div>
                          <span className="flex items-center gap-1 text-[12px] font-medium text-[rgb(114,113,113)] p-0 m-0">
                            {item.label}
                            {item.highlight && (
                              <span className="text-red-500 font-bold">*</span>
                            )}
                            {item.dot && (
                              <span className="w-2 h-2 bg-red-500 rounded-full inline-block" />
                            )}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
            <div className="mt-4">
              <button
                onClick={() => setShowMore(false)}
                className="text-teal-600 hover:underline font-medium"
              >
                Show less
              </button>
            </div>
          </div>
        )}
      </div>

      {showMap && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center px-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl h-[500px] relative">
            <button
              onClick={() => setShowMap(false)}
              className="absolute top-2 right-4 text-gray-500 hover:text-red-600 text-3xl font-bold"
            >
              &times;
            </button>
            <iframe
              title="Hotel Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14986.24098645565!2d85.82442417701514!3d20.354731264600063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a75ea6e52c3f%3A0x54bda720154e94c4!2sLazystay%20Grand%20Patia!5e0!3m2!1sen!2sin!4v1719140226935!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-b-xl"
            ></iframe>
          </div>
        </div>
      )}

      <AboutGrand />
      <RoomtypeGrand />
      <RatingsGrand />
      <RulespolicyGrand />
      <QuestionGrand />
    </div>
  );
};

export default Treebolike;
