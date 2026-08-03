import {
  Users,
  UserPlus,
  BadgeCheck,
  XCircle,
  Percent
} from "lucide-react";



function LeadKPICards({ leads = [] }) {



  // LIVE LEAD STATS


  const totalLeads =
    leads.length;



  const newLeads =
    leads.filter(
      (lead)=>
        lead.status?.toLowerCase()
        ===
        "new"
    ).length;




  const interestedLeads =
    leads.filter(
      (lead)=>
        lead.status?.toLowerCase()
        ===
        "interested"
    ).length;





  const qualifiedLeads =
    leads.filter(
      (lead)=>
        lead.status?.toLowerCase()
        ===
        "qualified"
    ).length;





  const lostLeads =
    leads.filter(
      (lead)=>
        lead.status?.toLowerCase()
        ===
        "lost"
    ).length;





  const convertedLeads =
    leads.filter(
      (lead)=>
        lead.status?.toLowerCase()
        ===
        "converted"
    ).length;






  const conversion =

    totalLeads > 0

    ?

    Math.round(
      (convertedLeads / totalLeads) * 100
    )

    :

    0;







  const cards = [



    {
      title:"Total Leads",

      value:totalLeads,

      icon:
      <Users size={22}/>,

      color:
      "bg-blue-100 text-blue-600"

    },





    {
      title:"New Leads",

      value:newLeads,

      icon:
      <UserPlus size={22}/>,

      color:
      "bg-purple-100 text-purple-600"

    },





    {
      title:"Interested",

      value:interestedLeads,

      icon:
      <BadgeCheck size={22}/>,

      color:
      "bg-yellow-100 text-yellow-600"

    },






    {
      title:"Qualified",

      value:qualifiedLeads,

      icon:
      <BadgeCheck size={22}/>,

      color:
      "bg-indigo-100 text-indigo-600"

    },







    {
      title:"Lost",

      value:lostLeads,

      icon:
      <XCircle size={22}/>,

      color:
      "bg-red-100 text-red-600"

    },







    {
      title:"Conversion",

      value:
      `${conversion}%`,

      icon:
      <Percent size={22}/>,

      color:
      "bg-green-100 text-green-600"

    }



  ];









  return (


    <div

      className="
      grid
      grid-cols-6
      gap-4
      "

    >



      {

        cards.map((card)=>(



          <div

            key={card.title}

            className="
            bg-white
            rounded-xl
            border
            border-gray-200
            shadow-sm
            p-5
            hover:shadow-md
            transition
            "

          >




            <div

              className="
              flex
              items-center
              justify-between
              "

            >





              <div>


                <p

                  className="
                  text-sm
                  text-gray-500
                  "

                >

                  {card.title}

                </p>





                <h2

                  className="
                  text-2xl
                  font-bold
                  mt-2
                  text-gray-800
                  "

                >

                  {card.value}

                </h2>




              </div>








              <div

                className={`
                w-12
                h-12
                rounded-xl
                flex
                items-center
                justify-center
                ${card.color}
                `}

              >

                {card.icon}


              </div>





            </div>





          </div>




        ))

      }





    </div>


  );


}



export default LeadKPICards;