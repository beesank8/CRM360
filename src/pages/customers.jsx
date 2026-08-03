import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  Search,
  Plus
} from "lucide-react";


import api from "../services/api";


import AddCustomerModal from "../components/customers/AddCustomerModal";
import EditCustomerModal from "../components/customers/EditCustomerModal";
import CustomerTable from "../components/customers/CustomerTable";
import CustomerKPICards from "../components/customers/CustomerKPICards";
import CustomerDetailsDrawer from "../components/customers/CustomerDetailsDrawer";





function Customers() {



const [customers,setCustomers] = useState([]);

const [loading,setLoading] = useState(true);

const [search,setSearch] = useState("");

const [showAddModal,setShowAddModal] = useState(false);

const [editCustomer,setEditCustomer] = useState(null);

const [selectedCustomer,setSelectedCustomer] = useState(null);

const [customerStats,setCustomerStats] = useState(null);









useEffect(()=>{

fetchCustomers();

},[]);









const fetchCustomers = async()=>{


try{


setLoading(true);



const response =
await api.get("/customers");



const data =
response.data.customers || response.data || [];



setCustomers(data);






setCustomerStats({



totalCustomers:
data.length,





activeCustomers:

data.filter(

customer =>
(customer.status || "Active")
==="Active"

).length,






todayCustomers:

data.filter(customer=>{


const today =
new Date();


const created =
new Date(customer.createdAt);



return (

created.toDateString()
===
today.toDateString()

);


}).length,







companies:

new Set(

data.map(

customer=>customer.company

)

).size





});





}


catch(error){


console.log(error);


toast.error(
"Failed to load customers"
);


}



finally{


setLoading(false);


}



};













const deleteCustomer = async(id)=>{



const confirmDelete =

window.confirm(

"Are you sure you want to delete this customer?"

);



if(!confirmDelete)
return;





try{


await api.delete(

`/customers/${id}`

);




toast.success(

"Customer deleted successfully"

);




fetchCustomers();



}



catch(error){


console.log(error);


toast.error(
"Delete failed"
);



}



};















const filteredCustomers =

customers.filter(customer=>{


const keyword =
search.toLowerCase();



return (


customer.name
?.toLowerCase()
.includes(keyword)



||



customer.email
?.toLowerCase()
.includes(keyword)



||



customer.company
?.toLowerCase()
.includes(keyword)



||



customer.phone
?.includes(search)



);



});














return (



<div

className="
space-y-6
"

>






{/* HEADER */}



<div

className="
flex
justify-between
items-center
"

>



<div>


<h1

className="
text-3xl
font-bold
text-gray-800
"

>

Customers

</h1>



<p

className="
text-gray-500
mt-1
"

>

Manage your customer relationships

</p>


</div>








<button


onClick={()=>setShowAddModal(true)}


className="
flex
items-center
gap-2
bg-blue-600
text-white
px-5
py-3
rounded-xl
hover:bg-blue-700
transition
"

>


<Plus size={18}/>


Add Customer


</button>




</div>













{/* KPI CARDS */}



<CustomerKPICards

stats={customerStats}

/>












{/* SEARCH */}



<div

className="
bg-white
rounded-2xl
border
border-gray-200
shadow-sm
p-4
flex
items-center
gap-3
"

>


<Search

size={20}

className="
text-gray-400
"

/>




<input


type="text"


placeholder="Search customers..."


value={search}


onChange={(e)=>
setSearch(e.target.value)
}


className="
w-full
outline-none
text-gray-700
"

/>



</div>














{/* TABLE */}



{


loading ?



<div

className="
bg-white
rounded-2xl
p-10
text-center
text-gray-500
"

>

Loading customers...

</div>




:




<CustomerTable


customers={filteredCustomers}


onViewCustomer={setSelectedCustomer}


onEditCustomer={setEditCustomer}


onDeleteCustomer={deleteCustomer}


/>



}













{/* ADD CUSTOMER */}



{


showAddModal &&



<AddCustomerModal


onClose={()=>setShowAddModal(false)}


onSuccess={fetchCustomers}


/>


}













{/* EDIT CUSTOMER */}



{


editCustomer &&



<EditCustomerModal


customer={editCustomer}


onClose={()=>setEditCustomer(null)}


onSuccess={fetchCustomers}


/>


}













{/* CUSTOMER DETAILS DRAWER */}



<CustomerDetailsDrawer


customer={selectedCustomer}


onClose={()=>setSelectedCustomer(null)}




onEditCustomer={(customer)=>{


setSelectedCustomer(null);


setEditCustomer(customer);


}}





onDeleteCustomer={(id)=>{


setSelectedCustomer(null);


deleteCustomer(id);


}}


/>







</div>


);



}



export default Customers;