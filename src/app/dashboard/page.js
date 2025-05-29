"use client";
import { useState } from "react";
import Sidebar from "@/app/components/Sidebar";
import { Menu } from "lucide-react";

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen relative">
      {/* Mobile Top Bar */}
      <div className="lg:hidden bg-white p-4 flex justify-between items-center shadow">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <button
          className="text-gray-700"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "block" : "hidden"
        } lg:block fixed lg:static z-50 bg-white w-64 h-full shadow-lg lg:shadow-none`}
      >
        <Sidebar />
      </div>

      {/* Overlay when sidebar is open on mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content - hidden on small screens when sidebar is open */}
      <main
        className={`flex-1 bg-gray-50 p-4 sm:p-6 overflow-y-auto transition-opacity duration-300 ${
          sidebarOpen ? "hidden lg:block" : "block"
        }`}
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <DashboardCard title="Leads" value="1,254" />
          <DashboardCard title="Clients" value="842" />
          <DashboardCard title="Tasks" value="367" />
        </div>

        {/* Recent Activity */}
        <section className="mt-10 sm:mt-12 text-black">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="bg-white shadow rounded-lg p-4 sm:p-6">
            <ul className="divide-y divide-gray-200 text-sm sm:text-base">
              <li className="py-2">🔔 Client A submitted a new request.</li>
              <li className="py-2">📩 You assigned task to John.</li>
              <li className="py-2">✅ Task "Design mockup" was completed.</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

function DashboardCard({ title, value }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 sm:p-6">
      <div className="text-sm text-gray-500 mb-1">{title}</div>
      <div className="text-xl sm:text-2xl font-bold text-gray-800">{value}</div>
    </div>
  );
}
