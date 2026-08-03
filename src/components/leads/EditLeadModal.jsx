import LeadForm from "./LeadForm";


function EditLeadModal({

  open,

  lead,

  onClose,

  onSubmit,

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
w-[700px]
shadow-xl
"

>



<h2

className="
text-2xl
font-bold
mb-6
"

>

Edit Lead

</h2>








<LeadForm


defaultValues={lead}



onSubmit={(data)=>{


onSubmit(

lead._id,

data

);


}}



onClose={onClose}


/>





</div>


</div>


);


}


export default EditLeadModal;