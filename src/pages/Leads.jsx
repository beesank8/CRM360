import { useEffect, useState } from "react";

import LeadHeader from "../components/leads/LeadHeader";
import LeadKPICards from "../components/leads/LeadKPICards";
import LeadFilters from "../components/leads/LeadFilters";
import LeadTable from "../components/leads/LeadTable";
import AddLeadModal from "../components/leads/AddLeadModal";
import LeadDetailsDrawer from "../components/leads/LeadDetailsDrawer";

import {
  getLeads,
  createLead,
  deleteLead,
} from "../services/leadService";

import toast from "react-hot-toast";



function Leads() {



  const [leads,setLeads] = useState([]);

  const [showModal,setShowModal] = useState(false);


  const [selectedLead,setSelectedLead] = useState(null);



  // SEARCH

  const [search,setSearch] = useState("");



  // FILTERS

  const [status,setStatus] = useState("");

  const [source,setSource] = useState("");

  const [priority,setPriority] = useState("");

  const [dateFilter,setDateFilter] = useState("");







  // LOAD LEADS

  const loadLeads = async()=>{


    try{


      const data = await getLeads();



      /*
        Handles both formats:

        [
          leads
        ]

        OR

        {
          data:[]
        }

      */


      setLeads(
        Array.isArray(data)
        ?
        data
        :
        data.data || []
      );



    }

    catch(error){


      console.log(error);


      toast.error(
        "Failed to load leads"
      );


    }


  };







  useEffect(()=>{


    loadLeads();


  },[]);









  // ADD LEAD


  const handleAddLead = async(leadData)=>{


    try{


      await createLead(leadData);



      toast.success(
        "Lead added successfully"
      );



      setShowModal(false);



      loadLeads();



    }

    catch(error){


      console.log(error);


      toast.error(
        "Unable to add lead"
      );


    }


  };









  // DELETE LEAD


  const handleDeleteLead = async(id)=>{


    try{


      await deleteLead(id);



      toast.success(
        "Lead deleted"
      );



      setSelectedLead(null);



      loadLeads();



    }

    catch(error){


      console.log(error);


      toast.error(
        "Delete failed"
      );


    }


  };









  // FILTER LOGIC


  const filteredLeads = leads.filter((lead)=>{



    const keyword =
      search.toLowerCase();




    const matchesSearch =


      lead.name
      ?.toLowerCase()
      .includes(keyword)


      ||

      lead.company
      ?.toLowerCase()
      .includes(keyword)


      ||

      lead.email
      ?.toLowerCase()
      .includes(keyword)


      ||

      lead.phone
      ?.toLowerCase()
      .includes(keyword);








    const matchesStatus =

      status === ""

      ||

      lead.status
      ?.toLowerCase()

      ===

      status
      .toLowerCase();








    const matchesSource =

      source === ""

      ||

      lead.source
      ?.toLowerCase()

      ===

      source
      .toLowerCase();








    const matchesPriority =

      priority === ""

      ||

      lead.priority
      ?.toLowerCase()

      ===

      priority
      .toLowerCase();









    let matchesDate = true;



    const createdDate =
      new Date(
        lead.createdAt
      );



    const today =
      new Date();





    if(dateFilter==="today"){


      matchesDate =

      createdDate.toDateString()

      ===

      today.toDateString();


    }








    if(dateFilter==="week"){


      const weekAgo =
      new Date();



      weekAgo.setDate(
        today.getDate()-7
      );



      matchesDate =
      createdDate >= weekAgo;


    }








    if(dateFilter==="month"){


      matchesDate =


      createdDate.getMonth()

      ===

      today.getMonth()


      &&


      createdDate.getFullYear()

      ===

      today.getFullYear();



    }







    if(dateFilter==="year"){


      matchesDate =

      createdDate.getFullYear()

      ===

      today.getFullYear();


    }









    return (

      matchesSearch

      &&

      matchesStatus

      &&

      matchesSource

      &&

      matchesPriority

      &&

      matchesDate

    );



  });












  const clearFilters =()=>{


    setSearch("");

    setStatus("");

    setSource("");

    setPriority("");

    setDateFilter("");


  };









return (


<div

className="
h-full
flex
flex-col
gap-4
p-4
overflow-hidden
"

>







<LeadHeader


onAddLead={
()=>setShowModal(true)
}


search={search}


setSearch={setSearch}


/>









<LeadKPICards

leads={leads}

/>









<LeadFilters


status={status}

setStatus={setStatus}



source={source}

setSource={setSource}



priority={priority}

setPriority={setPriority}



dateFilter={dateFilter}

setDateFilter={setDateFilter}



clearFilters={clearFilters}



/>









<div

className="
flex-1
overflow-hidden
"

>


<LeadTable


leads={filteredLeads}


onViewLead={
setSelectedLead
}


/>


</div>









<AddLeadModal


open={showModal}


onClose={
()=>setShowModal(false)
}


onSubmit={handleAddLead}


/>









<LeadDetailsDrawer


lead={selectedLead}


onClose={
()=>setSelectedLead(null)
}



onDeleteLead={handleDeleteLead}



/>







</div>


);



}


export default Leads;