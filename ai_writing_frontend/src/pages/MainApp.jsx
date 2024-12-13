import React, { useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import ChatHeader from "../components/ChatHeader";
import MessagesArea from "../components/MessagesArea";
import InputArea from "../components/InputArea";

function App() {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" },
  ]);

  const handleSend = async (text) => {
    console.log("User input received:", text); 
    const userMessage = { text, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    // Call LLM for response
    const response = await getBotResponse(text);

    const botMessage = { text: response, sender: "bot" };
    setMessages((prev) => [...prev, botMessage]);
  };

  // Function to call OpenAI API
  const getBotResponse = async (message) => {
    try {
      const apiKey = process.env.REACT_APP_OPENAI_API_KEY; // React-specific environment variable access
      console.log("api:", apiKey); 
      if (!apiKey) {
        throw new Error("API key is not set");
      }
  
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: message }],
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      return response.data.choices[0].message.content.trim();
    } catch (error) {
      console.error("Error fetching response:", error);
      return "Sorry, I couldn't understand that. Please try again.";
    }
  };
  

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-white rounded-lg shadow-lg">
        <ChatHeader />
        <MessagesArea messages={messages} />
        <InputArea onSend={handleSend} />
      </div>
    </div>
  );
}

export default App;
