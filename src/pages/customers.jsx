import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  Search,
  Plus,
  Edit,
  Trash2
} from "lucide-react";

import api from "../services/api";

import AddCustomerModal from "../components/customers/AddCustomerModal";
import EditCustomerModal from "../components/customers/EditCustomerModal";



function Customers() {


  const [customers, setCustomers] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [showAddModal, setShowAddModal] = useState(false);

  const [editCustomer, setEditCustomer] = useState(null);





  useEffect(()=>{

    fetchCustomers();

  }, []);





  const fetchCustomers = async()=>{


    try{


      setLoading(true);


      const res = await api.get("/customers");


      setCustomers(
        res.data.customers || []
      );


    }
    catch(error){


      console.error(error);


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


      console.error(error);


      toast.error(
        "Delete failed"
      );


    }


  };








  const filteredCustomers =
    customers.filter((customer)=>{


      const text =
        search.toLowerCase();



      return (

        customer.name
        ?.toLowerCase()
        .includes(text)



        ||

        customer.email
        ?.toLowerCase()
        .includes(text)



        ||

        customer.company
        ?.toLowerCase()
        .includes(text)



        ||

        customer.phone
        ?.includes(search)


      );


    });







return (

<div className="space-y-6">





{/* Header */}

<div className="
flex
justify-between
items-center
">


<div>


<h1 className="
text-3xl
font-bold
text-gray-800
">

Customers

</h1>


<p className="text-gray-500">

Manage your customers

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
"

>


<Plus size={18}/>

Add Customer


</button>



</div>









{/* Search */}

<div className="
bg-white
rounded-xl
shadow
p-4
flex
items-center
gap-3
">


<Search
size={20}
className="text-gray-400"
/>



<input

type="text"

placeholder="Search customers..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

className="
w-full
outline-none
"

/>


</div>









{/* Table */}


<div className="
bg-white
rounded-xl
shadow
overflow-hidden
">


<table className="w-full">



<thead className="bg-gray-100">


<tr>


<th className="px-6 py-4 text-left">
Name
</th>


<th className="px-6 py-4 text-left">
Email
</th>


<th className="px-6 py-4 text-left">
Company
</th>


<th className="px-6 py-4 text-left">
Phone
</th>


<th className="px-6 py-4 text-left">
Status
</th>


<th className="px-6 py-4 text-center">
Action
</th>


</tr>


</thead>







<tbody>


{

loading ? (


<tr>

<td
colSpan="6"
className="
text-center
py-10
"
>

Loading...

</td>

</tr>


)

:

filteredCustomers.length===0 ? (


<tr>

<td

colSpan="6"

className="
text-center
py-10
text-gray-500
"

>

No customers found

</td>


</tr>


)


:

filteredCustomers.map((customer)=>(



<tr

key={customer._id}

className="
border-t
hover:bg-gray-50
"

>



<td className="
px-6
py-4
font-semibold
">

{customer.name}

</td>





<td className="px-6 py-4">

{customer.email}

</td>





<td className="px-6 py-4">

{customer.company}

</td>





<td className="px-6 py-4">

{customer.phone}

</td>





<td className="px-6 py-4">


<span

className="
bg-green-100
text-green-700
px-3
py-1
rounded-full
text-sm
"

>

{customer.status}

</span>


</td>







<td className="
px-6
py-4
text-center
">


<button

onClick={()=>
setEditCustomer(customer)
}

className="
text-blue-600
mr-4
hover:scale-110
"

>


<Edit size={18}/>


</button>






<button

onClick={()=>
deleteCustomer(customer._id)
}

className="
text-red-600
hover:scale-110
"

>


<Trash2 size={18}/>


</button>



</td>




</tr>



))


}



</tbody>


</table>


</div>









{/* Add Modal */}

{

showAddModal &&

<AddCustomerModal

onClose={()=>
setShowAddModal(false)
}

onSuccess={fetchCustomers}

/>

}







{/* Edit Modal */}

{

editCustomer &&

<EditCustomerModal

customer={editCustomer}

onClose={()=>
setEditCustomer(null)
}

onSuccess={fetchCustomers}

/>

}




</div>

);


}


export default Customers;