import React, { useState } from 'react';
import { fetchMovies } from './services/apiService';  // Import the fetchMovies function
import SearchBar from './components/SearchBar';
import Card from './components/Card';
import Loader from './components/Loader';
import Error from './components/Error';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    setSearchQuery(query);  
    if (query.trim() === '') return;

    setLoading(true);
    setError(null); 
    try {
      const result = await fetchMovies(query);  
      setMovies(result);  
    } catch (err) {
      setError(err.message);  
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>Film Explorer</h1>

      
      {searchQuery && <p>Results for "{searchQuery}"</p>}

      <SearchBar onSearch={handleSearch} searchQuery={searchQuery} />
      {loading && <Loader />}
      {error && <Error message={error} />}
      <div className="movie-list">
        {movies && movies.map((movie) => (
          <Card key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default App;
