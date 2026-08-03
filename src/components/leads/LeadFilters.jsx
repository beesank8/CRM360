function LeadFilters({
  status,
  setStatus,
  source,
  setSource,
  priority,
  setPriority,
  dateFilter,
  setDateFilter,
  clearFilters,
}) {


  return (

    <div
      className="
      bg-white
      rounded-xl
      border
      border-gray-200
      p-4
      flex
      gap-4
      flex-wrap
      items-center
      "
    >


      {/* STATUS FILTER */}

      <select
        value={status}
        onChange={(e)=>setStatus(e.target.value)}
        className="
        border
        rounded-lg
        px-3
        py-2
        "
      >

        <option value="">
          All Status
        </option>

        <option value="New">
          New
        </option>

        <option value="Contacted">
          Contacted
        </option>

        <option value="Interested">
          Interested
        </option>

        <option value="Qualified">
          Qualified
        </option>

        <option value="Negotiation">
          Negotiation
        </option>

        <option value="Won">
          Won
        </option>

        <option value="Lost">
          Lost
        </option>


      </select>







      {/* SOURCE FILTER */}

      <select

        value={source}

        onChange={(e)=>setSource(e.target.value)}

        className="
        border
        rounded-lg
        px-3
        py-2
        "

      >

        <option value="">
          All Sources
        </option>

        <option value="Website">
          Website
        </option>

        <option value="Instagram">
          Instagram
        </option>

        <option value="Facebook">
          Facebook
        </option>

        <option value="LinkedIn">
          LinkedIn
        </option>

        <option value="Google Ads">
          Google Ads
        </option>

        <option value="Referral">
          Referral
        </option>

        <option value="Walk-In">
          Walk-In
        </option>


      </select>







      {/* PRIORITY FILTER */}

      <select

        value={priority}

        onChange={(e)=>setPriority(e.target.value)}

        className="
        border
        rounded-lg
        px-3
        py-2
        "

      >

        <option value="">
          All Priority
        </option>


        <option value="High">
          High
        </option>


        <option value="Medium">
          Medium
        </option>


        <option value="Low">
          Low
        </option>


      </select>







      {/* DATE FILTER */}

      <select

        value={dateFilter}

        onChange={(e)=>setDateFilter(e.target.value)}

        className="
        border
        rounded-lg
        px-3
        py-2
        "

      >

        <option value="">
          All Time
        </option>


        <option value="today">
          Today
        </option>


        <option value="week">
          This Week
        </option>


        <option value="month">
          This Month
        </option>


        <option value="year">
          This Year
        </option>


      </select>







      {/* CLEAR BUTTON */}

      <button

        onClick={clearFilters}

        className="
        bg-gray-100
        hover:bg-gray-200
        px-4
        py-2
        rounded-lg
        "

      >

        Clear


      </button>


    </div>

  );

}


export default LeadFilters;