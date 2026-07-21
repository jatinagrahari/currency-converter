import React from 'react';
import { IoSwapVertical } from 'react-icons/io5';

const SwapButton = ({ onSwap }) => {
  return (
    <div className="relative w-full h-8 flex justify-center items-center z-10 -my-4 sm:-my-0 sm:-mx-4 sm:w-8 sm:h-full">
      <button
        onClick={onSwap}
        className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30 transition-all hover:scale-105 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-blue-500/20"
        aria-label="Swap currencies"
      >
        <IoSwapVertical className="text-2xl group-hover:rotate-180 transition-transform duration-300" />
      </button>
    </div>
  );
};

export default SwapButton;
