import React, { useState } from "react";
import { FaRegClock, FaHeart, FaReceipt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const RulespolicyGrand = () => {
  const [showModal, setShowModal] = useState(false);

  const policyList = [
    {
      title: "Couple Friendly",
      text: "Lazystay Grand Patia welcomes unmarried couples.",
    },
    {
      title: "Local ID Policy",
      text: "Guests can check in using any local or outstation ID proof (PAN card not accepted).",
    },
    {
      title: "Check-in and Check-out",
      text: "Check-in: 01:00 PM | Check-out: 11:00 AM",
    },
    {
      title: "Cancellation Policy",
      text: "No cancellation fee is charged if the booking is cancelled 24 hours before the standard check-in time. If the booking is cancelled within 24 hours, one night's tariff shall be charged. No refunds for non-refundable bookings. The convenience fee is also non-refundable.",
    },
    {
      title: "Convenience Fee",
      text: "A non-refundable Convenience Fee is applied to all bookings via the mobile app or website. It supports 24/7 service. The fee is included in the total checkout amount and is applicable for all payment modes.",
    },
    {
      title: "Child Reservation Policy",
      text: "1 child up to 8 years and 1 infant up to 2 years allowed free of charge (no extra bed). Extra person charges apply above 8 years.",
    },
    {
      title: "GST Details",
      text: "GST details must be added at the time of booking. Post check-out changes are not allowed.",
    },
    {
      title: "Bulk Booking Policy",
      text: "Bookings with 3 or more rooms are considered bulk bookings. 50% advance is required. Cancellations within 7 days incur 50% charges. No-shows are also charged 50%.",
    },
    {
      title: "Identification Card",
      text: "All adults must carry valid ID: Aadhar, Passport, Voter ID, Ration Card, or Driving License. PAN Card is not accepted.",
    },
    {
      title: "Early Check-In Policy",
      text: "Early check-in after 11 AM is subject to availability and confirmed upon arrival. Before 11 AM, half-day’s tariff is charged.",
    },
    {
      title: "Late Check-Out Policy",
      text: "Late check-out until 1 PM is free (subject to availability). After 1 PM, a full night’s tariff is applicable.",
    },
    {
      title: "Foreign Guest Admission",
      text: "This hotel welcomes international guests and allows them to book rooms and stay.",
    },
    {
      title: "PAH Booking Payment",
      text: "The full booking amount must be paid at check-in. Any remaining balance is also due at check-in.",
    },
    {
      title: "Restaurant on-site",
      text: "A restaurant is available within the hotel premises.",
    },
    {
      title: "Access to Bar, Restaurant & Swimming Pool",
      text: "These amenities are subject to government approval and availability at the property.",
    },
    {
      title: "Visitor Policy",
      text: "Visitors are not allowed beyond 6 PM. Non-resident guests staying later must be registered as extra occupants.",
    },
  ];

  return (
    <div className="py-6">
      <h2 className="text-[24px] font-bold text-[rgb(74,74,74)]">
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

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-center items-center"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowModal(false);
          }}
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
                  <strong className="text-[rgb(22,60,53)] text-[15px] font-semibold p-0 m-0">
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

export default RulespolicyGrand;
