import axios from 'axios';




export const fetchMovies = async (query) => {

  console.log("Api ",process?.env.REACT_APP_API_URL)
  const url = `https://www.omdbapi.com/?s=${query}&apikey=${process?.env.REACT_APP_API_URL}`;  // Use HTTPS instead of HTTP

  try {
    const response = await axios.get(url);
    if (response.data.Response === 'True') {
      return response.data.Search;
    } else {
      throw new Error('No results found');
    }
  } catch (error) {
    throw new Error(`Sorry, we don't have ${query}`);
  }
};
