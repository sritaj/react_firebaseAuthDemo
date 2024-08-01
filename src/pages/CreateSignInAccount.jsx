import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { useState } from "react";
import BackToHomeButton from "../components/BackToHomeButton";

const CreateSignInAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);

      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess(true);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  return (
    <div className="landing-page bg-gray-200 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-md mx-auto p-6 ">
        <div className="p-6  bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Create a new account</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-md px-4 py-2"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 rounded-md px-4 py-2"
            />
            <button
              disabled={loading}
              type="submit"
              className="bg-blue-500 text-white rounded-md px-4 py-2"
            >
              Create account
            </button>
          </form>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          {success && (
            <p className="text-green-500 mt-2">Account created successfully</p>
          )}
        </div>
        <div className="p-6">
          <h1 className="text-2xl text-center font-bold mt-8 mb-8">OR</h1>
          <BackToHomeButton text={"Back to Home Page"} />
        </div>
      </div>
    </div>
  );
};

export default CreateSignInAccount;
