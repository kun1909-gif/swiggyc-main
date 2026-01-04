import React from 'react';
import { RxCross2 } from "react-icons/rx";
import { LuLocateFixed } from "react-icons/lu";
import { LuClock4 } from "react-icons/lu";

const Sidepanel = () => {
  return (
    <div className="w-[400px] h-screen bg-white shadow-lg p-6">
      {/* Close Button */}
      <div className="flex justify-end">
        <RxCross2 className="text-2xl cursor-pointer" />
      </div>

      {/* Search Bar */}
      <div className="mt-4">
        <input
          type="text"
          placeholder="Search for area, street name.."
          className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
      </div>

      {/* Current Location */}
      <div className="mt-6 p-4 border rounded-md flex items-center gap-3 cursor-pointer hover:bg-gray-100">
        <LuLocateFixed className="text-xl" />
        <div>
          <p className="font-bold">Get current location</p>
          <p className="text-sm text-gray-500">Using GPS</p>
        </div>
      </div>

      {/* Recent Searches */}
      <div className="mt-4">
        <p className="text-gray-500 text-sm mb-2">RECENT SEARCHES</p>
        <div className="p-4 border rounded-md flex items-center gap-3 cursor-pointer hover:bg-gray-100">
          <LuClock4 className="text-xl text-gray-500" />
          <div>
            <p className="font-bold">Bhopal</p>
            <p className="text-sm text-gray-500">Madhya Pradesh, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidepanel;
