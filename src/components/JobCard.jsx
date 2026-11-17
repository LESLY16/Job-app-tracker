import { useJobs } from "../context/JobContext";
import {
  MapPin,
  IndianRupee,
  Calendar,
} from "lucide-react";

function JobCard({ job }) {
  const {
    deleteJob,
    setEditingJob,
  } = useJobs();

  const statusStyles = {
    Applied:
      "bg-blue-100 text-blue-700",
    Interview:
      "bg-yellow-100 text-yellow-700",
    Offer:
      "bg-green-100 text-green-700",
    Rejected:
      "bg-red-100 text-red-700",
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition-all">
      <div className="flex flex-col md:flex-row md:justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold">
            {job.company}
          </h3>

          <p className="text-gray-600">
            {job.title}
          </p>
        </div>

        <span
          className={`h-fit px-3 py-1 rounded-full text-sm font-medium ${statusStyles[job.status]}`}
        >
          {job.status}
        </span>
      </div>

      <div className="mt-4 space-y-2 text-gray-600">
        <p className="flex items-center gap-2">
          <MapPin size={16} />
          {job.location}
        </p>

        <p className="flex items-center gap-2">
          <IndianRupee size={16} />
          {job.salary}
        </p>

        <p className="flex items-center gap-2">
          <Calendar size={16} />
          {job.appliedDate}
        </p>
      </div>

      <div className="flex gap-3 mt-5">
        <button
          onClick={() =>
            setEditingJob(job)
          }
          className="flex-1 bg-amber-500 text-white py-2 rounded-xl hover:bg-amber-600"
        >
          Edit
        </button>

        <button
          onClick={() =>
            deleteJob(job.id)
          }
          className="flex-1 bg-red-500 text-white py-2 rounded-xl hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default JobCard;