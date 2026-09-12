function SearchBar({ searchTerm, onSearch }) {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  const clearSearch = () => {
    onSearch("");
  };

  return (
    <div className="search-container">

      <span className="search-icon">
        🔍
      </span>

      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search by name, username, email, city..."
      />

      {searchTerm && (
        <button
          className="clear-search"
          onClick={clearSearch}
        >
          ×
        </button>
      )}

    </div>
  );
}

export default SearchBar;