import React, { useState } from 'react';

const Utilities: React.FC = () => {
  const [grcDropdownOpen, setGrcDropdownOpen] = useState(false);

  const toggleGrcDropdown = () => {
    setGrcDropdownOpen(!grcDropdownOpen);
  };

  const guestDocumentsItems = [
    'Foreigner Guest Details - C Form',
    'Guest History',
    'Bulk Export - Final Bill',
    'Modify Check Out Guest Details',
    'Re-instate Current Day Check Out Room',
    'Export To Tally',
  ];

  return (
    <div className="bg-gray-50 w-96 h-screen p-4 shadow-lg border border-gray-200">
      <ul className="space-y-4">
        {/* GRC Printing Dropdown */}
        <li className="text-gray-700 hover:text-gray-600 cursor-pointer relative">
          <div onClick={toggleGrcDropdown} className="flex justify-between items-center">
            <span>GRC Printing</span>
            <span>{grcDropdownOpen ? '▲' : '▼'}</span>
          </div>

          {/* Dropdown content */}
          {grcDropdownOpen && (
            <ul className="mt-2 pl-4 flex flex-col gap-2">
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer bg-white">1. Blank GRC</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer bg-white">2. Guest GRC</li>
            </ul>
          )}
        </li>

        {/* Other list items */}
        {guestDocumentsItems.map((item, index) => (
          <li key={index} className="text-gray-700 hover:bg-gray-200 cursor-pointer p-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Utilities;
