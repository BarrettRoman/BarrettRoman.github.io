

import { NavLink } from "react-router-dom";
import { Camera, Mountain, MapPin, Palette, User } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  useSidebar,
} from "@/components/ui/sidebar";

const navItems = [
  { to: "/portfolio", icon: User, label: "Home", end: true },
  { to: "/portfolio/landscape", icon: Mountain, label: "Landscape" },
  { to: "/portfolio/street", icon: MapPin, label: "Street" },
  { to: "/portfolio/portrait", icon: Camera, label: "Portrait" },
  { to: "/portfolio/digital-art", icon: Palette, label: "Other Art" },
];

const AppSidebar = () => {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar className="border-r border-gray-200">
      <SidebarContent className="bg-white">
        <div className="p-6 border-b border-gray-200">
          <NavLink to="/" className="block hover:opacity-80 transition-opacity">
            <h1 className={`text-2xl font-bold text-gray-900 ${isCollapsed ? 'hidden' : ''}`}>
              Barrett Roman
            </h1>
            {!isCollapsed && (
              <p className="text-sm text-gray-600 mt-1">Photography & Art</p>
            )}
          </NavLink>
        </div>
        
        <SidebarGroup>
          <SidebarGroupContent>
            <nav className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
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
                  <item.icon className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span className="font-medium">{item.label}</span>
                </NavLink>
              ))}
            </nav>
          </SidebarGroupContent>
        </SidebarGroup>
        
        {!isCollapsed && (
          <div className="mt-auto p-4 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              © 2024 Barrett Roman Portfolio
            </p>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
