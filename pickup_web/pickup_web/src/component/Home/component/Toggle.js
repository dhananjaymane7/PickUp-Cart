
import React from 'react';

const Toggle = ({ label, active, onClick }) => {
  return (
    <button
      className={`px-4 py-2 mx-1 text-white ${active ? 'bg-blue-800 font-bold text-[#FFF73E]' : 'bg-gray-400'}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Toggle;
