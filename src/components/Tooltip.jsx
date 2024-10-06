import React from 'react';

export default function Tooltip ({ explanation }) {
  return (
    <span className="relative group cursor-pointer text-blue-500 underline">
      <img src="./public/tooltip.svg" alt="Tooltip icon"/>
      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 translate-y-2 px-3 py-2 bg-black text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {explanation}
      </span>
    </span>
  );
};

