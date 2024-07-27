import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import SignInWithEmailAndPassword from "./pages/SignInWithEmailAndPassword";
import ErrorPage from "./pages/ErrorPage"; // Import the ErrorPage component
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/signinwithemailandpassword"
          element={<SignInWithEmailAndPassword />}
        />
        <Route path="*" element={<ErrorPage />} />{" "}
        {/* Add a wildcard route for handling errors */}
      </Routes>
      <ToastContainer limit={3} />
    </Router>
  );
};

export default App;
