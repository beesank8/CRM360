import { useState } from "react";
import toast from "react-hot-toast";
import {
  User,
  Mail,
  Phone,
  Building2,
  MapPin,
  X
} from "lucide-react";

import api from "../../services/api";


function AddCustomerModal({ onClose, onSuccess }) {


  const [loading, setLoading] = useState(false);


  const [form, setForm] = useState({

    name: "",
    email: "",
    phone: "",
    company: "",
    address: "",
    status: "Active",

  });





  const handleChange = (e) => {

    setForm({

      ...form,

      [e.target.name]: e.target.value,

    });

  };





  const handleSubmit = async (e) => {

    e.preventDefault();



    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.company
    ) {

      toast.error(
        "Please fill all required fields"
      );

      return;

    }



    try {


      setLoading(true);



      await api.post(
        "/customers",
        form
      );



      toast.success(
        "Customer added successfully"
      );



      onSuccess();



      onClose();



    } catch(error) {


      console.error(error);



      toast.error(
        "Failed to add customer"
      );



    } finally {


      setLoading(false);


    }

  };





  return (

    <div
      className="
      fixed
      inset-0
      bg-black/40
      backdrop-blur-sm
      flex
      items-center
      justify-center
      z-50
      "
    >


      <div
        className="
        bg-white
        w-full
        max-w-lg
        rounded-2xl
        shadow-2xl
        p-6
        "
      >



        {/* Header */}

        <div
          className="
          flex
          justify-between
          items-center
          mb-6
          "
        >


          <div>

            <h2
              className="
              text-2xl
              font-bold
              text-gray-800
              "
            >

              Add Customer

            </h2>


            <p className="text-gray-500 text-sm">

              Create new customer profile

            </p>


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







        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >





          <div className="relative">


            <User
              size={18}
              className="
              absolute
              left-3
              top-3.5
              text-gray-400
              "
            />


            <input

              type="text"

              name="name"

              placeholder="Full Name *"

              value={form.name}

              onChange={handleChange}

              className="
              w-full
              border
              rounded-xl
              px-4
              py-3
              pl-10
              outline-none
              focus:ring-2
              focus:ring-blue-500
              "

            />


          </div>







          <div className="relative">


            <Mail
              size={18}
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

              placeholder="Email *"

              value={form.email}

              onChange={handleChange}

              className="
              w-full
              border
              rounded-xl
              px-4
              py-3
              pl-10
              outline-none
              focus:ring-2
              focus:ring-blue-500
              "

            />


          </div>








          <div className="relative">


            <Phone
              size={18}
              className="
              absolute
              left-3
              top-3.5
              text-gray-400
              "
            />


            <input

              type="text"

              name="phone"

              placeholder="Phone Number *"

              value={form.phone}

              onChange={handleChange}

              className="
              w-full
              border
              rounded-xl
              px-4
              py-3
              pl-10
              outline-none
              focus:ring-2
              focus:ring-blue-500
              "

            />


          </div>








          <div className="relative">


            <Building2
              size={18}
              className="
              absolute
              left-3
              top-3.5
              text-gray-400
              "
            />


            <input

              type="text"

              name="company"

              placeholder="Company *"

              value={form.company}

              onChange={handleChange}

              className="
              w-full
              border
              rounded-xl
              px-4
              py-3
              pl-10
              outline-none
              focus:ring-2
              focus:ring-blue-500
              "

            />


          </div>







          <div className="relative">


            <MapPin
              size={18}
              className="
              absolute
              left-3
              top-3.5
              text-gray-400
              "
            />


            <textarea

              name="address"

              placeholder="Address"

              value={form.address}

              onChange={handleChange}

              rows="3"

              className="
              w-full
              border
              rounded-xl
              px-4
              py-3
              pl-10
              outline-none
              focus:ring-2
              focus:ring-blue-500
              "

            />


          </div>







          <select

            name="status"

            value={form.status}

            onChange={handleChange}

            className="
            w-full
            border
            rounded-xl
            px-4
            py-3
            outline-none
            focus:ring-2
            focus:ring-blue-500
            "

          >

            <option value="Active">
              Active
            </option>


            <option value="Inactive">
              Inactive
            </option>


          </select>









          <div
            className="
            flex
            justify-end
            gap-3
            pt-4
            "
          >



            <button

              type="button"

              onClick={onClose}

              className="
              px-5
              py-3
              border
              rounded-xl
              hover:bg-gray-100
              "

            >

              Cancel

            </button>





            <button

              type="submit"

              disabled={loading}

              className="
              px-6
              py-3
              bg-blue-600
              text-white
              rounded-xl
              hover:bg-blue-700
              disabled:opacity-50
              "

            >

              {
                loading
                ? "Saving..."
                : "Save Customer"
              }


            </button>



          </div>





        </form>



      </div>


    </div>


  );

}


export default AddCustomerModal;