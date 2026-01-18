# 🎬 Movie Explorer Dashboard

A modern, responsive movie discovery dashboard built with React and CSS. Explore movies, search by title, apply filters, and discover related content using the TMDB (The Movie Database) API.

## Features

- 🔍 **Search Movies**: Search for movies by title or keyword
- 🎯 **Advanced Filters**: Filter by genre, release year, and minimum rating
- 📱 **Responsive Design**: Fully responsive and mobile-friendly
- ♾️ **Infinite Scroll**: Smooth infinite scrolling for browsing movies
- 📋 **Movie Details**: View comprehensive movie information including cast, crew, and overview
- 🔗 **Related Movies**: Discover similar movies based on the selected movie
- ⚡ **Performance**: Optimized for large datasets with efficient state management
- 🎨 **Modern UI**: Clean, accessible, and intuitive user interface

## Project Structure

```
movie-dashboard/
├── public/
│   └── index.html
├── src/
│   ├── components/          # React components
│   │   ├── Error/           # Error state component
│   │   ├── Filters/         # Filter controls (genre, year, rating)
│   │   ├── Loading/          # Loading spinner component
│   │   ├── MovieCard/       # Individual movie card
│   │   ├── MovieDetails/    # Movie details modal
│   │   ├── MovieGrid/       # Grid layout for movies
│   │   ├── RelatedMovies/   # Related movies section
│   │   └── SearchBar/       # Search input component
│   ├── context/             # React Context for state management
│   │   └── MovieContext.js  # Global movie state and actions
│   ├── services/            # API services
│   │   └── api.js           # TMDB API integration
│   ├── utils/               # Utility files
│   │   └── constants.js     # API keys, endpoints, constants
│   ├── App.js               # Main app component
│   ├── App.css              # App-level styles
│   ├── index.js             # React entry point
│   └── index.css            # Global styles
└── package.json
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure API Key

**IMPORTANT**: You need to add your TMDB API key to use this application.

1. Get your API key from [TMDB](https://www.themoviedb.org/settings/api)
2. Open `src/utils/constants.js`
3. Replace `'YOUR_API_KEY'` with your actual TMDB API key:

```javascript
export const API_KEY = 'your-actual-api-key-here';
```

**File Location**: `src/utils/constants.js` (line 3)

### 3. Run the Application

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Usage

### Searching Movies
- Type a movie title or keyword in the search bar
- Press Enter or click the search button
- Results will update automatically

### Applying Filters
- **Genre**: Select a genre from the dropdown
- **Release Year**: Choose a specific year or leave as "All Years"
- **Minimum Rating**: Set a minimum rating threshold (5+ to 9+)
- Click "Clear All Filters" to reset

### Viewing Movie Details
- Click on any movie card to view detailed information
- The modal displays:
  - Movie poster and backdrop
  - Title, tagline, and release date
  - Rating, runtime, and genres
  - Overview/description
  - Director and cast information
  - Related movies

### Infinite Scroll
- Scroll down to automatically load more movies
- Works with both search results and filtered results

## Technology Stack

- **React 19.2.3**: UI library
- **React Context API**: State management
- **CSS3**: Styling (no external CSS frameworks)
- **TMDB API**: Movie data source
- **Intersection Observer API**: Infinite scroll implementation

## Key Features Implementation

### State Management
- Centralized state using React Context and useReducer
- Efficient state updates with proper action dispatching
- Loading, error, and empty states handled gracefully

### API Integration
- Modular API service layer
- Error handling and retry mechanisms
- Support for search, discover, and detailed movie queries

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interactions
- Accessible keyboard navigation

### Performance Optimizations
- Lazy loading images
- Infinite scroll with Intersection Observer
- Efficient re-renders with React hooks
- Debounced search (can be enhanced)

## Available Scripts

- `npm start`: Start development server
- `npm test`: Run tests
- `npm run build`: Build for production
- `npm run eject`: Eject from Create React App (irreversible)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Pagination option (toggle between infinite scroll and pagination)
- Favorite/watchlist functionality
- Advanced sorting options
- Movie trailers integration
- User reviews and ratings
- Dark mode toggle

## License

This project is open source and available for educational purposes.

## Credits

- Movie data provided by [The Movie Database (TMDB)](https://www.themoviedb.org/)
- Built with [Create React App](https://github.com/facebook/create-react-app)
