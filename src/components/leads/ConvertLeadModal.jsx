function ConvertLeadModal({

  open,

  lead,

  onClose,

  onConfirm,

}) {



if(!open || !lead)

return null;





return (

<div

className="
fixed
inset-0
bg-black/40
flex
items-center
justify-center
z-50
"

>




<div

className="
bg-white
rounded-2xl
p-6
w-[450px]
shadow-xl
"

>




<h2

className="
text-xl
font-bold
mb-4
"

>

Convert Lead?

</h2>








<p

className="
text-gray-600
mb-6
"

>

Are you sure you want to convert

<b>

{" "}

{lead.name}

</b>

into a customer?

</p>









<div

className="
flex
justify-end
gap-3
"

>





<button

onClick={onClose}

className="
px-5
py-2
border
rounded-xl
hover:bg-gray-100
"

>

Cancel

</button>









<button

onClick={()=>{


onConfirm();


}}

className="
px-5
py-2
bg-green-600
text-white
rounded-xl
hover:bg-green-700
"

>

Convert

</button>






</div>







</div>



</div>


);


}



export default ConvertLeadModal;