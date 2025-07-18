import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { IoClose } from "react-icons/io5";

const Homecomponent = () => {
  const [showModal, setShowModal] = useState(false);

  const slides = [
    {
      image: "assets/images/hero.jpg",
      title: "Indulge in Affordable Elegance",
      subtitle: "LazyStay Grand – Experience More Than Just a Stay",
      desc: "Unwind in spacious rooms, enjoy top-class amenities, and feel the warmth of premium hospitality at a pocket-friendly price.",
      badge: "/tripadvisor-badge.png",
    },
    {
      image: "/assets/images/elite/facade/dayfacade2.jpg",
      title: "Stay Cozy. Stay Happy.",
      subtitle: "LazyStay Hotel – A Perfect Escape Awaits",
      desc: "Whether you're here for a weekend getaway or a relaxing retreat, LazyStay offers the comfort and charm you deserve at an affordable rate.",
      badge: "/tripadvisor-badge.png",
    },
  ];

  return (
    <>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        interval={3000}
        transitionTime={1000}
        stopOnHover={false}
      >
        {slides.map((slide, idx) => (
          <div key={idx} className="relative h-[60vh] sm:h-[80vh] w-full">
            <img
              src={slide.image}
              alt={`Slide ${idx}`}
              className="absolute inset-0 h-full w-full object-cover z-0"
            />

            <div className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white px-3 sm:px-6">
              <h2 className="text-[12px] sm:text-base md:text-2xl font-light mb-1 tracking-wide">
                {slide.subtitle}
              </h2>
              <h1 className="text-xl sm:text-4xl md:text-6xl font-serif font-bold leading-tight mb-2 sm:mb-4">
                {slide.title}
              </h1>
              <p className="text-xs sm:text-sm md:text-lg px-1 sm:px-0">
                {slide.desc}
              </p>

              {slide.badge && (
                <div className="mt-3 sm:mt-6">
                  <img
                    src={slide.badge}
                    alt="Badge"
                    className="h-10 sm:h-16 md:h-20 mx-auto"
                  />
                </div>
              )}

              {/* Info Button */}
              <div
                onClick={() => setShowModal(true)}
                className="absolute bottom-4 sm:bottom-10 left-4 sm:left-10 border border-white rounded-full px-4 py-1.5 sm:px-6 sm:py-3 text-[10px] sm:text-xs uppercase tracking-widest hover:bg-white hover:text-black transition cursor-pointer"
              >
                Important Info
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-center items-center px-4">
          <div className="bg-white w-full sm:w-[90%] max-w-2xl max-h-[80vh] overflow-y-auto p-4 sm:p-6 rounded-lg relative shadow-lg">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 sm:top-4 right-2 sm:right-4 text-gray-600 hover:text-black text-xl sm:text-2xl"
            >
              <IoClose />
            </button>

            <h2 className="text-[18px] sm:text-[24px] font-bold text-[rgb(74,74,74)] mb-3 sm:mb-4">
              Rules and Policies
            </h2>

            <div className="space-y-3 sm:space-y-4 text-gray-700 text-xs sm:text-sm">
              <div>
                <strong className="font-semibold text-[13px] sm:text-[14px] text-[rgb(22,60,53)]">
                  Couple Friendly
                </strong>
                <br />
                Lazystay Grand Patia welcomes unmarried couples.
              </div>
              <div>
                <strong className="font-semibold text-[13px] sm:text-[14px] text-[rgb(22,60,53)]">
                  Local ID Policy
                </strong>
                <br />
                Guests can check in using any local or outstation ID proof (PAN
                card not accepted).
              </div>
              <div>
                <strong className="font-semibold text-[13px] sm:text-[14px] text-[rgb(22,60,53)]">
                  Check-in and Check-out
                </strong>
                <br />
                Check-in: 01:00 pm &nbsp; Check-out: 11:00 am
              </div>
              <div>
                <strong className="font-semibold text-[13px] sm:text-[14px] text-[rgb(22,60,53)]">
                  Cancellation Policy
                </strong>
                <br />
                No cancellation fee is charged if the booking is cancelled 24
                hours before check-in. If cancelled within 24 hours, one night's
                tariff is charged. No refunds for non-refundable bookings.
                Convenience fee is also not refundable.
              </div>
              <div>
                <strong className="font-semibold text-[13px] sm:text-[14px] text-[rgb(22,60,53)]">
                  Convenience Fee
                </strong>
                <br />A fee is applied for all bookings made via the app or
                website. It helps support 24/7 service. The fee is consistent
                across payment modes and is non-refundable, even in case of
                cancellation or no-show.
              </div>
              <div>
                <strong className="font-semibold text-[13px] sm:text-[14px] text-[rgb(22,60,53)]">
                  Child Reservation Policy
                </strong>
                <br />1 child up to 8 years and 1 infant up to 2 years are
                allowed free of charge. Extra person charges apply for kids
                above 8 years. No extra bed/mattress is provided.
              </div>
              <div>
                <strong className="font-semibold text-[13px] sm:text-[14px] text-[rgb(22,60,53)]">
                  GST Details
                </strong>
                <br />
                Additional GST and applicable charges are levied as per
                government norms.
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Homecomponent;
