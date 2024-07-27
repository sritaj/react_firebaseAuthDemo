import React, { useState } from "react";
import BackToHomeButton from "../components/BackToHomeButton";
import { auth } from "../utils/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginWithUsernameAndPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Navigate to a different page or show a success message
      console.log("Sign in successful");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="landing-page bg-gray-200 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-md mx-auto p-6 ">
        <div className="p-6  bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4">
            Welcome to the Landing Page
          </h1>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email:
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={handleSignIn}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </div>
        <div className="p-6">
          <h1 className="text-2xl text-center font-bold mt-8 mb-8">OR</h1>
          <BackToHomeButton text={"Back to Home Page"} />
        </div>
      </div>
    </div>
  );
};

export default LoginWithUsernameAndPassword;
