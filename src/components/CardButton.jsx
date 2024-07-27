const CardButton = ({ text, onClick }) => {
  return (
    <div
      className="m-4 p-6 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg shadow-lg hover:from-green-500 hover:to-blue-600 transform hover:scale-105 transition-transform duration-300 cursor-pointer break-words"
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default CardButton;
