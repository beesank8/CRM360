import {
  X,
  Pencil,
  Trash2,
  Mail,
  Phone,
  Building2,
  CalendarDays,
  User
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";



function CustomerDetailsDrawer({

  customer,

  onClose,

  onEditCustomer,

  onDeleteCustomer

}) {



if(!customer)
return null;




const formatDate=(date)=>{


if(!date)
return "-";


const created=new Date(date);


const today=new Date();


if(
created.toDateString()
===
today.toDateString()
){

return "Today";

}



const yesterday=new Date();

yesterday.setDate(
today.getDate()-1
);



if(
created.toDateString()
===
yesterday.toDateString()
){

return "Yesterday";

}



return created.toLocaleDateString();

};






const initials = customer.name

?.split(" ")

.map(word=>word[0])

.join("")

.substring(0,2)

.toUpperCase();






return (

<AnimatePresence>


<motion.div

className="
fixed
inset-0
bg-black/40
z-50
flex
justify-end
"

initial={{
opacity:0
}}

animate={{
opacity:1
}}

exit={{
opacity:0
}}

>


<motion.div


className="
w-full
max-w-md
bg-white
h-full
shadow-2xl
p-6
overflow-y-auto
"


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
duration:0.3
}}

>







{/* HEADER */}


<div

className="
flex
justify-between
items-start
border-b
pb-5
"

>


<div

className="
flex
gap-4
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
text-xl
"

>

{initials || "CU"}

</div>




<div>


<h2

className="
text-xl
font-bold
text-gray-800
"

>

{customer.name}

</h2>


<p

className="
text-sm
text-gray-500
"

>

{customer.company}

</p>


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

<X size={22}/>

</button>



</div>









{/* STATUS */}


<div

className="
mt-5
"

>


<span

className="
px-3
py-1
rounded-full
text-sm
font-semibold
bg-green-100
text-green-700
"

>

● {customer.status || "Active"}

</span>


</div>











{/* DETAILS */}


<div

className="
mt-6
space-y-4
"

>



<div

className="
bg-gray-50
rounded-xl
p-4
"

>


<div className="
flex
items-center
gap-3
"

>


<Mail
size={18}
className="
text-blue-600
"
/>


<div>

<p className="
text-xs
text-gray-500
">

Email

</p>


<p className="
font-medium
">

{customer.email || "-"}

</p>


</div>


</div>


</div>








<div

className="
bg-gray-50
rounded-xl
p-4
"

>


<div className="
flex
items-center
gap-3
"

>


<Phone
size={18}
className="
text-green-600
"
/>


<div>

<p className="
text-xs
text-gray-500
">

Phone

</p>


<p className="
font-medium
">

{customer.phone || "-"}

</p>


</div>


</div>


</div>









<div

className="
bg-gray-50
rounded-xl
p-4
"

>


<div className="
flex
items-center
gap-3
"

>


<Building2
size={18}
className="
text-purple-600
"
/>


<div>

<p className="
text-xs
text-gray-500
">

Company

</p>


<p className="
font-medium
">

{customer.company || "-"}

</p>


</div>


</div>


</div>









<div

className="
bg-gray-50
rounded-xl
p-4
"

>


<div className="
flex
items-center
gap-3
"

>


<CalendarDays
size={18}
className="
text-orange-600
"
/>


<div>

<p className="
text-xs
text-gray-500
">

Created

</p>


<p className="
font-medium
">

{formatDate(customer.createdAt)}

</p>


</div>


</div>


</div>






</div>









{/* ACTIONS */}


<div

className="
mt-8
flex
gap-3
"

>


<button

onClick={()=>onEditCustomer(customer)}

className="
flex-1
flex
items-center
justify-center
gap-2
bg-yellow-50
text-yellow-700
py-3
rounded-xl
font-semibold
hover:bg-yellow-100
"

>

<Pencil size={18}/>

Edit

</button>






<button

onClick={()=>onDeleteCustomer(customer._id)}

className="
flex-1
flex
items-center
justify-center
gap-2
bg-red-50
text-red-600
py-3
rounded-xl
font-semibold
hover:bg-red-100
"

>

<Trash2 size={18}/>

Delete

</button>



</div>






</motion.div>


</motion.div>


</AnimatePresence>


);


}



export default CustomerDetailsDrawer;