import {
  CircleCheckBig,
  CircleAlert,
  Database,
  Server,
  HardDrive,
  Globe
} from "lucide-react";


function CRMStatus() {


  const status = [

    {
      title: "Server",
      value: "Online",
      icon: <Server size={16}/>,
      bg: "bg-green-100",
      color: "text-green-600",
      badge: "Online",
      badgeColor: "text-green-600"
    },


    {
      title: "Database",
      value: "Connected",
      icon: <Database size={16}/>,
      bg: "bg-blue-100",
      color: "text-blue-600",
      badge: "Connected",
      badgeColor: "text-green-600"
    },


    {
      title: "Storage",
      value: "72%",
      icon: <HardDrive size={16}/>,
      bg: "bg-orange-100",
      color: "text-orange-600",
      badge: "72%",
      badgeColor: "text-orange-500"
    },


    {
      title: "API",
      value: "Running",
      icon: <Globe size={16}/>,
      bg: "bg-indigo-100",
      color: "text-indigo-600",
      badge: "Running",
      badgeColor: "text-green-600"
    }

  ];







  return (


    <div
      className="
      bg-white
      rounded-xl
      border
      border-gray-200
      shadow-sm
      p-4
      "
    >





      <h2
        className="
        text-base
        font-semibold
        text-gray-800
        mb-3
        "
      >

        CRM Status

      </h2>







      <div
        className="
        space-y-2
        "
      >



        {

          status.map((item,index)=>(


            <div

              key={index}

              className="
              flex
              items-center
              justify-between
              "

            >





              <div
                className="
                flex
                items-center
                gap-3
                "
              >



                <div
                  className={`
                  w-8
                  h-8
                  rounded-lg
                  flex
                  items-center
                  justify-center
                  ${item.bg}
                  ${item.color}
                  `}
                >

                  {item.icon}

                </div>







                <div>

                  <p
                    className="
                    text-xs
                    font-medium
                    text-gray-800
                    "
                  >

                    {item.title}

                  </p>


                  <p
                    className="
                    text-xs
                    text-gray-500
                    "
                  >

                    {item.value}

                  </p>


                </div>



              </div>








              <span
                className={`
                text-xs
                font-semibold
                ${item.badgeColor}
                `}
              >

                {item.badge}

              </span>





            </div>


          ))

        }




      </div>




    </div>


  );


}


export default CRMStatus;