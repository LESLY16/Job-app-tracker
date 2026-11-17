import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState(() => {
    const savedJobs = localStorage.getItem("jobs");

    if (savedJobs) {
      return JSON.parse(savedJobs);
    }

    return [
      {
        id: 1,
        company: "Google",
        title: "Frontend Developer",
        location: "Remote",
        salary: "120000",
        appliedDate: "2026-11-10",
        status: "Interview",
      },
      {
        id: 2,
        company: "Microsoft",
        title: "React Developer",
        location: "Bengaluru",
        salary: "150000",
        appliedDate: "2026-11-08",
        status: "Applied",
      },
      {
        id: 3,
        company: "Amazon",
        title: "Software Engineer",
        location: "Hyderabad",
        salary: "180000",
        appliedDate: "2026-11-05",
        status: "Offer",
      },
      {
        id: 4,
        company: "Infosys",
        title: "Full Stack Developer",
        location: "Pune",
        salary: "90000",
        appliedDate: "2026-11-01",
        status: "Rejected",
      },
    ];
  });

  const [editingJob, setEditingJob] = useState(null);

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  // CREATE
  const addJob = (newJob) => {
    setJobs((prevJobs) => [...prevJobs, newJob]);
  };

  // DELETE
  const deleteJob = (id) => {
    setJobs((prevJobs) =>
      prevJobs.filter((job) => job.id !== id)
    );
  };

  // UPDATE
  const updateJob = (updatedJob) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === updatedJob.id ? updatedJob : job
      )
    );

    setEditingJob(null);
  };

  const value = {
    jobs,
    addJob,
    deleteJob,
    updateJob,
    editingJob,
    setEditingJob,
  };

  return (
    <JobContext.Provider value={value}>
      {children}
    </JobContext.Provider>
  );
};

export const useJobs = () => {
  const context = useContext(JobContext);

  if (!context) {
    throw new Error(
      "useJobs must be used within JobProvider"
    );
  }

  return context;
};