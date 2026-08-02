import {
  LayoutDashboard,
  Users,
  Target,
  BarChart3,
  Settings,
  UserCircle,
  Lock,
  LogOut
} from "lucide-react";

import {
  NavLink,
  useNavigate
} from "react-router-dom";



function Sidebar() {


  const navigate = useNavigate();



  const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");

  };





  const menuItems = [

    {
      name:"Dashboard",
      path:"/dashboard",
      icon:<LayoutDashboard size={20}/>
    },


    {
      name:"Customers",
      path:"/customers",
      icon:<Users size={20}/>
    },


    {
      name:"Leads",
      path:"/leads",
      icon:<Target size={20}/>
    },


    {
      name:"Analytics",
      path:"/analytics",
      icon:<BarChart3 size={20}/>
    }

  ];





  return (


    <aside
      className="
      w-64
      h-screen
      bg-gray-900
      text-white
      flex
      flex-col
      shadow-xl
      "
    >





      {/* LOGO */}


      <div
        className="
        px-6
        py-6
        border-b
        border-gray-800
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
            className="
            w-11
            h-11
            bg-blue-600
            rounded-xl
            flex
            items-center
            justify-center
            text-xl
            font-bold
            "
          >

            C

          </div>




          <div>


            <h1
              className="
              text-2xl
              font-bold
              "
            >

              CRM360

            </h1>


            <p
              className="
              text-xs
              text-gray-400
              "
            >

              Smart CRM Platform

            </p>


          </div>



        </div>


      </div>










      {/* MAIN MENU */}



      <nav
        className="
        flex-1
        px-4
        py-6
        space-y-2
        "
      >



        <p
          className="
          text-xs
          text-gray-500
          uppercase
          px-3
          mb-3
          "
        >

          Main Menu

        </p>





        {
          menuItems.map((item)=>(


            <NavLink

              key={item.name}

              to={item.path}

              className={({isActive})=>

                `
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-xl
                transition

                ${
                  isActive
                  ?
                  "bg-blue-600 text-white shadow-lg"
                  :
                  "text-gray-300 hover:bg-gray-800 hover:text-white"
                }

                `

              }

            >


              {item.icon}


              <span
                className="
                font-medium
                "
              >

                {item.name}

              </span>



            </NavLink>


          ))

        }







        <p
          className="
          text-xs
          text-gray-500
          uppercase
          px-3
          mt-8
          mb-3
          "
        >

          Account

        </p>








        <button

          className="
          w-full
          flex
          items-center
          gap-3
          px-4
          py-3
          rounded-xl
          text-gray-300
          hover:bg-gray-800
          transition
          "

        >

          <UserCircle size={20}/>

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
          rounded-xl
          text-gray-300
          hover:bg-gray-800
          transition
          "

        >

          <Lock size={20}/>

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
          rounded-xl
          text-gray-300
          hover:bg-gray-800
          transition
          "

        >

          <Settings size={20}/>

          Settings


        </button>







      </nav>









      {/* LOGOUT */}



      <div
        className="
        p-4
        border-t
        border-gray-800
        "
      >


        <button

          onClick={logout}

          className="
          w-full
          flex
          items-center
          justify-center
          gap-3
          bg-red-600
          hover:bg-red-700
          py-3
          rounded-xl
          transition
          font-medium
          "

        >

          <LogOut size={20}/>

          Logout


        </button>



      </div>







    </aside>


  );

}



export default Sidebar;