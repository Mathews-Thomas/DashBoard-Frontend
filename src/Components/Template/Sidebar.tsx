import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DashboardIcon from "../../assets/Dashboard.png"; // Renamed to make it clear these are image imports
import MasterIcon from "../../assets/Master.png";
import ReservationIcon from "../../assets/Reservation.png";
import FrontdeskIcon from "../../assets/Frontdesh.png";
import FrontdeskcashIcon from "../../assets/Frontdeshcash.png";
import ReportIcon from "../../assets/Report.png";
import UtilitiesIcon from "../../assets/Utlities.png";
import SetupIcon from "../../assets/Setup.png";

interface MenuItem {
  label: string;
  icon: string;
  link: string;
}

const Sidebar: React.FC = () => {
  const menuItems: MenuItem[] = [
    { label: 'Dashboard', icon: DashboardIcon, link: '/' },
    { label: 'Master', icon: MasterIcon, link: '/master' },
    { label: 'Reservation', icon: ReservationIcon, link: '/reservation' },
    { label: 'Front Desk', icon: FrontdeskIcon, link: '/front-desk' },
    { label: 'Front Desk Cashiering', icon: FrontdeskcashIcon, link: '/cashiering' },
    { label: 'Report & Analysis', icon: ReportIcon, link: '/report-analysis' },
    { label: 'Quick Utilities', icon: UtilitiesIcon, link: '/quick-utilities' },
    { label: 'Setup', icon: SetupIcon, link: '/setup' },
  ];

  const navigate = useNavigate();
  const [selected, setSelected] = useState(1);

  return (
    <div className="bg-[#4E598D] text-[#F9F7F6] w-64 flex flex-col min-h-screen">
      {menuItems.map((item, index) => (
        <Link to={item.link} key={index}>
          <div
            onClick={() => {
              navigate(item.link);
              setSelected(index);
            }}
            className={`flex items-center py-6 px-6 cursor-pointer hover:bg-gray-400 hover:text-black ${
              index === selected ? 'bg-white text-gray-800' : ''
            }`}
          >
            <img className="mr-3 w-8" src={item.icon} alt={item.label} /> 
            <p>{item.label}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
