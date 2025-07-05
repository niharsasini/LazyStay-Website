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

const RoomtypeElite = () => {
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
      name: "Standard Room",
      size: "140 sq.ft.",
      price: 1879,
      refundable: true,
      guests: 2,
      breakfastIncluded: true,
      images: [
        "/assets/images/elite/room/oak.jpg",
        "/assets/images/elite/room/oak1.jpg",
        "/assets/images/elite/room/oak2.jpg",
        "/assets/images/elite/room/oakbathroom.jpg",
      ],
      amenities: [
        { label: "Free Wifi", icon: <FaWifi /> },
        { label: "Ac Room", icon: <MdOutlineAcUnit /> },
        { label: "Complimentary Toiletries", icon: <PiToiletLight /> },
        { label: "Cupboards", icon: <FaBed /> },
        { label: "Geyser", icon: <MdOutlineShower /> },
        { label: "Queen Bed", icon: <FaBed /> },
        { label: "Flat Screen Tv", icon: <MdLiveTv /> },
        { label: "Smoking Room", icon: <MdOutlineSmokeFree /> },
      ],
    },
    {
      id: 2,
      name: "Deluxe Room (Maple)",
      size: "250 sq.ft.",
      price: 2150,
      refundable: false,
      guests: 2,
      breakfastIncluded: true,
      images: [
        "/assets/images/elite/room/mapple.jpg",
        "/assets/images/elite/room/mapple1.jpg",
        "/assets/images/elite/room/mapple2.jpg",
        "/assets/images/elite/room/mapplebathroom.jpg",
      ],
      amenities: [
        { label: "Free Wifi", icon: <FaWifi /> },
        { label: "Ac Room", icon: <MdOutlineAcUnit /> },
        { label: "Complimentary Toiletries", icon: <PiToiletLight /> },
        { label: "Queen Bed", icon: <FaBed /> },
        { label: "Smoking Room", icon: <MdOutlineSmokeFree /> },
        { label: "Flat Screen Tv", icon: <MdLiveTv /> },
        { label: "Cupboards", icon: <FaBed /> },
        { label: "Geyser", icon: <MdOutlineShower /> },
      ],
    },
  ];

  const renderRoomCard = (room) => (
    <div
      key={room.id}
      className="border rounded-xl shadow-md flex flex-col justify-between overflow-hidden w-full bg-white hover:shadow-lg transition-all duration-300"
    >
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
              key={`${room.id}-${i}`}
              src={src}
              alt={`${room.name} Image ${i + 1}`}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          ))}
        </Carousel>
        <button className="absolute bottom-2 right-2 bg-white/90 text-gray-700 px-2 py-1 text-xs rounded shadow">
          {room.images.length} Photos
        </button>
      </div>

      <div className="flex-1 px-4 py-3 flex flex-col justify-between gap-3">
        <div>
          <h4
            className="text-[18px] font-semibold text-gray-800 truncate"
            title={room.name}
          >
            {room.name}
          </h4>
          <p className="text-sm text-gray-600 mb-1">{room.size}</p>

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

      {/* Room Modal */}
      {showForm && selectedRoom && (
        <RoomModal
          selectedRoom={selectedRoom}
          hotelName="Elite"
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
};

export default RoomtypeElite;
