import React, { useEffect } from 'react';
import './App.css';
import { MovieProvider, useMovies } from './context/MovieContext';
import SearchBar from './components/SearchBar/SearchBar';
import Filters from './components/Filters/Filters';
import MovieGrid from './components/MovieGrid/MovieGrid';
import MovieDetails from './components/MovieDetails/MovieDetails';
import RelatedMovies from './components/RelatedMovies/RelatedMovies';
import Loading from './components/Loading/Loading';
import Error from './components/Error/Error';

const DashboardContent = () => {
  const {
    movies,
    movieDetails,
    relatedMovies,
    genres,
    searchQuery,
    filters,
    loading,
    error,
    page,
    totalPages,
    search,
    discover,
    fetchMovieDetails,
    setSearchQuery,
    setFilters,
    loadMore,
    resetMovies,
    clearMovieDetails,
  } = useMovies();

  console.log("loading", loading, movies );

  // Load initial movies on mount
  useEffect(() => {
    if (!searchQuery && Object.values(filters).every((f) => !f)) {
      discover({}, 1);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Handle search
  const handleSearch = (query) => {
    resetMovies();
    setSearchQuery(query);
    if (query.trim()) {
      search(query, 1);
    } else {
      discover(filters, 1);
    }
  };

  // Handle filter changes
  const handleFilterChange = (newFilters) => {
    // Reset movies first (sets loading to true and clears movies)
    resetMovies();
    // Update filters (preserves loading state)
    setFilters(newFilters);
    if (searchQuery) {
      // If searching, keep search but apply filters would require a different approach
      // For simplicity, clear search when filters are applied
      setSearchQuery('');
    }
    // Discover will set loading to true at the start of its execution
    // Using a microtask to ensure state updates from resetMovies/setFilters are processed
    Promise.resolve().then(() => {
      discover(newFilters, 1);
    });
  };

  // Handle movie click
  const handleMovieClick = (movieId) => {
    fetchMovieDetails(movieId);
  };

  // Handle close movie details
  const handleCloseDetails = () => {
    clearMovieDetails();
  };

  // Check if there are more pages
  const hasMore = page < totalPages;

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">🎬 Movie Explorer Dashboard</h1>
        <p className="app-subtitle">Discover your next favorite movie</p>
      </header>

      <main className="app-main">
        <div className="app-controls">
          <SearchBar onSearch={handleSearch} initialValue={searchQuery} />
          <Filters
            genres={genres}
            filters={filters}
            onFilterChange={handleFilterChange}
          />
        </div>

        {error && (
          <Error
            message={error}
            onRetry={() => {
              if (searchQuery) {
                search(searchQuery, page);
              } else {
                discover(filters, page);
              }
            }}
          />
        )}

        {/* {console.log("loading", loading, movies )} */}

        {loading && movies.length === 0 && <Loading message="Loading movies..." />}

        {!loading && !error && (
          <>
            <div className="app-results">
              <div className="app-results-header">
                <h2>
                  {searchQuery
                    ? `Search Results for "${searchQuery}"`
                    : 'Popular Movies'}
                </h2>
                {movies.length > 0 && (
                  <p className="app-results-count">
                    {movies.length} of {totalPages > 0 ? `${totalPages * 20}+` : '0'} movies
                  </p>
                )}
              </div>
              <MovieGrid
                movies={movies}
                onMovieClick={handleMovieClick}
                onLoadMore={loadMore}
                hasMore={hasMore}
                loading={loading}
              />
              {loading && movies.length > 0 && (
                <Loading message="Loading more movies..." />
              )}
            </div>

            {movieDetails && (
              <MovieDetails
                movie={movieDetails}
                relatedMovies={relatedMovies}
                onClose={handleCloseDetails}
                onRelatedMovieClick={handleMovieClick}
              />
            )}
          </>
        )}
      </main>

      <footer className="app-footer">
        <p>Powered by TMDB API</p>
      </footer>
    </div>
  );
};

function App() {
  return (
    <MovieProvider>
      <DashboardContent />
    </MovieProvider>
  );
}

export default App;
