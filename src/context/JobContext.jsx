// src/context/JobContext.jsx

import { createContext, useContext, useState } from "react";

const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);

  // Create
  const addJob = (newJob) => {
    setJobs((prevJobs) => [...prevJobs, newJob]);
  };

  // Delete
  const deleteJob = (id) => {
    setJobs((prevJobs) =>
      prevJobs.filter((job) => job.id !== id)
    );
  };

  // Update
  const updateJob = (updatedJob) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === updatedJob.id ? updatedJob : job
      )
    );
  };

  return (
    <JobContext.Provider
      value={{
        jobs,
        addJob,
        deleteJob,
        updateJob,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export const useJobs = () => {
  return useContext(JobContext);
};