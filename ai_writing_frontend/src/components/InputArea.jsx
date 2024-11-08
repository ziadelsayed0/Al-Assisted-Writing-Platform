// src/components/InputArea.js
import React, { useState } from "react";

const InputArea = ({ onSend }) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      onSend(input);
      setInput("");
    }
  };

  return (
    <div className="flex items-center p-4 bg-gray-200 border-t border-gray-300 rounded-b-lg shadow-md">
      <input
        type="text"
        className="flex-1 px-4 py-2 mr-2 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 shadow"
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={handleSend}
        className="px-4 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600 focus:outline-none"
      >
        Send
      </button>
    </div>
  );
};

export default InputArea;
