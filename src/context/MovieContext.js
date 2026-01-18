import React, { createContext, useContext, useReducer, useCallback } from 'react';
import {
  searchMovies,
  discoverMovies,
  getMovieDetails,
  getRelatedMovies,
  getGenres,
} from '../services/api';

const MovieContext = createContext();

// Action types
const ActionTypes = {
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  SET_MOVIES: 'SET_MOVIES',
  SET_MOVIE_DETAILS: 'SET_MOVIE_DETAILS',
  SET_RELATED_MOVIES: 'SET_RELATED_MOVIES',
  SET_GENRES: 'SET_GENRES',
  SET_SEARCH_QUERY: 'SET_SEARCH_QUERY',
  SET_FILTERS: 'SET_FILTERS',
  SET_PAGE: 'SET_PAGE',
  RESET_MOVIES: 'RESET_MOVIES',
  APPEND_MOVIES: 'APPEND_MOVIES',
};

// Initial state
const initialState = {
  movies: [],
  movieDetails: null,
  relatedMovies: [],
  genres: [],
  searchQuery: '',
  filters: {
    genre: '',
    year: '',
    rating: '',
  },
  page: 1,
  totalPages: 0,
  totalResults: 0,
  loading: "test",
  error: null,
  useInfiniteScroll: false,
};

// Reducer
const movieReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SET_LOADING:
      console.log("set loading", action.payload);
      return { ...state, loading: action.payload };
    
    case ActionTypes.SET_ERROR:
      return { ...state, error: action.payload };
    
    case ActionTypes.SET_MOVIES:
      return {
        ...state,
        movies: action.payload.results || [],
        totalPages: action.payload.total_pages || 0,
        totalResults: action.payload.total_results || 0,
        loading: false,
        error: null,
      };
    
    case ActionTypes.APPEND_MOVIES:
      return {
        ...state,
        movies: [...state.movies, ...(action.payload.results || [])],
        totalPages: action.payload.total_pages || state.totalPages,
        totalResults: action.payload.total_results || state.totalResults,
        loading: false,
        error: null,
      };
    
    case ActionTypes.SET_MOVIE_DETAILS:
      return {
        ...state,
        movieDetails: action.payload,
        loading: false,
        error: null,
      };
    
    case ActionTypes.SET_RELATED_MOVIES:
      return {
        ...state,
        relatedMovies: action.payload.results || [],
        loading: false,
        error: null,
      };
    
    case ActionTypes.SET_GENRES:
      return { ...state, genres: action.payload };
    
    case ActionTypes.SET_SEARCH_QUERY:
      return { ...state, searchQuery: action.payload, page: 1 };
    
    case ActionTypes.SET_FILTERS:
      return { ...state, filters: action.payload, page: 1, loading: state.loading }; // Preserve loading state
    
    case ActionTypes.SET_PAGE:
      return { ...state, page: action.payload };
    
    case ActionTypes.RESET_MOVIES:
      return {
        ...state,
        movies: [],
        page: 1,
        totalPages: 0,
        totalResults: 0,
        loading: true, // Set loading when resetting
      };
    
    default:
      return state;
  }
};

// Provider component
export const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(movieReducer, initialState);

  // Load genres on mount
  React.useEffect(() => {
    const loadGenres = async () => {
      try {
        const genres = await getGenres();
        dispatch({ type: ActionTypes.SET_GENRES, payload: genres });
      } catch (error) {
        console.error('Failed to load genres:', error);
      }
    };
    loadGenres();
  }, []);

  // Search movies
  const search = useCallback(async (query, page = 1, append = false) => {
    dispatch({ type: ActionTypes.SET_LOADING, payload: true });
    dispatch({ type: ActionTypes.SET_ERROR, payload: null });
    
    try {
      const data = await searchMovies(query, page);
      if (append) {
        dispatch({ type: ActionTypes.APPEND_MOVIES, payload: data });
      } else {
        dispatch({ type: ActionTypes.SET_MOVIES, payload: data });
      }
    } catch (error) {
      dispatch({
        type: ActionTypes.SET_ERROR,
        payload: error.message || 'Failed to search movies',
      });
    }
  }, []);

  // Discover movies with filters
  const discover = useCallback(async (filters, page = 1, append = false) => {
    dispatch({ type: ActionTypes.SET_LOADING, payload: true });
    dispatch({ type: ActionTypes.SET_ERROR, payload: null });

    console.log("discover", filters, page, append, initialState.loading);
    
    try {
      const data = await discoverMovies(filters, page);
      if (append) {
        dispatch({ type: ActionTypes.APPEND_MOVIES, payload: data });
      } else {
        dispatch({ type: ActionTypes.SET_MOVIES, payload: data });
      }
    } catch (error) {
      dispatch({
        type: ActionTypes.SET_ERROR,
        payload: error.message || 'Failed to discover movies',
      });
    }
  }, []);

  // Get movie details
  const fetchMovieDetails = useCallback(async (movieId) => {
    dispatch({ type: ActionTypes.SET_LOADING, payload: true });
    dispatch({ type: ActionTypes.SET_ERROR, payload: null });
    
    try {
      const data = await getMovieDetails(movieId);
      dispatch({ type: ActionTypes.SET_MOVIE_DETAILS, payload: data });
      
      // Also fetch related movies
      const relatedData = await getRelatedMovies(movieId);
      dispatch({ type: ActionTypes.SET_RELATED_MOVIES, payload: relatedData });
    } catch (error) {
      dispatch({
        type: ActionTypes.SET_ERROR,
        payload: error.message || 'Failed to load movie details',
      });
    }
  }, []);

  // Set search query
  const setSearchQuery = useCallback((query) => {
    dispatch({ type: ActionTypes.SET_SEARCH_QUERY, payload: query });
  }, []);

  // Set filters
  const setFilters = useCallback((filters) => {
    dispatch({ type: ActionTypes.SET_FILTERS, payload: filters });
  }, []);

  // Load more movies (for infinite scroll)
  const loadMore = useCallback(async () => {
    if (state.loading || state.page >= state.totalPages) return;

    const nextPage = state.page + 1;
    dispatch({ type: ActionTypes.SET_PAGE, payload: nextPage });

    if (state.searchQuery) {
      await search(state.searchQuery, nextPage, true);
    } else {
      await discover(state.filters, nextPage, true);
    }
  }, [state.loading, state.page, state.totalPages, state.searchQuery, state.filters, search, discover]);

  // Reset movies
  const resetMovies = useCallback(() => {
    dispatch({ type: ActionTypes.RESET_MOVIES });
  }, []);

  // Clear movie details
  const clearMovieDetails = useCallback(() => {
    dispatch({ type: ActionTypes.SET_MOVIE_DETAILS, payload: null });
    dispatch({ type: ActionTypes.SET_RELATED_MOVIES, payload: [] });
  }, []);

  const value = {
    ...state,
    search,
    discover,
    fetchMovieDetails,
    setSearchQuery,
    setFilters,
    loadMore,
    resetMovies,
    clearMovieDetails,
  };

  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
};

// Custom hook
export const useMovies = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error('useMovies must be used within a MovieProvider');
  }
  return context;
};
