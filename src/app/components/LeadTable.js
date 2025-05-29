"use client";
import { useMemo } from "react";

const leads = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    status: "New",
    source: "Website",
    createdAt: "2025-05-20",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    status: "Contacted",
    source: "LinkedIn",
    createdAt: "2025-05-22",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    status: "Qualified",
    source: "Referral",
    createdAt: "2025-05-24",
  },
];

export default function LeadTable({ search }) {
  const filteredLeads = useMemo(() => {
    return leads.filter(
      (lead) =>
        lead.name.toLowerCase().includes(search.toLowerCase()) ||
        lead.email.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow">
      <table className="min-w-full text-sm text-left">
        <thead className="bg-gray-100 border-b text-gray-600 uppercase text-xs">
          <tr>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Email</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3">Source</th>
            <th className="px-6 py-3">Created</th>
          </tr>
        </thead>
        <tbody>
          {filteredLeads.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center py-6 text-gray-700">
                No leads found.
              </td>
            </tr>
          ) : (
            filteredLeads.map((lead) => (
              <tr key={lead.id} className="border-t hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-800">{lead.name}</td>
                <td className="px-6 py-4 text-gray-600">{lead.email}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      lead.status === "New"
                        ? "bg-blue-100 text-blue-700"
                        : lead.status === "Contacted"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {lead.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-600">{lead.source}</td>
                <td className="px-6 py-4 text-gray-600">{lead.createdAt}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
