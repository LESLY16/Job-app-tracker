import { useJobs } from "../context/JobContext";

function Dashboard() {
  const { jobs } = useJobs();

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        margin: "20px 0",
      }}
    >
      <div>Total Jobs: {jobs.length}</div>
      <div>Interviews: 0</div>
      <div>Offers: 0</div>
      <div>Rejected: 0</div>
    </div>
  );
}

export default Dashboard;