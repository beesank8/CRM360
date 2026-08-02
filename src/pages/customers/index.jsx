import DashboardLayout from "../../components/layout/DashboardLayout";

const customers = [
  {
    id: 1,
    name: "John Smith",
    company: "Google",
    email: "john@google.com",
    status: "Active",
  },
  {
    id: 2,
    name: "Sarah Wilson",
    company: "Microsoft",
    email: "sarah@microsoft.com",
    status: "Active",
  },
  {
    id: 3,
    name: "David Lee",
    company: "Amazon",
    email: "david@amazon.com",
    status: "Pending",
  },
  {
    id: 4,
    name: "Emma Watson",
    company: "Apple",
    email: "emma@apple.com",
    status: "Inactive",
  },
];

export default function Customers() {
  return (
    <DashboardLayout>
      <div className="space-y-6">

        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Customers</h1>
            <p className="text-gray-500">
              Manage all your customers
            </p>
          </div>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
            + Add Customer
          </button>
        </div>

        <div className="bg-white rounded-xl shadow overflow-hidden">

          <table className="w-full">

            <thead className="bg-gray-100">

              <tr>

                <th className="text-left p-4">Name</th>

                <th className="text-left p-4">Company</th>

                <th className="text-left p-4">Email</th>

                <th className="text-left p-4">Status</th>

              </tr>

            </thead>

            <tbody>

              {customers.map((customer) => (

                <tr
                  key={customer.id}
                  className="border-t hover:bg-gray-50"
                >

                  <td className="p-4">{customer.name}</td>

                  <td className="p-4">{customer.company}</td>

                  <td className="p-4">{customer.email}</td>

                  <td className="p-4">

                    <span
                      className={`px-3 py-1 rounded-full text-sm
                        ${
                          customer.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : customer.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}
                    >
                      {customer.status}
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