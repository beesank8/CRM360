import {
  Eye,
  UserCheck,
  Pencil,
  Trash2
} from "lucide-react";


function LeadTable({

  leads,

  onViewLead,

  onConvertLead,

  onEditLead,

  onDeleteLead

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
)

return "Today";





if(
created.toDateString()
===
yesterday.toDateString()
)

return "Yesterday";





return created.toLocaleDateString(
"en-IN"
);



};









const statusColor=(status)=>{


switch(status){


case "New":

return "bg-green-100 text-green-700";



case "Contacted":

return "bg-yellow-100 text-yellow-700";



case "Interested":

return "bg-blue-100 text-blue-700";



case "Qualified":

return "bg-indigo-100 text-indigo-700";



case "Lost":

return "bg-red-100 text-red-700";



default:

return "bg-gray-100 text-gray-700";


}



};








const priorityColor=(priority)=>{


switch(priority){


case "High":

return "bg-red-100 text-red-700";



case "Medium":

return "bg-yellow-100 text-yellow-700";



case "Low":

return "bg-green-100 text-green-700";



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



<table

className="
w-full
text-sm
"

>



<thead

className="
bg-gray-100
"

>


<tr>


<th className="
px-4
py-4
text-left
font-semibold
text-gray-600
">

S.No

</th>



<th className="
px-4
py-4
text-left
font-semibold
text-gray-600
">

Lead

</th>




<th className="
px-4
py-4
text-left
font-semibold
text-gray-600
">

Contact

</th>





<th className="
px-4
py-4
text-left
font-semibold
text-gray-600
">

Created

</th>





<th className="
px-4
py-4
text-left
font-semibold
text-gray-600
">

Status

</th>





<th className="
px-4
py-4
text-left
font-semibold
text-gray-600
">

Priority

</th>





<th className="
px-4
py-4
text-left
font-semibold
text-gray-600
">

Revenue

</th>





<th className="
px-4
py-4
text-center
font-semibold
text-gray-600
">

Action

</th>



</tr>


</thead>









<tbody>



{


leads.length===0 ?



<tr>


<td

colSpan="8"

className="
py-12
text-center
text-gray-400
"

>

No Leads Found

</td>


</tr>






:





leads.map((lead,index)=>(



<tr

key={lead._id}

className="
border-t
hover:bg-blue-50/40
transition
"

>










<td

className="
px-4
py-5
font-semibold
text-gray-700
"

>

{index+1}

</td>









<td

className="
px-4
py-5
"

>


<p

className="
font-semibold
text-gray-800
"

>

{lead.name || "-"}

</p>



<p

className="
text-xs
text-gray-500
"

>

{lead.company || "-"}

</p>



</td>









<td

className="
px-4
py-5
"

>


<p>

{lead.email || "-"}

</p>



<p

className="
text-xs
text-gray-500
"

>

{lead.phone || "-"}

</p>


</td>









<td

className="
px-4
py-5
text-gray-600
"

>

{formatDate(lead.createdAt)}

</td>









<td

className="
px-4
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
${statusColor(lead.status)}
`}

>

{lead.status || "New"}

</span>


</td>









<td

className="
px-4
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
${priorityColor(lead.priority)}
`}

>

{lead.priority || "Medium"}

</span>


</td>









<td

className="
px-4
py-5
font-semibold
text-gray-800
"

>


₹
{

Number(
lead.expectedValue || 0
)

.toLocaleString("en-IN")

}



</td>









<td

className="
px-4
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

{/* VIEW */}

<button

onClick={()=>onViewLead(lead)}

className="
p-2
rounded-lg
bg-blue-50
text-blue-600
hover:bg-blue-100
transition
"

title="View Lead"

>

<Eye size={17}/>

</button>



{/* CONVERT */}

{

lead.status === "Converted"

?

<span

className="
px-2
py-2
rounded-lg
bg-green-100
text-green-700
text-xs
font-semibold
"

>

✓

</span>

:

<button

onClick={()=>onConvertLead(lead)}

className="
p-2
rounded-lg
bg-green-50
text-green-600
hover:bg-green-100
transition
"

title="Convert Lead"

>

<UserCheck size={17}/>

</button>

}



{/* DELETE */}

<button

onClick={()=>onDeleteLead(lead._id)}

className="
p-2
rounded-lg
bg-red-50
text-red-600
hover:bg-red-100
transition
"

title="Delete Lead"

>

<Trash2 size={17}/>

</button>



{/* EDIT */}

<button

onClick={()=>onEditLead(lead)}

className="
p-2
rounded-lg
bg-yellow-50
text-yellow-600
hover:bg-yellow-100
transition
"

title="Edit Lead"

>

<Pencil size={17}/>

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



export default LeadTable;