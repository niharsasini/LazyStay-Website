import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const SalonModal = ({ selectedService, onClose }) => {
  if (!selectedService) return null;

  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    serviceType: "",
    preferredStylist: "",
    preferredDate: "",
    preferredTime: "",
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
        <h2>New Salon Booking Request from ${formData.fullName}</h2>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Contact Number:</strong> ${formData.contactNumber}</p>
        ${
          formData.serviceType
            ? `<p><strong>Service Type:</strong> ${formData.serviceType}</p>`
            : ""
        }
        ${
          formData.preferredStylist
            ? `<p><strong>Preferred Stylist:</strong> ${formData.preferredStylist}</p>`
            : ""
        }
        ${
          formData.preferredDate
            ? `<p><strong>Preferred Date:</strong> ${formData.preferredDate}</p>`
            : ""
        }
        ${
          formData.preferredTime
            ? `<p><strong>Preferred Time:</strong> ${formData.preferredTime}</p>`
            : ""
        }
        <p><strong>Message:</strong><br/>${
          formData.message || "No additional message provided."
        }</p>
        <hr style="margin-top: 30px; border-color: #ddd;" />
        <small>This message was generated via Lazystay Enquiry Form</small>
      </div>
    `;

    const templateParams = {
      name: formData.fullName,
      email: formData.email,
      contactNumber: formData.contactNumber,
      html_message: htmlContent,
      selectedItem: selectedService?.name || "Salon Service",
    };

    emailjs
      .send(
        "service_vki3w9f",
        "template_d7fzjcc",
        templateParams,
        "eB5zMi_N5hvYSPmtu"
      )
      .then(() => {
        alert("Your salon enquiry has been sent successfully!");
        setIsSubmitting(false);
        onClose();
        setFormData({
          fullName: "",
          contactNumber: "",
          email: "",
          serviceType: "",
          preferredStylist: "",
          preferredDate: "",
          preferredTime: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        alert("Something went wrong. Please try again.");
        setIsSubmitting(false);
      });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center px-2 sm:px-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-xl p-5 sm:p-6 relative max-h-[90vh] overflow-y-auto">
        <button
          className="absolute top-3 right-4 text-gray-400 hover:text-red-500 text-2xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-1">
          Salon Appointment Enquiry
        </h2>
        <p className="text-gray-600 mb-4 text-sm">
          Book your preferred salon service — our team will confirm shortly.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                name="fullName"
                type="text"
                className="border px-3 py-2 rounded-lg w-full text-sm"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Contact Number
              </label>
              <input
                name="contactNumber"
                type="tel"
                className="border px-3 py-2 rounded-lg w-full text-sm"
                value={formData.contactNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                name="email"
                type="email"
                className="border px-3 py-2 rounded-lg w-full text-sm"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Service Type
              </label>
              <input
                name="serviceType"
                type="text"
                placeholder="e.g., Haircut, Facial"
                className="border px-3 py-2 rounded-lg w-full text-sm"
                value={formData.serviceType}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Preferred Stylist (Optional)
              </label>
              <input
                name="preferredStylist"
                type="text"
                className="border px-3 py-2 rounded-lg w-full text-sm"
                value={formData.preferredStylist}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Preferred Date
              </label>
              <input
                name="preferredDate"
                type="date"
                className="border px-3 py-2 rounded-lg w-full text-sm"
                value={formData.preferredDate}
                onChange={handleChange}
                min={new Date().toISOString().split("T")[0]}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Preferred Time
              </label>
              <input
                name="preferredTime"
                type="time"
                className="border px-3 py-2 rounded-lg w-full text-sm"
                value={formData.preferredTime}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Additional Instructions
            </label>
            <textarea
              name="message"
              rows="3"
              className="w-full border px-3 py-2 rounded-lg text-sm"
              placeholder="Any special requests or comments"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full ${
              isSubmitting ? "bg-gray-400" : "bg-blue-900 hover:bg-blue-800"
            } text-white py-2.5 rounded-lg font-semibold text-sm`}
          >
            {isSubmitting ? "Submitting..." : "Submit Enquiry"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SalonModal;
