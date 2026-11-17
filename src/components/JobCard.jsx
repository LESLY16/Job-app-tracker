import { useJobs } from "../context/JobContext";

function JobCard({ job }) {
  const { deleteJob, setEditingJob } = useJobs();

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <h3>{job.company}</h3>

      <p>Position: {job.title}</p>
      <p>Location: {job.location}</p>
      <p>Salary: ₹{job.salary}</p>
      <p>Status: {job.status}</p>

      <button
        onClick={() => setEditingJob(job)}
      >
        Edit
      </button>

      <button
        onClick={() => deleteJob(job.id)}
        style={{ marginLeft: "10px" }}
      >
        Delete
      </button>
    </div>
  );
}

export default JobCard;