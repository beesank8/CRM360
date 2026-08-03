import {
  Eye,
  Pencil,
  Trash2
} from "lucide-react";




function CustomerTable({

  customers,

  onViewCustomer,

  onEditCustomer,

  onDeleteCustomer

}) {




const formatDate=(date)=>{


if(!date)
return "-";



const created =
new Date(date);


const today =
new Date();



const yesterday =
new Date();


yesterday.setDate(
today.getDate()-1
);





if(
created.toDateString()
===
today.toDateString()
){

return "Today";

}





if(
created.toDateString()
===
yesterday.toDateString()
){

return "Yesterday";

}





return created.toLocaleDateString(
"en-IN"
);



};







const statusColor=(status)=>{


switch(status){


case "Active":

return "bg-green-100 text-green-700";



case "Inactive":

return "bg-red-100 text-red-700";



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
bg-gray-100
"

>


<tr>



<th className="
px-5
py-4
text-left
text-sm
font-semibold
text-gray-600
">

S.No

</th>



<th className="
px-5
py-4
text-left
text-sm
font-semibold
text-gray-600
">

Customer

</th>




<th className="
px-5
py-4
text-left
text-sm
font-semibold
text-gray-600
">

Contact

</th>





<th className="
px-5
py-4
text-left
text-sm
font-semibold
text-gray-600
">

Company

</th>





<th className="
px-5
py-4
text-left
text-sm
font-semibold
text-gray-600
">

Created

</th>





<th className="
px-5
py-4
text-left
text-sm
font-semibold
text-gray-600
">

Status

</th>





<th className="
px-5
py-4
text-center
text-sm
font-semibold
text-gray-600
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

No Customers Found

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
py-5
font-semibold
text-gray-700
"

>

{index+1}

</td>









<td

className="
px-5
py-5
"

>


<h3

className="
font-semibold
text-gray-800
"

>

{customer.name || "-"}

</h3>



<p

className="
text-sm
text-gray-500
"

>

{customer.email}

</p>


</td>









<td

className="
px-5
py-5
"

>


<p>

{customer.phone || "-"}

</p>



</td>









<td

className="
px-5
py-5
text-gray-700
"

>

{customer.company || "-"}

</td>









<td

className="
px-5
py-5
text-gray-600
"

>

{formatDate(customer.createdAt)}

</td>









<td

className="
px-5
py-5
"

>


<span

className={`
px-3
py-1
rounded-full
text-xs
font-semibold
${statusColor(customer.status)}
`}

>

{customer.status || "Active"}

</span>


</td>









<td

className="
px-5
py-5
"

>


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
transition
"

title="View Customer"

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
transition
"

title="Edit Customer"

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
transition
"

title="Delete Customer"

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