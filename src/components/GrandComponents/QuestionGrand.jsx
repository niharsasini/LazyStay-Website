import React, { useState } from "react";

const questions = [
  {
    question:
      "What is the check-in and check-out time at Lazystay Grand Patia? Are early check-in and late check-out available?",
    answer:
      "The standard check-in time at Lazystay Grand Patia Bhubaneswar is 01:00 PM, and check-out time is 11:00 AM. Early check-in is subject to room availability. However, it’s recommended to contact the hotel at least a day in advance to confirm availability for early check-in.",
  },
  {
    question:
      "What are the different room types at Lazystay Grand Patia? How can I book a room?",
    answer:
      "The rooms available at Lazystay Grand Patia are Oak (Standard), Maple (Deluxe), Acacia (Economy). It can be booked through the website or online hotel booking platforms.",
  },
  {
    question:
      "What are some popular amenities available in Lazystay Grand Patia?",
    answer:
      "Some popular amenities available at Lazystay Grand Patia are Elevator, Room Service, Pantry & Security.",
  },
  {
    question: "Is Lazystay Grand Patia couple friendly?",
    answer:
      "Yes, Lazystay Grand Patia is couple friendly. It may require government-approved identification proof.",
  },
];

// ✅ Reusable subcomponent with small same-size circle icon
const QAItem = ({ icon, text, showMeta = true }) => (
  <div className="flex items-start gap-2 mb-2 last:mb-0">
    <div
      className={`w-5 h-5 flex items-center justify-center text-white text-[11px] font-bold rounded-full`}
      style={{
        backgroundColor: icon === "Q" ? "#9ca3af" : "#16a34a",
        flexShrink: 0,
      }}
    >
      {icon}
    </div>
    <div>
      <p className="text-[14px] font-medium text-[rgb(74,74,74)]">{text}</p>
      {showMeta && (
        <p className="text-[12px] text-[rgb(114,113,113)] p-0 m-0">
          Lazystay Bhubaneswar Team | 4th Apr, 2023
        </p>
      )}
    </div>
  </div>
);

const QuestionGrand = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleQuestions = showAll ? questions : questions.slice(0, 2);

  return (
    <div className="py-6 max-w-7xl mx-auto">
      <h2 className="text-[24px] font-bold text-[rgb(74,74,74)] p-0 m-0 mb-4">
        Frequently Asked Questions
      </h2>

      <div className="space-y-6">
        {visibleQuestions.map((q, index) => (
          <div
            key={index}
            className="bg-green-50 p-4 rounded shadow-sm border border-green-100"
          >
            <QAItem icon="Q" text={q.question} />
            <QAItem icon="A" text={q.answer} />
          </div>
        ))}
      </div>

      <button
        className="mt-4 text-md text-green-800  cursor-pointer"
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? "Show less" : "Show all"}
      </button>
    </div>
  );
};

export default QuestionGrand;
