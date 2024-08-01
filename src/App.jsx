import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import SignInWithEmailAndPassword from "./pages/SignInWithEmailAndPassword";
import ErrorPage from "./pages/ErrorPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateSignInAccount from "./pages/CreateSignInAccount";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registernewuser" element={<CreateSignInAccount />} />
        <Route
          path="/signinwithemailandpassword"
          element={<SignInWithEmailAndPassword />}
        />
        <Route path="*" element={<ErrorPage />} />{" "}
      </Routes>
      <ToastContainer limit={3} />
    </Router>
  );
};

export default App;
