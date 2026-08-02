import {
  Users,
  UserPlus,
  IndianRupee,
  TrendingUp,
  ArrowUpRight
} from "lucide-react";


function KPICards({ stats }) {

 const cards = [

  {
    title: "Total Customers",
    value: stats?.customers || 0,
    growth: `+${stats?.customerGrowth || 0}%`,
    subtitle: "Compared to last month",
    icon: <Users size={22} />,
    bg: "bg-blue-100",
    color: "text-blue-600"
  },


  {
    title: "Active Leads",
    value: stats?.newLeads || 0,
    growth: `+${stats?.leadGrowth || 0}%`,
    subtitle: "New leads today",
    icon: <UserPlus size={22} />,
    bg: "bg-purple-100",
    color: "text-purple-600"
  },


  {
    title: "Monthly Revenue",
    value: `₹${stats?.revenue || 0}`,
    growth: `+${stats?.revenueGrowth || 0}%`,
    subtitle: "Revenue growth",
    icon: <IndianRupee size={22} />,
    bg: "bg-green-100",
    color: "text-green-600"
  },


  {
    title: "Growth Rate",
    value: `${stats?.growth || 0}%`,
    growth: `+${stats?.growth || 0}%`,
    subtitle: "Business growth",
    icon: <TrendingUp size={22} />,
    bg: "bg-orange-100",
    color: "text-orange-600"
  }

];



  return (


    <div
      className="
      grid
      grid-cols-1
      sm:grid-cols-2
      xl:grid-cols-4
      gap-3
      "
    >



      {
        cards.map((card,index)=>(


          <div
            key={index}
            className="
            bg-white
            rounded-xl
            border
            border-gray-200
            shadow-sm
            hover:shadow-md
            transition
            duration-300
            p-4
            "
          >





            {/* TOP SECTION */}

            <div
              className="
              flex
              justify-between
              items-start
              "
            >



              <div
                className={`
                w-11
                h-11
                rounded-lg
                flex
                items-center
                justify-center
                ${card.bg}
                ${card.color}
                `}
              >

                {card.icon}

              </div>







              <div
                className="
                flex
                items-center
                gap-1
                text-green-600
                "
              >

                <ArrowUpRight size={14}/>


                <span
                  className="
                  text-xs
                  font-semibold
                  "
                >

                  {card.growth}

                </span>


              </div>



            </div>








            {/* TITLE */}

            <p
              className="
              text-xs
              text-gray-500
              mt-3
              "
            >

              {card.title}

            </p>







            {/* VALUE */}

            <h2
              className="
              text-2xl
              font-bold
              text-gray-800
              mt-1
              "
            >

              {card.value}

            </h2>







            {/* SUBTITLE */}

            <p
              className="
              text-xs
              text-gray-400
              mt-1
              "
            >

              {card.subtitle}

            </p>





          </div>


        ))
      }





    </div>


  );

}


export default KPICards;