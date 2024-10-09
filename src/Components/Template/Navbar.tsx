import React, { useState } from 'react';
import dp from "../../../src/assets/Profiledp.png"; 

const Navbar: React.FC = () => {
  const Navitems: string[] = ['Front Office', 'POS', 'House Keeping', 'Laundry'];

  const [selected, setSelected] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [accountLinkOpen, setAccountLinkOpen] = useState(false);
  const [taxSettingsOpen, setTaxSettingsOpen] = useState(false); 

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleAccountLink = () => {
    setAccountLinkOpen(!accountLinkOpen);
  };

  const toggleTaxSettings = () => {
    setTaxSettingsOpen(!taxSettingsOpen);
  };

  return (
    <div className="flex justify-between items-center bg-white py-2 px-4 border-b border-gray-200">
      <div className='flex space-x-4 items-center'>
        {/* Left section with dynamically rendered buttons */}
        <div className="flex space-x-4">
          {Navitems.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelected(index)}
              className={`${
                index === selected ? 'bg-[#4E598D] text-white' : 'border border-gray-300 hover:bg-gray-100'
              } py-2 px-4 rounded-full`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Center section */}
        <div className='relative'>
          <button onClick={toggleDropdown} className="font-semibold text-gray-800">
            General Master Settings
          </button>
          {dropdownOpen && (
            <div className="absolute left-0 mt-2 w-96 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">General Settings</li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Country</li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">State</li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Currency</li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Authority</li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Card/Wallet/Bank</li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Additional Charge Name</li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Sales Reference</li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Market Segment</li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Staff</li>

                {/* Nested dropdown for Account Link Settings */}
                <li className="px-4 py-2 cursor-pointer">
                  <div className="flex justify-between items-center hover:bg-gray-100 py-2" onClick={toggleAccountLink}>
                    Account Link Settings
                    <span>{accountLinkOpen ? "▲" : "▼"}</span>
                  </div>
                  {accountLinkOpen && (
                    <ul className="ml-4 mt-2">
                      <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">General</li>
                      <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Front Office</li>
                      <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">POS</li>
                      <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Laundry</li>
                    </ul>
                  )}
                </li>

                {/* Nested dropdown for Tax Settings */}
                <li className="px-4 py-2 cursor-pointer">
                  <div className="flex justify-between items-center hover:bg-gray-200 py-2" onClick={toggleTaxSettings}>
                    Tax Settings
                    <span>{taxSettingsOpen ? "▲" : "▼"}</span>
                  </div>
                  {taxSettingsOpen && (
                    <ul className="ml-4 mt-2">
                      <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Tax Name</li>
                      <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Tax Registration Name</li>
                      <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Tariff Tax Settings</li>
                      <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Food Plan and Other Bill Point Tax</li>
                      <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Additional Charge Tax</li>
                      <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">State Wise Tax Exemption</li>
                      <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Authority Wise Tax Exemption</li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Right section with profile */}
      <div className="flex items-center space-x-2">
        <p className="text-gray-800">Profile</p>
        <img src={dp} alt="Profile" className="w-10 h-10 rounded-full" />
      </div>
    </div>
  );
};

export default Navbar;
