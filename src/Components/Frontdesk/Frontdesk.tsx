import React from 'react';

const Frontdesk: React.FC = () => {
  const frontDeskItems = [
    'Room View',
    'Check In',
    'Room Shift',
    'Additional Tariff/Early Tariff Entry',
    'Check Out',
    'Night Audit',
    'Audit Corrections',
  ];

  return (
    <div className="bg-gray-50 w-64 h-screen p-4 shadow-lg border border-gray-200">
      <ul className="space-y-4">
        {frontDeskItems.map((item, index) => (
          <li key={index} className="text-gray-700 hover:bg-gray-200 cursor-pointer p-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Frontdesk;
