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
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingJob) {
      updateJob({
        ...editingJob,
        ...formData,
      });
    } else {
      addJob({
        id: Date.now(),
        ...formData,
        appliedDate:
          new Date()
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
  <form
    onSubmit={handleSubmit}
    className="bg-white rounded-2xl shadow-lg p-6 sticky top-5"
  > 
      <h2 className="text-2xl font-bold mb-4">
        {editingJob
          ? "Edit Job"
          : "Add New Job"}
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={formData.company}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-xl p-3"
        />

        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-xl p-3"
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-xl p-3"
        />

        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={formData.salary}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-xl p-3"
        />

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-xl p-3"
        >
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

      <button
        type="submit"
        className="mt-4 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 font-semibold"
      >
        {editingJob
          ? "Update Job"
          : "Add Job"}
      </button>
    </form>
  );
}

export default JobForm;