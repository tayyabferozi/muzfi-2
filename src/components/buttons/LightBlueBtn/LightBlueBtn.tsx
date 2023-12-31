import React from 'react';

const LightBlueBtn = ({ label }: { label?: any }) => {
  return (
    <button className='bg-accentGray-400 hover:bg-accentGray-500 transition-colors rounded-[10px] h-[40px] text-black text-sm font-semibold w-full py-3'>
      {label}
    </button>
  );
};

export default LightBlueBtn;
