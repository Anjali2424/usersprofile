import React, { useState } from 'react';

const SearchField = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="search-filed">
      <input
        type="text"
        className="searchTerm"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="search-btn" onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchField;
