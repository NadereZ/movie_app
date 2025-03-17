const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_API_KEY;

export const getPopularMovies = async () => {
    try {
        const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
        if (!response.ok) {
            throw new Error('Failed to fetch popular movies');
        }
        const data = await response.json();
        return data.results || []; // Fallback to an empty array
    } catch (error) {
        console.error('Error in getPopularMovies:', error);
        return []; // Return an empty array on error
    }
};

export const searchMovies = async (query) => {
    try {
        const response = await fetch(
            `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
        );
        if (!response.ok) {
            throw new Error('Failed to fetch search results');
        }
        const data = await response.json();
        return data.results || []; // Fallback to an empty array
    } catch (error) {
        console.error('Error in searchMovies:', error);
        return []; // Return an empty array on error
    }
};