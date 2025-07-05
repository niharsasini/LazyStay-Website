import React, { useState } from "react";
import { FaRegClock, FaHeart, FaReceipt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const RulespolicyElite = () => {
  const [showModal, setShowModal] = useState(false);

  const policyList = [
    {
      title: "Couple Friendly",
      text: "Lazystay Elite welcomes unmarried couples.",
    },
    {
      title: "Local ID Policy",
      text: "Guests can check in using any local or outstation ID proof (PAN card not accepted).",
    },
    {
      title: "Check-in and Check-out",
      text: "Check-in: 01:00 pm | Check-out: 11:00 am",
    },
    {
      title: "Cancellation Policy",
      text: "No cancellation fee is charged if the booking is cancelled 24 hours before the standard check-in time. If the booking is cancelled within 24 hours of the standard check-in time, one night's tariff (based on the booking amount) shall be charged for the room(s) booked. No refunds shall be applicable for non-refundable bookings. The convenience fee is also non-refundable.",
    },
    {
      title: "Convenience Fee",
      text: "A Convenience Fee is applied to all bookings made via the mobile app or website. It supports 24/7 service and is part of the total amount shown at checkout. This fee is non-refundable even in case of cancellation or no-show.",
    },
    {
      title: "Child Reservation Policy",
      text: "A maximum of 1 child upto 8 years and 1 infant upto 2 years is allowed free of charge, subject to room occupancy capacity. Breakfast included. No extra bed/mattress will be provided. Extra person charges apply above 8 years.",
    },
    {
      title: "GST Details",
      text: "GST details must be added accurately while booking. No modifications after check-out.",
    },
    {
      title: "Bulk Booking Policy",
      text: "3 or more rooms are treated as bulk bookings. 50% advance deposit is required. Cancellations within 7 days of check-in attract a 50% cancellation fee. No-shows are also charged 50% of the total stay charges.",
    },
    {
      title: "Identification Card",
      text: "All adults must carry a valid photo ID: Driving License, Voter ID, Passport, Ration Card or Aadhar Card. PAN Card is not accepted.",
    },
    {
      title: "Late Check-Out Policy",
      text: "Late check-out between 11 AM and 1 PM is free, subject to availability. After 1 PM, full night’s tariff is applicable.",
    },
    {
      title: "PAH Booking Payment",
      text: "Full booking amount is to be paid at check-in. If part-payment was done, the balance must be paid at check-in.",
    },
    {
      title: "Restaurant on-site",
      text: "A restaurant is available on the hotel premises.",
    },
    {
      title: "Access to Bar, Restaurant & Swimming Pool",
      text: "Access is subject to government approval and availability at the property.",
    },
    {
      title: "Visitor Policy",
      text: "Visitors are not allowed beyond 6 PM. To stay later, they must be registered as extra occupants.",
    },
    {
      title: "Early Check-In Policy",
      text: "Early check-in after 10 AM is subject to availability and confirmed only upon arrival. For check-in before 10 AM, half-day’s tariff is charged.",
    },
  ];

  return (
    <div className="py-6">
      <h2 className="text-[24px] font-bold text-[rgb(74,74,74)] p-0 m-0">
        Rules & Policies
      </h2>

      <div className="grid sm:grid-cols-3 gap-6 text-sm text-gray-700 mt-4">
        <div>
          <div className="flex items-center gap-2 text-[14px] font-semibold text-[rgb(74,74,74)] p-0 m-0">
            <FaRegClock className="text-gray-600" />
            Check-in and Check-out
          </div>
          <p className="text-[14px] text-[rgb(114,113,113)] mt-2">
            Check-in: 01:00 pm &nbsp;&nbsp; Check-out: 11:00 am
          </p>
        </div>

        <div>
          <div className="flex items-center gap-2 text-[14px] font-semibold text-[rgb(74,74,74)]">
            <FaHeart className="text-gray-600" />
            Couple Friendly
          </div>
          <p className="text-[14px] text-[rgb(114,113,113)] mt-2">
            This hotel welcomes unmarried couples
          </p>
        </div>

        <div>
          <div className="flex items-center gap-2 text-[14px] font-semibold text-[rgb(74,74,74)]">
            <FaReceipt className="text-gray-600" />
            Cancellation Policy
          </div>
          <p className="text-[14px] text-[rgb(114,113,113)] mt-2 border border-[rgb(220,246,242)] bg-[rgb(220,246,242)] px-3 py-1 inline-block rounded">
            Free cancellation 24 hrs before check-in
          </p>
        </div>
      </div>

      <button
        onClick={() => setShowModal(true)}
        className="text-teal-600 mt-4 hover:underline text-sm"
      >
        Read all
      </button>

      {showModal && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-center items-center"
          onClick={(e) => e.target === e.currentTarget && setShowModal(false)}
        >
          <div className="bg-white w-[95%] sm:w-[90%] max-w-2xl max-h-[90vh] p-6 rounded-lg relative shadow-lg overflow-hidden">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl"
              aria-label="Close"
            >
              <IoClose />
            </button>

            <h2 className="text-[24px] font-bold text-[rgb(74,74,74)] mb-4">
              Rules and Policies
            </h2>

            <div className="overflow-y-auto pr-2 max-h-[75vh] space-y-4 text-gray-700 text-sm custom-scrollbar">
              {policyList.map((item, index) => (
                <div key={index}>
                  <strong className="text-[rgb(22,60,53)] text-[14px] font-semibold p-0 m-0">
                    {item.title}
                  </strong>
                  <br />
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RulespolicyElite;
