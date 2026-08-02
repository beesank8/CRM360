import {
  Users,
  Clock
} from "lucide-react";

import { useState } from "react";

import ActivityDrawer from "./ActivityDrawer";



function ActivityCard({ stats }) {


  const [showActivities, setShowActivities] = useState(false);



  const activities = stats?.activities || [

    {
      title: "No new activity",
      description: "Waiting for updates",
      time: "Just now"
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
      h-full
      "
    >




      {/* HEADER */}


      <div
        className="
        flex
        justify-between
        items-center
        mb-3
        "
      >


        <h2
          className="
          text-base
          font-semibold
          text-gray-800
          "
        >

          Recent Activity

        </h2>




        <button

          onClick={() =>
            setShowActivities(true)
          }

          className="
          text-xs
          text-blue-600
          hover:underline
          font-medium
          "
        >

          View All

        </button>



      </div>







      {/* ACTIVITY LIST */}


      <div
        className="
        space-y-3
        "
      >


        {
          activities
          .slice(0,3)
          .map((item,index)=>(


            <div

              key={index}

              className="
              flex
              items-center
              gap-3
              bg-gray-50
              rounded-lg
              p-3
              "

            >



              {/* ICON */}

              <div
                className="
                w-9
                h-9
                rounded-full
                bg-blue-100
                text-blue-600
                flex
                items-center
                justify-center
                "
              >

                {
                  item.icon ||
                  <Users size={16}/>
                }

              </div>






              {/* CONTENT */}


              <div
                className="
                flex-1
                "
              >


                <p
                  className="
                  text-sm
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

                  {item.description}

                </p>


              </div>







              {/* TIME */}


              <span
                className="
                text-xs
                text-gray-400
                "
              >

                {item.time || <Clock size={13}/>}

              </span>





            </div>


          ))
        }


      </div>









      {/* ACTIVITY DRAWER */}


      <ActivityDrawer

        open={showActivities}

        onClose={() =>
          setShowActivities(false)
        }

        activities={activities}

      />






    </div>

  );


}



export default ActivityCard;