import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Import all individual modals
import RoomModal from "../components/modals/RoomModal";
import CinecafeModal from "../components/modals/CinecafeModal";
import BanquethalModal from "../components/modals/BanquethalModal";
import RestruantModal from "../components/modals/RestruantModal";
import LaundryModal from "../components/modals/LaundryModal";
import SalonModal from "../components/modals/SalonModal";

const AmenitiesSection = ({ id }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);
  const [showModal, setShowModal] = useState(false);
  const [selectedAmenity, setSelectedAmenity] = useState(null);

  const featuredAmenities = [
    {
      id: 1,
      name: "CineCafe",
      description:
        "Enjoy a unique cinematic dining experience with delicious snacks and beverages served in a cozy movie-themed ambiance.",
      image: "/assets/images/cinecafe/cinecafe1.jpeg",
    },
    {
      id: 2,
      name: "Conference Hall",
      description:
        "Host grand events, weddings, and corporate functions in our spacious and elegantly designed banquet hall.",
      image: "/assets/images/banquethall/hall2.jpeg",
    },
    {
      id: 3,
      name: "Restaurant",
      description:
        "Savor a wide range of multi-cuisine delicacies in a sophisticated dining atmosphere tailored for every palate.",
      image: "/assets/images/grand/restaurant/Restruant.JPG",
    },
    {
      id: 4,
      name: "In-House Laundry",
      description:
        "Take advantage of our professional laundry and dry-cleaning services for a hassle-free stay.",
      image: "/assets/images/lundry/laundry.png",
    },
    {
      id: 5,
      name: "Salon",
      description:
        "Pamper yourself with expert grooming and beauty treatments at our in-house unisex salon.",
      image: "/assets/images/salon/salonlogo.png",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) setItemsToShow(4);
      else if (width >= 768) setItemsToShow(2);
      else setItemsToShow(1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      centerMode: false,
      partialVisibilityGutter: 0,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      centerMode: true,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      centerMode: true,
    },
  };

  const handleEnquiryClick = (amenity) => {
    setSelectedAmenity(amenity);
    setShowModal(true);
  };

  const renderModal = () => {
    switch (selectedAmenity?.name.toUpperCase()) {
      case "CINECAFE":
        return (
          <CinecafeModal
            selectedAmenity={selectedAmenity}
            onClose={() => setShowModal(false)}
          />
        );
      case "CONFERENCE HALL":
        return (
          <BanquethalModal
            selectedAmenity={selectedAmenity}
            onClose={() => setShowModal(false)}
          />
        );
      case "RESTAURANT":
        return (
          <RestruantModal
            selectedAmenity={selectedAmenity}
            onClose={() => setShowModal(false)}
          />
        );
      case "IN-HOUSE LAUNDRY":
        return (
          <LaundryModal
            selectedService={selectedAmenity}
            onClose={() => setShowModal(false)}
          />
        );
      case "SALON":
        return (
          <SalonModal
            selectedService={selectedAmenity}
            onClose={() => setShowModal(false)}
          />
        );
      default:
        return (
          <RoomModal
            selectedRoom={selectedAmenity}
            onClose={() => setShowModal(false)}
          />
        );
    }
  };

  return (
    <section
      id={id}
      className="py-20 px-4 from-[#f0f4ff] via-[#fef7f1] to-[#f3eee8]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <h2 className="text-5xl font-serif text-[#b9935b] leading-tight">
            Premium Services
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Whether you're here for work or leisure, LazyStay offers refined
            amenities to meet your every need — from spacious rooms and gourmet
            dining to CineCafé movie nights, professional laundry services, an
            in-house salon, vibrant banquet halls, and a multi-cuisine
            restaurant experience.
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={3000}
          beforeChange={(prev, next) => setCurrentSlide(next)}
          arrows
          itemClass="px-3"
          partialVisible={false}
        >
          {featuredAmenities.map((amenity, index) => {
            const centerIndex = currentSlide + Math.floor(itemsToShow / 2);
            const isCenter = index === centerIndex && itemsToShow < 4;

            return (
              <div
                key={amenity.id}
                className={`bg-white shadow-xl rounded-3xl p-6 h-full flex flex-col justify-between transform transition-all duration-300 hover:shadow-2xl ${
                  isCenter ? "scale-105 z-10" : "scale-100 opacity-95"
                }`}
              >
                <div className="relative w-full h-52 rounded-2xl overflow-hidden mb-5 group">
                  <img
                    src={amenity.image}
                    alt={amenity.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <h3 className="text-2xl text-[#b9935b] font-extrabold font-serif text-center mb-3">
                  {amenity.name}
                </h3>

                <p className="text-gray-600 text-sm text-center mb-5 px-2">
                  {amenity.description}
                </p>

                <div className="flex flex-col gap-2 mt-auto items-center">
                  <button
                    onClick={() => handleEnquiryClick(amenity)}
                    className="bg-blue-900 hover:bg-blue-800 text-white px-5 py-2 rounded-full text-sm font-medium shadow-md transition-all duration-300"
                  >
                    Send Enquiry
                  </button>

                  <Link
                    to="/amenities"
                    className="text-[#b9935b] text-sm uppercase tracking-wider font-semibold hover:underline transition"
                  >
                    Learn more <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </Carousel>

        {/* Modal */}
        {showModal && renderModal()}
      </div>
    </section>
  );
};

export default AmenitiesSection;
