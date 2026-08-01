function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm px-8 py-4 flex items-center justify-between">
      
      <div className="text-2xl font-bold text-blue-600">
        CRM360
      </div>

      <div className="flex gap-6 text-gray-600">
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">About</a>
      </div>

      <div className="flex gap-3">
        <button className="px-4 py-2 text-blue-600">
          Login
        </button>

        <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Get Started
        </button>
      </div>

    </nav>
  );
}

export default Navbar;