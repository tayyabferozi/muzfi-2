import React from "react";

const LightBlueBtn = ({ label }) => {
  return (
    <button className="bg-accentGray-400 hover:bg-accentGray-500 transition-colors rounded-[10px] h-[40px] text-accentBlue-500 text-sm font-semibold w-full py-3">
      {label}
    </button>
  );
};

export default LightBlueBtn;
