import { X } from "lucide-react";


function ActivityDrawer({ open, onClose, activities }) {


  if (!open) return null;


  return (

    <div
      className="
      fixed
      inset-0
      bg-black/20
      z-50
      flex
      justify-end
      "
    >


      <div
        className="
        w-96
        h-full
        bg-white
        shadow-xl
        p-5
        "
      >



        <div
          className="
          flex
          justify-between
          items-center
          mb-5
          "
        >

          <h2
            className="
            text-lg
            font-semibold
            "
          >

            All Activities

          </h2>



          <button
            onClick={onClose}
          >

            <X size={20}/>

          </button>


        </div>





        <div
          className="
          space-y-3
          "
        >

          {
            activities?.map(
              (item,index)=>(

              <div
                key={index}
                className="
                bg-gray-50
                rounded-lg
                p-3
                "
              >

                <p
                  className="
                  text-sm
                  font-medium
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


                <p
                  className="
                  text-xs
                  text-gray-400
                  mt-1
                  "
                >

                  {item.time}

                </p>


              </div>

            ))
          }


        </div>


      </div>


    </div>

  );

}


export default ActivityDrawer;