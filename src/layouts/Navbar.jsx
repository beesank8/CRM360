function Navbar() {
  return (
    <nav className="bg-white shadow-md px-10 py-5 flex justify-between items-center">

      {/* Logo */}
      <div>
        <h1 className="text-3xl font-bold text-blue-600">
          CRM360
        </h1>
      </div>


      {/* Buttons */}
      <div className="flex gap-4">

        <button className="px-5 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white">
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