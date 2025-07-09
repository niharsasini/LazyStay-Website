import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const journey = [
    {
      year: "2020",
      title: "The Beginning",
      description: [
        "In 2010, I envisioned a space where hospitality would feel heartfelt, not transactional. That vision came to life with LazyStay’s very first boutique hotel in Patia, Bhubaneswar — just steps away from KIIT College.",
        "Starting with only 15 thoughtfully designed rooms, we focused on offering more than just a stay — we built a place where guests could feel comforted, cared for, and completely at ease. That same feeling still defines every LazyStay experience today.",
      ],
      image: "/assets/images/grand/facade/dayfacade2.jpg",
      fallback: "/assets/images/grand-hotel.webp",
      reverse: false,
    },
    {
      year: "2021-2023",
      title: "Expansion & Innovation",
      description: [
        "Building on our early success, we expanded across key cities in Odisha while strengthening our roots in Bhubaneswar. This period marked the beginning of our innovation-first approach.",
        "We introduced unique lifestyle concepts like our signature CineCafé — an in-house movie lounge café — and implemented eco-conscious practices across our properties, from energy-efficient systems to sustainable sourcing. It was a phase of growth where comfort met creativity.",
      ],
      image: "/assets/images/elite/facade/dayfacade2.jpg",
      fallback: "/assets/images/elite-hotel.webp",
      reverse: true,
    },
    {
      year: "Today & Tomorrow",
      title: "Vision Ahead",
      description: [
        "Today, LazyStay stands tall with our Grand and Elite properties setting new benchmarks in luxury hospitality, proudly rooted in Bhubaneswar and admired across India.",
        "As we look ahead, we’re preparing for international expansion — blending smart technology, sustainable design, and heartfelt service to create unforgettable stays that resonate across borders.",
      ],
      image: "/assets/images/about/today.jpg",
      fallback: "/assets/images/hero.jpg",
      reverse: false,
    },
  ];

  const team = [
    {
      name: "Vishal Sharma",
      position: "Founder & CEO",
      image: "/assets/images/team/ceo.jpg",
    },
    {
      name: "Subhash ",
      position: "Chief Operating Officer",
      image: "/assets/images/team/coo.jpg",
    },
    {
      name: "Arjun Mehta",
      position: "Chief Experience Officer",
      image: "/assets/images/team/cxo.jpg",
    },
    {
      name: "Neha Patel",
      position: "Head of Hospitality",
      image: "/assets/images/team/hoh.jpg",
    },
  ];

  return (
    <div className="py-16 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-3xl sm:text-5xl font-bold font-serif mb-4 text-blue-900">
            Our Story
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how LazyStay redefined hospitality through luxury,
            innovation, and warmth.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <div
            className="bg-gradient-to-br from-white via-blue-50 to-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition"
            data-aos="fade-right"
          >
            <h2 className="text-2xl sm:text-4xl font-bold text-blue-900 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-3">
              At LazyStay, we envision a world where hospitality goes beyond
              luxury — becoming a lifestyle of comfort, connection, and curated
              experiences.
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Our goal is to create immersive spaces that not only pamper our
              guests but inspire them — blending personalized care with
              cutting-edge innovation, and redefining what it means to feel at
              home anywhere in the world.
            </p>
          </div>

          <div
            className="bg-gradient-to-br from-white via-blue-50 to-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition"
            data-aos="fade-left"
          >
            <h2 className="text-2xl sm:text-4xl font-bold text-blue-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-3">
              To craft exceptional hospitality experiences rooted in warmth,
              personalization, and mindful sustainability — ensuring every guest
              feels genuinely valued and cared for.
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              From the moment you arrive to the time you depart, our mission is
              to make your stay unforgettable by anticipating needs, exceeding
              expectations, and creating memories that linger long after your
              journey.
            </p>
          </div>
        </div>

        {/* Our Journey */}
        <div className="mb-24">
          <h2
            className="text-2xl sm:text-4xl font-bold font-serif text-center mb-16 text-blue-900"
            data-aos="fade-up"
          >
            Our Journey
          </h2>

          <div className="space-y-24">
            {journey.map((item, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${
                  item.reverse ? "md:flex-row-reverse" : "md:flex-row"
                } items-center gap-10`}
                data-aos="fade-up"
              >
                {/* Text Content */}
                <div className="md:w-1/2 p-4 sm:p-6">
                  <span className="text-xs sm:text-sm font-medium bg-blue-100 text-blue-900 px-3 py-1 rounded-full mb-3 inline-block shadow-sm">
                    {item.year}
                  </span>
                  <h3 className="text-xl sm:text-3xl font-semibold text-blue-800 mb-3">
                    {item.title}
                  </h3>
                  {item.description.map((text, i) => (
                    <p
                      key={i}
                      className="text-gray-700 text-base sm:text-lg mb-2 leading-relaxed"
                    >
                      {text}
                    </p>
                  ))}
                </div>

                {/* Image Content */}
                <div className="md:w-1/2 p-4 sm:p-6">
                  <img
                    src={item.image}
                    alt={item.title}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = item.fallback;
                    }}
                    className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-xl hover:shadow-2xl transition"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <h2
            className="text-2xl sm:text-3xl font-serif text-center mb-12 text-blue-900"
            data-aos="fade-up"
          >
            Leadership Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="text-center" data-aos="zoom-in">
                <div className="mb-4 w-32 sm:w-40 h-32 sm:h-40 mx-auto rounded-full overflow-hidden border-4 border-blue-800 shadow-md hover:shadow-xl transition">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/assets/images/placeholder.jpg";
                    }}
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-gray-500 text-sm">{member.position}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div
          className="text-center bg-blue-900 text-white p-8 sm:p-12 rounded-3xl shadow-lg"
          data-aos="fade-up"
        >
          <h2 className="text-xl sm:text-3xl font-serif mb-4">
            Experience the LazyStay Difference
          </h2>
          <p className="mb-6 sm:mb-8 max-w-xl mx-auto text-white/90 text-sm sm:text-base">
            Join thousands who’ve made LazyStay their favorite retreat. We can’t
            wait to host you.
          </p>
          <button className="bg-white text-blue-900 font-semibold px-5 py-2 sm:px-6 sm:py-3 rounded-full flex items-center gap-2 mx-auto hover:bg-gray-100 transition text-sm sm:text-base">
            Book Your Stay Today <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
