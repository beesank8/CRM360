import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Customers", path: "/customers" },
    { name: "Leads", path: "/leads" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen">
      <div className="text-center py-8 text-3xl font-bold border-b border-slate-700">
        CRM360
      </div>

      <nav className="mt-8">
        {menu.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`block px-8 py-4 transition ${
              location.pathname === item.path
                ? "bg-blue-600"
                : "hover:bg-slate-800"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;