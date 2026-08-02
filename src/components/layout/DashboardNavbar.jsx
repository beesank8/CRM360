import {
  Settings,
  Lock,
  LogOut,
  User
} from "lucide-react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";


function DashboardNavbar() {


  const navigate = useNavigate();

  const [open, setOpen] = useState(false);


  const user = JSON.parse(
    localStorage.getItem("user")
  );





  const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");

  };





  return (

    <header
      className="
      h-16
      bg-white
      border-b
      flex
      items-center
      justify-between
      px-5
      shadow-sm
      flex-shrink-0
      "
    >






      {/* LEFT TITLE */}


      <div>


        <h2
          className="
          text-lg
          font-bold
          text-gray-800
          "
        >

          CRM360 Dashboard

        </h2>



        <p
          className="
          text-xs
          text-gray-500
          "
        >

          Customer Relationship Management

        </p>


      </div>









      {/* ADMIN SECTION */}


      <div
        className="
        relative
        "
      >



        <button

          onClick={() =>
            setOpen(!open)
          }

          className="
          flex
          items-center
          gap-3
          "

        >




          {/* ADMIN ICON */}


          <div
            className="
            w-10
            h-10
            rounded-full
            bg-blue-600
            text-white
            flex
            items-center
            justify-center
            font-bold
            "
          >

            {

              user?.name

              ?

              user.name
              .charAt(0)
              .toUpperCase()

              :

              "A"

            }


          </div>








          {/* ADMIN DETAILS */}


          <div
            className="
            hidden
            md:block
            text-left
            "
          >


            <p
              className="
              text-sm
              font-semibold
              text-gray-800
              "
            >

              {
                user?.name || "Admin"
              }


            </p>



            <p
              className="
              text-xs
              text-gray-500
              "
            >

              Administrator

            </p>


          </div>




        </button>









        {/* DROPDOWN */}


        {

          open &&


          <div
            className="
            absolute
            right-0
            mt-3
            w-56
            bg-white
            border
            rounded-xl
            shadow-xl
            p-2
            z-50
            "
          >






            <button

              className="
              w-full
              flex
              items-center
              gap-3
              px-4
              py-3
              rounded-lg
              hover:bg-gray-100
              text-gray-700
              "

            >

              <User size={18}/>

              Profile


            </button>








            <button

              className="
              w-full
              flex
              items-center
              gap-3
              px-4
              py-3
              rounded-lg
              hover:bg-gray-100
              text-gray-700
              "

            >

              <Lock size={18}/>

              Change Password


            </button>









            <button

              className="
              w-full
              flex
              items-center
              gap-3
              px-4
              py-3
              rounded-lg
              hover:bg-gray-100
              text-gray-700
              "

            >

              <Settings size={18}/>

              Settings


            </button>







            <hr
              className="
              my-2
              "
            />








            <button

              onClick={logout}

              className="
              w-full
              flex
              items-center
              gap-3
              px-4
              py-3
              rounded-lg
              text-red-600
              hover:bg-red-50
              "

            >

              <LogOut size={18}/>

              Logout


            </button>






          </div>


        }




      </div>






    </header>


  );

}


export default DashboardNavbar;