import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const RestaurantModal = ({ selectedAmenity, onClose }) => {
  if (!selectedAmenity) return null;

  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    numberOfGuests: 1,
    bookingDate: "",
    bookingTime: "",
    mealTypes: [], // changed from mealType to array
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMealTypeChange = (type) => {
    setFormData((prev) => ({
      ...prev,
      mealTypes: prev.mealTypes.includes(type)
        ? prev.mealTypes.filter((t) => t !== type)
        : [...prev.mealTypes, type],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const htmlContent = `
      <div style="font-family: system-ui, sans-serif; font-size: 14px; color: #2c3e50;">
        <h2>New Restaurant Table Booking from ${formData.fullName}</h2>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Contact Number:</strong> ${formData.contactNumber}</p>
        <p><strong>Meal Type:</strong> ${
          formData.mealTypes.join(", ") || "None selected"
        }</p>
        <p><strong>Booking Date:</strong> ${formData.bookingDate}</p>
        <p><strong>Booking Time:</strong> ${formData.bookingTime}</p>
        <p><strong>Number of Guests:</strong> ${formData.numberOfGuests}</p>
        <p><strong>Message:</strong><br/>${
          formData.message || "No additional message provided."
        }</p>
        <hr style="margin-top: 30px; border-color: #ddd;" />
        <small>This enquiry was generated via Lazystay Restaurant Booking Form</small>
      </div>
    `;

    const templateParams = {
      ...formData,
      mealType: formData.mealTypes.join(", "),
      selectedAmenity: selectedAmenity?.name || "Restaurant",
      html_message: htmlContent,
    };

    emailjs
      .send(
        "service_vki3w9f",
        "template_d7fzjcc",
        templateParams,
        "eB5zMi_N5hvYSPmtu"
      )
      .then(() => {
        alert("✅ Your table booking enquiry has been sent successfully!");
        setIsSubmitting(false);
        onClose();
        setFormData({
          fullName: "",
          contactNumber: "",
          email: "",
          numberOfGuests: 1,
          bookingDate: "",
          bookingTime: "",
          mealTypes: [],
          message: "",
        });
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        alert("❌ Something went wrong. Please try again.");
        setIsSubmitting(false);
      });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center px-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-xl p-5 sm:p-6 relative overflow-y-auto max-h-[90vh] animate-fade-in">
        <button
          className="absolute top-3 right-4 text-gray-400 hover:text-red-500 text-2xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-blue-900 mb-1">
         Enquiry For: Restaurant Table Booking
        </h2>
        <p className="text-gray-600 mb-4 text-sm">
          Reserve your table and let us serve you a memorable dining experience.
          We'll confirm shortly!
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm font-medium">
                Full Name
              </label>
              <input
                name="fullName"
                type="text"
                className="border px-3 py-2 rounded-lg w-full"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">
                Contact Number
              </label>
              <input
                name="contactNumber"
                type="tel"
                className="border px-3 py-2 rounded-lg w-full"
                value={formData.contactNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                className="border px-3 py-2 rounded-lg w-full"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">
                Number of Guests
              </label>
              <input
                name="numberOfGuests"
                type="number"
                className="border px-3 py-2 rounded-lg w-full"
                value={formData.numberOfGuests}
                onChange={handleChange}
                min="1"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">
                Booking Date
              </label>
              <input
                name="bookingDate"
                type="date"
                className="border px-3 py-2 rounded-lg w-full"
                value={formData.bookingDate}
                onChange={handleChange}
                min={new Date().toISOString().split("T")[0]}
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">
                Booking Time
              </label>
              <input
                name="bookingTime"
                type="time"
                className="border px-3 py-2 rounded-lg w-full"
                value={formData.bookingTime}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">
              Meal Type (select one or more)
            </label>
            <div className="flex flex-wrap gap-3 mt-2">
              {[
                "Breakfast",
                "Brunch",
                "Lunch",
                "Snacks",
                "Dinner",
                "Dessert",
              ].map((type) => (
                <label
                  key={type}
                  className="inline-flex items-center space-x-2 text-sm"
                >
                  <input
                    type="checkbox"
                    value={type}
                    checked={formData.mealTypes.includes(type)}
                    onChange={() => handleMealTypeChange(type)}
                    className="accent-blue-600"
                  />
                  <span>{type}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">
              Special Instructions
            </label>
            <textarea
              name="message"
              placeholder="Any special requests or instructions"
              className="w-full border px-3 py-2 rounded-lg"
              rows="3"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full ${
              isSubmitting ? "bg-gray-400" : "bg-blue-900 hover:bg-blue-800"
            } text-white py-2.5 rounded-lg font-semibold`}
          >
            {isSubmitting ? "Submitting..." : "Submit Enquiry"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RestaurantModal;
