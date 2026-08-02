function Header() {
  return (
    <header className="bg-white shadow-sm h-16 flex items-center justify-between px-8">
      {/* Search */}
      <div className="w-1/3">
        <input
          type="text"
          placeholder="Search customers, leads..."
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">
        <button className="text-2xl">🔔</button>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
            A
          </div>

          <div>
            <h3 className="font-semibold">Admin</h3>
            <p className="text-sm text-gray-500">Administrator</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;