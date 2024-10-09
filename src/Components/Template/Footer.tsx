import React from 'react';
import { FiTrash, FiEdit } from 'react-icons/fi'; // Import icons from react-icons library

const Footer: React.FC = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white border-t border-gray-200">
      {/* Left Section - Checkbox */}
      <div className="flex items-center">
        <input type="checkbox" id="active" className="mr-2" />
        <label htmlFor="active" className="text-gray-700">Active</label>
      </div>

      {/* Right Section - Buttons */}
      <div className="flex space-x-4">
        {/* Delete Button */}
        <button className="bg-red-500 hover:bg-red-600 text-white p-2 rounded">
          <FiTrash className="w-5 h-5" />
        </button>

        {/* Edit Button */}
        <button className="bg-green-500 hover:bg-green-600 text-white p-2 rounded">
          <FiEdit className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Footer;
