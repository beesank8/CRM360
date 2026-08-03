import axios from "axios";


const API = axios.create({

  baseURL:
  "http://localhost:5000/api"

});





// GET ALL LEADS

export const getLeads = async()=>{


  const response =
    await API.get(
      "/leads"
    );


  return response.data;


};








// CREATE LEAD

export const createLead = async(lead)=>{


  const response =
    await API.post(

      "/leads",

      lead

    );


  return response.data;


};








// UPDATE LEAD

export const updateLead = async(id,lead)=>{


  const response =
    await API.put(

      `/leads/${id}`,

      lead

    );


  return response.data;


};








// DELETE LEAD

export const deleteLead = async(id)=>{


  const response =
    await API.delete(

      `/leads/${id}`

    );


  return response.data;


};








// CONVERT LEAD TO CUSTOMER

export const convertLead = async(id)=>{


  const response =
    await API.post(

      `/leads/${id}/convert`

    );


  return response.data;


};