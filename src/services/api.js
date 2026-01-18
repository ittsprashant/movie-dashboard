import { READ_ACCESS_TOKEN, API_BASE_URL, ENDPOINTS } from '../utils/constants';
import {
  mockSearchMovies,
  mockDiscoverMovies,
  mockGetMovieDetails,
  mockGetRelatedMovies,
  mockGetGenres,
} from './mockData';

// Set to false to use real TMDB API (when it's working)
const USE_MOCK_DATA = true;

/**
 * Make API request to TMDB using Bearer token authentication
 */
const apiRequest = async (endpoint, params = {}) => {
  const queryParams = new URLSearchParams(params);
  const url = `${API_BASE_URL}${endpoint}?${queryParams.toString()}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${READ_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.status_message || 
        `API Error: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
};

/**
 * Search movies by query
 */
export const searchMovies = async (query, page = 1) => {
  if (USE_MOCK_DATA) {
    return mockSearchMovies(query, page);
  }

  if (!query || query.trim() === '') {
    return { results: [], total_pages: 0, total_results: 0 };
  }

  return apiRequest(ENDPOINTS.SEARCH, {
    query: query.trim(),
    page,
    include_adult: false,
  });
};

/**
 * Discover movies with filters
 */
export const discoverMovies = async (filters = {}, page = 1) => {
  if (USE_MOCK_DATA) {
    return mockDiscoverMovies(filters, page);
  }

  const params = {
    page,
    include_adult: false,
    sort_by: 'popularity.desc',
  };

  if (filters.genre) {
    params.with_genres = filters.genre;
  }

  if (filters.year) {
    params.primary_release_year = filters.year;
  }

  if (filters.rating) {
    params['vote_average.gte'] = filters.rating;
  }

  return apiRequest(ENDPOINTS.DISCOVER, params);
};

/**
 * Get movie details by ID
 */
export const getMovieDetails = async (movieId) => {
  if (USE_MOCK_DATA) {
    return mockGetMovieDetails(movieId);
  }

  return apiRequest(`${ENDPOINTS.MOVIE_DETAILS}/${movieId}`, {
    append_to_response: 'videos,credits',
  });
};

/**
 * Get related/similar movies
 */
export const getRelatedMovies = async (movieId, page = 1) => {
  if (USE_MOCK_DATA) {
    return mockGetRelatedMovies(movieId, page);
  }

  return apiRequest(`${ENDPOINTS.MOVIE_DETAILS}/${movieId}/similar`, {
    page,
  });
};

/**
 * Get all movie genres
 */
export const getGenres = async () => {
  if (USE_MOCK_DATA) {
    return mockGetGenres();
  }

  const data = await apiRequest(ENDPOINTS.GENRES);
  return data.genres || [];
};
