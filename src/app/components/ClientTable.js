export default function ClientTable({ search }) {
  const clients = [
    { name: "John Doe", company: "Acme Corp", email: "john@acme.com" },
    { name: "Jane Smith", company: "Techify", email: "jane@techify.com" },
    { name: "Alice Johnson", company: "DataHub", email: "alice@datahub.com" },
  ];

  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(search.toLowerCase()) ||
    client.company.toLowerCase().includes(search.toLowerCase()) ||
    client.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white shadow rounded-lg overflow-x-auto">
      <table className="min-w-full table-auto text-left">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Company</th>
            <th className="px-6 py-3">Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredClients.map((client, index) => (
            <tr key={index} className="border-t">
              <td className="px-6 py-4 text-gray-600">{client.name}</td>
              <td className="px-6 py-4 text-gray-600">{client.company}</td>
              <td className="px-6 py-4 text-gray-600">{client.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
