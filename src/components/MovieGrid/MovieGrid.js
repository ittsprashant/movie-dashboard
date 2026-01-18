import React, { useEffect, useRef } from 'react';
import './MovieGrid.css';
import MovieCard from '../MovieCard/MovieCard';

const MovieGrid = ({ movies, onMovieClick, onLoadMore, hasMore, loading }) => {
  const observerRef = useRef(null);
  const loadMoreRef = useRef(null);

  useEffect(() => {
    if (!hasMore || loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          onLoadMore();
        }
      },
      { threshold: 0.1 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [hasMore, loading, onLoadMore]);

  if (movies.length === 0 && !loading) {
    return (
      <div className="movie-grid-empty">
        <p>No movies found. Try adjusting your search or filters.</p>
      </div>
    );
  }

  return (
    <>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onClick={onMovieClick} />
        ))}
      </div>
      {hasMore && <div ref={loadMoreRef} className="movie-grid-load-more-trigger"></div>}
    </>
  );
};

export default MovieGrid;
