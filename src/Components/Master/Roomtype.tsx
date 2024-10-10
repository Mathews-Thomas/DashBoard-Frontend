import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { FaPaintbrush } from "react-icons/fa6";
const RoomType: React.FC = () => {
  const [roomTypeColor, setRoomTypeColor] = useState('#BBBBBB');
  const [extraPersonLimit, setExtraPersonLimit] = useState(1);

  return (
    <div className=" bg-[#FAFAFC]  border-[#FAFAFC] rounded-md shadow-md  my-2 mx-4">
      {/* Header */}
      <div className='flex justify-between p-2 bg-[#565E83] text-white items-center rounded-t-md'>
            <p>Room Type</p>
             <p><IoMdClose /></p>
        </div>
      <div className="flex justify-between items-center bg-[#CDDCF2] p-2">
        <div>
          <p className="text-xs text-[#165F61]">
            Created by: Amar Akber (13/10/2023 10:12)
          </p>
        </div>
        <div>
          <p className="text-xs text-[#165F61]">
            Last Modified by: Omar (20/10/2023 11:20)
          </p>
        </div>
      </div>

      {/* Active Room Count */}
      <div className="p-4">
        <h2 className="text-sm text-gray-600">Active Room Count: 8</h2>
      </div>

      {/* Room Type Name, Short Name, Pax/Room */}
      <div className="grid grid-cols-3 gap-4 p-4">
        <div>
          <label className="block text-xs text-gray-600 mb-1">Room Type Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Name"
          />
        </div>

        <div>
          <label className="block text-xs text-gray-600 mb-1">Short Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Name"
          />
        </div>

        <div>
          <label className="block text-xs text-gray-600 mb-1">Pax/Room</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="3"
          />
        </div>
      </div>

      {/* Room Tariff Section */}
      <div className="p-4 bg-[#EBEBF5] border border-[#B6BFDC] rounded-md mx-4">
        <h3 className="text-sm text-gray-700 font-semibold mb-4 ">Room Tariff</h3>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-xs text-gray-600 mb-1">Single</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded bg-white"
              value="₹ 40000.00"
              readOnly
            />
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">Double</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded  bg-white"
              value="₹ 50000.00"
              readOnly
            />
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">Triple</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded  bg-white"
              value="₹ 60000.00"
              readOnly
            />
          </div>
        </div>
      </div>

      {/* Room Type Color & Extra Person Limit */}
      <div className="grid grid-cols-2 gap-4 p-4">
        <div className='flex  gap-6 items-center'>
          <label className="block text-xs text-gray-600 mb-1">Select Room Type Color</label>
          <div className='flex items-center '>
           <div className='flex items-center gap-2 border-2 px-4 pr-0 rounded-md'>
           <span><FaPaintbrush  className='text-black hover:cursor-pointer '/></span>
           <input
        type="color"
        value={roomTypeColor}
        onChange={(e)=> setRoomTypeColor(e.target.value)}
        className="h-8 w-16  cursor-pointer border-none"  />
           </div>
          </div>
        </div>

        <div>
          <label className="block text-xs text-gray-600 mb-1">Extra Person Limit</label>
          <input
            type="number"
            value={extraPersonLimit}
            onChange={(e) => setExtraPersonLimit(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>

      {/* Extra Person Tariff Section */}
      <div className="p-4 bg-[#EBEBF5] border border-[#B6BFDC] rounded-md mx-4">
        <h3 className="text-sm text-gray-700 font-semibold mb-4">Extra Person Tariff</h3>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-xs text-gray-600 mb-1">Ex. Person</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded bg-white"
              value="₹ 5000.00"
              readOnly
            />
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">Ex. Child</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded bg-white"
              value="₹ 4000.00"
              readOnly
            />
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">Ex. Infant</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded bg-white"
              value="₹ 3000.00"
              readOnly
            />
          </div>
        </div>
      </div>

      {/* Facility Section */}
      <div className="p-4 bg-[#E2E4ED]  rounded-b-md mt-4">
        <h3 className="text-sm text-gray-700 font-semibold mb-4">Facility</h3>
        <div className="flex space-x-6 p-2">
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox" defaultChecked />
            <span className="ml-2 text-xs text-gray-700">Minibar</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox" defaultChecked />
            <span className="ml-2 text-xs text-gray-700">Bath Tub</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox" disabled />
            <span className="ml-2 text-xs text-gray-400">Cubical Bathroom</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default RoomType;
