import { useJobs } from "../context/JobContext";

function Dashboard() {
  const { jobs } = useJobs();

  const applied = jobs.filter(
    (job) => job.status === "Applied"
  ).length;

  const interview = jobs.filter(
    (job) => job.status === "Interview"
  ).length;

  const offer = jobs.filter(
    (job) => job.status === "Offer"
  ).length;

  const rejected = jobs.filter(
    (job) => job.status === "Rejected"
  ).length;

  const stats = [
    {
      title: "Total",
      value: jobs.length,
      color: "bg-blue-500",
    },
    {
      title: "Applied",
      value: applied,
      color: "bg-sky-500",
    },
    {
      title: "Interview",
      value: interview,
      color: "bg-yellow-500",
    },
    {
      title: "Offers",
      value: offer,
      color: "bg-green-500",
    },
    {
      title: "Rejected",
      value: rejected,
      color: "bg-red-500",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className={`${stat.color} text-white rounded-2xl p-5 shadow-md`}
        >
          <p className="text-sm">
            {stat.title}
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {stat.value}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;