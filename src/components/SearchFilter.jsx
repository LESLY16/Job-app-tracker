import { Search } from "lucide-react";

function SearchFilter({
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 mb-5">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-3 top-4 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
            className="w-full border border-gray-300 rounded-xl py-3 pl-10 pr-3"
          />
        </div>

        <select
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(e.target.value)
          }
          className="border border-gray-300 rounded-xl px-4 py-3"
        >
          <option value="">
            All Statuses
          </option>
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
      </div>
    </div>
  );
}

export default SearchFilter;