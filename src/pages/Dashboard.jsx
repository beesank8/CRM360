import { useEffect, useState } from "react";

import RevenueChart from "../components/charts/RevenueChart";

import DashboardHeader from "../components/dashboard/DashboardHeader";
import KPICards from "../components/dashboard/KPICards";
import SummaryCard from "../components/dashboard/SummaryCard";
import ActivityCard from "../components/dashboard/ActivityCard";

import { getDashboardStats } from "../services/dashboardService";



function Dashboard() {


  const [stats, setStats] = useState(null);





  useEffect(() => {

    loadStats();


    const interval = setInterval(() => {

      loadStats();

    }, 30000);



    return () => clearInterval(interval);


  }, []);






  const loadStats = async () => {

    try {

      const data = await getDashboardStats();

      setStats(data);

    }

    catch(error) {

      console.error(
        "Dashboard stats error:",
        error
      );

    }

  };







  return (

    <div
      className="
      h-full
      flex
      flex-col
      gap-3
      overflow-hidden
      "
    >





      {/* HEADER */}

      <DashboardHeader />







      {/* KPI CARDS */}

      <KPICards stats={stats} />









      {/* MAIN AREA */}


      <div
        className="
        flex-1
        grid
        grid-cols-1
        xl:grid-cols-3
        gap-3
        min-h-0
        "
      >







        {/* REVENUE CHART */}



        <div
          className="
          col-span-2
          bg-white
          rounded-2xl
          border
          border-gray-200
          shadow-sm
          p-4
          min-h-0
          "
        >






          <div
            className="
            mb-2
            flex
            justify-between
            items-center
            "
          >



            <div>


              <h2
                className="
                text-lg
                font-semibold
                text-gray-800
                "
              >

                Revenue Overview

              </h2>





              <p
                className="
                text-sm
                text-gray-500
                "
              >

                Monthly business performance

              </p>



            </div>







            <span
              className="
              bg-green-100
              text-green-700
              px-3
              py-1
              rounded-full
              text-sm
              font-medium
              "
            >

              +18%

            </span>




          </div>








          {/* CHART */}



          <div
            className="
            h-[220px]
            lg:h-[250px]
            "
          >

            <RevenueChart stats={stats} />

          </div>






        </div>












        {/* RIGHT PANEL */}



        <div
          className="
          flex
          flex-col
          gap-3
          min-h-0
          overflow-hidden
          "
        >






          {/* SUMMARY CARD */}



          <div
            className="
            flex-1
            overflow-hidden
            "
          >

            <SummaryCard stats={stats} />

          </div>









          {/* ACTIVITY CARD */}



          <div
            className="
            flex-1
            overflow-hidden
            "
          >

            <ActivityCard stats={stats} />

          </div>







        </div>







      </div>








    </div>

  );

}



export default Dashboard;