import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const BanquethalModal = ({ selectedAmenity, onClose }) => {
  if (!selectedAmenity) return null;

  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    alternateContact: "",
    email: "",
    eventTitle: "",
    eventType: "",
    numberOfGuests: 1,
    eventDate: "",
    eventTime: "",
    durationHours: "",
    cateringRequired: "Yes",
    decorationRequired: "Yes",
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

    const {
      fullName,
      contactNumber,
      alternateContact,
      email,
      eventTitle,
      eventType,
      numberOfGuests,
      eventDate,
      eventTime,
      durationHours,
      cateringRequired,
      decorationRequired,
      message,
    } = formData;

    const htmlMessage = `
      <h2>Banquet Hall Enquiry</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Contact Number:</strong> ${contactNumber}</p>
      <p><strong>Alternate Contact:</strong> ${alternateContact || "-"}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Event Title:</strong> ${eventTitle}</p>
      <p><strong>Event Type:</strong> ${eventType}</p>
      <p><strong>Number of Guests:</strong> ${numberOfGuests}</p>
      <p><strong>Event Date:</strong> ${eventDate}</p>
      <p><strong>Event Time:</strong> ${eventTime}</p>
      <p><strong>Duration (Hours):</strong> ${durationHours}</p>
      <p><strong>Catering Required:</strong> ${cateringRequired}</p>
      <p><strong>Decoration Required:</strong> ${decorationRequired}</p>
      <p><strong>Additional Message:</strong> ${message || "-"}</p>
      <p><strong>Selected Amenity:</strong> ${
        selectedAmenity?.name || "Banquet Hall"
      }</p>
    `;

    const templateParams = {
      html_message: htmlMessage,
    };

    emailjs
      .send(
        "service_vki3w9f",
        "template_d7fzjcc",
        templateParams,
        "eB5zMi_N5hvYSPmtu"
      )
      .then(() => {
        window.confirm(
          "🎉 Thank you! Your banquet enquiry has been sent successfully."
        );
        setIsSubmitting(false);
        onClose();
        setFormData({
          fullName: "",
          contactNumber: "",
          alternateContact: "",
          email: "",
          eventTitle: "",
          eventType: "",
          numberOfGuests: 1,
          eventDate: "",
          eventTime: "",
          durationHours: "",
          cateringRequired: "Yes",
          decorationRequired: "Yes",
          message: "",
        });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("❌ Something went wrong. Please try again.");
        setIsSubmitting(false);
      });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center px-2 sm:px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-[95%] sm:max-w-2xl p-4 sm:p-6 relative animate-fade-in overflow-y-auto max-h-[90vh]">
        <button
          className="absolute top-3 right-4 text-gray-400 hover:text-red-600 text-2xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-1">
          Enquiry For : Banquet Hall Booking
        </h2>
        <p className="text-gray-700 mb-3 text-sm sm:text-sm">
          Please fill out the form below with your event details.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              // Form fields config
              {
                id: "fullName",
                label: "Your Full Name",
                type: "text",
                required: true,
              },
              {
                id: "contactNumber",
                label: "Primary Contact Number",
                type: "tel",
                required: true,
              },
              {
                id: "alternateContact",
                label: "Alternate Contact Number",
                type: "tel",
                required: false,
              },
              {
                id: "email",
                label: "Email Address",
                type: "email",
                required: true,
              },
              {
                id: "eventTitle",
                label: "Event Title",
                type: "text",
                required: true,
              },
              {
                id: "eventType",
                label: "Type of Event",
                type: "select",
                options: [
                  "Select Event Type",
                  "Wedding",
                  "Engagement",
                  "Birthday",
                  "Corporate Event",
                  "Seminar/Conference",
                  "Other",
                ],
                required: true,
              },
              {
                id: "numberOfGuests",
                label: "Total Guests Expected",
                type: "number",
                required: true,
              },
              {
                id: "eventDate",
                label: "Event Date",
                type: "date",
                required: true,
              },
              {
                id: "eventTime",
                label: "Event Start Time",
                type: "time",
                required: true,
              },
              {
                id: "durationHours",
                label: "Event Duration (in hours)",
                type: "number",
                required: true,
              },
              {
                id: "cateringRequired",
                label: "Catering Required?",
                type: "select",
                options: ["Catering Required?", "Yes", "No"],
                required: true,
              },
              {
                id: "decorationRequired",
                label: "Decoration Required?",
                type: "select",
                options: ["Decoration Required?", "Yes", "No"],
                required: true,
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
                    required={field.required}
                  >
                    {field.options.map((option) => (
                      <option
                        key={option}
                        value={
                          option === "Select Event Type" ||
                          option.includes("Required")
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
                    placeholder={field.label}
                    className="border px-3 py-2.5 rounded-lg w-full text-sm"
                    value={formData[field.id]}
                    onChange={handleChange}
                    min={field.type === "number" ? 1 : undefined}
                    required={field.required}
                  />
                )}
              </div>
            ))}
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Any Additional Instructions?
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Additional instructions or queries"
              className="w-full border px-3 py-2.5 rounded-lg text-sm"
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
            } text-white py-2.5 rounded-lg font-semibold text-base`}
          >
            {isSubmitting ? "Submitting..." : "Submit Enquiry"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BanquethalModal;
