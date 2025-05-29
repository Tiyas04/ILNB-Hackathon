"use client";

import { useState } from "react";
import Sidebar from "@/app/components/Sidebar";
import ClientTable from "@/app/components/ClientTable";

export default function ClientsPage() {
  const [search, setSearch] = useState("");

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 bg-gray-50 overflow-y-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Clients</h1>
          <input
            type="text"
            placeholder="Search clients..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mt-4 sm:mt-0 sm:ml-4 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full sm:w-64"
          />
        </div>

        <ClientTable search={search} />
      </main>
    </div>
  );
}
