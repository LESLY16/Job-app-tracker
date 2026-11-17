import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";

function App() {
  return (
    <div>
      <Navbar />

      <div
        style={{
          padding: "20px",
        }}
      >
        <Dashboard />

        <JobForm />

        <JobList />
      </div>
    </div>
  );
}

export default App;