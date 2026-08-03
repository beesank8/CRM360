import {
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";


function CustomerTable({

  customers,

  onViewCustomer,

  onEditCustomer,

  onDeleteCustomer,

}) {



const getStatusColor = (status)=>{


switch(status){


case "Active":
return "bg-green-100 text-green-700";


case "Inactive":
return "bg-red-100 text-red-700";


default:
return "bg-gray-100 text-gray-700";


}


};





return (

<div

className="
bg-white
rounded-2xl
border
border-gray-200
shadow-sm
overflow-hidden
"

>



{/* Scroll Container */}

<div

className="
max-h-[500px]
overflow-y-auto
"

>



<table className="w-full">





<thead

className="
bg-gray-100
sticky
top-0
z-10
"

>


<tr>


<th className="
px-6
py-4
text-left
text-sm
font-semibold
text-gray-700
">

Customer

</th>



<th className="
px-4
py-4
text-left
text-sm
font-semibold
text-gray-700
">

Contact

</th>



<th className="
px-4
py-4
text-left
text-sm
font-semibold
text-gray-700
">

Company

</th>




<th className="
px-4
py-4
text-left
text-sm
font-semibold
text-gray-700
">

Status

</th>




<th className="
px-4
py-4
text-center
text-sm
font-semibold
text-gray-700
">

Actions

</th>


</tr>


</thead>








<tbody>


{

customers.length === 0 ?


<tr>


<td

colSpan="5"

className="
py-14
text-center
text-gray-400
"

>

No Customers Found

</td>


</tr>




:


customers.map((customer)=>(


<tr

key={customer._id}

className="
border-t
hover:bg-gray-50
transition
"

>







<td className="
px-6
py-5
">


<p

className="
font-semibold
text-gray-900
"

>

{customer.name}

</p>


<p

className="
text-sm
text-gray-500
"

>

{customer.address || "-"}

</p>


</td>








<td className="px-4">


<p className="
text-sm
text-gray-700
">

{customer.email}

</p>


<p className="
text-sm
text-gray-500
">

{customer.phone}

</p>


</td>








<td className="px-4">


<p className="
text-sm
font-medium
">

{customer.company || "-"}

</p>


</td>








<td className="px-4">


<span

className={`

px-3

py-1

rounded-full

text-xs

font-semibold

${getStatusColor(customer.status)}

`}

>

{customer.status || "Active"}

</span>


</td>








<td className="px-4">


<div

className="
flex
justify-center
gap-2
"

>



<button

onClick={()=>onViewCustomer(customer)}

className="
p-2
rounded-lg
bg-blue-50
text-blue-600
hover:bg-blue-100
"

title="View"

>

<Eye size={17}/>

</button>





<button

onClick={()=>onEditCustomer(customer)}

className="
p-2
rounded-lg
bg-yellow-50
text-yellow-600
hover:bg-yellow-100
"

title="Edit"

>

<Pencil size={17}/>

</button>







<button

onClick={()=>onDeleteCustomer(customer)}

className="
p-2
rounded-lg
bg-red-50
text-red-600
hover:bg-red-100
"

title="Delete"

>

<Trash2 size={17}/>

</button>



</div>


</td>








</tr>


))


}



</tbody>





</table>


</div>


</div>


);


}


export default CustomerTable;