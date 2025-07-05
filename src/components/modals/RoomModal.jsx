import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const RoomModal = ({ selectedRoom, onClose, hotelName }) => {
  if (!selectedRoom) return null;

  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    alternateContact: "",
    numberOfRooms: 1,
    numberOfPersons: 1,
    date: "",
    message: "",
    meals: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "meals") {
      setFormData((prev) => {
        const updatedMeals = checked
          ? [...prev.meals, value]
          : prev.meals.filter((meal) => meal !== value);
        return { ...prev, meals: updatedMeals };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const htmlContent = `
      <div style="font-family: system-ui, sans-serif; font-size: 14px; color: #2c3e50;">
        <h2>Room Enquiry - ${formData.fullName}</h2>
        <p><strong>Hotel Name:</strong> ${hotelName}</p>
        <p><strong>Selected Room:</strong> ${selectedRoom?.name || "N/A"}</p>
        ${
          selectedRoom?.size
            ? `<p><strong>Room Size:</strong> ${selectedRoom.size}</p>`
            : ""
        }
        ${
          selectedRoom?.bedType
            ? `<p><strong>Bed Type:</strong> ${selectedRoom.bedType}</p>`
            : ""
        }
        ${
          selectedRoom?.guests
            ? `<p><strong>Max Guests:</strong> ${selectedRoom.guests}</p>`
            : ""
        }
        ${
          selectedRoom?.refundable !== undefined
            ? `<p><strong>Refundable:</strong> ${
                selectedRoom.refundable ? "Yes" : "No"
              }</p>`
            : ""
        }
        ${
          selectedRoom?.price
            ? `<p><strong>Price:</strong> ₹${selectedRoom.price}</p>`
            : ""
        }
        <p><strong>Breakfast:</strong> ${
          selectedRoom?.breakfastIncluded ? "Included" : "Not Included"
        }</p>

        <hr />

        <p><strong>Full Name:</strong> ${formData.fullName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Primary Contact:</strong> ${formData.contactNumber}</p>
        ${
          formData.alternateContact
            ? `<p><strong>Alternate Contact:</strong> ${formData.alternateContact}</p>`
            : ""
        }
        <p><strong>No. of Rooms:</strong> ${formData.numberOfRooms}</p>
        <p><strong>No. of Persons:</strong> ${formData.numberOfPersons}</p>
        <p><strong>Required Date:</strong> ${formData.date}</p>
        <p><strong>Meal Plan:</strong> ${
          formData.meals.length > 0
            ? formData.meals.join(", ")
            : "None selected"
        }</p>
        <p><strong>Message:</strong> ${formData.message || "N/A"}</p>

        <hr style="margin-top: 20px; border-color: #ddd;" />
        <small>Sent via LazyStay website</small>
      </div>
    `;

    const summary = `
      <ul style="margin: 0; padding-left: 20px; font-size: 14px;">
        <li><strong>Selected Room:</strong> ${selectedRoom?.name || "N/A"}</li>
        <li><strong>Date:</strong> ${formData.date || "Not provided"}</li>
        <li><strong>No. of Rooms:</strong> ${formData.numberOfRooms}</li>
        <li><strong>No. of Persons:</strong> ${formData.numberOfPersons}</li>
        <li><strong>Meal Plan:</strong> ${
          formData.meals.length > 0
            ? formData.meals.join(", ")
            : "None selected"
        }</li>
        <li><strong>Message:</strong> ${formData.message || "N/A"}</li>
      </ul>
    `;

    const ownerParams = {
      name: formData.fullName,
      email: formData.email,
      html_message: htmlContent,
    };

    const userParams = {
      to_email: formData.email,
      name: formData.fullName || "Guest",
      email: formData.email,
      form_title: selectedRoom?.name || "Room Enquiry",
      summary: summary,
    };

    // Send to Owner
    emailjs
      .send(
        "service_vki3w9f", // ✅ Your admin service
        "template_d7fzjcc", // ✅ Admin template ID
        ownerParams,
        "eB5zMi_N5hvYSPmtu" // ✅ Your public key
      )
      .then(() => {
        // Send Confirmation to User
        return emailjs.send(
          "service_psok1pn", // ✅ Your user mail service
          "template_3el2etq", // ✅ User template ID
          userParams,
          "eB5zMi_N5hvYSPmtu"
        );
      })
      .then(() => {
        window.confirm(
          "Thank you! Your enquiry was successfully sent. A confirmation has been emailed to you."
        );
        onClose();
        setFormData({
          fullName: "",
          contactNumber: "",
          email: "",
          alternateContact: "",
          numberOfRooms: 1,
          numberOfPersons: 1,
          date: "",
          message: "",
          meals: [],
        });
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        window.alert("Something went wrong while sending. Please try again.");
      });
  };

  const isRoom = selectedRoom?.price !== undefined;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-6 relative animate-fade-in max-h-[85vh] overflow-y-auto">
        <button
          className="absolute top-4 right-5 text-gray-400 hover:text-red-600 text-3xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-3xl font-bold text-blue-900 mb-1">
          Room Enquiry – {hotelName}
        </h2>
        <p className="text-gray-700 mb-3">
          Selected Room: <strong>{selectedRoom.name}</strong>
        </p>

        <p>
          Please fill in the details below — our team will get in touch with you
          shortly to ensure a smooth and comfortable stay.
        </p>

        {isRoom ? (
          <div className="text-sm text-gray-600 mb-5">
            <p>
              <strong>Size:</strong> {selectedRoom.size} |{" "}
              <strong>Breakfast:</strong>{" "}
              {selectedRoom.breakfastIncluded ? "Included" : "Not Included"}
            </p>
          </div>
        ) : (
          <p className="text-sm text-gray-600 mb-5">
            {selectedRoom.description}
          </p>
        )}

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              name="fullName"
              type="text"
              placeholder="Your Full Name"
              className="border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <input
              name="contactNumber"
              type="tel"
              placeholder="Primary Contact Number"
              className="border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={formData.contactNumber}
              onChange={handleChange}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Alternate Contact (Optional)
              </label>
              <input
                name="alternateContact"
                type="tel"
                placeholder="Alternate Contact (Optional)"
                className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={formData.alternateContact}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                No. of Rooms
              </label>
              <input
                name="numberOfRooms"
                type="number"
                className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={formData.numberOfRooms}
                onChange={handleChange}
                min="1"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                No. of Persons
              </label>
              <input
                name="numberOfPersons"
                type="number"
                className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={formData.numberOfPersons}
                onChange={handleChange}
                min="1"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Required Date
              </label>
              <input
                name="date"
                type="date"
                className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Meal Plan */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Meal Plan (Choose all that apply)
            </label>
            <div className="flex gap-4">
              {["Breakfast", "Lunch", "Dinner"].map((meal) => (
                <label key={meal} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="meals"
                    value={meal}
                    checked={formData.meals.includes(meal)}
                    onChange={handleChange}
                  />
                  {meal}
                </label>
              ))}
            </div>
          </div>

          <textarea
            name="message"
            placeholder="Any special requests or preferences?"
            className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-800 transition duration-200"
          >
            📩 Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default RoomModal;
