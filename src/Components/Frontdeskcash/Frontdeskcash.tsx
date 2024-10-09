import React from 'react';

const Frontdeskcash: React.FC = () => {
  const frontDeskItems = [
    'Receipts',
    'Payments',
    'Service Bill',
    'Allowance',
    'Advance Transfer',
    'Partial Settlement',
    'Business Center Billing',
     'Final Bill'
  ];

  return (
    <div className="bg-gray-50 w-64 h-screen p-4 shadow-lg border border-gray-200">
      <ul className="space-y-4">
        {frontDeskItems.map((item, index) => (
          <li key={index} className="text-gray-700 hover:bg-gray-200 rounded-md cursor-pointer p-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Frontdeskcash;
