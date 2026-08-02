import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5 bg-black text-white">

      <Link to="/" className="text-2xl font-bold">
        CRM360
      </Link>

      <div className="flex gap-5">

        <Link 
          to="/login"
          className="border px-5 py-2 rounded"
        >
          Login
        </Link>


        <Link
          to="/register"
          className="bg-blue-600 px-5 py-2 rounded"
        >
          Get Started
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;