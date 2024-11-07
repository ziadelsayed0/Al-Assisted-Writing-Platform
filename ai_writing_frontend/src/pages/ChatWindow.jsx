import React, { useState } from "react";

function ChatWindow() {
    const [messages, setMessages] = useState([
        { id: 1, text: "Hello! How can I assist you today?", sender: "bot" },
        { id: 2, text: "Can you tell me more about your services?", sender: "user" },
    ]);
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (input.trim()) {
            setMessages([...messages, { id: Date.now(), text: input, sender: "user" }]);
            setInput(""); // Clear input after sending
            // Here you could also simulate a bot response or integrate an AI assistant
        }
    };

    return (
        <div className="flex flex-col h-screen bg-gray-100">
            {/* Chat Header */}
            <div className="bg-blue-500 text-white p-4 font-bold text-lg rounded-t-lg shadow-md flex items-center justify-center">
                <span>Codewave Assistant</span>
            </div>

            {/* Chat Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-white shadow-inner">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"
                            }`}
                    >
                        <div
                            className={`p-4 rounded-xl shadow ${message.sender === "user"
                                    ? "bg-blue-500 text-white rounded-tr-none animate-fade-in"
                                    : "bg-gray-200 text-gray-900 rounded-tl-none animate-fade-in"
                                } max-w-xs`}
                        >
                            {message.text}
                        </div>
                    </div>
                ))}
            </div>

            {/* Input Field */}
            <div className="flex items-center p-4 bg-gray-200 border-t border-gray-300 rounded-b-lg shadow-md">
                <input
                    type="text"
                    className="flex-1 px-4 py-3 mr-2 bg-white border border-gray-300 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    onClick={handleSend}
                    className="px-4 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600 focus:outline-none transition transform active:scale-95"
                >
                    Send
                </button>
            </div>
        </div>
    );
}

export default ChatWindow;
