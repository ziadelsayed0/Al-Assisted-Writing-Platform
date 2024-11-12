// src/components/Sidebar.js
import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-gray-900 text-white w-64 h-full flex flex-col items-start py-4 space-y-4 shadow-lg">
      {/* Icons or menu items */}
      <div className="hover:bg-gray-700 p-2 rounded cursor-pointer">📁 Files</div>
      <div className="hover:bg-gray-700 p-2 rounded cursor-pointer">💬 Last Chats</div>
      <div className="hover:bg-gray-700 p-2 rounded cursor-pointer">📄 Select LLM</div>
      <div className="hover:bg-gray-700 p-2 rounded cursor-pointer">⚙️ Settings</div>
    </div>
  );
};

export default Sidebar;
