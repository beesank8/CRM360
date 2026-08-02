import DashboardLayout from "../../components/layout/DashboardLayout";
import RevenueChart from "../../components/charts/RevenueChart";

function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Page Heading */}
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-500">
            Welcome back to CRM360
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow p-6">
            <p className="text-gray-500">Revenue</p>
            <h2 className="text-3xl font-bold mt-2">$84,250</h2>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <p className="text-gray-500">Customers</p>
            <h2 className="text-3xl font-bold mt-2">1,240</h2>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <p className="text-gray-500">Orders</p>
            <h2 className="text-3xl font-bold mt-2">352</h2>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <p className="text-gray-500">Growth</p>
            <h2 className="text-3xl font-bold mt-2 text-green-600">
              +18%
            </h2>
          </div>
        </div>

        {/* Revenue Chart */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">
            Revenue Overview
          </h2>

          <RevenueChart />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;