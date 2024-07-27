import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./LandingPage";
import Page1 from "./pages/Page1";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/page1" element={<Page1 />} />
      </Routes>
    </Router>
  );
};

export default App;
