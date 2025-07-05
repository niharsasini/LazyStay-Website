import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MdElevator } from "react-icons/md"; // ✅ Correct Elevator icon

// ✅ Feature Icons
import {
  FaWifi,
  FaBed,
  FaParking,
  FaUtensils,
  FaTv,
  FaCreditCard,
  FaLock, // ✅ Keep this
  // FaElevator – ❌ REMOVE THIS
} from "react-icons/fa";

// ✅ Icon map for features
const featureIcons = {
  "3-star accommodation": <FaBed />,
  "Queen Bed": <FaBed />,
  "King Bed": <FaBed />,
  Restaurant: <FaUtensils />,
  "Limited Parking": <FaParking />,
  "Room Service": <FaUtensils />,
  "Flat Screen TV": <FaTv />,
  "Free Breakfast": <FaUtensils />,
  "Card Payment Accepted": <FaCreditCard />,
  Elevator: <MdElevator />,
  "24 Hour Security": <FaLock />,
};

const OurHotels = ({ id }) => {
  const hotels = [
    {
      id: 1,
      name: "LazyStay Grand",
      description:
        "Welcome to LazyStay Grand, Patia – where comfort meets class. Located in the heart of Bhubaneswar’s tech and education hub, our upscale 3-star hotel offers elegant rooms, exceptional service, and modern amenities for both business and leisure travelers.",
      images: [
        "/assets/images/hero.jpg",
        "/assets/images/grand/facade/dayfacade2.jpg",
        "/assets/images/grand/lobby/Lobby.JPG",
        "/assets/images/grand/lobby/Lobby2.JPG",
      ],
      features: [
        "3-star accommodation",
        "Queen Bed",
        "Restaurant",
        "Limited Parking",
        "Room Service",
        "Flat Screen TV",
        "Complimentary Toiletries",
        "Free Breakfast",
      ],
      price: "Starting from ₹8,999/night",
      path: "/grand",
    },
    {
      id: 2,
      name: "LazyStay Elite",
      description:
        "Discover a refined stay at LazyStay Elite – where modern design meets everyday comfort. Located in a peaceful yet accessible part of the city, our Elite property offers stylish rooms, essential amenities, and a relaxing ambiance for both business and leisure guests.",
      images: [
        "/assets/images/elite/facade/dayfacade2.jpg",
        "/assets/images/elite/lobby/lobby2.jpg",
        "/assets/images/elite/reception/elite2.jpg",
        "/assets/images/elite/lobby/lobby3.jpg",
      ],
      features: [
        "3-star accommodation",
        "King Bed",
        "Restaurant",
        "Room Service",
        "Card Payment Accepted",
        "Elevator",
        "24 Hour Security",
      ],
      price: "Starting from ₹6,999/night",
      path: "/elite",
    },
  ];

  const carouselConfig = {
    arrows: false,
    showDots: false,
    infinite: true,
    autoPlay: true,
    autoPlaySpeed: 3000,
    draggable: true,
    swipeable: true,
    keyBoardControl: true,
    containerClass: "carousel-container",
    itemClass: "h-full transition-opacity duration-700 ease-in-out",
    responsive: {
      all: {
        breakpoint: { max: 4000, min: 0 },
        items: 1,
      },
    },
  };

  return (
    <section
      id={id}
      className="py-14 bg-gradient-to-br from-[#f0f4ff] via-[#fef7f1] to-[#f3eee8]"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-center text-blue-900 mb-12">
          Explore Our Hotels
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-[1.01] transition-all duration-300 border border-gray-100 flex flex-col w-full sm:max-w-[92%] mx-auto"
            >
              <div className="h-44 sm:h-52 md:h-60 overflow-hidden">
                <Carousel {...carouselConfig}>
                  {hotel.images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Image ${index + 1} of ${hotel.name}`}
                      loading="lazy"
                      aria-label={`Image ${index + 1} for ${hotel.name}`}
                      className="w-full h-44 sm:h-52 md:h-60 object-cover transition-opacity duration-700 ease-in-out"
                    />
                  ))}
                </Carousel>
              </div>

              <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-serif font-semibold text-center text-blue-900 mb-2">
                    {hotel.name}
                  </h3>
                  <p className="inline-block mx-auto bg-blue-50 text-blue-800 text-[11px] font-medium px-3 py-1 rounded-full shadow-sm mb-3">
                    📍 Near KIIT University
                  </p>

                  <p className="text-sm text-gray-600 mb-3 text-center leading-relaxed line-clamp-3">
                    {hotel.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-blue-900 text-center">
                      Key Features
                    </h4>
                    <div className="w-full h-[1px] bg-blue-100 mx-auto my-2 rounded-full"></div>

                    <div className="grid grid-cols-2 gap-4">
                      {[0, 1].map((col) => (
                        <div
                          key={col}
                          className="flex flex-col gap-3 items-start"
                        >
                          {hotel.features
                            .filter((_, i) =>
                              col === 0
                                ? i < Math.ceil(hotel.features.length / 2)
                                : i >= Math.ceil(hotel.features.length / 2)
                            )
                            .map((feature, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-2"
                              >
                                <div className="bg-blue-100 text-blue-700 w-6 h-6 flex items-center justify-center rounded-full text-sm shrink-0">
                                  {featureIcons[feature] || "🛎️"}
                                </div>
                                <span className="text-xs text-gray-800">
                                  {feature}
                                </span>
                              </div>
                            ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="text-center mt-auto border-t pt-3">
                  <Link
                    to={hotel.path}
                    className="inline-block bg-blue-900 hover:bg-blue-800 text-white text-xs px-4 py-2 rounded-full transition"
                    aria-label={`View more details about ${hotel.name}`}
                  >
                    View Hotel
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurHotels;
