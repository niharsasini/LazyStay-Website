import React from "react";
import { Link } from "react-router-dom";
import EnquiryForm from "../components/modals/EnquiryForm";
import CinecafeModal from "../components/modals/CinecafeModal";
import BanquethalModal from "../components/modals/BanquethalModal";
import RestruantModal from "../components/modals/RestruantModal";
import LaundryModal from "../components/modals/LaundryModal";
import SalonModal from "../components/modals/SalonModal";
import Treebolike from "../components/GrandComponents/Treebolikegrand";
import { IoLocationSharp } from "react-icons/io5";
import { FaStar, FaShareAlt } from "react-icons/fa";

import useEnquiryModal from "../hooks/useEnquiryModal";
import useAutoSlider from "../hooks/useAutoSlider";
import useMapModal from "../hooks/useMapModal";

const GrandHotel = () => {
  const {
    showEnquiryForm,
    formType,
    selectedRoom,
    setSelectedRoom,
    openModal,
    closeModal,
  } = useEnquiryModal();

  const { showMap, openMap, closeMap } = useMapModal();

  const attractions = [
    {
      id: 1,
      name: "Pathani Samanta Planetarium",
      description: "Ancient Jain rock-cut caves...",
      image: "/assets/images/pathanisamanta.jpg",
      distance: "6.1 km",
    },
    {
      id: 2,
      name: "Nandankanan Zoological Park",
      description: "Home to over 1600 animals...",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUY2LNima_qYCDtZFJA6SNu1t4X6u3rNEIAQ&s",
      distance: "4.8 km",
    },
    {
      id: 3,
      name: "Sikharchandi Hill",
      description: "A scenic hilltop offering panoramic views...",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-mq1TsnT7P4maoU-_GnTDFK0oxgqsH15_0Q&s",
      distance: "1.5 km",
    },
    {
      id: 4,
      name: "Dhauli Giri",
      description: "Odisha's premier museum featuring artifacts...",
      image: "/assets/images/Dhauligiri.jpg",
      distance: "15 km",
    },
  ];

  const { currentSlide, nextSlide, prevSlide, goToSlide } = useAutoSlider(
    attractions.length
  );

  const features = [
    {
      id: 1,
      title: "CINECAFE",
      description:
        "Relax in our cozy Cinecafe, where you can enjoy movies, snacks, and great vibes in a private lounge setting.",
      image: "/assets/images/cinecafe/cinecafe3.jpeg",
      icon: "🎬",
    },
    {
      id: 2,
      title: "BANQUET HALL",
      description:
        "Celebrate in style at our elegant banquet hall—perfect for weddings, parties, and unforgettable events.",
      image: "/assets/images/banquethall/hall2.jpeg",
      icon: "🍽️",
    },
    {
      id: 3,
      title: "PREMIUM SALON",
      description:
        "Refresh your look with expert grooming and beauty services at our luxurious premium salon.",
      image: "/assets/images/salon/salon1.jpeg",
      icon: "💆",
    },
    {
      id: 4,
      title: "LAUNDRY SERVICE",
      description:
        "Experience fast, fresh, and hassle-free same-day laundry service—clean clothes, no worries!",
      image: "/assets/images/lundry/lundry2.jpeg",
      icon: "🏊",
    },
  ];

  return (
    <div>
      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative h-[80vh]">
          <div className="absolute inset-0">
            <img
              src="/assets/images/hero.jpg"
              alt="LazyStay Grand"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = "/assets/images/placeholder.jpg";
              }}
            />
          </div>
          <div className="absolute top-6 left-6 z-20 rounded-lg shadow-md p-4 max-w-md">
            <h2 className="text-xl md:text-2xl font-bold text-white m-0">
              Lazystay Grand Patia
            </h2>
            <div className="flex items-start text-sm text-gray-700 gap-1 flex-wrap mt-2">
              <IoLocationSharp className="text-blue-600 mt-0.5" />
              <p className="text-[15px] font-medium text-white m-0">
                Near KIIT College, Patia, Bhubaneswar
              </p>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  openMap();
                }}
                className="text-white text-sm flex items-center gap-1 font-medium ml-5"
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
            <div className="flex items-center gap-3 p-3">
              <div className="w-[58px] h-[35px] border bg-[#009057] rounded-[8px] text-white flex items-center justify-center gap-1 text-sm font-bold">
                4.3 <FaStar className="text-white text-xs mt-[1px]" />
              </div>
              <div>
                <div className="text-[14px] font-bold text-white">
                  Very Good
                </div>
                <div className="text-sm text-white">406 ratings</div>
              </div>
              <button className="text-white">
                <FaShareAlt className="text-lg" />
              </button>
            </div>
          </div>
          <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
            <div>
              <h1 className="text-5xl md:text-7xl font-serif text-white mb-4">
                LazyStay Grand
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
                Where luxury meets exceptional hospitality
              </p>
            </div>
          </div>
        </section>

        {/* TreeboLike Section */}
        <Treebolike />

        {/* Features */}
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

        {/* Attractions */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif text-center mb-8">
              Explore Nearby Attractions
            </h2>
            <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
              LazyStay Grand's prime location puts you moments away from the
              city's most iconic attractions...
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {attractions.map((attraction) => (
                <div
                  key={attraction.id}
                  className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300 h-full flex flex-col"
                >
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      e.target.src = "/assets/images/placeholder.jpg";
                    }}
                  />
                  <div className="p-4 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-xl font-serif text-gray-900 mb-2">
                        {attraction.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {attraction.description}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-blue-900 mt-auto">
                      📍 {attraction.distance} from this hotel
                    </p>
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
                onClick={() => {
                  openModal("general");
                }}
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

      {/* Amenity Modals */}
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
              return <EnquiryForm hotelName="Grand" onClose={closeModal} />;
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

export default GrandHotel;
