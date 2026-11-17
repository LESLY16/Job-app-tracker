import { useJobs } from "../context/JobContext";
import JobCard from "./JobCard";

function JobList() {
  const { jobs } = useJobs();

  return (
    <div>
      <h2>Job Applications</h2>

      {jobs.map((job) => (
        <JobCard
          key={job.id}
          job={job}
        />
      ))}
    </div>
  );
}

export default JobList;