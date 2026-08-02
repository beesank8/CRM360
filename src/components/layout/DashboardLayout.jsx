import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import DashboardNavbar from "./DashboardNavbar";
import Footer from "./Footer";


function DashboardLayout() {


  return (

    <div
      className="
      h-screen
      flex
      overflow-hidden
      bg-gray-100
      "
    >


      {/* SIDEBAR */}

      <Sidebar />





      {/* RIGHT SECTION */}

      <div
        className="
        flex-1
        flex
        flex-col
        min-w-0
        overflow-hidden
        "
      >



        {/* NAVBAR */}

        <DashboardNavbar />





        {/* CONTENT AREA */}

        <main
          className="
          flex-1
          overflow-hidden
          p-3
          lg:p-4
          min-h-0
          "
        >

          <Outlet />

        </main>






        {/* FOOTER */}

        <Footer />



      </div>



    </div>

  );

}


export default DashboardLayout;