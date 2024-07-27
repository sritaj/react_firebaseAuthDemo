import React from "react";
import { useNavigate } from "react-router-dom";
import CardButton from "./components/CardButton";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleCardClick = (page) => {
    navigate("/page1");
  };
  const handleClick = () => {
    navigate("/about");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-gray-100 flex items-center justify-center">
      <div className="max-w-screen-xl m-4 sm:m-10 bg-white shadow-lg rounded-lg flex flex-col items-center p-8">
        <h1 className="text-4xl font-bold font-mono text-gray-900 mb-8">
          Authentication Supremacy
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 justify-center">
          <CardButton text="Page 1" onClick={() => handleCardClick("/page1")} />
          {/* <CardButton text="Page 2" onClick={() => handleCardClick("/page2")} />
          <CardButton text="Page 3" onClick={() => handleCardClick("/page3")} />
          <CardButton text="Page 4" onClick={() => handleCardClick("/page4")} />
          <CardButton text="Page 5" onClick={() => handleCardClick("/page5")} />
          <CardButton text="Page 6" onClick={() => handleCardClick("/page6")} /> */}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
