import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black text-white px-8 py-4 flex justify-between">
      <h1 className="text-2xl font-bold">
        CRM360
      </h1>

      <div className="space-x-4">
        <Link to="/login">
          <button className="px-4 py-2 border rounded">
            Login
          </button>
        </Link>

        <Link to="/register">
          <button className="px-4 py-2 bg-blue-600 rounded">
            Get Started
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;