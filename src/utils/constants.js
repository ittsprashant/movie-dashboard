// TMDB API Configuration
export const API_KEY = 'b5f2064412eb9f6aead2cb4f127f5b16';
export const READ_ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNWYyMDY0NDEyZWI5ZjZhZWFkMmNiNGYxMjdmNWIxNiIsIm5iZiI6MTc2NTAxNjE2Ni4wMzIsInN1YiI6IjY5MzQwMjY2MGE2NjFkNjNkNmI3MGRiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WJIvF2pI45Pr_KeVmP30y5BJsKafjJrOY1JW2jMjXGc';
export const API_BASE_URL = 'https://api.themoviedb.org/3';
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
export const IMAGE_BASE_URL_ORIGINAL = 'https://image.tmdb.org/t/p/original';

// API Endpoints
export const ENDPOINTS = {
  SEARCH: '/search/movie',
  DISCOVER: '/discover/movie',
  MOVIE_DETAILS: '/movie',
  GENRES: '/genre/movie/list',
  RELATED: '/movie/{id}/similar',
};

// Default values
export const DEFAULT_PAGE = 1;
export const ITEMS_PER_PAGE = 20;

// Rating filter options
export const RATING_OPTIONS = [
  { label: 'All Ratings', value: '' },
  { label: '9+', value: 9 },
  { label: '8+', value: 8 },
  { label: '7+', value: 7 },
  { label: '6+', value: 6 },
  { label: '5+', value: 5 },
];

// Year filter options (last 20 years)
export const getYearOptions = () => {
  const currentYear = new Date().getFullYear();
  const years = [{ label: 'All Years', value: '' }];
  for (let i = currentYear; i >= currentYear - 20; i--) {
    years.push({ label: i.toString(), value: i });
  }
  return years;
};
