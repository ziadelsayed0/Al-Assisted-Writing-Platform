import React from "react";

function StartWindow() {
  return (
    <div className="flex h-screen">
    {/* Left Side - Welcome Message */}
    <div className="w-1/2 flex flex-col justify-center items-center bg-blue-500 text-white p-10">
      <h1 className="text-5xl font-bold mb-4">Welcome to WritingAssistant_Ai</h1>
      <p className="text-lg mb-8 max-w-md text-center">
        Discover innovative software solutions designed to streamline your business.
      </p>
      <button className="px-8 py-3 bg-white text-blue-500 rounded-full font-semibold hover:bg-gray-200 focus:outline-none transition">
        Get Started
      </button>
    </div>

    {/* Right Side - Image/Graphic */}
    <div className="w-1/2 bg-gray-100 flex items-center justify-center">
      <img
        src="https://via.placeholder.com/400" // Replace with your image URL
        alt="Welcome Graphic"
        className="w-3/4 h-auto rounded-lg shadow-lg"
      />
    </div>
  </div>
  );
}

export default StartWindow;
