import {
  Pencil,
  Trash2,
  Eye,
} from "lucide-react";



function CustomerTable({

  customers,

  onEditCustomer,

  onDeleteCustomer,

  onViewCustomer,

}) {



const formatDate = (date)=>{


  if(!date)
    return "-";


  const created = new Date(date);

  const today = new Date();

  const yesterday = new Date();

  yesterday.setDate(today.getDate()-1);



  if(created.toDateString() === today.toDateString()){

    return "Today";

  }



  if(created.toDateString() === yesterday.toDateString()){

    return "Yesterday";

  }



  return `${String(created.getDate()).padStart(2,"0")}/${String(created.getMonth()+1).padStart(2,"0")}/${created.getFullYear()}`;


};





const getInitials=(name)=>{


if(!name)
return "CU";


return name
.split(" ")
.map(word=>word[0])
.join("")
.substring(0,2)
.toUpperCase();


};






const getStatusStyle=(status)=>{


switch(status){


case "Active":
return "bg-green-100 text-green-700";


case "Inactive":
return "bg-gray-100 text-gray-700";


case "Pending":
return "bg-yellow-100 text-yellow-700";


default:
return "bg-blue-100 text-blue-700";


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


<table

className="
w-full
"

>


<thead

className="
bg-slate-50
"

>


<tr>


<th className="
px-5
py-4
text-left
text-xs
font-semibold
text-gray-500
uppercase
">
#
</th>


<th className="
px-5
py-4
text-left
text-xs
font-semibold
text-gray-500
uppercase
">
Customer
</th>


<th className="
px-5
py-4
text-left
text-xs
font-semibold
text-gray-500
uppercase
">
Contact
</th>


<th className="
px-5
py-4
text-left
text-xs
font-semibold
text-gray-500
uppercase
">
Company
</th>


<th className="
px-5
py-4
text-left
text-xs
font-semibold
text-gray-500
uppercase
">
Created
</th>


<th className="
px-5
py-4
text-left
text-xs
font-semibold
text-gray-500
uppercase
">
Status
</th>


<th className="
px-5
py-4
text-center
text-xs
font-semibold
text-gray-500
uppercase
">
Action
</th>


</tr>


</thead>







<tbody>


{

customers.length===0 ?


<tr>

<td

colSpan="7"

className="
py-12
text-center
text-gray-400
"

>

No customers found

</td>


</tr>


:


customers.map((customer,index)=>(


<tr

key={customer._id}

className="
border-t
hover:bg-blue-50/40
transition
"

>



<td

className="
px-5
py-4
font-semibold
text-gray-500
"

>

{index+1}

</td>








<td

className="
px-5
py-4
"

>


<div className="
flex
items-center
gap-3
">


<div

className="
w-10
h-10
rounded-full
bg-blue-100
text-blue-600
flex
items-center
justify-center
font-bold
text-sm
"

>

{getInitials(customer.name)}

</div>


<div>


<p className="
font-semibold
text-gray-900
">

{customer.name || "-"}

</p>


<p className="
text-xs
text-gray-500
">

Customer

</p>


</div>


</div>


</td>









<td

className="
px-5
py-4
"

>


<p className="text-sm text-gray-700">

{customer.email || "-"}

</p>


<p className="text-xs text-gray-500">

{customer.phone || "-"}

</p>


</td>








<td

className="
px-5
py-4
text-gray-700
"

>

🏢 {customer.company || "-"}

</td>








<td

className="
px-5
py-4
text-sm
text-gray-600
"

>

{formatDate(customer.createdAt)}

</td>








<td

className="
px-5
py-4
"

>


<span

className={`
px-3
py-1
rounded-full
text-xs
font-semibold
${getStatusStyle(customer.status || "Active")}
`}

>

● {customer.status || "Active"}

</span>


</td>








<td

className="
px-5
py-4
"

>


<div className="
flex
justify-center
gap-2
">


<button

onClick={()=>onViewCustomer && onViewCustomer(customer)}

className="
p-2
rounded-lg
bg-blue-50
text-blue-600
hover:bg-blue-100
"

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

>

<Pencil size={17}/>

</button>





<button

onClick={()=>onDeleteCustomer(customer._id)}

className="
p-2
rounded-lg
bg-red-50
text-red-600
hover:bg-red-100
"

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

);


}


export default CustomerTable;