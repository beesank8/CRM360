import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";



function RevenueChart({ stats }) {



  const data = stats?.revenueData || [];





  return (


    <ResponsiveContainer
      width="100%"
      height="100%"
    >


      <LineChart
        data={data}
      >



        <CartesianGrid
          strokeDasharray="3 3"
        />



        <XAxis
          dataKey="month"
        />



        <YAxis />



        <Tooltip />



        <Line

          type="monotone"

          dataKey="revenue"

          stroke="#2563eb"

          strokeWidth={3}

          dot={{
            r:4
          }}

        />



      </LineChart>


    </ResponsiveContainer>


  );

}



export default RevenueChart;