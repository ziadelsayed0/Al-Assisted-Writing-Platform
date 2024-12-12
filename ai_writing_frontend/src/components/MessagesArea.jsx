// src/components/MessagesArea.js
import React, { useEffect, useRef } from "react";

const MessagesArea = ({ messages }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 bg-gray-100 space-y-4">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex ${
            message.sender === "user" ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`p-3 rounded-lg shadow ${
              message.sender === "user"
                ? "bg-blue-500 text-white rounded-tr-none"
                : "bg-gray-200 text-gray-900 rounded-tl-none"
            } max-w-xs`}
          >
            {message.text}
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessagesArea;
