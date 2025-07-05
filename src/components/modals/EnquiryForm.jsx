import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const EnquiryForm = ({
  hotelName,
  onClose,
  heading = "Share Your Experience",
  subheading = "We value your feedback. Please leave a review below.",
  submitButtonText = "Submit Review",
  successMessage = "Thank you! Your review has been submitted.",
  errorMessage = "Failed to send review. Please try again later.",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: "5",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { name, email, rating, message } = formData;

    const htmlMessage = `
      <h2>New Review from ${hotelName || "Guest"}</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Rating:</strong> ${"⭐️".repeat(
        parseInt(rating)
      )} (${rating}/5)</p>
      <p><strong>Message:</strong><br/>${message}</p>
      <p style="font-size:12px;color:#999;">Submitted on: ${new Date().toLocaleString()}</p>
    `;

    const templateParams = {
      html_message: htmlMessage,
    };

    try {
      await emailjs.send(
        "service_vki3w9f", // ✅ Your service ID
        "template_d7fzjcc", // ✅ Your template ID
        templateParams,
        "eB5zMi_N5hvYSPmtu" // ✅ Your public key
      );

      setSubmitStatus({ success: true, message: successMessage });
      setTimeout(() => {
        setFormData({ name: "", email: "", rating: "5", message: "" });
        setSubmitStatus(null);
        onClose();
      }, 2500);
    } catch (err) {
      console.error("EmailJS Error:", err);
      setSubmitStatus({ success: false, message: errorMessage });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-xl"
          aria-label="Close"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold text-blue-900 mb-2 text-center">
          {heading}
        </h2>
        <p className="text-gray-600 mb-4 text-center">{subheading}</p>

        {submitStatus && (
          <div
            className={`p-3 mb-4 rounded ${
              submitStatus.success
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Rating</label>
            <select
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            >
              <option value="5">⭐️⭐️⭐️⭐️⭐️</option>
              <option value="4">⭐️⭐️⭐️⭐️</option>
              <option value="3">⭐️⭐️⭐️</option>
              <option value="2">⭐️⭐️</option>
              <option value="1">⭐️</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Your Review</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-2 border border-gray-300 rounded"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 rounded font-medium ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-900 hover:bg-blue-800 text-white"
            } transition duration-300`}
          >
            {isSubmitting ? "Submitting..." : submitButtonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;
