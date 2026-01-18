import React from 'react';
import './Error.css';

const Error = ({ message, onRetry }) => {
  return (
    <div className="error-container">
      <div className="error-icon">⚠️</div>
      <h3 className="error-title">Oops! Something went wrong</h3>
      <p className="error-message">{message || 'An unexpected error occurred'}</p>
      {onRetry && (
        <button className="error-retry-button" onClick={onRetry}>
          Try Again
        </button>
      )}
    </div>
  );
};

export default Error;
