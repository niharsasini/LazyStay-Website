import React from "react";
import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { FaShareAlt, FaStar } from "react-icons/fa";

import LazystayEliteSection from "../components/EliteComponents/TreebolikeElite";

// ✅ Modal Imports
import EnquiryForm from "../components/modals/EnquiryForm";
import CinecafeModal from "../components/modals/CinecafeModal";
import BanquethalModal from "../components/modals/BanquethalModal";
import RestruantModal from "../components/modals/RestruantModal";
import LaundryModal from "../components/modals/LaundryModal";
import SalonModal from "../components/modals/SalonModal";

// ✅ Hooks
import useEnquiryModal from "../hooks/useEnquiryModal";
import useMapModal from "../hooks/useMapModal";

const EliteHotel = () => {
  const {
    showEnquiryForm,
    formType,
    selectedRoom,
    setSelectedRoom,
    openModal,
    closeModal,
  } = useEnquiryModal();

  const { showMap, openMap, closeMap } = useMapModal();

  // 🔹 Features with modal triggers
  const features = [
    {
      id: 1,
      title: "CINECAFE",
      description:
        "Enjoy cinematic vibes and coffee delight in our cozy Cinecafe.",
      image: "/assets/images/cinecafe/cinecafe3.jpeg",
      icon: "🎬",
    },
    {
      id: 2,
      title: "BANQUET HALL",
      description:
        "Host grand events in our stylish and spacious banquet hall.",
      image: "/assets/images/banquethall/hall2.jpeg",
      icon: "🍽️",
    },
    {
      id: 3,
      title: "PREMIUM SALON",
      description:
        "Get pampered at our in-house premium salon with expert stylists.",
      image: "/assets/images/salon/salon1.jpeg",
      icon: "💇",
    },
    {
      id: 4,
      title: "LAUNDRY SERVICE",
      description:
        "Freshen up your wardrobe with our reliable same-day laundry service.",
      image: "/assets/images/lundry/lundry2.jpeg",
      icon: "🧺",
    },
  ];

  const attractions = [
    {
      id: 1,
      name: "Pathani Samanta Planetarium",
      description:
        "Explore the cosmos through fascinating astronomy exhibits and shows.",
      image: "/assets/images/pathanisamanta.jpg",
      distance: "6.1 km",
    },
    {
      id: 2,
      name: "Nandankanan Zoological Park",
      description:
        "A sprawling zoo and botanical garden with safaris and diverse wildlife.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUY2LNima_qYCDtZFJA6SNu1t4X6u3rNEIAQ&s",
      distance: "4.8 km",
    },
    {
      id: 3,
      name: "Botanical Garden",
      description: "A serene escape filled with lush greenery and rare plants.",
      image: "/assets/images/botanical.jpeg",
      distance: "6.4 km",
    },
    {
      id: 4,
      name: "Khandagiri",
      description: "Ancient rock-cut caves and panoramic views of Bhubaneswar.",
      image: "/assets/images/khandagiri.jpeg",
      distance: "10 km",
    },
  ];

  return (
    <div>
      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative h-[80vh]">
          <div className="absolute inset-0">
            <img
              src="/assets/images/elite/reception/elite1.jpg"
              alt="LazyStay Elite"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = "/assets/images/elite-hotel.webp";
              }}
            />
          </div>
          <div className="absolute top-6 left-6 z-20 rounded-lg p-4 max-w-sm">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 m-0">
              Lazystay Grand Patia
            </h2>
            <div className="flex items-start text-sm text-gray-700 gap-1 flex-wrap mt-2">
              <IoLocationSharp className="text-blue-600 mt-0.5" />
              <p className="text-[15px] font-medium text-gray-600 m-0">
                Near KIIT College, Patia, Bhubaneswar
              </p>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  openMap();
                }}
                className="text-white text-sm flex items-center gap-1 font-medium"
              >
                <img
                  src="https://images.treebohotels.com/images/map.svg"
                  alt="map icon"
                  className="w-4 h-4"
                />
                View on map
              </a>
            </div>
          </div>

          <div className="absolute top-6 right-6 z-20">
            <div className="flex items-center gap-3 rounded-lg p-3">
              <div className="w-[58px] h-[35px] bg-[#009057] rounded-[8px] text-white flex items-center justify-center gap-1 text-sm font-bold">
                4.6 <FaStar className="text-white text-xs mt-[1px]" />
              </div>
              <div>
                <div className="text-[14px] font-bold text-[rgb(74,74,74)]">
                  Very Good
                </div>
                <div className="text-sm">406 ratings</div>
              </div>
              <button className="hover:text-[#00796b]">
                <FaShareAlt className="text-lg" />
              </button>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
            <div>
              <h1 className="text-5xl md:text-7xl font-serif text-white mb-4">
                LazyStay Elite
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
                Modern luxury for the contemporary traveler
              </p>
            </div>
          </div>
        </section>

        {/* Welcome Section */}
        <LazystayEliteSection />

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif text-center mb-16">
              Exceptional Experiences
            </h2>
            <div className="grid md:grid-cols-2 gap-16">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="flex flex-col md:flex-row gap-6"
                >
                  <div className="md:w-1/2">
                    <div className="rounded-lg overflow-hidden h-64 shadow-lg">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = "/assets/images/placeholder.jpg";
                        }}
                      />
                    </div>
                  </div>
                  <div className="md:w-1/2 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center mb-4">
                        <span className="text-3xl mr-3">{feature.icon}</span>
                        <h3 className="text-2xl font-serif">{feature.title}</h3>
                      </div>
                      <p className="text-gray-700 mb-6">
                        {feature.description}
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <button
                        onClick={() => {
                          openModal("general");
                          setSelectedRoom({ name: feature.title });
                        }}
                        className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition"
                      >
                        Send Enquiry
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Attractions Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif text-center mb-8">
              Explore Nearby Attractions
            </h2>
            <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12 text-lg">
              Discover top sights near LazyStay Elite—from cultural marvels to
              natural wonders.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {attractions.map((attraction) => (
                <div
                  key={attraction.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <div className="overflow-hidden relative h-52">
                    <img
                      src={attraction.image}
                      alt={attraction.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
                      onError={(e) => {
                        e.target.src = "/assets/images/placeholder.jpg";
                      }}
                    />
                    <span className="absolute top-3 left-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-xs px-3 py-1 rounded-full shadow-md">
                      📍 {attraction.distance}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col justify-between flex-grow">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-900 transition duration-200">
                      {attraction.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {attraction.description}
                    </p>
                    <div className="mt-auto">
                      <button className="text-sm font-medium text-blue-700 hover:underline">
                        Learn more →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-serif mb-8">
              Experience the Grand Difference
            </h2>
            <p className="text-xl max-w-2xl mx-auto mb-10">
              Join us at LazyStay Grand for an unforgettable stay...
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => openModal("general")}
                className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
              >
                Send Enquiry
              </button>
              <Link
                to="/"
                className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-blue-900 transition"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Modal Handling */}
      {showEnquiryForm &&
        (() => {
          switch ((selectedRoom?.name || "").toUpperCase()) {
            case "CINECAFE":
              return (
                <CinecafeModal
                  selectedAmenity={selectedRoom}
                  onClose={closeModal}
                />
              );
            case "BANQUET HALL":
              return (
                <BanquethalModal
                  selectedAmenity={selectedRoom}
                  onClose={closeModal}
                />
              );
            case "RESTAURANT":
              return (
                <RestruantModal
                  selectedAmenity={selectedRoom}
                  onClose={closeModal}
                />
              );
            case "LAUNDRY SERVICE":
              return (
                <LaundryModal
                  selectedService={selectedRoom}
                  onClose={closeModal}
                />
              );
            case "PREMIUM SALON":
              return (
                <SalonModal
                  selectedService={selectedRoom}
                  onClose={closeModal}
                />
              );
            default:
              return <EnquiryForm hotelName="Elite" onClose={closeModal} />;
          }
        })()}

      {/* Map Modal */}
      {showMap && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center px-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl h-[500px] relative">
            <button
              onClick={closeMap}
              className="absolute top-2 right-4 text-gray-500 hover:text-red-600 text-3xl font-bold"
            >
              &times;
            </button>
            <iframe
              title="Hotel Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.8426010955253!2d85.8419764749162!3d20.29605941080508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909aa9c5f66c9%3A0x40b6ea67c61de390!2sLazystay%20Grand!5e0!3m2!1sen!2sin!4v1689323760123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-b-xl"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default EliteHotel;
