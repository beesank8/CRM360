import {
  X,
  Pencil,
  Trash2,
  Mail,
  Phone,
  Building2,
  Globe,
  MapPin,
  BadgeDollarSign,
  Target,
  StickyNote,
  User,
  Calendar,
  Users
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";


function LeadDetailsDrawer({

  lead,

  onClose,

  onEditLead,

  onDeleteLead

}) {


if(!lead)
return null;




const initials =
lead.name
?
lead.name
.split(" ")
.map(x=>x[0])
.join("")
.slice(0,2)
.toUpperCase()

:

"LD";




const formatDate=(date)=>{

if(!date)
return "-";

return new Date(date)
.toLocaleDateString(
"en-IN",
{
day:"2-digit",
month:"short",
year:"numeric"
}
);

};





const statusColor={

New:"bg-green-100 text-green-700",

Contacted:"bg-yellow-100 text-yellow-700",

Interested:"bg-blue-100 text-blue-700",

Qualified:"bg-purple-100 text-purple-700",

Won:"bg-emerald-100 text-emerald-700",

Lost:"bg-red-100 text-red-700"

};



const priorityColor={

High:"bg-red-100 text-red-700",

Medium:"bg-yellow-100 text-yellow-700",

Low:"bg-green-100 text-green-700"

};







return (

<AnimatePresence>


<div

className="
fixed
inset-0
z-50
"

>



<div

onClick={onClose}

className="
absolute
inset-0
bg-black/40
"

/>







<motion.div

initial={{
x:"100%"
}}

animate={{
x:0
}}

exit={{
x:"100%"
}}

transition={{
duration:.25
}}

className="
absolute
right-0
top-0
h-screen
w-[480px]
bg-white
shadow-2xl
flex
flex-col
"

>








{/* HEADER */}


<div

className="
p-5
border-b
"

>


<div

className="
flex
justify-between
"

>


<div

className="
flex
gap-3
items-center
"

>


<div

className="
w-14
h-14
rounded-full
bg-blue-100
text-blue-600
flex
items-center
justify-center
font-bold
text-lg
"

>

{initials}

</div>





<div>


<h2 className="
font-bold
text-lg
">

{lead.name}

</h2>


<p className="
text-sm
text-gray-500
">

{lead.designation || "Decision Maker"}

</p>


<p className="
text-sm
font-medium
">

{lead.company}

</p>


<div className="
flex
gap-2
mt-2
">


<span

className={`
px-3
py-1
rounded-full
text-xs
font-semibold
${statusColor[lead.status] || "bg-gray-100"}
`}

>

{lead.status || "New"}

</span>



<span

className={`
px-3
py-1
rounded-full
text-xs
font-semibold
${priorityColor[lead.priority] || "bg-gray-100"}
`}

>

🔥 {lead.priority || "Medium"}

</span>



</div>



</div>



</div>





<button

onClick={onClose}

className="
p-2
rounded-lg
hover:bg-gray-100
"

>

<X size={20}/>

</button>



</div>


</div>









{/* CONTENT */}



<div

className="
flex-1
p-5
space-y-3
overflow-hidden
"

>







<div

className="
grid
grid-cols-2
gap-3
"

>







{/* CONTACT */}


<Card

title="Contact"
icon={<User size={16}/>}

>

<Item icon={<Mail/>} value={lead.email}/>

<Item icon={<Phone/>} value={lead.phone}/>

<Item icon={<MapPin/>} value={lead.location}/>


</Card>









{/* LEAD INFO */}



<Card

title="Lead Information"
icon={<Users size={16}/>}

>


<Tag

label="Source"

value={lead.source}

/>


<Tag

label="Industry"

value={lead.industry}

/>


<Tag

label="Created"

value={formatDate(lead.createdAt)}

/>



</Card>









{/* OPPORTUNITY */}



<Card

title="Opportunity"
icon={<BadgeDollarSign size={16}/>}

highlight

>


<p className="
text-2xl
font-bold
text-green-600
">

₹
{Number(
lead.expectedValue||0
)
.toLocaleString("en-IN")}

</p>


<p className="
text-xs
text-gray-500
">

Expected Revenue

</p>




<div className="
mt-3
flex
items-center
gap-2
text-blue-600
font-semibold
">


<Target size={16}/>

{lead.probability || 0}%


</div>



</Card>









{/* NOTES */}



<Card

title="Notes"
icon={<StickyNote size={16}/>}

>


<p className="
text-sm
text-gray-600
line-clamp-4
">

{lead.notes || "No notes added"}

</p>


</Card>






</div>









{/* LOWER DETAILS */}



<div

className="
bg-gray-50
rounded-xl
p-3
grid
grid-cols-2
gap-3
text-sm
"

>


<div>

<p className="
text-gray-400
text-xs
">

Website

</p>

<p className="font-medium">

{lead.website || "-"}

</p>

</div>



<div>

<p className="
text-gray-400
text-xs
">

Owner

</p>

<p className="font-medium">

{lead.leadOwner || "-"}

</p>

</div>




<div>

<p className="
text-gray-400
text-xs
">

Assigned

</p>

<p className="font-medium">

{lead.assignedTo || "-"}

</p>

</div>




<div>

<p className="
text-gray-400
text-xs
">

Follow Up

</p>

<p className="font-medium">

{formatDate(lead.followUpDate)}

</p>

</div>



</div>





</div>









{/* FOOTER */}


<div

className="
border-t
p-4
flex
gap-3
"

>


<button

onClick={()=>onEditLead(lead)}

className="
flex-1
bg-blue-600
text-white
rounded-xl
py-2.5
flex
justify-center
gap-2
font-medium
"

>

<Pencil size={17}/>

Edit

</button>





<button

onClick={()=>onDeleteLead(lead._id)}

className="
flex-1
bg-red-50
text-red-600
rounded-xl
py-2.5
flex
justify-center
gap-2
font-medium
"

>

<Trash2 size={17}/>

Delete

</button>



</div>








</motion.div>


</div>


</AnimatePresence>

);

}








function Card({

title,

icon,

children,

highlight

}){


return (

<div

className={`
rounded-xl
p-3
border
${highlight
?
"bg-green-50 border-green-200"
:
"bg-gray-50 border-gray-100"
}
`}

>


<div className="
flex
items-center
gap-2
font-semibold
text-sm
mb-2
">

{icon}

{title}

</div>


{children}


</div>


);

}






function Item({

icon,

value

}){


return (

<div className="
flex
items-center
gap-2
text-xs
text-gray-600
mb-2
">

{icon}

{value || "-"}

</div>

);

}






function Tag({

label,

value

}){


return (

<div className="
text-xs
mb-2
">

<p className="
text-gray-400
">

{label}

</p>

<p className="
font-medium
">

{value || "-"}

</p>


</div>

);

}





export default LeadDetailsDrawer;