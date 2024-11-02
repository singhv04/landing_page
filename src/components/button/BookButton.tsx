import { ButtonProps } from "@/types/all-types";

const BookButton: React.FC<ButtonProps> = ({ title, onclick }) => {
  return (
    <button
      onClick={onclick}
      className="group relative inline-flex items-center justify-center rounded-md bg-gradient-to-r from-emerald-500 to-emerald-700 px-3 md:px-6 py-2 md:py-3 text-xs font-medium text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring focus:ring-emerald-300"
    >
      <span className="relative z-10">{title}</span>
    </button>
  );
};

export default BookButton;
