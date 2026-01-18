import React from 'react';
import './MovieDetails.css';
import { IMAGE_BASE_URL_ORIGINAL, IMAGE_BASE_URL } from '../../utils/constants';
import RelatedMovies from '../RelatedMovies/RelatedMovies';

const MovieDetails = ({ movie, relatedMovies, onClose, onRelatedMovieClick }) => {
  if (!movie) return null;

  const backdropUrl = movie.backdrop_path
    ? `${IMAGE_BASE_URL_ORIGINAL}${movie.backdrop_path}`
    : null;

  const posterUrl = movie.poster_path
    ? `${IMAGE_BASE_URL}${movie.poster_path}`
    : 'https://via.placeholder.com/300x450?text=No+Image';

  const releaseYear = movie.release_date
    ? new Date(movie.release_date).getFullYear()
    : 'N/A';

  const releaseDate = movie.release_date
    ? new Date(movie.release_date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : 'N/A';

  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A';
  const runtime = movie.runtime ? `${movie.runtime} min` : 'N/A';

  const genres = movie.genres
    ? movie.genres.map((g) => g.name).join(', ')
    : 'N/A';

  const directors = movie.credits?.crew
    ? movie.credits.crew
        .filter((person) => person.job === 'Director')
        .map((person) => person.name)
        .join(', ')
    : 'N/A';

  const cast = movie.credits?.cast
    ? movie.credits.cast.slice(0, 5).map((actor) => actor.name).join(', ')
    : 'N/A';

  return (
    <div className="movie-details-overlay" onClick={onClose}>
      <div
        className="movie-details-container"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="movie-details-close"
          onClick={onClose}
          aria-label="Close movie details"
        >
          ×
        </button>

        {backdropUrl && (
          <div
            className="movie-details-backdrop"
            style={{ backgroundImage: `url(${backdropUrl})` }}
          />
        )}

        <div className="movie-details-content">
          <div className="movie-details-main">
            <div className="movie-details-poster">
              <img src={posterUrl} alt={movie.title} />
            </div>

            <div className="movie-details-info">
              <h1 className="movie-details-title">{movie.title}</h1>
              {movie.tagline && (
                <p className="movie-details-tagline">{movie.tagline}</p>
              )}

              <div className="movie-details-meta">
                <span className="movie-details-rating">⭐ {rating}</span>
                <span className="movie-details-year">{releaseYear}</span>
                <span className="movie-details-runtime">{runtime}</span>
              </div>

              <div className="movie-details-section">
                <h3>Overview</h3>
                <p className="movie-details-overview">
                  {movie.overview || 'No overview available.'}
                </p>
              </div>

              <div className="movie-details-section">
                <h3>Genres</h3>
                <p>{genres}</p>
              </div>

              <div className="movie-details-section">
                <h3>Release Date</h3>
                <p>{releaseDate}</p>
              </div>

              {directors !== 'N/A' && (
                <div className="movie-details-section">
                  <h3>Director</h3>
                  <p>{directors}</p>
                </div>
              )}

              {cast !== 'N/A' && (
                <div className="movie-details-section">
                  <h3>Cast</h3>
                  <p>{cast}</p>
                </div>
              )}
            </div>
          </div>

          {relatedMovies && relatedMovies.length > 0 && (
            <div className="movie-details-related">
              <RelatedMovies
                movies={relatedMovies}
                onMovieClick={onRelatedMovieClick}
                title="You might also like"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
