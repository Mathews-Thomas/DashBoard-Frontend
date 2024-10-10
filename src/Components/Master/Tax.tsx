import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";
import { FiMoreVertical } from "react-icons/fi"; // For the three dots icon
import { MdAdd } from "react-icons/md"; // For the add icon

const Tax: React.FC = () => {
  const [taxTypeRoom, setTaxTypeRoom] = useState('slab');
  const [taxTypeBed, setTaxTypeBed] = useState('slab');
  const [aftDiscount, setAftDiscount] = useState(false);
  const [roomTaxRows, setRoomTaxRows] = useState([
    { from: '0.01', to: '0.02', value: '10', type: '%' },
    { from: '0.02', to: '0.03', value: '12', type: '%' }
  ]);
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null); // Tracks open dropdown for each row

  const handleTaxTypeChangeRoom = (type: string) => {
    setTaxTypeRoom(type);
  };

  const handleTaxTypeChangeBed = (type: string) => {
    setTaxTypeBed(type);
  };

  const addNewRoomTaxRow = () => {
    setRoomTaxRows([...roomTaxRows, { from: '', to: '', value: '', type: '%' }]);
  };

  const removeRoomTaxRow = (index: number) => {
    const updatedRows = roomTaxRows.filter((_, i) => i !== index);
    setRoomTaxRows(updatedRows);
  };

  const toggleDropdown = (index: number) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg border border-[#DDE3EC] mx-4 my-4">
      <h3 className="text-md font-semibold mb-4 text-gray-800">Tax on Tariff</h3>

      {/* Table Header */}
      <div className="grid grid-cols-12 gap-1 mb-4 bg-[#9EDEE0] rounded-md p-2 text-sm">
        <div className="col-span-2 text-sm font-semibold text-left text-[#565E83]">Name</div>
        <div className="col-span-5 text-sm font-semibold text-center text-[#565E83]">Select Slab Tax or Fixed Tax for Room</div>
        <div className="col-span-4 text-sm font-semibold text-center text-[#565E83]">Select Slab Tax or Fixed Tax for Extra Bed</div>
        <div className="col-span-1 text-sm font-semibold text-center text-[#565E83]">Aft Disc</div>
      </div>

      {/* Table Body */}
      <div className="grid grid-cols-12 gap-1 items-center mb-4">
        {/* Name */}
        <div className="col-span-2  p-2 text-[#4E598D] text-sm font-semibold rounded-l-md flex items-center justify-between">
          CGST
          <span className="text-[#565E83] text-lg">{'>'}</span>
        </div>

        {/* Slab/Fixed Tax for Room */}
        <div className="col-span-5">
          <div className="flex justify-center space-x-2 mb-2">
            <button
              className={`px-4 py-2 rounded-l-md ${taxTypeRoom === 'slab' ? 'bg-[#565E83] text-white' : 'bg-[#F9F9FB]'}`}
              onClick={() => handleTaxTypeChangeRoom('slab')}
            >
              Slab Tax
            </button>
            <button
              className={`px-4 py-2 rounded-r-md ${taxTypeRoom === 'fixed' ? 'bg-[#565E83] text-white' : 'bg-[#F9F9FB]'}`}
              onClick={() => handleTaxTypeChangeRoom('fixed')}
            >
              Fixed Tax
            </button>
          </div>

          {/* Slab Tax Inputs */}
          {taxTypeRoom === 'slab' && (
            <div className="space-y-2">
              {roomTaxRows.map((row, index) => (
                <div key={index} className="grid grid-cols-12 gap-2 items-center">
                  <input
                    type="text"
                    className="col-span-2 border border-gray-300 rounded p-2 text-sm"
                    value={row.from}
                    placeholder="From"
                  />
                  <input
                    type="text"
                    className="col-span-2 border border-gray-300 rounded p-2 text-sm"
                    value={row.to}
                    placeholder="To"
                  />
                  <div className="col-span-2 flex items-center space-x-1">
                    <input
                      type="text"
                      className="border border-gray-300 rounded p-2 text-sm w-full"
                      value={row.value}
                      placeholder={row.type === '%' ? "%" : "₹"}
                    />
                    <button className={`text-sm ${row.type === '%' ? 'bg-[#565E83] text-white' : 'bg-[#F9F9FB]'} border border-gray-300 rounded p-2`}>%</button>
                    <button className={`text-sm ${row.type === '₹' ? 'bg-[#565E83] text-white' : 'bg-[#F9F9FB]'} border border-gray-300 rounded p-2`}>₹</button>
                  </div>

                  {/* Delete Button */}
                  <div className="col-span-1">
                    <button
                      className="text-white bg-red-500 p-2 rounded-md"
                      onClick={() => removeRoomTaxRow(index)}
                    >
                      <MdDelete size={18} />
                    </button>
                  </div>

                  {/* Action Dropdown */}
                  <div className="col-span-1 relative">
                    <button
                      className={`text-white bg-[#565E83] p-2 rounded-md ${dropdownOpen == index ?` bg-white text-[#565E83] border-2 border-[#565E83]`:``}`}
                      onClick={() => toggleDropdown(index)}
                    >
                      <FiMoreVertical size={20} />
                    </button>
                    {dropdownOpen === index && (
                      <div className="absolute right-0 mt-2 bg-[#565E83] text-white rounded-lg shadow-lg z-10">
                        <ul>
                          <li
                            className="flex items-center px-4 py-2 cursor-pointer hover:bg-blue-600"
                            onClick={() => removeRoomTaxRow(index)}
                          >
                            <MdDelete className="mr-2" /> Delete
                          </li>
                          <li
                            className="flex items-center px-4 py-2 cursor-pointer hover:bg-blue-600"
                            onClick={addNewRoomTaxRow}
                          >
                            <MdAdd className="mr-2" /> Add
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Fixed Tax Input */}
          {taxTypeRoom === 'fixed' && (
            <div className="mt-4">
              <input
                type="text"
                className="border border-gray-300 rounded p-2 w-full text-sm"
                placeholder="Enter Fixed Tax for Room"
              />
            </div>
          )}
        </div>

        {/* Slab/Fixed Tax for Extra Bed */}
        <div className="col-span-4">
          <div className="flex justify-center space-x-2 mb-2">
            <button
              className={`px-4 py-2 rounded-l-md ${taxTypeBed === 'slab' ? 'bg-[#565E83] text-white' : 'bg-[#F9F9FB]'}`}
              onClick={() => handleTaxTypeChangeBed('slab')}
            >
              Slab Tax
            </button>
            <button
              className={`px-4 py-2 rounded-r-md ${taxTypeBed === 'fixed' ? 'bg-[#565E83] text-white' : 'bg-[#F9F9FB]'}`}
              onClick={() => handleTaxTypeChangeBed('fixed')}
            >
              Fixed Tax
            </button>
          </div>

          {/* Slab Tax Inputs */}
          {taxTypeBed === 'slab' && (
            <div className="mt-4">
              <input
                type="text"
                className="border border-gray-300 rounded p-2 w-full text-sm"
                placeholder="Tax Rate"
                value="% 6.6"
                readOnly
              />
            </div>
          )}

          {/* Fixed Tax Input */}
          {taxTypeBed === 'fixed' && (
            <div className="mt-4">
              <input
                type="text"
                className="border border-gray-300 rounded p-2 w-full text-sm"
                placeholder="Enter Fixed Tax for Extra Bed"
              />
            </div>
          )}
        </div>

        {/* Aft Disc Checkbox */}
        <div className="col-span-1 flex justify-center items-center">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5"
            checked={aftDiscount}
            onChange={() => setAftDiscount(!aftDiscount)}
          />
        </div>
      </div>
    </div>
  );
};

export default Tax;
