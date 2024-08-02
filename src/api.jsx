
import axios from 'axios';

const API_KEY = 'ebe001c2'; // Replace with your actual API key
const API_URL = 'http://www.omdbapi.com/';

export const searchMovies = async (title) => {
  try {
    const response = await axios.get(`${API_URL}?apikey=${API_KEY}&s=${title}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie data:", error);
    throw new Error('Unable to fetch movies. Please try again later.');
  }
};

export const getMovieDetails = async (id) => {
  try {
    const response = await axios.get(`${API_URL}?apikey=${API_KEY}&i=${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw new Error('Unable to fetch movie details. Please try again later.');
  }
};
