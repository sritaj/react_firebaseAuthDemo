import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./LandingPage";
import LoginWithUsernameAndPassword from "./pages/LoginWithUsernameAndPassword";
import ErrorPage from "./pages/ErrorPage"; // Import the ErrorPage component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/loginwithcreds"
          element={<LoginWithUsernameAndPassword />}
        />
        <Route path="*" element={<ErrorPage />} />{" "}
        {/* Add a wildcard route for handling errors */}
      </Routes>
    </Router>
  );
};

export default App;
