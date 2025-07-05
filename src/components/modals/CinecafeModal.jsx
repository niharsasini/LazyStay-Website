import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const CinecafeModal = ({ onClose, selectedAmenity }) => {
  if (!selectedAmenity) return null;

  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    eventTitle: "",
    eventType: "",
    date: "",
    timeSlot: "",
    numberOfGuests: 1,
    cateringRequired: "Yes",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const htmlContent = `
      <div style="font-family: system-ui, sans-serif, Arial; font-size: 14px; color: #2c3e50;">
        <h2>Cinecafe Booking Enquiry - ${formData.fullName}</h2>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.contactNumber}</p>
        <p><strong>Event:</strong> ${formData.eventTitle} (${
      formData.eventType
    })</p>
        <p><strong>Date:</strong> ${formData.date}</p>
        <p><strong>Time Slot:</strong> ${formData.timeSlot}</p>
        <p><strong>Guests:</strong> ${formData.numberOfGuests}</p>
        <p><strong>Catering:</strong> ${formData.cateringRequired}</p>
        <p><strong>Message:</strong> ${formData.message || "N/A"}</p>
        <hr style="margin-top: 20px; border-color: #ddd;" />
        <small>This enquiry was submitted from LazyStay Cinecafe page.</small>
      </div>
    `;

    const templateParams = {
      name: formData.fullName,
      email: formData.email,
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
        window.confirm("🎉 Your Cinecafe enquiry was sent successfully!");
        setIsSubmitting(false);
        onClose();
        setFormData({
          fullName: "",
          contactNumber: "",
          email: "",
          eventTitle: "",
          eventType: "",
          date: "",
          timeSlot: "",
          numberOfGuests: 1,
          cateringRequired: "Yes",
          message: "",
        });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Something went wrong. Please try again.");
        setIsSubmitting(false);
      });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center px-2 sm:px-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md sm:max-w-2xl p-4 sm:p-6 relative overflow-y-auto max-h-[92vh]">
        {/* Close Button */}
        <button
          className="absolute top-3 right-4 text-gray-400 hover:text-red-600 text-2xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Heading */}
        <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-1">
          Enquiry for : {selectedAmenity.name}
        </h2>
        <p className="text-gray-700 mb-3 text-sm">
          🍿 Tell us how you'd like to enjoy Cinecafe — we’ll reach out to you
          very soon!
        </p>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Input Fields */}
            {[
              { id: "fullName", label: "Full Name", type: "text" },
              { id: "contactNumber", label: "Contact Number", type: "tel" },
              { id: "email", label: "Email Address", type: "email" },
              { id: "eventTitle", label: "Event Title", type: "text" },
              {
                id: "eventType",
                label: "Event Type",
                type: "select",
                options: [
                  "Select Event Type",
                  "Movie Screening",
                  "Birthday Celebration",
                  "Private Event",
                  "Team Meetup",
                  "Other",
                ],
              },
              { id: "date", label: "Required Date", type: "date" },
              {
                id: "timeSlot",
                label: "Time Slot",
                type: "text",
                placeholder: "e.g., 5PM - 8PM",
              },
              {
                id: "numberOfGuests",
                label: "Number of Guests",
                type: "number",
              },
              {
                id: "cateringRequired",
                label: "Catering Required?",
                type: "select",
                options: ["Catering Required?", "Yes", "No"],
              },
            ].map((field) => (
              <div key={field.id}>
                <label
                  htmlFor={field.id}
                  className="block mb-1 text-sm font-medium text-gray-700"
                >
                  {field.label}
                </label>
                {field.type === "select" ? (
                  <select
                    id={field.id}
                    name={field.id}
                    className="border px-3 py-2.5 rounded-lg w-full text-sm"
                    value={formData[field.id]}
                    onChange={handleChange}
                    required
                  >
                    {field.options.map((option) => (
                      <option
                        key={option}
                        value={
                          option.includes("Required") ||
                          option.includes("Select")
                            ? ""
                            : option
                        }
                      >
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    placeholder={field.placeholder || field.label}
                    className="border px-3 py-2.5 rounded-lg w-full text-sm"
                    value={formData[field.id]}
                    onChange={handleChange}
                    min={field.type === "number" ? 1 : undefined}
                    required
                  />
                )}
              </div>
            ))}
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Any Special Requests?
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message or request"
              className="w-full border px-3 py-2.5 rounded-lg text-sm"
              rows="3"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full ${
              isSubmitting ? "bg-gray-400" : "bg-blue-900 hover:bg-blue-800"
            } text-white py-2.5 rounded-lg font-semibold text-base`}
          >
            {isSubmitting ? "Submitting..." : "Submit Enquiry"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CinecafeModal;
