// src/components/Sidebar.js
import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-gray-900 text-white w-16 h-full flex flex-col items-center py-4 space-y-4 shadow-lg">
      {/* Icons or menu items */}
      <div className="hover:bg-gray-700 p-2 rounded cursor-pointer">📁</div>
      <div className="hover:bg-gray-700 p-2 rounded cursor-pointer">💬</div>
      <div className="hover:bg-gray-700 p-2 rounded cursor-pointer">📄</div>
      <div className="hover:bg-gray-700 p-2 rounded cursor-pointer">⚙️</div>
    </div>
  );
};

export default Sidebar;
