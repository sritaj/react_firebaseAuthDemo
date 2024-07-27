import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/"); // Replace '/' with your landing page route
  };

  return (
    <div className="min-h-screen  py-5 bg-white">
      <div className="flex justify-center max-w-screen-lg max-h-min my-40 mx-auto">
        <div>
          <h1 className="flex justify-center font-mono font-extrabold text-center text-6xl text-red-800">
            🎉 Whoa, You Found It! 🎉
          </h1>
          <p className="my-6 mx-6 font-serif font-semibold">
            You've stumbled upon our exclusive{" "}
            <span className="text-red-800">404</span> page – congratulations,
            you’re among the elite few!
          </p>
          <p className="my-6 mx-6 font-serif font-light text-gray-500">
            🚀 Looks like the page you're hunting for has either moved to a new
            galaxy or never existed in the first place. But hey, don't sweat it!
            <br></br>
            🌟 No time lost! 🌟 Just click the button below to go back to the
            real stuff.
            <br></br>
            Stay awesome and happy browsing! ✨
          </p>
          <div className="flex justify-center">
            <a>
              <button
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2
                  "
                onClick={handleGoBack}
              >
                Home
              </button>
            </a>
          </div>
          <div className="font-serif  text-slate-700">
            <p className="my-6 mx-6  font-light">
              Although, if you're a nerd and looking around for some mischief,
              here are a few details that might help you understand the
              situation:
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
