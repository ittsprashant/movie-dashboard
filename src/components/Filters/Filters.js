import React from 'react';
import './Filters.css';
import { RATING_OPTIONS, getYearOptions } from '../../utils/constants';

const Filters = ({ genres, filters, onFilterChange }) => {
  const yearOptions = getYearOptions();

  const handleFilterChange = (filterType, value) => {
    const newFilters = {
      ...filters,
      [filterType]: value,
    };
    onFilterChange(newFilters);
  };

  return (
    <div className="filters-container">
      <h3 className="filters-title">Filters</h3>
      <div className="filters-grid">
        <div className="filter-group">
          <label htmlFor="genre-filter" className="filter-label">
            Genre
          </label>
          <select
            id="genre-filter"
            className="filter-select"
            value={filters.genre || ''}
            onChange={(e) => handleFilterChange('genre', e.target.value)}
          >
            <option value="">All Genres</option>
            {genres.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="year-filter" className="filter-label">
            Release Year
          </label>
          <select
            id="year-filter"
            className="filter-select"
            value={filters.year || ''}
            onChange={(e) => handleFilterChange('year', e.target.value)}
          >
            {yearOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="rating-filter" className="filter-label">
            Minimum Rating
          </label>
          <select
            id="rating-filter"
            className="filter-select"
            value={filters.rating || ''}
            onChange={(e) => handleFilterChange('rating', e.target.value)}
          >
            {RATING_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {(filters.genre || filters.year || filters.rating) && (
        <button
          className="filters-clear-button"
          onClick={() => onFilterChange({ genre: '', year: '', rating: '' })}
        >
          Clear All Filters
        </button>
      )}
    </div>
  );
};

export default Filters;
