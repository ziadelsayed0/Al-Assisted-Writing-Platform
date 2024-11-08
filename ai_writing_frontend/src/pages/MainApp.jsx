// src/App.js
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatHeader from "../components/ChatHeader";
import MessagesArea from "../components/MessagesArea";
import InputArea from "../components/InputArea";

function App() {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" },
  ]);

  const handleSend = (text) => {
    setMessages([...messages, { text, sender: "user" }]);
    // Simulate bot response if needed
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-white rounded-lg shadow-lg">
        <ChatHeader />
        <MessagesArea messages={messages} />
        <InputArea onSend={handleSend} />
      </div>
    </div>
  );
}

export default App;
