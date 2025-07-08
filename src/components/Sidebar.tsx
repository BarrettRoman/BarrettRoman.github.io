
import { NavLink } from "react-router-dom";
import { Camera, Mountain, MapPin, Palette, User } from "lucide-react";

const Sidebar = () => {
  const navItems = [
    { to: "/portfolio", icon: User, label: "About", end: true },
    { to: "/portfolio/portrait", icon: Camera, label: "Portrait" },
    { to: "/portfolio/landscape", icon: Mountain, label: "Landscape" },
    { to: "/portfolio/street", icon: MapPin, label: "Street" },
    { to: "/portfolio/digital-art", icon: Palette, label: "Digital Art" },
  ];

  return (
    <div className="w-64 bg-white shadow-lg border-r border-gray-200 flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <NavLink to="/" className="block hover:opacity-80 transition-opacity">
          <h1 className="text-2xl font-bold text-gray-900">Alex Morgan</h1>
          <p className="text-sm text-gray-600 mt-1">Photography & Art</p>
        </NavLink>
      </div>
      
      <nav className="flex-1 py-6">
        <ul className="space-y-2 px-4">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-gray-900 text-white shadow-md"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  }`
                }
              >
                <item.icon className="w-5 h-5 mr-3" />
                <span className="font-medium">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-200">
        <p className="text-xs text-gray-500 text-center">
          © 2024 Alex Morgan Portfolio
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
