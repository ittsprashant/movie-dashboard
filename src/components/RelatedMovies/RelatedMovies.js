import React from 'react';
import './RelatedMovies.css';
import MovieCard from '../MovieCard/MovieCard';

const RelatedMovies = ({ movies, onMovieClick, title = 'Related Movies' }) => {
  if (!movies || movies.length === 0) {
    return null;
  }

  return (
    <div className="related-movies-container">
      <h2 className="related-movies-title">{title}</h2>
      <div className="related-movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onClick={onMovieClick} />
        ))}
      </div>
    </div>
  );
};

export default RelatedMovies;
