export default function TaskTable({ search }) {
  const tasks = [
    { title: "Design landing page", assignedTo: "Alice", status: "In Progress" },
    { title: "Fix login bug", assignedTo: "Bob", status: "Completed" },
    { title: "Update CRM integration", assignedTo: "John", status: "Pending" },
  ];

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase()) ||
    task.assignedTo.toLowerCase().includes(search.toLowerCase()) ||
    task.status.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white shadow rounded-lg overflow-x-auto">
      <table className="min-w-full table-auto text-left">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="px-6 py-3">Title</th>
            <th className="px-6 py-3">Assigned To</th>
            <th className="px-6 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task, index) => (
            <tr key={index} className="border-t">
              <td className="px-6 py-4 text-gray-600">{task.title}</td>
              <td className="px-6 py-4 text-gray-600">{task.assignedTo}</td>
              <td className="px-6 py-4 text-gray-600">{task.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
