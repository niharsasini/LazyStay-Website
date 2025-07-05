import { useState } from "react";

const useEnquiryModal = () => {
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [formType, setFormType] = useState("general");
  const [selectedRoom, setSelectedRoom] = useState(null);

  const openModal = (roomType = "general") => {
    setFormType(roomType);
    setShowEnquiryForm(true);
  };

  const closeModal = () => {
    setShowEnquiryForm(false);
    setSelectedRoom(null);
  };

  return {
    showEnquiryForm,
    formType,
    selectedRoom,
    setSelectedRoom,
    openModal,
    closeModal,
  };
};

export default useEnquiryModal;
