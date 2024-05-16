import React from 'react';
import Link from 'next/link';

const MobileSidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-30 bg-black bg-opacity-50 transition-opacity ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h2 className="text-lg font-bold">Menu</h2>
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={onClose}
          >
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="p-4">
          <nav>
            <Link href="/"  onClick={onClose} className="block py-2 hover:text-orange-700">
              Home
            </Link>
            <Link href="/property"  onClick={onClose} className="block py-2 hover:text-orange-700">
              Properties
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;