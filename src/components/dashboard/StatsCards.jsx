function StatsCards() {
  const stats = [
    {
      title: "Revenue",
      value: "$84,250",
      color: "text-blue-600",
    },
    {
      title: "Customers",
      value: "1,240",
      color: "text-green-600",
    },
    {
      title: "Orders",
      value: "352",
      color: "text-orange-500",
    },
    {
      title: "Growth",
      value: "+18%",
      color: "text-purple-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((item) => (
        <div
          key={item.title}
          className="bg-white rounded-xl shadow p-6"
        >
          <p className="text-gray-500">
            {item.title}
          </p>

          <h2 className={`text-3xl font-bold mt-2 ${item.color}`}>
            {item.value}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;