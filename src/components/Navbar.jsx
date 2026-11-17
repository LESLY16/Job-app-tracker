import { BriefcaseBusiness } from "lucide-react";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center gap-3">
          <BriefcaseBusiness size={32} color="white" />

          <div>
            <h1 className="text-white text-2xl font-bold">
              Job Tracker
            </h1>

            <p className="text-blue-100 text-sm">
              Manage your job applications
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;