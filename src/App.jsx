import { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import JobForm from "./components/JobForm";
import SearchFilter from "./components/SearchFilter";
import JobList from "./components/JobList";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <Dashboard />

        <div className="grid lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-1">
            <JobForm />
          </div>

          <div className="lg:col-span-2">
            <SearchFilter
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
            />

            <JobList
              searchTerm={searchTerm}
              statusFilter={statusFilter}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;