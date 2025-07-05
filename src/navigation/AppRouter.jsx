import React from "react";
import { Routes, Route } from "react-router-dom";

import Homepage from "../pages/Homepage";
import OurHotels from "../components/OurHotels";
import Gallery from "../components/Gallery";
import AmenitiesSection from "../components/AmenitiesSection";
import Testimonials from "../components/common/Testimonials";

import Amenities from "../pages/Amenities";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import GrandHotel from "../pages/GrandHotel";
import EliteHotel from "../pages/EliteHotel";

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Homepage />
            <OurHotels id="hotels" />
            <Gallery id="gallery" />
            <AmenitiesSection id="amenities" />
            <Testimonials id="testimonials" />
          </>
        }
      />
      <Route path="/hotels" element={<OurHotels />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/amenities" element={<Amenities />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/grand" element={<GrandHotel />} />
      <Route path="/elite" element={<EliteHotel />} />
    </Routes>
  );
};

export default AppRouter;
