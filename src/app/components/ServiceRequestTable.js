export default function ServiceRequestTable({ search }) {
  const serviceRequests = [
    { customerName: "Alice Johnson", serviceType: "Plumbing", status: "Pending", dateRequested: "2025-05-25" },
    { customerName: "Bob Smith", serviceType: "Electrical", status: "Completed", dateRequested: "2025-05-20" },
    { customerName: "Charlie Lee", serviceType: "HVAC", status: "In Progress", dateRequested: "2025-05-28" },
  ];

  const filteredRequests = serviceRequests.filter((request) =>
    request.customerName.toLowerCase().includes(search.toLowerCase()) ||
    request.serviceType.toLowerCase().includes(search.toLowerCase()) ||
    request.status.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white shadow rounded-lg overflow-x-auto">
      <table className="min-w-full table-auto text-left">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="px-6 py-3">Customer Name</th>
            <th className="px-6 py-3">Service Type</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3">Date Requested</th>
          </tr>
        </thead>
        <tbody>
          {filteredRequests.length > 0 ? (
            filteredRequests.map((request, index) => (
              <tr key={index} className="border-t">
                <td className="px-6 py-4 text-gray-600">{request.customerName}</td>
                <td className="px-6 py-4 text-gray-600">{request.serviceType}</td>
                <td className="px-6 py-4 text-gray-600">{request.status}</td>
                <td className="px-6 py-4 text-gray-600">{request.dateRequested}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="px-6 py-4 text-center text-gray-500">
                No service requests found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
