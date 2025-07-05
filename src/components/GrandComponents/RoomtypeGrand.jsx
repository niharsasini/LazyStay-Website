import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaWifi, FaBed } from "react-icons/fa";
import {
  MdLiveTv,
  MdOutlineAcUnit,
  MdOutlineShower,
  MdOutlineSmokeFree,
} from "react-icons/md";
import { PiToiletLight } from "react-icons/pi";
import { AiOutlineCheck } from "react-icons/ai";
import RoomModal from "../modals/RoomModal";

const RoomtypeGrand = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const responsive = {
    all: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
    },
  };

  const roomData = [
    {
      id: 1,
      name: "Deluxe Room (MAPLE)",
      size: "210sq.ft.",
      bedType: "King Bed",
      refundable: true,
      guests: 2,
      breakfastIncluded: true,
      images: [
        "/assets/images/grand/rooms/Mapple2.JPG",
        "/assets/images/grand/rooms/mapple.JPG",
        "/assets/images/grand/rooms/maple4.JPG",
      ],
      amenities: [
        { label: "Free Wifi", icon: <FaWifi /> },
        { label: "Ac Room", icon: <MdOutlineAcUnit /> },
        { label: "Complimentary Toiletries", icon: <PiToiletLight /> },
        { label: "Smoking Room", icon: <MdOutlineSmokeFree /> },
        { label: "Cupboards", icon: <FaBed /> },
        { label: "King Bed", icon: <FaBed /> },
        { label: "Geyser", icon: <MdOutlineShower /> },
        { label: "Flat Screen Tv", icon: <MdLiveTv /> },
      ],
    },
    {
      id: 2,
      name: "Standard Room (OAK)",
      size: "180 sq.ft.",
      refundable: false,
      guests: 2,
      breakfastIncluded: true,
      images: [
        "/assets/images/grand/rooms/oak4.JPG",
        "/assets/images/grand/rooms/oak3.JPG",
        "/assets/images/grand/rooms/oak2.JPG",
        "/assets/images/grand/rooms/oak.jpg",
        "/assets/images/grand/rooms/oak1.JPG",
      ],
      amenities: [
        { label: "Free Wifi", icon: <FaWifi /> },
        { label: "Ac Room", icon: <MdOutlineAcUnit /> },
        { label: "Complimentary Toiletries", icon: <PiToiletLight /> },
        { label: "Smoking Room", icon: <MdOutlineSmokeFree /> },
        { label: "Cupboards", icon: <FaBed /> },
        { label: "Geyser", icon: <MdOutlineShower /> },
        { label: "Flat Screen Tv", icon: <MdLiveTv /> },
      ],
    },
    {
      id: 3,
      name: "Economy Room (ACACIA)",
      size: "120 sq.ft.",
      bedType: "Queen Bed",
      refundable: true,
      breakfastIncluded: true,
      images: [
        "/assets/images/grand/rooms/Acacia1.JPG",
        "/assets/images/grand/rooms/Acacia2.JPG",
        "/assets/images/grand/rooms/Acacia3.JPG",
      ],
      amenities: [
        { label: "Free Wifi", icon: <FaWifi /> },
        { label: "Ac Room", icon: <MdOutlineAcUnit /> },
        { label: "Complimentary Toiletries", icon: <PiToiletLight /> },
        { label: "Queen Bed", icon: <FaBed /> },
        { label: "Smoking Room", icon: <MdOutlineSmokeFree /> },
        { label: "Cupboards", icon: <FaBed /> },
        { label: "Geyser", icon: <MdOutlineShower /> },
        { label: "Flat Screen Tv", icon: <MdLiveTv /> },
      ],
    },
  ];

  const renderRoomCard = (room) => (
    <div
      key={room.id}
      className="border rounded-xl shadow-md flex flex-col justify-between overflow-hidden w-full bg-white hover:shadow-lg transition-all duration-300"
    >
      {/* Image Carousel */}
      <div className="w-full h-[180px] relative rounded-t-lg overflow-hidden">
        <Carousel
          responsive={responsive}
          showDots={false}
          arrows
          infinite
          className="h-full w-full"
          itemClass="h-full"
        >
          {room.images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${room.name}-${i}`}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          ))}
        </Carousel>
        <button className="absolute bottom-2 right-2 bg-white/90 text-gray-700 px-2 py-1 text-xs rounded shadow">
          {room.images.length} Photos
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 py-3 flex flex-col justify-between gap-3">
        <div>
          <h4
            className="text-[18px] font-semibold text-gray-800 truncate"
            title={room.name}
          >
            {room.name}
          </h4>
          <p className="text-sm text-gray-600 mb-1">
            {room.size}
            {room.bedType && <span className="ml-4">{room.bedType}</span>}
          </p>

          {room.breakfastIncluded && (
            <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full mb-2">
              Free Breakfast <AiOutlineCheck className="ml-1 text-base" />
            </span>
          )}

          <div className="flex flex-wrap gap-3 text-sm text-gray-700">
            {room.amenities.map((item, idx) => (
              <div key={idx} className="flex items-center gap-1">
                <div className="bg-gray-100 w-6 h-6 flex items-center justify-center rounded-full text-sm text-blue-700">
                  {item.icon}
                </div>
                <span className="text-xs text-gray-700">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Enquiry Button */}
      <div className="w-full bg-blue-50 px-4 py-3 flex justify-center">
        <button
          onClick={() => {
            setSelectedRoom(room);
            setShowForm(true);
          }}
          className="bg-blue-900 text-white px-5 py-2 text-sm rounded-md hover:bg-blue-800 transition-all font-semibold shadow"
        >
          Send Enquiry
        </button>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto py-6">
      <h3 className="text-[24px] font-bold text-[rgb(74,74,74)] mb-6">
        Room Types
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {roomData.map((room) => renderRoomCard(room))}
      </div>

      {/* ✅ Room Modal with hotelName passed */}
      {showForm && selectedRoom && (
        <RoomModal
          selectedRoom={selectedRoom}
          onClose={() => setShowForm(false)}
          hotelName="Lazystay Grand"
        />
      )}
    </div>
  );
};

export default RoomtypeGrand;
