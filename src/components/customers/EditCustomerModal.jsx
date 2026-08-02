import { useState } from "react";
import toast from "react-hot-toast";
import { X } from "lucide-react";

import api from "../../services/api";


function EditCustomerModal({
  customer,
  onClose,
  onSuccess
}) {


  const [form, setForm] = useState({

    name: customer.name || "",
    email: customer.email || "",
    phone: customer.phone || "",
    company: customer.company || "",
    address: customer.address || "",
    status: customer.status || "Active",

  });


  const [loading, setLoading] = useState(false);





  const handleChange = (e) => {

    setForm({

      ...form,

      [e.target.name]: e.target.value,

    });

  };






  const handleSubmit = async (e) => {

    e.preventDefault();


    try {

      setLoading(true);


      await api.put(
        `/customers/${customer._id}`,
        form
      );


      toast.success(
        "Customer updated successfully"
      );


      onSuccess();

      onClose();


    } catch(error) {


      console.error(error);


      toast.error(
        "Failed to update customer"
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
        shadow-xl
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

          <h2 className="text-2xl font-bold">

            Edit Customer

          </h2>



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




          <input

            type="text"

            name="name"

            value={form.name}

            onChange={handleChange}

            placeholder="Customer Name"

            className="
            w-full
            border
            rounded-lg
            px-4
            py-3
            "

          />





          <input

            type="email"

            name="email"

            value={form.email}

            onChange={handleChange}

            placeholder="Email"

            className="
            w-full
            border
            rounded-lg
            px-4
            py-3
            "

          />






          <input

            type="text"

            name="phone"

            value={form.phone}

            onChange={handleChange}

            placeholder="Phone"

            className="
            w-full
            border
            rounded-lg
            px-4
            py-3
            "

          />







          <input

            type="text"

            name="company"

            value={form.company}

            onChange={handleChange}

            placeholder="Company"

            className="
            w-full
            border
            rounded-lg
            px-4
            py-3
            "

          />







          <textarea

            name="address"

            value={form.address}

            onChange={handleChange}

            placeholder="Address"

            rows="3"

            className="
            w-full
            border
            rounded-lg
            px-4
            py-3
            "

          />







          <select

            name="status"

            value={form.status}

            onChange={handleChange}

            className="
            w-full
            border
            rounded-lg
            px-4
            py-3
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
              py-2
              border
              rounded-lg
              hover:bg-gray-100
              "

            >

              Cancel

            </button>





            <button

              type="submit"

              disabled={loading}

              className="
              px-5
              py-2
              bg-blue-600
              text-white
              rounded-lg
              hover:bg-blue-700
              disabled:opacity-50
              "

            >

              {
                loading
                ?
                "Updating..."
                :
                "Update Customer"
              }


            </button>



          </div>




        </form>



      </div>


    </div>


  );

}


export default EditCustomerModal;