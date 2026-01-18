import React from 'react';
import './MovieCard.css';
import { IMAGE_BASE_URL } from '../../utils/constants';

const MovieCard = ({ movie, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(movie.id);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  const posterUrl = movie.poster_path
    ? `${IMAGE_BASE_URL}${movie.poster_path}`
    : 'https://via.placeholder.com/300x450?text=No+Image';

  const releaseYear = movie.release_date
    ? new Date(movie.release_date).getFullYear()
    : 'N/A';

  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A';

  return (
    <div
      className="movie-card"
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${movie.title}`}
    >
      <div className="movie-card-poster">
        <img src={posterUrl} alt={movie.title} loading="lazy" />
        <div className="movie-card-rating">{rating}</div>
      </div>
      <div className="movie-card-info">
        <h3 className="movie-card-title" title={movie.title}>
          {movie.title}
        </h3>
        <p className="movie-card-year">{releaseYear}</p>
      </div>
    </div>
  );
};

export default MovieCard;
