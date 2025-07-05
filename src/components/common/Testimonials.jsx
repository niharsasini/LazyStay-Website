import React from "react";
import { GUEST_TESTIMONIALS } from "../../constants/testimonials";

const Testimonials = ({ id }) => {
  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 sm:w-5 sm:h-5 ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
      </svg>
    ));

  return (
    <section
      id={id}
      className="py-16 sm:py-20 bg-gradient-to-br from-[#f0f4ff] via-[#fef7f1] to-[#f3eee8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4 font-serif">
          Guest Testimonials
        </h2>
        <p className="text-center text-gray-600 mb-10 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">
          Discover what our guests have to say about their memorable experiences
          at LazyStay Hotels.
        </p>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {GUEST_TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white/60 backdrop-blur border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-xl transition hover:scale-[1.02]"
            >
              <div className="flex mb-2">{renderStars(testimonial.rating)}</div>
              <p className="text-gray-800 italic mb-4 leading-relaxed text-sm sm:text-base">
                “{testimonial.comment}”
              </p>
              <div className="text-base font-semibold text-blue-900">
                {testimonial.name}
              </div>
              <div className="text-sm text-gray-500">
                {testimonial.location} • {testimonial.property}
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating Section */}
        <div className="mt-12 bg-indigo-900 text-white rounded-3xl p-5 sm:p-6 text-center shadow-lg">
          <h3 className="text-xl sm:text-2xl font-semibold mb-3 font-serif">
            Our Guest Satisfaction Score
          </h3>
          <div className="flex justify-center items-center mb-3">
            {renderStars(5).map((star, i) => (
              <span key={i} className="mx-0.5 sm:mx-1 text-xl sm:text-2xl">
                {star}
              </span>
            ))}
          </div>
          <p className="text-2xl sm:text-3xl font-extrabold mb-1">4.8/5</p>
          <p className="text-indigo-200 text-xs sm:text-sm">
            Based on 2,500+ verified reviews
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="p-3 bg-white bg-opacity-10 rounded-lg">
              <p className="text-xl sm:text-2xl font-bold mb-1">98%</p>
              <p className="text-xs sm:text-sm">Would recommend to a friend</p>
            </div>
            <div className="p-3 bg-white bg-opacity-10 rounded-lg">
              <p className="text-xl sm:text-2xl font-bold mb-1">95%</p>
              <p className="text-xs sm:text-sm">
                Rate our service as excellent
              </p>
            </div>
            <div className="p-3 bg-white bg-opacity-10 rounded-lg">
              <p className="text-xl sm:text-2xl font-bold mb-1">92%</p>
              <p className="text-xs sm:text-sm">Return for another stay</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <a
            href="#"
            className="inline-block bg-blue-900 text-white text-sm sm:text-base py-2.5 sm:py-3 px-6 sm:px-8 rounded-full shadow hover:bg-blue-800 transition duration-300"
          >
            Share Your Experience
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
