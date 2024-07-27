import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./LandingPage";
import Page1 from "./pages/Page1";
import ErrorPage from "./pages/ErrorPage"; // Import the ErrorPage component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="*" element={<ErrorPage />} />{" "}
        {/* Add a wildcard route for handling errors */}
      </Routes>
    </Router>
  );
};

export default App;
