import { useEffect, useState } from "react";
import { useJobs } from "../context/JobContext";

function JobForm() {
  const {
    addJob,
    updateJob,
    editingJob,
  } = useJobs();

  const [formData, setFormData] = useState({
    company: "",
    title: "",
    location: "",
    salary: "",
    status: "Applied",
  });

  useEffect(() => {
    if (editingJob) {
      setFormData({
        company: editingJob.company,
        title: editingJob.title,
        location: editingJob.location,
        salary: editingJob.salary,
        status: editingJob.status,
      });
    }
  }, [editingJob]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.company || !formData.title) {
      alert("Company and Job Title are required");
      return;
    }

    if (editingJob) {
      updateJob({
        ...editingJob,
        ...formData,
      });
    } else {
      addJob({
        id: Date.now(),
        ...formData,
        appliedDate: new Date()
          .toISOString()
          .split("T")[0],
      });
    }

    setFormData({
      company: "",
      title: "",
      location: "",
      salary: "",
      status: "Applied",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>
        {editingJob
          ? "Edit Job"
          : "Add Job"}
      </h2>

      <input
        type="text"
        name="company"
        placeholder="Company"
        value={formData.company}
        onChange={handleChange}
      />

      <br />
      <br />

      <input
        type="text"
        name="title"
        placeholder="Job Title"
        value={formData.title}
        onChange={handleChange}
      />

      <br />
      <br />

      <input
        type="text"
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
      />

      <br />
      <br />

      <input
        type="number"
        name="salary"
        placeholder="Salary"
        value={formData.salary}
        onChange={handleChange}
      />

      <br />
      <br />

      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
      >
        <option value="Applied">
          Applied
        </option>
        <option value="Interview">
          Interview
        </option>
        <option value="Offer">
          Offer
        </option>
        <option value="Rejected">
          Rejected
        </option>
      </select>

      <br />
      <br />

      <button type="submit">
        {editingJob
          ? "Update Job"
          : "Add Job"}
      </button>
    </form>
  );
}

export default JobForm;