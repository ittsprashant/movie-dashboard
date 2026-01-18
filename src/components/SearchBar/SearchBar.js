import React, { useState, useEffect } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch, initialValue = '' }) => {
  const [query, setQuery] = useState(initialValue);

  useEffect(() => {
    setQuery(initialValue);
  }, [initialValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="search-input-wrapper">
        <input
          type="text"
          className="search-input"
          placeholder="Search for movies..."
          value={query}
          onChange={handleChange}
          aria-label="Search movies"
        />
        {query && (
          <button
            type="button"
            className="search-clear-button"
            onClick={handleClear}
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </div>
      <button type="submit" className="search-submit-button" aria-label="Search">
        🔍
      </button>
    </form>
  );
};

export default SearchBar;
