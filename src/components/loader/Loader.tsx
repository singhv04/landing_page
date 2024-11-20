const Loader: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gray-800  rounded-lg">
      <div className="w-10 h-10 border-4 border-t-emerald-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;