import { useJobs } from "../context/JobContext";
import JobCard from "./JobCard";

function JobList({
  searchTerm,
  statusFilter,
}) {
  const { jobs } = useJobs();

  const filteredJobs = jobs.filter(
    (job) => {
      const searchMatch =
        job.company
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          ) ||
        job.title
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          );

      const statusMatch =
        !statusFilter ||
        job.status === statusFilter;

      return (
        searchMatch && statusMatch
      );
    }
  );

  return (
    <div className="space-y-4">
      {filteredJobs.length > 0 ? (
        filteredJobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
          />
        ))
      ) : (
        <div className="bg-white rounded-2xl shadow p-10 text-center">
          <h2 className="text-xl font-semibold text-gray-500">
            No Jobs Found
          </h2>
        </div>
      )}
    </div>
  );
}

export default JobList;