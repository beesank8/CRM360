import DashboardLayout from "../../components/layout/DashboardLayout";

const leads = [
  {
    id: 1,
    name: "Amit Sharma",
    company: "Infosys",
    status: "New",
    value: "$1,200",
  },
  {
    id: 2,
    name: "Priya Singh",
    company: "TCS",
    status: "Qualified",
    value: "$3,800",
  },
  {
    id: 3,
    name: "Rahul Verma",
    company: "Wipro",
    status: "Proposal",
    value: "$5,600",
  },
  {
    id: 4,
    name: "Sneha Roy",
    company: "Accenture",
    status: "Lost",
    value: "$0",
  },
];

export default function Leads() {
  return (
    <DashboardLayout>
      <div className="space-y-6">

        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Leads</h1>
            <p className="text-gray-500">
              Manage your sales pipeline
            </p>
          </div>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
            + Add Lead
          </button>
        </div>

        <div className="bg-white rounded-xl shadow overflow-hidden">

          <table className="w-full">

            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-4">Lead</th>
                <th className="text-left p-4">Company</th>
                <th className="text-left p-4">Value</th>
                <th className="text-left p-4">Status</th>
              </tr>
            </thead>

            <tbody>
              {leads.map((lead) => (
                <tr
                  key={lead.id}
                  className="border-t hover:bg-gray-50"
                >
                  <td className="p-4">{lead.name}</td>
                  <td className="p-4">{lead.company}</td>
                  <td className="p-4 font-semibold">{lead.value}</td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        lead.status === "New"
                          ? "bg-blue-100 text-blue-700"
                          : lead.status === "Qualified"
                          ? "bg-green-100 text-green-700"
                          : lead.status === "Proposal"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {lead.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>

      </div>
    </DashboardLayout>
  );
}