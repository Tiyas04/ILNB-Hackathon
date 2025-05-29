"use client";

import { useState } from "react";
import Sidebar from "@/app/components/Sidebar";

const sampleReports = [
  { id: 1, title: "Monthly Leads Report", date: "2025-05-01", status: "Completed" },
  { id: 2, title: "Quarterly Tasks Report", date: "2025-04-01", status: "In Progress" },
  { id: 3, title: "Service Requests Summary", date: "2025-05-15", status: "Pending" },
];

export default function ReportPage() {
  const [search, setSearch] = useState("");

  const filteredReports = sampleReports.filter(
    (report) =>
      report.title.toLowerCase().includes(search.toLowerCase()) ||
      report.status.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 bg-gray-50 overflow-y-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Reports</h1>
          <input
            type="text"
            placeholder="Search reports..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mt-4 sm:mt-0 sm:ml-4 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full sm:w-64"
          />
        </div>

        <div className="bg-white shadow rounded-lg overflow-x-auto">
          <table className="min-w-full table-auto text-left">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-6 py-3">Title</th>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredReports.length > 0 ? (
                filteredReports.map((report) => (
                  <tr key={report.id} className="border-t hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-600">{report.title}</td>
                    <td className="px-6 py-4 text-gray-600">{report.date}</td>
                    <td className="px-6 py-4 text-gray-600">{report.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="px-6 py-4 text-center text-gray-500">
                    No reports found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
