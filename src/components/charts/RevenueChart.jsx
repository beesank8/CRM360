import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";



function RevenueChart({ stats }) {



  // Demo analytics data
  // Later this will come from backend analytics API

  const data = [


    {
      month: "Jan",
      revenue: 45000,
      leads: 35,
    },


    {
      month: "Feb",
      revenue: 62000,
      leads: 48,
    },


    {
      month: "Mar",
      revenue: 58000,
      leads: 42,
    },


    {
      month: "Apr",
      revenue: 85000,
      leads: 65,
    },


    {
      month: "May",
      revenue: 98000,
      leads: 78,
    },


    {
      month: "Jun",
      revenue: 125000,
      leads: 95,
    },


    {
      month: "Jul",
      revenue: 150000,
      leads: 120,
    },


  ];







  return (



    <div

      className="
      w-full
      h-full
      "

    >




      <ResponsiveContainer

        width="100%"

        height="100%"

      >



        <LineChart

          data={data}

          margin={{

            top: 10,

            right: 20,

            left: 10,

            bottom: 10,

          }}

        >




          <CartesianGrid

            strokeDasharray="3 3"

          />






          <XAxis

            dataKey="month"

          />







          <YAxis

            tickFormatter={(value)=>

              `₹${value / 1000}k`

            }

          />







          <Tooltip


            formatter={(value, name)=>{


              if(name==="revenue"){

                return [

                  `₹${value.toLocaleString("en-IN")}`,

                  "Revenue"

                ];

              }



              return [

                value,

                "Leads"

              ];


            }}


          />











          <Line


            type="monotone"


            dataKey="revenue"


            name="revenue"


            strokeWidth={3}


            dot={{

              r:5

            }}


          />






          <Line


            type="monotone"


            dataKey="leads"


            name="leads"


            strokeWidth={3}


            dot={{

              r:5

            }}


          />






        </LineChart>





      </ResponsiveContainer>





    </div>



  );

}



export default RevenueChart;