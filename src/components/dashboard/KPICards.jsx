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

      value:
        stats?.customers || 0,

      growth:
        `+${stats?.customerGrowth || 0}%`,

      subtitle:
        "Total registered customers",

      icon:
        <Users size={22} />,

      bg:
        "bg-blue-100",

      color:
        "text-blue-600"

    },





    {
      title: "Total Leads",

      value:
        stats?.leads || 0,

      growth:
        `+${stats?.leadGrowth || 0}%`,

      subtitle:
        "Total active leads",

      icon:
        <UserPlus size={22} />,

      bg:
        "bg-purple-100",

      color:
        "text-purple-600"

    },







    {
      title: "Revenue",

      value:
        `₹${Number(stats?.revenue || 0).toLocaleString("en-IN")}`,

      growth:
        `+${stats?.revenueGrowth || 0}%`,

      subtitle:
        "Converted lead revenue",

      icon:
        <IndianRupee size={22} />,

      bg:
        "bg-green-100",

      color:
        "text-green-600"

    },








    {
      title: "Growth Rate",

      value:
        `${stats?.growth || 0}%`,

      growth:
        `+${stats?.growth || 0}%`,

      subtitle:
        "Business growth",

      icon:
        <TrendingUp size={22} />,

      bg:
        "bg-orange-100",

      color:
        "text-orange-600"

    }


  ];





  return (


    <div
      className="
      grid
      grid-cols-1
      sm:grid-cols-2
      xl:grid-cols-4
      gap-4
      "
    >



      {
        cards.map((card,index)=>(


          <div

            key={index}

            className="
            bg-white
            rounded-2xl
            border
            border-gray-200
            shadow-sm
            hover:shadow-md
            transition
            duration-300
            p-5
            "

          >





            {/* TOP */}

            <div
              className="
              flex
              justify-between
              items-start
              "
            >




              <div

                className={`
                w-12
                h-12
                rounded-xl
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

                <ArrowUpRight size={15}/>


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
              text-sm
              text-gray-500
              mt-4
              "

            >

              {card.title}


            </p>









            {/* VALUE */}


            <h2

              className="
              text-3xl
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
              mt-2
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