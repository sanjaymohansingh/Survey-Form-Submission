import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <h1 className="font-bold text-sm text-sm:text-xl flex felx-wrap">
            <span className="text-slate-500">Take</span>
            <span className="text-pink-700">Survey</span>
          </h1>
        </Link>
        <div>
          <Link to="/signup">
            <button className="text-white hover:text-gray-300 px-3 py-2 rounded-md">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
