import { useJobs } from "./context/JobContext";

function App() {
  const {
    jobs,
    addJob,
    deleteJob,
    updateJob,
  } = useJobs();

  const handleAddJob = () => {
    addJob({
      id: Date.now(),
      company: "Google",
      title: "Frontend Developer",
      location: "Remote",
      salary: "120000",
      appliedDate: "2026-11-17",
      status: "Applied",
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Job Tracker</h1>

      <button onClick={handleAddJob}>
        Add Sample Job
      </button>

      <h2>Total Jobs: {jobs.length}</h2>

      {jobs.map((job) => (
        <div
          key={job.id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            margin: "10px 0",
          }}
        >
          <h3>{job.company}</h3>
          <p>{job.title}</p>
          <p>{job.status}</p>

          <button
            onClick={() => deleteJob(job.id)}
          >
            Delete
          </button>

          <button
            onClick={() =>
              updateJob({
                ...job,
                status: "Interview",
              })
            }
          >
            Update Status
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;