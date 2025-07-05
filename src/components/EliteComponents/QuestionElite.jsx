import React, { useState } from "react";
import { ELITE_FAQS } from "../../constants/eliteFaqs";

// ✅ Reusable subcomponent
const QAItem = ({ icon, text, showMeta = true }) => (
  <div className="flex items-start gap-2 mb-2 last:mb-0">
    <div
      className="w-5 h-5 flex items-center justify-center text-white text-[11px] font-bold rounded-full"
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

const QuestionElite = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleQuestions = showAll ? ELITE_FAQS : ELITE_FAQS.slice(0, 2);

  return (
    <div className="py-6 max-w-7xl mx-auto">
      <h2 className="text-[24px] font-bold text-[rgb(74,74,74)] mb-4">
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
        className="mt-4 text-md text-green-800 cursor-pointer"
        onClick={() => setShowAll((prev) => !prev)}
      >
        {showAll ? "Show less" : "Show all"}
      </button>
    </div>
  );
};

export default QuestionElite;
