import React from "react";
import { HiOutlineCheckCircle } from "react-icons/hi";

import RoomModal from "../components/modals/RoomModal";
import CinecafeModal from "../components/modals/CinecafeModal";
import BanquethalModal from "../components/modals/BanquethalModal";
import RestruantModal from "../components/modals/RestruantModal";
import LaundryModal from "../components/modals/LaundryModal";
import SalonModal from "../components/modals/SalonModal";

import useEnquiryModal from "../hooks/useEnquiryModal";

const Amenities = ({ id }) => {
  const {
    showEnquiryForm: showModal,
    selectedRoom: selectedAmenity,
    setSelectedRoom: setSelectedAmenity,
    openModal,
    closeModal,
  } = useEnquiryModal();

  const amenities = [
    {
      id: 1,
      key: "salon",
      name: "UNISEX SALON & SPA",
      description:
        "Relax and rejuvenate with luxurious grooming and spa treatments tailored for men and women.",
      image: "/assets/images/salon/salon2.jpeg",
      features: [
        "Aromatherapy massages",
        "Facials & grooming",
        "Steam & sauna",
        "Ayurvedic therapies",
      ],
    },
    {
      id: 2,
      key: "cinecafe",
      name: "CINECAFE",
      description:
        "Watch your favorite movies while enjoying gourmet snacks and drinks at your seat.",
      image: "/assets/images/cinecafe/cinecafe1.jpeg",
      features: [
        "Recliner seating",
        "Gourmet popcorn",
        "In-seat dining",
        "Private screenings",
      ],
    },
    {
      id: 3,
      key: "banquet",
      name: "BANQUET HALL",
      description:
        "Celebrate events with elegance and exceptional service in our stylish banquet spaces.",
      image: "/assets/images/banquethall/hall2.jpeg",
      features: [
        "Custom event decor",
        "AV setup",
        "Catering services",
        "Event planning",
      ],
    },
    {
      id: 4,
      key: "restaurant",
      name: "FINE DINING RESTAURANT",
      description:
        "Enjoy multi-cuisine delicacies in a sophisticated ambiance with curated wine options.",
      image: "/assets/images/grand/restaurant/Restruant.JPG",
      features: [
        "Multi-cuisine menu",
        "Private dining",
        "Live cooking stations",
        "Wine pairings",
      ],
    },
    {
      id: 5,
      key: "laundry",
      name: "PREMIUM LAUNDRY",
      description:
        "Freshen up your wardrobe with eco-friendly laundry and delicate garment care.",
      image: "/assets/images/lundry/lundry1.jpeg",
      features: [
        "Express service",
        "Eco wash options",
        "Shoe polishing",
        "24hr turnaround",
      ],
    },
    {
      id: 6,
      key: "parking",
      name: "PREMIUM PARKING",
      description:
        "Enjoy peace of mind with 24/7 secure parking, valet service, and EV charging support.",
      image: "/assets/images/grand/parking/Parcking.JPG",
      features: [
        "Covered lots",
        "Valet parking",
        "EV charging",
        "Surveillance 24/7",
      ],
    },
  ];

  const renderModal = () => {
    switch (selectedAmenity?.key) {
      case "cinecafe":
        return (
          <CinecafeModal
            selectedAmenity={selectedAmenity}
            onClose={closeModal}
          />
        );
      case "banquet":
        return (
          <BanquethalModal
            selectedAmenity={selectedAmenity}
            onClose={closeModal}
          />
        );
      case "restaurant":
        return (
          <RestruantModal
            selectedAmenity={selectedAmenity}
            onClose={closeModal}
          />
        );
      case "laundry":
        return (
          <LaundryModal
            selectedService={selectedAmenity}
            onClose={closeModal}
          />
        );
      case "salon":
        return (
          <SalonModal selectedService={selectedAmenity} onClose={closeModal} />
        );
      default:
        return (
          <RoomModal selectedRoom={selectedAmenity} onClose={closeModal} />
        );
    }
  };

  return (
    <section id={id} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-3">
          Exclusive Amenities
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover our curated selection of luxurious amenities crafted for
          comfort, convenience, and indulgence.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((amenity) => (
            <div
              key={amenity.id}
              className="bg-gray-50 rounded-2xl shadow hover:shadow-lg transition-all overflow-hidden flex flex-col"
            >
              <div className="relative h-48 w-full overflow-hidden rounded-t-2xl">
                <img
                  src={amenity.image}
                  alt={amenity.name}
                  className="absolute inset-0 w-full h-full object-center object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/assets/images/placeholder.jpg";
                  }}
                />
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {amenity.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {amenity.description}
                </p>

                <div className="mb-5">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">
                    Highlights:
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {amenity.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <HiOutlineCheckCircle className="text-blue-800 text-lg mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <button
                    onClick={() => {
                      setSelectedAmenity(amenity);
                      openModal("general");
                    }}
                    className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800 transition"
                  >
                    Send Enquiry
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-700 text-lg mb-5 font-medium">
            Experience effortless luxury at every step of your stay.
          </p>
        </div>
      </div>

      {/* Modal */}
      {showModal && selectedAmenity && renderModal()}
    </section>
  );
};

export default Amenities;
