import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const LaundryModal = ({ selectedService, onClose }) => {
  if (!selectedService) return null;

  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    serviceType: "",
    clothingType: "",
    numberOfClothes: 1,
    pickupDate: "",
    pickupTime: "",
    pickupAddress: "",
    specialInstructions: "",
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
      <div style="font-family: Arial, sans-serif; font-size: 14px; color: #2c3e50;">
        <h2>Laundry Booking from ${formData.fullName}</h2>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Contact Number:</strong> ${formData.contactNumber}</p>
        <p><strong>Service Type:</strong> ${formData.serviceType}</p>
        <p><strong>Clothing Type:</strong> ${formData.clothingType}</p>
        <p><strong>Number of Clothes:</strong> ${formData.numberOfClothes}</p>
        <p><strong>Pickup Date:</strong> ${formData.pickupDate}</p>
        <p><strong>Pickup Time:</strong> ${formData.pickupTime}</p>
        <p><strong>Pickup Address:</strong> ${formData.pickupAddress}</p>
        <p><strong>Special Instructions:</strong><br/>${
          formData.specialInstructions || "None"
        }</p>
        <p><strong>Selected Service:</strong> ${
          selectedService?.name || "Laundry Service"
        }</p>
        <hr />
        <small>This enquiry was submitted via Lazystay Laundry Form</small>
      </div>
    `;

    const templateParams = {
      name: formData.fullName,
      email: formData.email,
      html_message: htmlContent,
    };

    // Step 1: Send to Owner
    emailjs
      .send(
        "service_vki3w9f", // Your service ID
        "template_d7fzjcc", // Your admin email template ID
        templateParams,
        "eB5zMi_N5hvYSPmtu" // Your public key
      )
      .then(() => {
        // Step 2: Send Auto-reply to Guest
        return emailjs.send(
          "service_vki3w9f",
          "template_autoreply", // Your auto-reply template ID
          {
            user_name: formData.fullName,
            user_email: formData.email,
          },
          "eB5zMi_N5hvYSPmtu"
        );
      })
      .then(() => {
        alert(
          "✅ Your laundry booking has been submitted and confirmation sent!"
        );
        setIsSubmitting(false);
        onClose();
        setFormData({
          fullName: "",
          contactNumber: "",
          email: "",
          serviceType: "",
          clothingType: "",
          numberOfClothes: 1,
          pickupDate: "",
          pickupTime: "",
          pickupAddress: "",
          specialInstructions: "",
        });
      })
      .catch((error) => {
        console.error("Email sending error:", error);
        alert("❌ Something went wrong. Please try again.");
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
          Laundry Booking
        </h2>
        <p className="text-gray-600 mb-4 text-sm">
          Fill in your laundry pickup request — we’ll get in touch shortly.
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
              <label className="block text-sm font-medium mb-1">
                Email Address
              </label>
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
              <select
                name="serviceType"
                className="border px-3 py-2 rounded-lg w-full text-sm"
                value={formData.serviceType}
                onChange={handleChange}
                required
              >
                <option value="">Select Service Type</option>
                <option value="Wash Only">Wash Only</option>
                <option value="Wash & Iron">Wash & Iron</option>
                <option value="Dry Clean">Dry Clean</option>
                <option value="Iron Only">Iron Only</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Clothing Type
              </label>
              <select
                name="clothingType"
                className="border px-3 py-2 rounded-lg w-full text-sm"
                value={formData.clothingType}
                onChange={handleChange}
                required
              >
                <option value="">Select Clothing Type</option>
                <option value="Regular Wear">Regular Wear</option>
                <option value="Delicates">Delicates</option>
                <option value="Bedding & Linens">Bedding & Linens</option>
                <option value="Mixed">Mixed</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Number of Clothes
              </label>
              <input
                name="numberOfClothes"
                type="number"
                min="1"
                className="border px-3 py-2 rounded-lg w-full text-sm"
                value={formData.numberOfClothes}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Pickup Date
              </label>
              <input
                name="pickupDate"
                type="date"
                className="border px-3 py-2 rounded-lg w-full text-sm"
                value={formData.pickupDate}
                onChange={handleChange}
                min={new Date().toISOString().split("T")[0]}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Pickup Time
              </label>
              <input
                name="pickupTime"
                type="time"
                className="border px-3 py-2 rounded-lg w-full text-sm"
                value={formData.pickupTime}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Pickup Address
            </label>
            <textarea
              name="pickupAddress"
              rows="2"
              className="w-full border px-3 py-2 rounded-lg text-sm"
              value={formData.pickupAddress}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Special Instructions
            </label>
            <textarea
              name="specialInstructions"
              rows="2"
              className="w-full border px-3 py-2 rounded-lg text-sm"
              value={formData.specialInstructions}
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

export default LaundryModal;
