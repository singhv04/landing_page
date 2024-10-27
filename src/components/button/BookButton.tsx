import { ButtonProps } from "@/types/all-types";

const BookButton: React.FC<ButtonProps> = ({ title,onclick }) => {
  return (
    <button onClick={onclick} className="group relative inline-flex items-center justify-center rounded-md bg-gradient-to-r from-emerald-500 to-emerald-700 px-6 py-3 text-xs font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring focus:ring-emerald-300">
      <span className="absolute inset-0 h-full w-full rounded-md bg-opacity-0 transition duration-300 ease-out group-hover:bg-opacity-10"></span>
      <span className="relative z-10">{title}</span>
      <span className="absolute inset-0 rounded-md border border-emerald-300 opacity-0 transition duration-300 ease-out group-hover:opacity-100"></span>
    </button>
  );
};

export default BookButton;
