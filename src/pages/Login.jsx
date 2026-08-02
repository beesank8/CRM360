import { useState } from "react";
import { loginUser } from "../api/authApi";
import { useNavigate } from "react-router-dom";

import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Users,
  BarChart3,
  ShieldCheck,
  CheckCircle
} from "lucide-react";


function Login() {

  const navigate = useNavigate();


  const [formData,setFormData] = useState({
    email:"",
    password:""
  });


  const [error,setError] = useState("");
  const [loading,setLoading] = useState(false);
  const [showPassword,setShowPassword] = useState(false);



  const handleChange=(e)=>{

    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    });

  };




  const handleSubmit=async(e)=>{

    e.preventDefault();

    try{

      setLoading(true);
      setError("");

      const response = await loginUser(formData);


      localStorage.setItem(
        "token",
        response.data.token
      );


      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );


      navigate("/dashboard");


    }
    catch(error){

      setError(
        error.response?.data?.message ||
        "Login failed"
      );

    }
    finally{

      setLoading(false);

    }

  };





return (

<div
className="
h-screen
overflow-hidden
bg-gradient-to-br
from-blue-50
via-white
to-indigo-50
relative
px-8
"
>



{/* CRM360 LOGO */}

<div
className="
absolute
top-5
left-1/2
-translate-x-1/2
flex
items-center
gap-3
"
>


<div
className="
w-12
h-12
bg-blue-600
rounded-xl
text-white
flex
items-center
justify-center
text-2xl
font-bold
shadow-lg
"
>
C
</div>



<div>

<h1
className="
text-3xl
font-bold
text-blue-600
tracking-tight
"
>
CRM360
</h1>


<p
className="
text-xs
text-gray-500
text-center
"
>
Smart CRM Solutions
</p>


</div>


</div>








<div
className="
max-w-6xl
h-full
mx-auto
grid
lg:grid-cols-2
gap-12
items-center
pt-12
"
>






{/* LEFT BRANDING */}


<div
className="
hidden
lg:block
"
>


<div
className="
inline-flex
items-center
gap-2
bg-blue-100
text-blue-700
px-3
py-1.5
rounded-full
text-sm
mb-4
"
>

<CheckCircle size={16}/>

Trusted CRM Platform

</div>




<h2
className="
text-5xl
font-bold
text-gray-900
leading-tight
"
>

Smart CRM.
<br/>
Smarter Business Growth.

</h2>





<p
className="
mt-4
text-gray-600
max-w-lg
leading-relaxed
"
>

CRM360 is a powerful

<span className="block mt-2">

<strong className="text-gray-800">

Customer Relationship Management

</strong>

</span>


platform designed to help businesses manage
customers, track leads, analyze performance,
and build stronger relationships through one
smart and secure dashboard.

</p>







<div
className="
mt-6
space-y-4
"
>



<div
className="
flex
items-center
gap-4
"
>

<div
className="
bg-blue-600
text-white
p-3
rounded-xl
"
>

<Users size={20}/>

</div>


<div>

<h3 className="font-semibold text-gray-800">

Customer Management

</h3>

<p className="text-sm text-gray-500">

Organize customer information easily

</p>

</div>


</div>






<div
className="
flex
items-center
gap-4
"
>

<div
className="
bg-indigo-600
text-white
p-3
rounded-xl
"
>

<BarChart3 size={20}/>

</div>


<div>

<h3 className="font-semibold text-gray-800">

Business Analytics

</h3>

<p className="text-sm text-gray-500">

Monitor growth and performance

</p>

</div>


</div>






<div
className="
flex
items-center
gap-4
"
>

<div
className="
bg-green-600
text-white
p-3
rounded-xl
"
>

<ShieldCheck size={20}/>

</div>


<div>

<h3 className="font-semibold text-gray-800">

Secure Workspace

</h3>

<p className="text-sm text-gray-500">

Protected business environment

</p>

</div>


</div>



</div>


</div>









{/* LOGIN CARD */}



<div
className="
bg-white
rounded-3xl
shadow-xl
border
border-gray-100
p-8
max-w-md
w-full
mx-auto
"
>



<h2
className="
text-3xl
font-bold
text-gray-900
"
>

Login to CRM360

</h2>




<p
className="
text-gray-500
mt-2
mb-6
"
>

Access your CRM360 workspace and manage your business smarter.

</p>






{

error &&

<div
className="
bg-red-50
border
border-red-200
text-red-600
rounded-xl
p-3
text-sm
mb-4
"
>

{error}

</div>

}







<form
onSubmit={handleSubmit}
className="space-y-5"
>





<div>

<label className="text-sm font-medium text-gray-700">

Email Address

</label>


<div className="relative mt-2">


<Mail
size={19}
className="
absolute
left-3
top-3.5
text-gray-400
"
/>



<input

type="email"

name="email"

value={formData.email}

onChange={handleChange}

placeholder="name@company.com"

className="
w-full
border
rounded-xl
py-3
pl-11
outline-none
focus:ring-2
focus:ring-blue-500
"

required

/>

</div>

</div>







<div>


<label className="text-sm font-medium text-gray-700">

Password

</label>


<div className="relative mt-2">


<Lock
size={19}
className="
absolute
left-3
top-3.5
text-gray-400
"
/>



<input

type={
showPassword
?
"text"
:
"password"
}

name="password"

value={formData.password}

onChange={handleChange}

placeholder="Enter your password"

className="
w-full
border
rounded-xl
py-3
pl-11
pr-11
outline-none
focus:ring-2
focus:ring-blue-500
"

required

/>




<button

type="button"

onClick={()=>setShowPassword(!showPassword)}

className="
absolute
right-3
top-3.5
text-gray-400
"

>

{
showPassword
?
<EyeOff size={19}/>
:
<Eye size={19}/>
}


</button>


</div>


</div>








<button

disabled={loading}

className="
w-full
bg-blue-600
hover:bg-blue-700
text-white
py-3
rounded-xl
font-semibold
flex
items-center
justify-center
gap-2
shadow-md
transition
"

>


{

loading

?

"Signing in..."

:

<>
Login
<ArrowRight size={18}/>
</>

}


</button>





</form>






<div
className="
mt-6
flex
justify-center
items-center
gap-2
text-xs
text-gray-500
"
>

<ShieldCheck size={14}/>

Secure Authentication

</div>





<p
className="
text-center
text-xs
text-gray-400
mt-4
"
>

© 2026 CRM360 • Professional CRM Platform

</p>




</div>





</div>


</div>


);

}


export default Login;