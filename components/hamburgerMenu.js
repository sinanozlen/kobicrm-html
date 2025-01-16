import React, { useState } from 'react';

const HamburgerMenu = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="inset-0 flex justify-end mr-4 mt-1">
      {/* Hamburger Menu Button */}
      <button
        onClick={toggleSidebar}
        className="absolute text-gray-600 hover:text-gray-800"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transition-transform ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <strong className="text-lg font-semibold">KobiCRM'e Hoş Geldiniz!</strong>
          <button
            onClick={toggleSidebar}
            className="text-gray-600 hover:text-gray-800"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <div className="p-4">
          <ul className="space-y-4">
            <li>
              <a href="/portal/catalog?categoryId=450" className="text-blue-600 hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/portal/catalog?categoryId=50" className="text-blue-600 hover:underline">
                Hakkımızda
              </a>
            </li>
            <li>
              <a href="/portal/catalog?categoryId=50" className="text-blue-600 hover:underline">
                Fiyatlar
              </a>
            </li>
            <li>
              <a href="/portal/catalog?categoryId=50" className="text-blue-600 hover:underline">
                Yardım Merkezi
              </a>
            </li>
            <li>
              <a href="/portal/catalog?categoryId=50" className="text-blue-600 hover:underline">
                İletişim Linkleri
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
