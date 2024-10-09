import React, { useState } from 'react';

const Setup: React.FC = () => {
  const [userRolesOpen, setUserRolesOpen] = useState(false);
  const [integrationsOpen, setIntegrationsOpen] = useState(false);

  const toggleUserRoles = () => {
    setUserRolesOpen(!userRolesOpen);
  };

  const toggleIntegrations = () => {
    setIntegrationsOpen(!integrationsOpen);
  };

  return (
    <div className="bg-gray-50 w-96 h-screen p-4 shadow-lg border border-gray-200">
      <ul className="space-y-4">
        {/* Property and Property Branches */}
        <li className="text-gray-700 hover:text-gray-600 cursor-pointer hover:bg-gray-200 p-2 rounded-md">Property</li>
        <li className="text-gray-700 hover:text-gray-600 cursor-pointer hover:bg-gray-200 p-2 rounded-md">Property Branches</li>

        {/* User & Roles Dropdown */}
        <li className="text-gray-700 hover:text-gray-600 cursor-pointer ">
          <div onClick={toggleUserRoles} className="flex justify-between items-center hover:bg-gray-200 p-2 rounded-md">
            <span>User & Roles</span>
            <span>{userRolesOpen ? '▲' : '▼'}</span>
          </div>
          {userRolesOpen && (
            <ul className="mt-2 pl-4 flex flex-col gap-2">
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer bg-white">1. User Category</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer bg-white">2. User Creation</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer bg-white">3. User Roles</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer bg-white">4. User Validation Forms & Menu</li>
            </ul>
          )}
        </li>

        {/* Features & Configurations */}
        <li className="text-gray-700 hover:text-gray-600 cursor-pointer hover:bg-gray-200 p-2 rounded-md">Features & Configurations</li>

        {/* Integrations Dropdown */}
        <li className="text-gray-700 hover:text-gray-600 cursor-pointer">
          <div onClick={toggleIntegrations} className="flex justify-between items-center hover:bg-gray-200 p-2 rounded-md">
            <span>Integrations</span>
            <span>{integrationsOpen ? '▲' : '▼'}</span>
          </div>
          {integrationsOpen && (
            <ul className="mt-2 pl-4 flex flex-col gap-2">
              <li className="px-4 py-2 hover:bg-gray-200 bg-white cursor-pointer">1. Channel Manager</li>
              <li className="px-4 py-2 hover:bg-gray-200 bg-white cursor-pointer">2. SMS Settings</li>
              <li className="px-4 py-2 hover:bg-gray-200 bg-white  cursor-pointer">3. Email Settings</li>
              <li className="px-4 py-2 hover:bg-gray-200 bg-white  cursor-pointer">4. WhatsApp</li>
              <li className="px-4 py-2 hover:bg-gray-200 bg-white cursor-pointer">5. Door Locks</li>
              <li className="px-4 py-2 hover:bg-gray-200 bg-white cursor-pointer">6. Power Integration</li>
            </ul>
          )}
        </li>

        {/* Other Items */}
        <li className="text-gray-700 hover:text-gray-600 cursor-pointer hover:bg-gray-200 p-2 rounded-md">Printer Settings</li>
        <li className="text-gray-700 hover:text-gray-600 cursor-pointer hover:bg-gray-200 p-2 rounded-md">Financial Year Based Number Settings</li>
      </ul>
    </div>
  );
};

export default Setup;
