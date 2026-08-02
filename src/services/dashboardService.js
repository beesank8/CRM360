import axios from "axios";



const API = axios.create({

  baseURL: "http://localhost:5000/api"

});





export const getDashboardStats = async () => {


  try {


    const response = await API.get(
      "/dashboard/stats"
    );


    return response.data;


  }


  catch(error) {


    console.error(
      "Dashboard API Error:",
      error
    );


    throw error;


  }


};