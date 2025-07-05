import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaStar, FaShareAlt } from "react-icons/fa";

const RatingsElite = () => {
  const ratingData = [
    { stars: 5, label: "Excellent", count: 160, color: "bg-green-700" },
    { stars: 4, label: "Very Good", count: 98, color: "bg-green-600" },
    { stars: 3, label: "Good", count: 52, color: "bg-lime-500" },
    { stars: 2, label: "Average", count: 21, color: "bg-orange-400" },
    { stars: 1, label: "Poor", count: 16, color: "bg-red-600" },
  ];

  const reviews = [
    {
      name: "Soumya",
      date: "10th Apr, 2025",
      content: "Clean rooms and great staff!",
    },
    {
      name: "Guest",
      date: "2nd Mar, 2025",
      content:
        "Affordable price, good location, overall nice stay. Rooms were cozy and food was great.",
      readMore: true,
    },
    {
      name: "Priya",
      date: "12th Feb, 2025",
      content: "Nice experience, would recommend.",
    },
    {
      name: "Ashok",
      date: "29th Jan, 2025",
      content: "Room service was quick and friendly.",
    },
    {
      name: "Guest",
      date: "5th Jan, 2025",
      content: "Good value for money!",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1536 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1536, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="max-w-7xl mx-auto py-8">
      <h3 className="text-[24px] font-bold text-[rgb(74,74,74)] mb-6">
        Rating & Reviews
      </h3>

      {/* Ratings Summary */}
      <div className="flex items-center justify-between mb-4">
        <FaShareAlt className="text-teal-600" />
        <div className="w-[75%]">
          <div className="flex justify-between flex-wrap w-full">
            {ratingData.map((rate, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-sm w-[120px]"
              >
                <span className="text-center">
                  {rate.stars}{" "}
                  <FaStar className="inline text-gray-600 text-sm" /> (
                  {rate.label})
                </span>
                <span>{rate.count}</span>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mt-1">
                  <div
                    className={`${rate.color} h-full`}
                    style={{ width: `${Math.min(rate.count / 2, 100)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews Carousel */}
      <div className="mt-6 px-4">
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={3000}
          keyBoardControl
          arrows
          showDots={false}
          containerClass="carousel-container"
          itemClass="px-2"
        >
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-gray-100 p-4 rounded-lg shadow-md min-h-[180px] flex flex-col justify-between"
            >
              <p className="text-gray-800 mb-3 text-sm line-clamp-4">
                {review.content}{" "}
                {review.readMore && (
                  <span className="text-teal-700 font-medium cursor-pointer">
                    Read More...
                  </span>
                )}
              </p>
              <div className="text-teal-700 flex items-center gap-1">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <FaStar key={i} size={14} />
                  ))}
              </div>
              <div className="text-sm text-gray-600 mt-2">
                <strong>{review.name}</strong> | {review.date}
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <button className="text-teal-700 mt-4 hover:underline">
        View all reviews
      </button>
    </div>
  );
};

export default RatingsElite;
