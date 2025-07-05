import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const templateParams = {
      from_name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      html_message: `
        <div>
          <h2 style="color:#2980b9;">New Enquiry from LazyStay Contact Form</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone || "Not Provided"}</p>
          <p><strong>Subject:</strong> ${formData.subject}</p>
          <p><strong>Message:</strong></p>
          <p style="background:#f4f6f7; padding:10px; border-left:3px solid #2980b9;">
            ${formData.message}
          </p>
          <br />
          <p style="font-size:12px; color:#7f8c8d;">This message was sent via the LazyStay website contact form.</p>
        </div>
      `,
    };

    emailjs
      .send(
        "service_vki3w9f",
        "template_d7fzjcc",
        templateParams,
        "eB5zMi_N5hvYSPmtu"
      )
      .then(() => {
        alert("Thank you for your message! We will get back to you soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Something went wrong. Please try again later.");
      })
      .finally(() => setIsSending(false));
  };

  const locations = [
    {
      name: "LazyStay Grand - BHUBANESWAR",
      address:
        "Lazystay Grand, Biggies Berger Building, KIIT Rd, near Axis Bank, Patia, Bhubaneswar, Odisha 751024",
      phone: "+91 8455007723",
      email: "sales@lazystay.com",
      hours: "24/7 Guest Services",
    },
    {
      name: "LazyStay Elite - BHUBANESWAR",
      address: "Patia (Near KIIT University), Bhubaneswar, Odisha 751024",
      phone: "+91 8455007723",
      email: "sales@lazystay.com",
      hours: "24/7 Guest Services",
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif text-blue-900 font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have a question about rooms,
            amenities, bookings, or anything else—our team is ready to answer.
          </p>
        </div>

        {/* Contact Form + Location Info */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-blue-100 transition hover:shadow-2xl">
            <h2 className="text-3xl font-serif font-semibold text-blue-900 mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="input-style"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="input-style"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="input-style"
                />
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="input-style"
                  required
                >
                  <option value="">Select a Subject</option>
                  <option value="Booking Inquiry">Booking Inquiry</option>
                  <option value="Special Request">Special Request</option>
                  <option value="Corporate Events">Corporate Events</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                className="input-style"
                required
              ></textarea>

              <button
                type="submit"
                disabled={isSending}
                className={`w-full py-3 px-6 rounded-md font-semibold text-white transition duration-300 ${
                  isSending
                    ? "bg-blue-300 cursor-not-allowed"
                    : "bg-blue-800 hover:bg-blue-900"
                }`}
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Location Info */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-serif font-semibold text-blue-900 mb-4">
                Our Locations
              </h2>
              <div className="space-y-6">
                {locations.map((loc, i) => (
                  <div
                    key={i}
                    className="bg-white p-6 rounded-xl border border-gray-100 shadow hover:shadow-md transition"
                  >
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">
                      {loc.name}
                    </h3>
                    <p className="text-gray-700 text-sm">
                      📍 <strong>Address:</strong> {loc.address}
                    </p>
                    <p className="text-gray-700 text-sm">
                      📞 <strong>Phone:</strong> {loc.phone}
                    </p>
                    <p className="text-gray-700 text-sm">
                      ✉️ <strong>Email:</strong> {loc.email}
                    </p>
                    <p className="text-gray-700 text-sm">
                      ⏰ <strong>Hours:</strong> {loc.hours}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-900 text-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-2">
                Reservation Hotline
              </h3>
              <p className="text-2xl font-bold mb-2">+91 845007723</p>
              <p className="text-sm opacity-90 mb-4">
                24/7 assistance for bookings
              </p>
              <h3 className="text-lg font-semibold">Corporate Office</h3>
              <p>LazyStay Hospitality Pvt. Ltd.</p>
              <p>
                Lazystay Grand, Biggies Berger Building, KIIT Rd, near Axis
                Bank, Patia, Bhubaneswar, Odisha 751024
              </p>
              <p className="mt-2">📧 sales@lazystay.com</p>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-20">
          <h2 className="text-3xl font-serif text-center mb-8 text-blue-900">
            Find Us on the Map
          </h2>
          <div className="flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl w-full max-w-4xl h-[500px] border-2 border-blue-200">
              <iframe
                title="Hotel Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14986.24098645565!2d85.82442417701514!3d20.354731264600063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a75ea6e52c3f%3A0x54bda720154e94c4!2sTreebo%20Trip%20LazyStay%20Grand%20Patia!5e0!3m2!1sen!2sin!4v1719140226935!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Global style injection for input-style class
const inputStyle = `
  .input-style {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    background-color: white;
    transition: all 0.3s;
  }
  .input-style:focus {
    outline: none;
    ring: 2px solid #2563eb;
    border-color: #2563eb;
  }
`;

const style = document.createElement("style");
style.innerHTML = inputStyle;
document.head.appendChild(style);

export default ContactUs;
