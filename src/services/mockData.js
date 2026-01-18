// Mock data for development and testing
// This simulates TMDB API responses

export const mockGenres = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 14, name: 'Fantasy' },
  { id: 36, name: 'History' },
  { id: 27, name: 'Horror' },
  { id: 10402, name: 'Music' },
  { id: 9648, name: 'Mystery' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Science Fiction' },
  { id: 10770, name: 'TV Movie' },
  { id: 53, name: 'Thriller' },
  { id: 10752, name: 'War' },
  { id: 37, name: 'Western' },
];

export const mockMovies = [
  {
    id: 550,
    title: 'Fight Club',
    release_date: '1999-10-15',
    vote_average: 8.4,
    poster_path: '/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
    backdrop_path: '/hZkgoQYus5vegHdHvL9QpQN90Kz.jpg',
    overview: 'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy.',
    genre_ids: [18],
  },
  {
    id: 238,
    title: 'The Godfather',
    release_date: '1972-03-24',
    vote_average: 9.2,
    poster_path: '/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
    backdrop_path: '/tmU7GeKVybMWFButWEGl2M4GeiP.jpg',
    overview: 'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family.',
    genre_ids: [18, 80],
  },
  {
    id: 424,
    title: 'Schindler\'s List',
    release_date: '1993-12-15',
    vote_average: 8.9,
    poster_path: '/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg',
    backdrop_path: '/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg',
    overview: 'The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis.',
    genre_ids: [18, 36, 10752],
  },
  {
    id: 240,
    title: 'The Godfather: Part II',
    release_date: '1974-12-20',
    vote_average: 9.0,
    poster_path: '/hek3koDUyRQk7FhYqXKJYj3X5VQ.jpg',
    backdrop_path: '/kGzFbGhp99zC6jeVAbOJIA5Wo4y.jpg',
    overview: 'The early life and career of Vito Corleone in 1920s New York is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.',
    genre_ids: [18, 80],
  },
  {
    id: 278,
    title: 'The Shawshank Redemption',
    release_date: '1994-09-23',
    vote_average: 9.3,
    poster_path: '/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
    backdrop_path: '/iNh3BivHyg5sQRPP1KOkzguEX0H.jpg',
    overview: 'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison.',
    genre_ids: [18, 80],
  },
  {
    id: 497,
    title: 'The Green Mile',
    release_date: '1999-12-10',
    vote_average: 8.5,
    poster_path: '/velWPhVMQeQKcxggNEU8YmIo52R.jpg',
    backdrop_path: '/8RQ2p8pXUOQ3d8e5l0X3q0q3q3q.jpg',
    overview: 'A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people\'s ailments.',
    genre_ids: [14, 18, 80],
  },
  {
    id: 13,
    title: 'Forrest Gump',
    release_date: '1994-07-06',
    vote_average: 8.8,
    poster_path: '/arw2vcBvePOVz6STJjqMuWIT3Oy.jpg',
    backdrop_path: '/adw6Lq0FiC9zjYEpOqfq03ituwp.jpg',
    overview: 'A man with a low IQ has accomplished great things in his life and been present during significant historic events.',
    genre_ids: [35, 18, 10749],
  },
  {
    id: 680,
    title: 'Pulp Fiction',
    release_date: '1994-10-14',
    vote_average: 8.9,
    poster_path: '/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
    backdrop_path: '/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg',
    overview: 'A burger-loving hit man, his philosophical partner, a drug-addled gangster\'s moll and a washed-up boxer converge in this sprawling, comedic crime caper.',
    genre_ids: [80, 18],
  },
  {
    id: 155,
    title: 'The Dark Knight',
    release_date: '2008-07-18',
    vote_average: 9.0,
    poster_path: '/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    backdrop_path: '/hqkIcbrOHL86UncnHIsHVcVmzue.jpg',
    overview: 'Batman raises the stakes in his war on crime with the help of Lt. Jim Gordon and District Attorney Harvey Dent.',
    genre_ids: [28, 80, 18],
  },
  {
    id: 27205,
    title: 'Inception',
    release_date: '2010-07-16',
    vote_average: 8.8,
    poster_path: '/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg',
    backdrop_path: '/s3TBrRGB1iav7gFOCNx3H31MoES.jpg',
    overview: 'Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life.',
    genre_ids: [28, 878, 53],
  },
  {
    id: 157336,
    title: 'Interstellar',
    release_date: '2014-11-07',
    vote_average: 8.4,
    poster_path: '/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    backdrop_path: '/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg',
    overview: 'The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel.',
    genre_ids: [18, 878],
  },
  {
    id: 49026,
    title: 'The Dark Knight Rises',
    release_date: '2012-07-20',
    vote_average: 8.2,
    poster_path: '/85cWkCCftTdqb6fU1fO3ud3EW3K.jpg',
    backdrop_path: '/3bgs3OMH9h4WO5O4sB0P8qO3yUa.jpg',
    overview: 'Following the death of District Attorney Harvey Dent, Batman assumes responsibility for Dent\'s crimes to protect the late attorney\'s reputation.',
    genre_ids: [28, 80, 18, 53],
  },
  {
    id: 11216,
    title: 'Cinema Paradiso',
    release_date: '1988-11-17',
    vote_average: 8.5,
    poster_path: '/8SRUfRUi6x4O68n0VCbD6aT24vH.jpg',
    backdrop_path: '/8SRUfRUi6x4O68n0VCbD6aT24vH.jpg',
    overview: 'A filmmaker recalls his childhood when falling in love with the pictures at the cinema of his home village.',
    genre_ids: [18, 10749],
  },
  {
    id: 429,
    title: 'The Good, the Bad and the Ugly',
    release_date: '1966-12-23',
    vote_average: 8.8,
    poster_path: '/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg',
    backdrop_path: '/Adrip2Jqzw56KeuV2nAxucKMNXA.jpg',
    overview: 'While the Civil War rages between the Union and the Confederacy, three men hunt for the fortune in gold.',
    genre_ids: [37],
  },
  {
    id: 120,
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    release_date: '2001-12-19',
    vote_average: 8.8,
    poster_path: '/6oom5QYQ2yQTM6bnmU9g3z6xNg9.jpg',
    backdrop_path: '/2RTG5z8k6IbNqOc4S6X1dQZ1T7x.jpg',
    overview: 'Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator.',
    genre_ids: [12, 14, 28],
  },
  {
    id: 122,
    title: 'The Lord of the Rings: The Return of the King',
    release_date: '2003-12-17',
    vote_average: 8.9,
    poster_path: '/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg',
    backdrop_path: '/2u7zbn8EudG6kLlBzUYqP8Ryf4f.jpg',
    overview: 'Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor.',
    genre_ids: [12, 14, 28],
  },
  {
    id: 121,
    title: 'The Lord of the Rings: The Two Towers',
    release_date: '2002-12-18',
    vote_average: 8.7,
    poster_path: '/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg',
    backdrop_path: '/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg',
    overview: 'Frodo and Sam are trekking to Mordor to destroy the One Ring of Power while Gimli, Legolas and Aragorn search for the orc-captured Merry and Pippin.',
    genre_ids: [12, 14, 28],
  },
  {
    id: 603,
    title: 'The Matrix',
    release_date: '1999-03-31',
    vote_average: 8.7,
    poster_path: '/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
    backdrop_path: '/fNG7i7RqMErkcqhohV2a6cV1Ehy.jpg',
    overview: 'Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers.',
    genre_ids: [28, 878, 53],
  },
  {
    id: 11,
    title: 'Star Wars',
    release_date: '1977-05-25',
    vote_average: 8.6,
    poster_path: '/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg',
    backdrop_path: '/2l05cFWJacyIsTpsqSgH0wQXe4V.jpg',
    overview: 'Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire.',
    genre_ids: [12, 28, 878],
  },
  {
    id: 181,
    title: 'Return of the Jedi',
    release_date: '1983-05-25',
    vote_average: 8.3,
    poster_path: '/mDCBQNhR6R0PV5uc7hGk4m9velw.jpg',
    backdrop_path: '/mDCBQNhR6R0PV5uc7hGk4m9velw.jpg',
    overview: 'Luke Skywalker leads a mission to rescue his friend Han Solo from the clutches of Jabba the Hutt, while the Emperor seeks to destroy the Rebellion.',
    genre_ids: [12, 28, 878],
  },
];

