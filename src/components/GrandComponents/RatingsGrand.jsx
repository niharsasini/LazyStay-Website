import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaStar, FaShareAlt } from "react-icons/fa";

const RatingsGrand = () => {
  const ratingData = [
    { stars: 5, label: "Excellent", count: 185, color: "bg-green-700" },
    { stars: 4, label: "Very Good", count: 117, color: "bg-green-600" },
    { stars: 3, label: "Good", count: 64, color: "bg-lime-500" },
    { stars: 2, label: "Average", count: 13, color: "bg-orange-400" },
    { stars: 1, label: "Poor", count: 27, color: "bg-red-600" },
  ];

  const reviews = [
    {
      name: "Debadrita",
      date: "11th Apr, 2025",
      content: "Satisfactory",
    },
    {
      name: "Guest",
      date: "8th Feb, 2025",
      content:
        "I have stayed here many times. Room, staff behavior is very good. Neat and clean room, tasty food...",
      readMore: true,
    },
    {
      name: "Guest",
      date: "1st Jan, 2025",
      content: "Room is clean and staff are cooperative",
    },
    {
      name: "Pritam",
      date: "24th Dec, 2024",
      content: "Good rooms and comfortable stay",
    },
    {
      name: "Nihar",
      date: "10th Nov, 2024",
      content: "Value for money, great service!",
    },
    {
      name: "Ankita",
      date: "5th Nov, 2024",
      content: "Had a very peaceful and relaxing stay.",
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
      <h3 className="text-[24px] font-bold text-[rgb(74,74,74)] p-0 m-0 mb-6">
        Rating & Reviews
      </h3>

      {/* Ratings Summary */}
      {/* Ratings Summary */}
      <div className="flex items-center justify-between mb-4">
        <FaShareAlt className="text-teal-600" />
        <div className="w-[75%]">
          {" "}
          {/* Increased from 70% */}
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
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
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

      {/* Reviews Carousel with react-multi-carousel */}
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
              className="bg-gray-100 p-4 rounded-lg shadow-md min-h-[180px] flex flex-col justify-between h-full"
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

export default RatingsGrand;
