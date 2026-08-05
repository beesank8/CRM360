import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import api from "../services/api";


import LeadHeader from "../components/leads/LeadHeader";
import LeadKPICards from "../components/leads/LeadKPICards";
import LeadFilters from "../components/leads/LeadFilters";
import LeadTable from "../components/leads/LeadTable";
import AddLeadModal from "../components/leads/AddLeadModal";
import EditLeadModal from "../components/leads/EditLeadModal";
import LeadDetailsDrawer from "../components/leads/LeadDetailsDrawer";


import {
  getLeads,
  createLead,
  convertLead
} from "../services/leadService";





function Leads() {



const [leads,setLeads] = useState([]);


const [loading,setLoading] = useState(true);



const [showModal,setShowModal] = useState(false);



const [editLead,setEditLead] = useState(null);



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


setLoading(true);



const data =
await getLeads();



setLeads(data || []);



}



catch(error){


console.log(error);


toast.error(
"Failed to load leads"
);


}



finally{


setLoading(false);


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



const deleteLead = async(id)=>{


const confirmDelete =

window.confirm(
"Are you sure you want to delete this lead?"
);



if(!confirmDelete)
return;





try{


await api.delete(
`/leads/${id}`
);



toast.success(
"Lead deleted successfully"
);



loadLeads();



}



catch(error){


console.log(error);


toast.error(
"Delete failed"
);



}



};









// FILTER DATA



const filteredLeads =

leads.filter((lead)=>{



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
?.includes(search);







const matchesStatus =

status===""

||

lead.status
?.toLowerCase()

===

status.toLowerCase();







const matchesSource =

source===""

||

lead.source
?.toLowerCase()

===

source.toLowerCase();







const matchesPriority =

priority===""

||

lead.priority
?.toLowerCase()

===

priority.toLowerCase();







let matchesDate=true;



if(dateFilter){


const created =
new Date(lead.createdAt);



const today =
new Date();



if(dateFilter==="today"){


matchesDate =

created.toDateString()

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
created >= weekAgo;



}





if(dateFilter==="month"){


matchesDate =

created.getMonth()
===
today.getMonth()

&&

created.getFullYear()
===
today.getFullYear();



}




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












// LIVE KPI DATA



const leadStats = {



totalLeads:
leads.length,



newLeads:

leads.filter(
lead=>lead.status==="New"
).length,



interested:

leads.filter(
lead=>lead.status==="Interested"
).length,



qualified:

leads.filter(
lead=>lead.status==="Qualified"
).length,



won:

leads.filter(
lead=>lead.status==="Won"
).length,



lost:

leads.filter(
lead=>lead.status==="Lost"
).length,



};









const clearFilters=()=>{


setSearch("");

setStatus("");

setSource("");

setPriority("");

setDateFilter("");



};









return (



<div

className="
space-y-5
"

>







<LeadHeader


onAddLead={()=>setShowModal(true)}


search={search}


setSearch={setSearch}


/>











<LeadKPICards

stats={leadStats}

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









{

loading ?



<div

className="
bg-white
rounded-xl
p-10
text-center
text-gray-500
"

>

Loading leads...

</div>



:



<LeadTable
  leads={filteredLeads}
  onViewLead={handleViewLead}
  onConvertLead={handleConvertLead}
  onDeleteLead={handleDeleteLead}
  onEditLead={handleEditLead}
/>


}









<AddLeadModal


open={showModal}


onClose={()=>setShowModal(false)}


onSubmit={handleAddLead}


/>









{

editLead &&



<EditLeadModal


lead={editLead}


onClose={()=>setEditLead(null)}


onSuccess={()=>{


setEditLead(null);


loadLeads();


}}



/>


}









<LeadDetailsDrawer


lead={selectedLead}


onClose={()=>setSelectedLead(null)}



onEditLead={(lead)=>{


setSelectedLead(null);


setEditLead(lead);


}}




onDeleteLead={(id)=>{


setSelectedLead(null);
// ==============================
// VIEW LEAD
// ==============================

const handleViewLead = (lead) => {

  setSelectedLead(lead);

};


// ==============================
// EDIT LEAD
// ==============================

const handleEditLead = (lead) => {

  setEditLead(lead);

};


// ==============================
// DELETE LEAD
// ==============================

const handleDeleteLead = (id) => {

  deleteLead(id);

};


// ==============================
// CONVERT LEAD
// ==============================

const handleConvertLead = async (lead) => {

  const confirmConvert = window.confirm(
    `Convert "${lead.name}" into a customer?`
  );

  if (!confirmConvert) return;

  try {

    await convertLead(lead._id);

    toast.success("Lead converted successfully");

    loadLeads();

  } catch (error) {

    console.error(error);

    toast.error("Unable to convert lead");

  }

};


deleteLead(id);


}}



/>






</div>



);


}



export default Leads;