// Detailed movie information for movie details view
export const getMockMovieDetails = (movieId) => {
  const movie = mockMovies.find(m => m.id === movieId);
  if (!movie) return null;

  const details = {
    ...movie,
    runtime: 120 + Math.floor(Math.random() * 60), // Random runtime between 120-180
    tagline: getTagline(movie.title),
    genres: movie.genre_ids.map(id => mockGenres.find(g => g.id === id)).filter(Boolean),
    credits: {
      cast: getMockCast(),
      crew: getMockCrew(),
    },
    videos: {
      results: [],
    },
  };

  return details;
};

// Get related movies (simulate similar movies)
export const getMockRelatedMovies = (movieId) => {
  const movie = mockMovies.find(m => m.id === movieId);
  if (!movie) return { results: [] };

  // Return movies with similar genres, excluding the current movie
  const related = mockMovies
    .filter(m => 
      m.id !== movieId && 
      m.genre_ids.some(id => movie.genre_ids.includes(id))
    )
    .slice(0, 6);

  return { results: related };
};

// Helper functions
const getTagline = (title) => {
  const taglines = {
    'Fight Club': 'Mischief. Mayhem. Soap.',
    'The Godfather': 'An offer you can\'t refuse.',
    'Schindler\'s List': 'Whoever saves one life, saves the world entire.',
    'The Shawshank Redemption': 'Fear can hold you prisoner. Hope can set you free.',
    'The Dark Knight': 'Why So Serious?',
    'Inception': 'Your mind is the scene of the crime.',
    'Interstellar': 'Mankind was born on Earth. It was never meant to die here.',
    'The Matrix': 'Welcome to the Real World.',
    'Star Wars': 'A long time ago in a galaxy far, far away...',
  };
  return taglines[title] || 'Experience the magic of cinema.';
};

