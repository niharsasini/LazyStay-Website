import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const AboutGrand = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className=" py-4 mt-7">
      <h2 className="text-[24px] font-bold text-[rgb(74,74,74)] p-0 m-0">
        About Lazystay Grand Patia
      </h2>

      <div className="flex flex-wrap items-start gap-6 text-gray-700 text-sm">
        <div className="flex items-start gap-2">
          <FaCheckCircle className="text-gray-500 mt-1" />
          <span className="text-[14px] font-normal text-[rgb(114,113,113)] p-0 m-0">
            Bhubaneswar Railway Station and Biju Patnaik International Airport
            is 12 km away respectively
          </span>
        </div>

        <div className="flex items-start gap-2">
          <FaCheckCircle className="text-gray-500 mt-1" />
          <span className="text-[14px] font-normal text-[rgb(114,113,113)] p-0 m-0">
            The KIIT University is just 400 m away
          </span>
        </div>

        <div className="flex items-start gap-2">
          <FaCheckCircle className="text-gray-500 mt-1" />
          <span className="text-[14px] font-normal text-[rgb(114,113,113)] p-0 m-0">
            There is an in-house restaurant nearby
          </span>
        </div>
      </div>

      <button
        onClick={() => setShowMore(!showMore)}
        className="text-teal-600 mt-4 hover:underline text-sm"
      >
        {showMore ? "Read Less" : "Read More"}
      </button>

      {showMore && (
        <div className="mt-6 space-y-6 text-gray-700 text-sm leading-relaxed">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-4">
              <p>
                <strong>Lazystay Grand Patia</strong> is situated in the vibrant
                Patia area of Bhubaneswar, just 400m from KIIT University and
                easily accessible from Bhubaneswar Railway Station (11.4 km) and
                Biju Patnaik Airport (11.9 km).
              </p>
              <p>
                Guests enjoy <strong>25 modern rooms</strong> across 4 floors
                with elevator access, <strong>complimentary breakfast</strong>,
                high-speed Wi-Fi, and an <strong>in-house restaurant</strong>.
              </p>
              <p>
                The hotel offers an air-conditioned lobby, pantry, iron board,
                public washroom, and free parking (10 two-wheelers, 3
                four-wheelers).
                <strong> Round-the-clock security and room service</strong>{" "}
                ensure a safe and comfortable stay. It’s{" "}
                <strong>couple-friendly</strong> and supports local IDs and
                digital payments.
              </p>
            </div>

            <div className="space-y-4">
              <p>
                Room categories include Acacia (Economy), Oak (Standard), and
                Maple (Deluxe). All rooms feature{" "}
                <strong>TV, AC, intercom, toiletries</strong>, wardrobes, and
                workspaces.
              </p>
              <p>
                The hotel is ideal for{" "}
                <strong>families, professionals, and tourists</strong>
                looking for comfort and proximity to city highlights.
              </p>
            </div>
          </div>

          {/* Three-column highlight section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            {/* Key Attractions */}
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 shadow">
              <h3 className="text-blue-800 font-semibold mb-2">
                Key Attractions
              </h3>
              <ul className="list-disc list-inside text-[13.5px]">
                <li>Nandankanan Zoological Park (5.5 km)</li>
                <li>Botanical Garden (7.4 km)</li>
                <li>Shikharchandi Temple (2.2 km)</li>
                <li>Khandagiri Caves (13.2 km)</li>
              </ul>
            </div>

            {/* Food Lovers */}
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 shadow">
              <h3 className="text-blue-800 font-semibold mb-2">
                Nearby Restaurants
              </h3>
              <ul className="list-disc list-inside text-[13.5px]">
                <li>Havana Cafe & Resto (2.5 km)</li>
                <li>Aangan Horizon (1.5 km)</li>
                <li>Malvaan Restaurant (2 km)</li>
              </ul>
            </div>

            {/* Hospitals */}
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 shadow">
              <h3 className="text-blue-800 font-semibold mb-2">
                Hospitals Nearby
              </h3>
              <ul className="list-disc list-inside text-[13.5px]">
                <li>Pradyumna Bal Memorial (1.5 km)</li>
                <li>CARE Hospital (4 km)</li>
                <li>Kalinga Hospital (5.4 km)</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutGrand;
