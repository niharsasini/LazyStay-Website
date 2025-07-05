import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Gallery = ({ id }) => {
  const [activeHotel, setActiveHotel] = useState("grand");

  const grandImages = [
    { id: "g1", src: "/assets/images/grand/rooms/Acacia1.JPG" },
    { id: "g2", src: "/assets/images/grand/rooms/Mapple1.JPG" },
    { id: "g3", src: "/assets/images/grand/rooms/Mapple3.JPG" },
    { id: "g4", src: "/assets/images/grand/restaurant/Restruant.JPG" },
    { id: "g5", src: "/assets/images/grand/parking/Parcking.JPG" },
    { id: "g6", src: "/assets/images/grand/entrance/entrance.JPG" },
    { id: "g8", src: "/assets/images/grand2.webp" },
    { id: "g9", src: "/assets/images/grand/restaurant/Restruant2.jpg" },
    { id: "g10", src: "/assets/images/grand/facade/dayfacade2.jpg" },
    { id: "g11", src: "/assets/images/grand/rooms/oak3.JPG" },
  ];

  const eliteImages = [
    { id: "e1", src: "/assets/images/elite/facade/dayfacade2.jpg" },
    { id: "e2", src: "/assets/images/elite/reception/elite1.jpg" },
    { id: "e3", src: "/assets/images/elite/room/mapple.jpg" },
    { id: "e4", src: "/assets/images/elite/room/oak1.jpg" },
    { id: "e5", src: "/assets/images/elite/reception/elite2.jpg" },
    { id: "e6", src: "/assets/images/elite/corrider/corrider1.jpg" },
    { id: "e7", src: "/assets/images/elite/restruant/dining3.jpg" },
    { id: "e8", src: "/assets/images/elite/restruant/dining2.jpg" },
    { id: "e9", src: "/assets/images/elite/facade/nightfacade.jpg" },
    { id: "e10", src: "/assets/images/elite/stairs/stairs2.jpg" },
    { id: "e11", src: "/assets/images/elite/stairs/stairs2.jpg" },

  ];

  return (
    <section
      id={id}
      className="py-10 sm:py-12 md:py-16 bg-gradient-to-br from-[#f0f4ff] via-[#fef7f1] to-[#f3eee8]"
    >
      <div className="container mx-auto px-4 lg:px-20">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-serif font-bold text-center text-blue-900 mb-6 sm:mb-8 md:mb-12">
          Our Hotel Gallery
        </h2>
        <p className="text-center text-gray-600 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg">
          Explore the beauty and elegance of LazyStay hotels through our
          stunning gallery. From luxurious rooms to exquisite dining
          experiences, get a glimpse of what awaits you.
        </p>

        {/* Hotel Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button
            className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm font-semibold transition-all duration-300 border-2 ${
              activeHotel === "grand"
                ? "bg-blue-900 text-white border-blue-900 shadow-md"
                : "bg-white text-blue-900 border-blue-300 hover:bg-blue-50"
            }`}
            onClick={() => setActiveHotel("grand")}
          >
            LazyStay Grand
          </button>
          <button
            className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm font-semibold transition-all duration-300 border-2 ${
              activeHotel === "elite"
                ? "bg-blue-900 text-white border-blue-900 shadow-md"
                : "bg-white text-blue-900 border-blue-300 hover:bg-blue-50"
            }`}
            onClick={() => setActiveHotel("elite")}
          >
            LazyStay Elite
          </button>
        </div>

        {/* Hotel Description */}
        <div className="text-center mb-10 px-2">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif mb-2 sm:mb-3 text-blue-800">
            {activeHotel === "grand" ? "LazyStay Grand" : "LazyStay Elite"}
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg">
            {activeHotel === "grand"
              ? "Experience luxury redefined at LazyStay Grand. Our flagship hotel offers spacious rooms, world-class amenities, and impeccable service in a prime location."
              : "LazyStay Elite combines modern elegance with comfort. Perfect for both business and leisure travelers seeking a sophisticated yet relaxing atmosphere."}
          </p>
        </div>

        {/* Gallery Carousel */}
        <div className="max-w-6xl mx-auto px-2 sm:px-4">
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={true}
            interval={3000}
            transitionTime={800}
            stopOnHover={true}
            swipeable={true}
            emulateTouch={true}
            thumbWidth={100}
            autoPlay={true}
            className="gallery-carousel shadow-2xl rounded-2xl overflow-hidden"
          >
            {(activeHotel === "grand" ? grandImages : eliteImages).map(
              (image) => (
                <div
                  key={image.id}
                  className="h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] group"
                >
                  <img
                    src={image.src}
                    className="h-full w-full object-cover transform group-hover:scale-105 transition duration-500"
                    alt="Hotel gallery"
                  />
                </div>
              )
            )}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