const getMockCast = () => [
  { name: 'Leonardo DiCaprio', character: 'Main Character' },
  { name: 'Tom Hanks', character: 'Supporting Role' },
  { name: 'Morgan Freeman', character: 'Narrator' },
  { name: 'Meryl Streep', character: 'Lead Actress' },
  { name: 'Robert De Niro', character: 'Supporting Actor' },
];

const getMockCrew = () => [
  { name: 'Christopher Nolan', job: 'Director' },
  { name: 'Steven Spielberg', job: 'Producer' },
  { name: 'Hans Zimmer', job: 'Original Music Composer' },
  { name: 'Wally Pfister', job: 'Director of Photography' },
];

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Mock API functions
export const mockSearchMovies = async (query, page = 1) => {
  await delay(500); // Simulate network delay
  
  if (!query || query.trim() === '') {
    return { results: [], total_pages: 0, total_results: 0 };
  }

  const searchTerm = query.toLowerCase();
  const filtered = mockMovies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm) ||
    movie.overview.toLowerCase().includes(searchTerm)
  );

  const itemsPerPage = 20;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginated = filtered.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  return {
    results: paginated,
    total_pages: totalPages,
    total_results: filtered.length,
    page: page,
  };
};

export const mockDiscoverMovies = async (filters = {}, page = 1) => {
  await delay(500); // Simulate network delay

  let filtered = [...mockMovies];

  // Apply genre filter
  if (filters.genre) {
    filtered = filtered.filter(movie =>
      movie.genre_ids.includes(parseInt(filters.genre))
    );
  }

  // Apply year filter
  if (filters.year) {
    filtered = filtered.filter(movie => {
      const movieYear = new Date(movie.release_date).getFullYear();
      return movieYear === parseInt(filters.year);
    });
  }

  // Apply rating filter
  if (filters.rating) {
    filtered = filtered.filter(movie =>
      movie.vote_average >= parseFloat(filters.rating)
    );
  }

  const itemsPerPage = 20;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginated = filtered.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  return {
    results: paginated,
    total_pages: totalPages,
    total_results: filtered.length,
    page: page,
  };
};

export const mockGetMovieDetails = async (movieId) => {
  await delay(300);
  return getMockMovieDetails(movieId);
};

export const mockGetRelatedMovies = async (movieId, page = 1) => {
  await delay(300);
  return getMockRelatedMovies(movieId);
};

export const mockGetGenres = async () => {
  await delay(200);
  return mockGenres;
};
