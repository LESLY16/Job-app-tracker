function SearchFilter() {
  return (
    <div>
      <input
        type="text"
        placeholder="Search company or title..."
      />

      <select>
        <option value="">All Statuses</option>
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Offer">Offer</option>
        <option value="Rejected">Rejected</option>
      </select>
    </div>
  );
}

export default SearchFilter;