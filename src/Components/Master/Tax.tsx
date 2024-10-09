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
    <div className="p-6 bg-white shadow-md rounded-lg border-2 mx-4 my-7">
      <h3 className="text-lg font-semibold mb-4">Tax on Tariff</h3>

      {/* Table Header */}
      <div className="grid grid-cols-12 gap-4 mb-4 bg-[#9EDEE0] rounded-md p-2">
        <div className="col-span-2">Name</div>
        <div className="col-span-5 text-center">Select Slab Tax or Fixed Tax for Room</div>
        <div className="col-span-4 text-center">Select Slab Tax or Fixed Tax for Extra Bed</div>
        <div className="col-span-1 text-center">Aft Disc</div>
      </div>

      {/* Table Body */}
      <div className="grid grid-cols-12 gap-4 items-center mb-4">
        {/* Name */}
        <div className="col-span-2">
          <p>CGST</p>
        </div>

        {/* Slab/Fixed Tax for Room */}
        <div className="col-span-5">
          <div className="flex space-x-4 mb-4">
            <button
              className={`px-3 py-1 rounded ${taxTypeRoom === 'slab' ? 'bg-[#565E83] text-white' : 'bg-gray-100'}`}
              onClick={() => handleTaxTypeChangeRoom('slab')}
            >
              Slab Tax
            </button>
            <button
              className={`px-3 py-1 rounded ${taxTypeRoom === 'fixed' ? 'bg-[#565E83] text-white' : 'bg-gray-100'}`}
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
                    className="col-span-2 border rounded p-2"
                    value={row.from}
                    placeholder="From"
                  />
                  <input
                    type="text"
                    className="col-span-2 border rounded p-2"
                    value={row.to}
                    placeholder="To"
                  />
                  <div className="col-span-2 flex items-center">
                    <input
                      type="text"
                      className="border rounded p-2 w-full"
                      value={row.value}
                      placeholder={row.type === '%' ? "%" : "₹"}
                    />
                  </div>

                  {/* Action Dropdown */}
                  <div className="col-span-1 relative">
                    <button
                      className="text-gray-500 hover:text-gray-700"
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
              <button
                className="mt-2 bg-[#565E83] text-white px-4 py-2 rounded"
                onClick={addNewRoomTaxRow}
              >
                Add Row
              </button>
            </div>
          )}

          {/* Fixed Tax Input */}
          {taxTypeRoom === 'fixed' && (
            <div className="mt-4">
              <input
                type="text"
                className="border rounded p-2 w-full"
                placeholder="Enter Fixed Tax for Room"
              />
            </div>
          )}
        </div>

        {/* Slab/Fixed Tax for Extra Bed */}
        <div className="col-span-4">
          <div className="flex space-x-4 mb-4">
            <button
              className={`px-3 py-1 rounded ${taxTypeBed === 'slab' ? 'bg-[#565E83] text-white' : 'bg-gray-100'}`}
              onClick={() => handleTaxTypeChangeBed('slab')}
            >
              Slab Tax
            </button>
            <button
              className={`px-3 py-1 rounded ${taxTypeBed === 'fixed' ? 'bg-[#565E83] text-white' : 'bg-gray-100'}`}
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
                className="border rounded p-2 w-full"
                placeholder="Enter Slab Tax for Extra Bed"
              />
            </div>
          )}

          {/* Fixed Tax Input */}
          {taxTypeBed === 'fixed' && (
            <div className="mt-4">
              <input
                type="text"
                className="border rounded p-2 w-full"
                placeholder="Enter Fixed Tax for Extra Bed"
              />
            </div>
          )}
        </div>

        {/* Aft Disc Checkbox */}
        <div className="col-span-1 text-center">
          <input
            type="checkbox"
            className="form-checkbox"
            checked={aftDiscount}
            onChange={() => setAftDiscount(!aftDiscount)}
          />
        </div>
      </div>
    </div>
  );
};

export default Tax;
