import React from "react";
import { useNavigate } from "react-router-dom";

function StartWindow() {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen">
    {/* Left Side - Welcome Message */}
    <div className="w-1/2 flex flex-col justify-center items-center bg-gray-900 text-white p-10">
      <h1 className="text-5xl font-bold mb-4">Welcome to Ai Writing Assestant</h1>
      <p className="text-lg mb-8 max-w-md text-center">
        Discover Where Innovation Meets the Art of Writing designed to streamline your business.
      </p>
      <button onClick={()=> navigate('/login')} className="px-8 py-3 bg-white text-blue-500 rounded-full font-semibold hover:bg-gray-200 focus:outline-none transition">
        Get Started
      </button>
    </div>

    {/* Right Side - Image/Graphic */}
    <div className="w-1/2 bg-gray-100 flex items-center justify-center">
      <img
        src="../public/img/technology.jpg" // Replace with your image URL
        alt="Welcome Graphic"
        className="w-3/4 h-auto rounded-lg shadow-lg"
      />
    </div>
  </div>
  );
}

export default StartWindow;
