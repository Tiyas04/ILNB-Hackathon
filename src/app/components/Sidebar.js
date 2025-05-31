"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  LayoutDashboard,
  Users,
  Briefcase,
  ClipboardList,
  FileText,
  Settings,
  LogOut,
  ShoppingCart,
  Menu,
  X,
} from "lucide-react";
import { signOut,getAuth } from "firebase/auth";
import { app } from "./firebase"

const auth = getAuth(app);

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { name: "Leads", icon: ShoppingCart, path: "/dashboard/leads" },
    { name: "Client", icon: Users, path: "/dashboard/client" },
    { name: "Task", icon: Briefcase, path: "/dashboard/task" },
    { name: "Service Requests", icon: ClipboardList, path: "/dashboard/servicerequests" },
    { name: "Report", icon: FileText, path: "/dashboard/reports" },
    { name: "Settings", icon: Settings, path: "/dashboard/settings" },
  ];

  const handlelogout = () => {
    signOut(auth).then(() => {
            console.log("Signout Successfully")
            router.push("/")
    })
  }

  // Automatically close menu on navigation
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (path) => pathname === path;

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-md shadow"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md z-40 transform transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:relative`}
      >
        <div className="flex flex-col h-full justify-between p-6">
          {/* Top - Navigation */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">XYZ Dashboard</h2>
            <nav className="space-y-2">
              {navItems.map(({ name, icon: Icon, path }) => (
                <button
                  key={name}
                  onClick={() => router.push(path)}
                  className={`w-full flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors
                    ${
                      isActive(path)
                        ? "bg-black text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  <Icon className="mr-3 w-5 h-5" />
                  {name}
                </button>
              ))}
            </nav>
          </div>

          {/* Bottom - Logout */}
          <div>
            <button
              onClick={handlelogout}
              className="w-full flex items-center px-4 py-3 mt-4 rounded-lg text-sm font-medium text-red-600 hover:bg-gray-100 transition-colors"
            >
              <LogOut className="mr-3 w-5 h-5" />
              Log Out
            </button>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}