import { useNavigate } from "react-router-dom";

const BackToHomeButton = ({ text }) => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/"); // Replace '/' with your landing page route
  };

  return (
    <button
      type="button"
      class="text-white w-full border bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2
                  "
      onClick={handleGoBack}
    >
      {text}
    </button>
  );
};

export default BackToHomeButton;
